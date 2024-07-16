import { Formula } from '@/components/formula'

import { CopyBlock } from '../copy-block'

export const NavSidebar = () => {
    return (
        <div className="my-5 h-full w-full overflow-scroll rounded-md bg-neutral p-4">
            <h2 className="mb-5 text-center text-xl font-semibold">Templates</h2>
            <p className="font-semibold">Environment</p>
            <CopyBlock text="\bm x = \bm a_0 + \bm b_0">
                <Formula inline={true} formula="\bm x = \bm a_0 + \bm b_0" />
            </CopyBlock>
            <div className="divider" />
            <p className="font-semibold">Align</p>
            <div className="divider" />
            <p className="font-semibold">Layout</p>
        </div>
    )
}
