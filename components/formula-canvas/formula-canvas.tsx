'use client'

// NOT MAINTAINED

import html2canvas from 'html2canvas'
import katex from 'katex'
import { useEffect, useRef } from 'react'
import 'katex/dist/katex.min.css'

export const FormulaCanvas = () => {
    const formulaRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // 数式をHTML要素にレンダリング
        const formulaElement = formulaRef.current

        if (formulaElement == null) {
            return
        }
        katex.render('c = \\pm\\sqrt{a^2 + b^2}', formulaElement, {
            throwOnError: false,
        })

        // canvasに描画
        const canvas = canvasRef.current
        if (canvas == null) {
            return
        }

        const ctx = canvas.getContext('2d')
        if (ctx == null) {
            return
        }

        html2canvas(formulaElement)
            .then(function (canvasElement) {
                // 画像をcanvasに描画
                ctx.drawImage(canvasElement, 0, 0)
            })
            .catch(() => {
                console.log('error')
            })
    }, [])

    return (
        <div>
            <div ref={formulaRef}></div>
            <canvas ref={canvasRef} width="800" height="600"></canvas>
        </div>
    )
}
