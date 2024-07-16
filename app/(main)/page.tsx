import React from 'react'

import { FormulaCanvas } from '@/components/formula-canvas'
import { FormulaInput } from '@/components/formula-input'

export default function Home() {
    return (
        <div className="w-full">
            <div className="card flex items-center bg-base-100">
                <h1 className="w-fit  text-2xl font-bold">Next Math</h1>
                <div className="ml-auto">{/* <FormulaDropdown /> */}</div>
            </div>

            <div className="card my-8 bg-base-100 p-8 pb-4 shadow-md">
                <p className="font-bold">Inline Formula</p>
                <div className="my-5 w-full">
                    <FormulaInput inline={false} />
                </div>
            </div>

            <FormulaCanvas />
        </div>
    )
}

/* Rectangle 18 */

// position: absolute;
// width: 261px;
// height: 274px;
// left: 875px;
// top: 394px;

// background: linear-gradient(315deg, #DE94FF 0%, #A1B1FF 100%);
// box-shadow: 4px 10px 25px rgba(219, 150, 255, 0.4);
// border-radius: 30px;
