import { FormulaCanvas } from './formula-canvas'

import type { Meta, StoryObj } from '@storybook/react'

type FormulaCanvasType = typeof FormulaCanvas

export default {
    title: 'FormulaCanvas',
    component: FormulaCanvas,
} satisfies Meta<FormulaCanvasType>

export const Default: StoryObj<FormulaCanvasType> = {
    render: () => <FormulaCanvas />,
}
