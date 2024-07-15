import { MathBlock } from './math-block'

import type { Meta, StoryObj } from '@storybook/react'

type MathBlockType = typeof MathBlock

export default {
    title: 'MathBlock',
    component: MathBlock,
} satisfies Meta<MathBlockType>

export const Default: StoryObj<MathBlockType> = {
    render: () => <MathBlock />,
}
