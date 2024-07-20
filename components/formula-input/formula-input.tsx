'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { useColor } from 'react-color-palette'

import { useDOMtoImage } from '@/hooks/use-dom-to-image'

import { ColorPicker } from '@/components/color-picker'
import { FontSizeSlider } from '@/components/font-size-slider'
import { Formula } from '@/components/formula'

import 'react-color-palette/css'

type FormulaInputProps = {
    inline: boolean
}

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')

    const [color, setColor] = useColor('#000000FF')
    const [fontSize, setFontSize] = useState<number>(16)

    const elementRef = useRef<HTMLDivElement>(null)

    const { downloadImage, copyImage } = useDOMtoImage(elementRef)

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setFormula(value)
    }

    return (
        <div className="w-full">
            <div className="mx-20 border-b-2 py-2" style={{ color: color.hex, fontSize: fontSize }}>
                <Formula ref={elementRef} formula={formula} inline={inline} />
            </div>
            <textarea
                value={formula}
                onChange={onChange}
                spellCheck={false}
                className="textarea textarea-bordered mb-7 mt-10 h-60 w-full"
                placeholder="Input formula..."
            />

            <div className="flex gap-5">
                <button className="btn btn-primary shadow-primary outline-none" onClick={downloadImage} tabIndex={-1}>
                    Download as Image
                </button>
                <button className="btn btn-secondary shadow-secondary outline-none" onClick={copyImage} tabIndex={-1}>
                    Copy as Image
                </button>
                <ColorPicker color={color} setColor={setColor} />
                <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />
            </div>
        </div>
    )
}
