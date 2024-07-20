'use client'

import { useCloseRef } from '@/hooks/use-close-ref'

type FontSizeSliderProps = {
    fontSize: number
    setFontSize: (fontSize: number) => void
}

export const FontSizeSlider = ({ fontSize, setFontSize }: FontSizeSliderProps) => {
    const { closeRef } = useCloseRef()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(parseInt(e.target.value))
    }

    return (
        <details className="dropdown dropdown-top" ref={closeRef}>
            <summary className="btn min-w-[160px] font-semibold shadow-btn hover:border-transparent hover:bg-base-200">
                Font Size: {fontSize}
            </summary>
            <div className="dropdown-content z-50 mb-5 flex w-60 items-center rounded-lg bg-base-200 p-5 shadow-btn">
                <input className="range" type="range" min="0" max="150" value={fontSize} onChange={handleChange} />
            </div>
        </details>
    )
}
