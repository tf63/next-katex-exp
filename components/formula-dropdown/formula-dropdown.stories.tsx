import { FormulaDropdown } from './formula-dropdown'

import type { Meta, StoryObj } from '@storybook/react'

type FormulaDropdownType = typeof FormulaDropdown

export default {
    title: 'FormulaDropdown',
    component: FormulaDropdown
} satisfies Meta<FormulaDropdownType>

export const Default: StoryObj<FormulaDropdownType> = {
    render: () => <FormulaDropdown />
}
