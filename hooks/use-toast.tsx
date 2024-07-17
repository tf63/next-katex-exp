import { CircleCheck } from 'lucide-react'
import toast from 'react-hot-toast'

export const useToast = () => {
    const notify = (message: string) => {
        toast(message, { position: 'bottom-right', icon: <CircleCheck /> })
    }

    const notifyWithPromise = <T,>(message: string, promise: Promise<T>) => {
        toast
            .promise(
                promise,
                {
                    loading: 'Loading...',
                    success: () => message,
                    error: () => `Error!`,
                },
                { position: 'bottom-right' }
            )
            .catch(() => {
                console.log('error happend in toast')
            })
    }

    return { notify, notifyWithPromise }
}
