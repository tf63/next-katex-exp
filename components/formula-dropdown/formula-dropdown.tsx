export const FormulaDropdown = () => {
    return (
        <div className="dropdown dropdown-end dropdown-bottom dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-secondary">
                Templates
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow">
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </div>
    )
}
