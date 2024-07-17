import { Formula } from '@/components/formula'

import { CopyBlock } from '../copy-block'

export const NavSidebar = () => {
    return (
        <div className="h-full w-full rounded-xl bg-grad p-7 text-primary-content shadow-grad">
            <h2 className="mb-5 text-center text-xl font-semibold ">Templates</h2>
            <p className="font-semibold">Environment</p>
            <CopyBlock text="\bm x = \bm a_0 + \bm b_0">
                <Formula inline={false} formula="\bm x = \bm a_0 + \bm b_0" />
            </CopyBlock>
            <div className="divider m-0 opacity-70" />
            <p className="font-semibold">Align</p>
            <div className="divider m-0 opacity-70" />
            <p className="font-semibold">Layout</p>
        </div>
    )
}
