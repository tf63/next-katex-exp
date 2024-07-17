'use client'
import katex from 'katex'
import { Ref, forwardRef, useEffect, useRef } from 'react'

import 'katex/dist/katex.min.css'

type FormulaProps = {
    formula: string
    inline: boolean
}

const FormulaContent = ({ formula, inline }: FormulaProps, ref: Ref<HTMLDivElement>) => {
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
        <div className="mx-auto flex items-center justify-center">
            <div ref={ref} className="h-fit min-h-14 w-fit">
                <span ref={formulaRef} className="my-auto inline-block" />
            </div>
        </div>
    )
}

export const Formula = forwardRef<HTMLDivElement, FormulaProps>(FormulaContent)
