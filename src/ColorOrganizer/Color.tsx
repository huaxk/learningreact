import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { ColorDataType } from './colordata'
import { UseColors } from './ColorProvider'
import StarRating from './StarRating'

export default function Color({
  id,
  title,
  color,
  rating
}: ColorDataType) {
  const {rateColor, removeColor} = UseColors()
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, background: color }} />
      <StarRating
        selectedStars={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  )
} 