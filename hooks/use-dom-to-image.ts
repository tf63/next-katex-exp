import download from 'downloadjs'
import { toBlob, toPng } from 'html-to-image'
import { RefObject } from 'react'

export const useDOMtoImage = (elementRef: RefObject<HTMLElement>, filename = 'tmp.png') => {
    const copyImage = () => {
        if (elementRef.current == null) {
            return
        }

        toBlob(elementRef.current)
            .then((blob) => {
                if (blob == null) {
                    return
                }
                navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]).catch((error) => {
                    console.log('error during copying image', error)
                })
            })
            .catch(() => {
                console.log('error during saving image')
            })
    }

    const downloadImage = () => {
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

    return { copyImage, downloadImage }
}
