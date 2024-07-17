import { FormulaTemplate } from '@/components/formula-template'

const layoutTemplates = [
    '\\begin{matrix}\n\ta & b \\\\\n\tc & d\n\\end{matrix}',
    '\\begin{pmatrix}\n\ta & b \\\\\n\tc & d\n\\end{pmatrix}',
    '\\begin{bmatrix}\n\ta & b \\\\\n\tc & d\n\\end{bmatrix}',
    '\\begin{Bmatrix}\n\ta & b \\\\\n\tc & d\n\\end{Bmatrix}',
    '\\begin{vmatrix}\n\ta & b \\\\\n\tc & d\n\\end{vmatrix}',
    '\\begin{Vmatrix}\n\ta & b \\\\\n\tc & d\n\\end{Vmatrix}',
]

const caseTemplates = ['x = \\begin{cases}\n\ta &\\text{if } b \\\\\n\tc &\\text{if } d\n\\end{cases}']

const alignTemplates = [
    '\\begin{align}\\nonumber\n\t\\begin{split}\n\t\ta &=b+c\\\\\n\t\t&=e+f\n\t\\end{split}\n\\end{align}',
]

const annotationTemplates = ['x = \\underbrace{a + b + c}_{\\text{note}}', 'x = \\overbrace{a + b + c}^{\\text{note}}']

const FormulaTemplates = ({ formulas }: { formulas: string[] }) => {
    return (
        <div className="grid grid-cols-2 gap-1">
            {formulas.map((formula, index) => (
                <FormulaTemplate key={index} formula={formula} />
            ))}
        </div>
    )
}

export const NavSidebar = () => {
    return (
        <div className="h-full w-full overflow-scroll rounded-xl bg-grad p-6 pl-10 text-primary-content shadow-grad">
            <h2 className="mb-5 text-center text-xl font-semibold ">Templates</h2>

            {/* Layout Templates */}
            <p className="font-semibold">Layout</p>
            <FormulaTemplates formulas={layoutTemplates} />
            {caseTemplates.map((formula, index) => (
                <FormulaTemplate key={index} formula={formula} />
            ))}

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Align Templates */}
            <p className="font-semibold">Align</p>
            {alignTemplates.map((formula, index) => (
                <FormulaTemplate key={index} formula={formula} />
            ))}

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Annotation Templates */}
            <p className="font-semibold">Annotation</p>
            <FormulaTemplates formulas={annotationTemplates} />
        </div>
    )
}
