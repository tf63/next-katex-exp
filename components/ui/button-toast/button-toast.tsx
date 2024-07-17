type ButtonToastProps = { text: string; onClick: () => void }

export const ButtonToast = ({ text, onClick }: ButtonToastProps) => {
    return (
        <button className="btn btn-secondary shadow-secondary" onClick={onClick}>
            {text}
        </button>
    )
}
