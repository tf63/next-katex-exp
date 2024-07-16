import React from 'react'

import { FormulaInput } from '@/components/formula-input'

export default function Home() {
    return (
        <div className="w-full">
            <div className="card flex items-center">
                <h1 className="w-fit text-2xl font-bold">Next Math</h1>
            </div>

            <div className="card my-8 bg-base-100 p-8 pb-4 shadow-md">
                <p className="font-bold">Inline Formula</p>
                <div className="my-5 w-full">
                    <FormulaInput inline={false} />
                </div>
            </div>
        </div>
    )
}
