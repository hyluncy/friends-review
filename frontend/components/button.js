
export default function ButtonComp ({ type, onClick, text }) {
    return (
        <button type={type} onClick={onClick}>
            {text} 
        </button>
    )
}