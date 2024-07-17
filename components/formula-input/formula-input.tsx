'use client'

import { ChangeEvent, useRef, useState } from 'react'
import { Alpha, Hue, Saturation, useColor } from 'react-color-palette'

import { useDOMtoImage } from '@/hooks/use-dom-to-image'

import { Formula } from '@/components/formula'

import 'react-color-palette/css'

type FormulaInputProps = {
    inline: boolean
}

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')

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

                {/* <dialog id="color-picker" className="modal">
                    <div className="modal-box w-fit rounded-lg bg-base-100 shadow-lg">
                        <div className="w-[100px] space-y-10 [&_.rcp-saturation]:h-[100px] [&_.rcp-saturation]:w-[100px] [&_.rcp-saturation]:rounded-md">
                            <Saturation height={100} color={color} onChange={setColor} />
                            <Hue color={color} onChange={setColor} />
                            <Alpha color={color} onChange={setColor} />
                        </div>
                    </div>

                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog> */}

                <details className="dropdown dropdown-top">
                    <summary className="btn min-w-[100px] font-normal shadow-primary hover:bg-base-100/90">
                        {color.hex}
                    </summary>
                    <div className="dropdown-content z-auto mb-5 rounded-lg bg-base-100 p-5 shadow-lg">
                        <div className="space-y-5 [&_.rcp-saturation]:h-[200px] [&_.rcp-saturation]:w-[200px] [&_.rcp-saturation]:rounded-md">
                            <Saturation height={200} color={color} onChange={setColor} />
                            <Hue color={color} onChange={setColor} />
                            <Alpha color={color} onChange={setColor} />
                        </div>
                    </div>
                </details>
            </div>
        </div>
    )
}
