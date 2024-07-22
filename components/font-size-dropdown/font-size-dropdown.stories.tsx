import { FontSizeDropdown } from './font-size-dropdown'

import type { Meta, StoryObj } from '@storybook/react'

type FontSizeDropdownType = typeof FontSizeDropdown

export default {
    title: 'FontSizeDropdown',
    component: FontSizeDropdown,
} satisfies Meta<FontSizeDropdownType>

export const Default: StoryObj<FontSizeDropdownType> = {
    render: () => (
        <div className="flex h-screen w-full items-center justify-center">
            <FontSizeDropdown summary="default" />
        </div>
    ),
}
