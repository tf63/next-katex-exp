'use client'

import { Dispatch, SetStateAction } from 'react'
import { Alpha, Hue, Saturation } from 'react-color-palette'
import { IColor } from 'react-color-palette'

import { useCloseRef } from '@/hooks/use-close-ref'

type ColorPickerProps = {
    color: IColor
    setColor: Dispatch<SetStateAction<IColor>>
}

export const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
    const { closeRef } = useCloseRef()
    return (
        <details className="dropdown dropdown-top" ref={closeRef}>
            <summary className="shadow-btn btn min-w-[160px] font-semibold hover:border-transparent hover:bg-base-200">
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
    )
}
