'use client'

import { ChangeEvent, useState } from 'react'

import { Formula } from '../formula'
type FormulaInputProps = {
    inline: boolean
}

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value = event.target.value
        setFormula(value)
    }

    return (
        <div className="w-full">
            <Formula formula={formula} inline={inline} />

            <textarea
                value={formula}
                onChange={onChange}
                spellCheck={false}
                className="textarea textarea-bordered mt-5 h-60 w-full"
                placeholder="Input formula..."
            />
        </div>
    )
}
