import './Card.css'
import Button from '../Button/Button'
import React from 'react'
import { useState } from 'react'
export default function Card({
  name,
  species,
  image,
  status,
  origin,
  location,
  gender,
}) {
  const icon = species === 'Human' ? '👤' : '👽'
  const [isShowingDetails, setIsShowingDetails] = useState(false)

  return (
    <section className="Card">
      <span>{icon}</span>
      <h2>{name}</h2>
      <img src={image} alt="" />
      <Button
        className="Button"
        title={isShowingDetails ? 'Hide Details' : 'Show Details'}
        onClick={() => setIsShowingDetails(!isShowingDetails)}
      />
      {/* <button onClick={() => setAreDetailsVisible(!areDetailsVisible)}>
        {areDetailsVisible ? 'HIDE DETAILS' : 'SHOW DETAILS'}
      </button> */}
      <div>
        <dl hidden={!isShowingDetails}>
          <dt>Gender</dt>
          <dd>{gender}</dd>
          <dt>Status</dt>
          <dd>{status}</dd>
          <dt>Origin</dt>
          <dd>{origin}</dd>
          <dt>Location</dt>
          <dd>{location}</dd>
        </dl>
      </div>
    </section>
  )
}
