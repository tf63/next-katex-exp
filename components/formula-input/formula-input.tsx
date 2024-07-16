'use client'

import { ChangeEvent, useState } from 'react'

import { useSaveAsImg } from '@/hooks/use-save-img'

import { Formula } from '../formula'
type FormulaInputProps = {
    inline: boolean
}

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')

    const { elementRef, saveAsImage } = useSaveAsImg()

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setFormula(value)
    }

    return (
        <div className="w-full">
            <div className="mx-20 border-b-2 pb-1">
                <Formula ref={elementRef} formula={formula} inline={inline} />
            </div>
            <textarea
                value={formula}
                onChange={onChange}
                spellCheck={false}
                className="textarea textarea-bordered mb-3 mt-10 h-60 w-full"
                placeholder="Input formula..."
            />

            <button className="btn btn-primary" onClick={saveAsImage}>
                Download
            </button>
        </div>
    )
}
