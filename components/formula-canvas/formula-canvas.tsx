'use client'

// NOT MAINTAINED

import katex from 'katex'
import { useEffect, useRef } from 'react'

import 'katex/dist/katex.min.css'
import { useSaveAsImg } from '@/hooks/use-save-img'

export const FormulaCanvas = () => {
    const { elementRef, saveAsImage } = useSaveAsImg('tmp')
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
            <div ref={elementRef} className="w-fit text-white">
                <div ref={formulaRef} />
            </div>
            <button className="btn btn-primary" onClick={saveAsImage}>
                Save as image
            </button>
        </div>
    )
}
