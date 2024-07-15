'use client'

import katex from 'katex'
import { ChangeEvent, useRef, useState } from 'react'
import 'katex/dist/katex.min.css'

export const MathInput = ({ inline }: { inline: boolean }) => {
    const [formula, setFormula] = useState<string>('')
    const formulaRef = useRef<HTMLDivElement>(null)

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setFormula(value)

        const formulaElement = formulaRef.current

        if (formulaElement == null) {
            return
        }
        katex.render(value, formulaElement, {
            throwOnError: false,
            displayMode: !inline,
        })
    }

    return (
        <div className="w-full">
            <div className="h-14">
                <span ref={formulaRef} className="inline-block" />
            </div>

            <textarea
                value={formula}
                onChange={onChange}
                spellCheck={false}
                className="textarea textarea-bordered mt-5 h-60 w-full"
                placeholder="Input formula..."
            />
        </div>
    )
}
