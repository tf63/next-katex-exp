import download from 'downloadjs'
import { toPng } from 'html-to-image'
import { useRef } from 'react'

export const useSaveAsImg = (filename = 'formula') => {
    const elementRef = useRef<HTMLDivElement>(null)

    const saveAsImage = () => {
        if (elementRef.current == null) {
            return
        }

        toPng(elementRef.current)
            .then((dataUrl) => {
                download(dataUrl, filename)
            })
            .catch(() => {
                console.log('error during saving image')
            })
    }

    return { elementRef, saveAsImage }
}
