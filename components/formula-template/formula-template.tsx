import { Formula } from '@/components/formula/formula'
import { CopyBlock } from '@/components/layout/copy-block'

export const FormulaTemplate = ({ template }: { template: Template }) => {
    const { formula } = template

    return (
        <CopyBlock text={formula}>
            <Formula inline={false} formula={formula} />
        </CopyBlock>
    )
}
