import './Button.css'

export default function Button({ title, onClick, disabled }) {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}
