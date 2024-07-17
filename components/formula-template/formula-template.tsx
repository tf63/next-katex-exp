import { Formula } from '@/components/formula/formula'
import { CopyBlock } from '@/components/layout/copy-block'

export const FormulaTemplate = ({ formula }: { formula: string }) => {
    return (
        <CopyBlock text={formula}>
            <Formula inline={false} formula={formula} />
        </CopyBlock>
    )
}
