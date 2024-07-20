'use client'
import { ReactElement } from 'react'

import { useToast } from '@/hooks/use-toast'

type CopyBlockProps = { text: string; children: ReactElement<Record<string, string>> }

// TODO: textがchildrenのtextと一致していないので良くない実装，だが保留
export const CopyBlock = ({ text, children }: CopyBlockProps) => {
    const { notifyWithPromise } = useToast()

    const copyFunction = () => {
        notifyWithPromise('Copied Template !', navigator.clipboard.writeText(text))
    }

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
