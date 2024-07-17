'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { Alpha, Hue, Saturation, useColor } from 'react-color-palette'

import { useCloseRef } from '@/hooks/use-close-ref'
import { useDOMtoImage } from '@/hooks/use-dom-to-image'

import { Formula } from '@/components/formula'

import 'react-color-palette/css'

type FormulaInputProps = {
    inline: boolean
}

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')
    const { closeRef } = useCloseRef()

    const [color, setColor] = useColor('#000000FF')

    const elementRef = useRef<HTMLDivElement>(null)

    const { downloadImage, copyImage } = useDOMtoImage(elementRef)

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setFormula(value)
    }

    return (
        <div className="w-full">
            <div className="mx-20 border-b-2 py-2" style={{ color: color.hex }}>
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

                <details className="dropdown dropdown-top" ref={closeRef}>
                    <summary className="shadow-btn btn min-w-[100px] font-semibold hover:border-transparent hover:bg-base-200">
                        Text {color.hex}
                    </summary>
                    <div className="shadow-btn dropdown-content z-50 mb-5 rounded-lg bg-base-200 p-5">
                        <div className="w-[175px] space-y-5 [&_.rcp-saturation]:rounded-md">
                            <Saturation height={175} color={color} onChange={setColor} />
                            <Hue color={color} onChange={setColor} />
                            <Alpha color={color} onChange={setColor} />
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}
