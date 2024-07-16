import React from 'react'

import { FormulaCanvas } from '@/components/formula-canvas'
import { FormulaInput } from '@/components/formula-input'

export default function Home() {
    return (
        <div className="w-full">
            <div className="flex items-center">
                <h1 className="w-fit  text-2xl font-bold">Next Math</h1>
                <div className="ml-auto">{/* <FormulaDropdown /> */}</div>
            </div>

            <div className="card  my-8">
                <p className="font-bold">Inline Formula</p>
                <div className="my-5 w-full">
                    <FormulaInput inline={true} />
                </div>
            </div>

            <div className="card my-8">
                <p className="font-bold">Block Formula</p>
                <div className="my-5 w-full">
                    <FormulaInput inline={false} />
                </div>
            </div>

            <FormulaCanvas />
        </div>
    )
}
