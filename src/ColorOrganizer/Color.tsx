import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { ColorDataType } from './colordata'
import StarRating from './StarRating'

interface props extends ColorDataType {
  onRemove(id: string): void
  onRate(id: string, rating: number): void
}

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = id => {},
  onRate = (id, rating) => {}
}: props) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, background: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => onRate(id, rating)}
      />
    </section>
  )
} 