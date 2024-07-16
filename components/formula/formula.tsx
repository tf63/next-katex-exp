'use client'
import katex from 'katex'
import { useEffect, useRef } from 'react'

import 'katex/dist/katex.min.css'

type FormulaProps = {
    formula: string
    inline: boolean
}

export const Formula = ({ formula, inline }: FormulaProps) => {
    const formulaRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        if (formulaRef.current == null) {
            return
        }

        katex.render(formula, formulaRef.current, {
            throwOnError: false,
            displayMode: !inline,
        })
    }, [formula, inline])

    return (
        <div className="flex h-14 flex-col justify-center">
            <span ref={formulaRef} className="inline-block" />
        </div>
    )
}