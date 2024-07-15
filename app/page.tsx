import React from 'react'

import { MathInput } from '@/components/math-input'

export default function Home() {
    return (
        <div className="h-screen p-10">
            <h1 className="text-2xl font-bold">Math Input</h1>
            <div className="my-10 w-full">
                <MathInput />
            </div>
        </div>
    )
}
