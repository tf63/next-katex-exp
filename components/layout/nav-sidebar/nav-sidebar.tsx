import { FormulaTemplate } from '@/components/formula-template'

const layoutTemplates: Template[] = [
    { type: 'layout', kbd: '1', formula: '\\begin{matrix}\n\ta & b \\\\\n\tc & d\n\\end{matrix}' },
    { type: 'layout', kbd: '2', formula: '\\begin{pmatrix}\n\ta & b \\\\\n\tc & d\n\\end{pmatrix}' },
    { type: 'layout', kbd: '3', formula: '\\begin{bmatrix}\n\ta & b \\\\\n\tc & d\n\\end{bmatrix}' },
    { type: 'layout', kbd: '4', formula: '\\begin{Bmatrix}\n\ta & b \\\\\n\tc & d\n\\end{Bmatrix}' },
    { type: 'layout', kbd: '5', formula: '\\begin{vmatrix}\n\ta & b \\\\\n\tc & d\n\\end{vmatrix}' },
    { type: 'layout', kbd: '6', formula: '\\begin{Vmatrix}\n\ta & b \\\\\n\tc & d\n\\end{Vmatrix}' },
]

const caseTemplates: Template[] = [
    {
        type: 'case',
        kbd: '7',
        formula: 'x = \\begin{cases}\n\ta &\\text{if } b \\\\\n\tc &\\text{if } d\n\\end{cases}',
    },
]

const alignTemplates: Template[] = [
    {
        type: 'align',
        kbd: '8',
        formula:
            '\\begin{align}\\nonumber\n\t\\begin{split}\n\t\ta &=b+c\\\\\n\t\t&=e+f\n\t\\end{split}\n\\end{align}',
    },
]

const annotationTemplates: Template[] = [
    { type: 'annotation', kbd: '9', formula: 'x = \\underbrace{a + b + c}_{\\text{note}}' },
    { type: 'annotation', kbd: '0', formula: 'x = \\overbrace{a + b + c}^{\\text{note}}' },
]

const FormulaTemplates = ({ templates }: { templates: Template[] }) => {
    return (
        <div className="grid grid-cols-2 gap-1">
            {templates.map((template, index) => (
                <FormulaTemplate key={index} template={template} />
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
            <FormulaTemplates templates={layoutTemplates} />
            {caseTemplates.map((template, index) => (
                <FormulaTemplate key={index} template={template} />
            ))}

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Align Templates */}
            <p className="font-semibold">Align</p>
            {alignTemplates.map((template, index) => (
                <FormulaTemplate key={index} template={template} />
            ))}

            <div className="divider mb-2 mt-0 opacity-70" />

            {/* Annotation Templates */}
            <p className="font-semibold">Annotation</p>
            <FormulaTemplates templates={annotationTemplates} />
        </div>
    )
}
