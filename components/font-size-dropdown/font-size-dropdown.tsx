'use client'

import { useCloseRef } from '@/hooks/use-close-ref'

type FontSizeDropdownProps = {
    summary: string
    fontSize: number
    setFontSize: (fontSize: number) => void
}

export const FontSizeDropdown = ({ summary, fontSize, setFontSize }: FontSizeDropdownProps) => {
    const { closeRef } = useCloseRef()
    return (
        <details className="dropdown dropdown-top" ref={closeRef}>
            <summary className="btn min-w-[160px] font-semibold shadow-btn hover:border-transparent hover:bg-base-200">
                {summary}
            </summary>

            <ul className="dropdown-content z-50 mb-5 w-60 items-center justify-center rounded-lg bg-base-200 shadow-btn">
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="item1"
                        value="item1"
                        className="btn w-full justify-start"
                        onChange={() => console.log('item1')}
                        defaultChecked
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="item2"
                        value="item2"
                        className="btn w-full justify-start"
                        onChange={() => console.log('item2')}
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="item3"
                        value="item3"
                        className="btn w-full justify-start"
                        onChange={() => console.log('item3')}
                    />
                </li>
                <li>
                    <input
                        type="radio"
                        name="fontsize-dropdown"
                        aria-label="item4"
                        value="item4"
                        className="btn w-full justify-start"
                        onChange={() => console.log('item4')}
                    />
                </li>
            </ul>
        </details>
    )
}
