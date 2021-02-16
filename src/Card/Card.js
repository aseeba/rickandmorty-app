import './Card.css'

export default function Card({ name, species, image }) {
  return (
    <section className="Card">
      {name} {species === 'Human' ? '👤' : '👽'}
      <img src={image} alt="" />
    </section>
  )
}
