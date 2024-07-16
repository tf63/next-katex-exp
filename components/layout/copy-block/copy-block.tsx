'use client'
import { ReactElement } from 'react'

type CopyBlockProps = { text: string; children: ReactElement<Record<string, string>> }

// TODO: textがchildrenのtextと一致していないので良くない実装，だが保留
export const CopyBlock = ({ text, children }: CopyBlockProps) => {
    const copyFunction = () => {
        navigator.clipboard.writeText(text).catch(() => {
            console.log('error')
        })
    }

    return (
        <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Copy">
            <button className="btn btn-ghost m-0 h-fit w-fit p-0 hover:bg-transparent" onClick={copyFunction}>
                {children}
            </button>
        </div>
    )
}
