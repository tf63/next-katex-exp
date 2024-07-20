import React from 'react'

import { FormulaInput } from '@/components/formula-input'

export default function Home() {
    return (
        <div className="w-full">
            <div className="card flex items-center">
                <h1 className="w-fit text-2xl font-bold">Next Math</h1>
            </div>

            <div className="card mx-auto my-8 max-w-[960px] bg-base-100 p-8 pb-12 shadow-md">
                <p className="font-bold">Katex Block</p>
                <FormulaInput inline={false} />
            </div>

            <div className="card m-8 mx-auto w-full max-w-[960px] bg-base-100 p-8 font-bold shadow-md 2xl:h-80">
                Preview
            </div>
        </div>
    )
}
