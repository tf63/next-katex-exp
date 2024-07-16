import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja" data-theme="dark">
            <body className={cn(inter.className, 'h-screen')}>{children}</body>
        </html>
    )
}
