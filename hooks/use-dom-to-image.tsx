import download from 'downloadjs'
import { toBlob, toPng } from 'html-to-image'
import { RefObject } from 'react'

import { useToast } from '@/hooks/use-toast'

export const useDOMtoImage = (elementRef: RefObject<HTMLElement>, filename = 'tmp.png') => {
    const { notifyWithPromise } = useToast()

    const copyImage = () => {
        if (elementRef.current == null) {
            return
        }

        const _promise = toBlob(elementRef.current, {
            width: elementRef.current.offsetWidth,
            height: elementRef.current.offsetHeight
        })
        notifyWithPromise('Copied as Image !', _promise)

        _promise
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

        const _promise = toPng(elementRef.current, {
            width: elementRef.current.offsetWidth,
            height: elementRef.current.offsetHeight
        })

        notifyWithPromise('Downloaded as Image !', _promise)

        _promise
            .then((dataUrl) => {
                download(dataUrl, filename)
            })
            .catch(() => {
                console.log('error during saving image')
            })
    }

    return { copyImage, downloadImage }
}
