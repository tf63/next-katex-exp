'use client'

import katex from 'katex'
import { useEffect, useRef } from 'react'
import 'katex/dist/katex.min.css'

export const MathInput = () => {
    const formulaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // 数式をHTML要素にレンダリング
        const formulaElement = formulaRef.current

        if (formulaElement == null) {
            return
        }
        katex.render('c = \\pm\\sqrt{a^2 + b^2}', formulaElement, {
            throwOnError: false,
        })
    }, [])

    return (
        <div>
            <div ref={formulaRef}></div>
        </div>
    )
}
