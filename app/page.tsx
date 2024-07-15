import React from 'react'

import { MathInput } from '@/components/math-input'

export default function Home() {
    return (
        <div className="h-screen p-10">
            <h1 className="ml-3 text-2xl font-bold">Next Math</h1>

            <div className="card bg-base-200 my-10 p-8 shadow-lg">
                <p className="font-bold">Inline Formula</p>
                <div className="my-5 w-full">
                    <MathInput inline={true} />
                </div>
            </div>

            <div className="card bg-base-200 my-10 p-8 shadow-lg">
                <p className="font-bold">Formula Formula</p>
                <div className="my-5 w-full">
                    <MathInput inline={false} />
                </div>
            </div>

        </div>
    )
}
