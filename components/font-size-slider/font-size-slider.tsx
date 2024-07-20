'use client'
type FontSizeSliderProps = {
    fontSize: number
    setFontSize: (fontSize: number) => void
}

export const FontSizeSlider = ({ fontSize, setFontSize }: FontSizeSliderProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(parseInt(e.target.value))
    }

    return <input className="range" type="range" min="0" max="150" value={fontSize} onChange={handleChange} />
}
