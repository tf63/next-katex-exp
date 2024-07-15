'use client'

import katex from 'katex'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import 'katex/dist/katex.min.css'

export const MathInput = () => {
    const [formula, setFormula] = useState<string>('')
    const formulaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const formulaElement = formulaRef.current

        if (formulaElement == null) {
            return
        }
        katex.render(formula, formulaElement, {
            throwOnError: false,
        })
    }, [formula])

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setFormula(value)
    }

    return (
        <div className="w-full">
            <div>
                <span ref={formulaRef} className="inline-block" />
            </div>

            <textarea
                value={formula}
                onChange={onChange}
                spellCheck={false}
                className="textarea textarea-bordered my-5 h-60 w-full"
                placeholder="Input formula..."
            />
        </div>
    )
}
