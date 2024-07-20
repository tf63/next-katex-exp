'use client'
import { ReactElement, useCallback, useEffect } from 'react'

import { useToast } from '@/hooks/use-toast'

type CopyBlockProps = { text: string; children: ReactElement<Record<string, string>>; kbd?: string }

// TODO: textがchildrenのtextと一致していないので良くない実装，だが保留
export const CopyBlock = ({ text, children, kbd }: CopyBlockProps) => {
    const { notifyWithPromise } = useToast()

    const copyFunction = useCallback(() => {
        notifyWithPromise('Copied Template !', navigator.clipboard.writeText(text))
    }, [text, notifyWithPromise])

    useEffect(() => {
        if (kbd == null) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey) {
                // ここでpreventDefaultしないとinput要素への入力も受け付けなくなる
                e.preventDefault()

                if (e.key === kbd) {
                    copyFunction()
                }
            }

            if (e.ctrlKey && e.key === kbd) copyFunction()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [kbd, copyFunction])

    return (
        <div className="tooltip-neutral tooltip tooltip-bottom w-full before:-mt-3 after:-mt-3" data-tip="Copy">
            <button
                className="btn btn-ghost m-0 h-full w-full p-0 outline-none hover:bg-transparent"
                onClick={copyFunction}
                tabIndex={-1}
            >
                {children}
            </button>
        </div>
    )
}
