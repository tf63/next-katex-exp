import { useToast } from '@/hooks/use-toast'

import { ToastProvider } from '@/provider/ToastProvider'

import { ButtonToast } from './button-toast'

import type { Meta, StoryObj } from '@storybook/react'

type ButtonToastType = typeof ButtonToast

export default {
    title: 'ButtonToast',
    component: ButtonToast,
} satisfies Meta<ButtonToastType>

export const Default: StoryObj<ButtonToastType> = {
    render: () => (
        <div>
            <ToastProvider />
            <ButtonToast
                text="default"
                onClick={() => {
                    const { notifyWithPromise } = useToast()
                    notifyWithPromise('success', Promise.resolve())
                }}
            />
        </div>
    ),
}

export const Loading: StoryObj<ButtonToastType> = {
    render: () => (
        <div>
            <ToastProvider />
            <ButtonToast
                text="loading"
                onClick={() => {
                    const { notifyWithPromise } = useToast()
                    notifyWithPromise('Loading...', new Promise(() => {}))
                }}
            />
        </div>
    ),
}

export const Error: StoryObj<ButtonToastType> = {
    render: () => (
        <div>
            <ToastProvider />
            <ButtonToast
                text="error"
                onClick={() => {
                    const { notifyWithPromise } = useToast()
                    notifyWithPromise('Error!', Promise.reject('Error'))
                }}
            />
        </div>
    ),
}
