import { MathInput } from './math-input'

import type { Meta, StoryObj } from '@storybook/react'

type MathInputType = typeof MathInput

export default {
    title: 'MathInput',
    component: MathInput,
} satisfies Meta<MathInputType>

export const Default: StoryObj<MathInputType> = {
    render: () => <MathInput />,
}
