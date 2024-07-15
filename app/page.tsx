import React from 'react'

import { MathInput } from '@/components/math-input'

export default function Home() {
    return (
        <div className="h-screen p-10">
            <h1 className="text-2xl font-bold">Math Input</h1>
            <div className="w-full py-5">
                <MathInput />
            </div>
        </div>
    )
}
