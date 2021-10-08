import React from 'react'
import { ColorDataType } from './colordata'
import StarRating from './StarRating'

const Color = ({ title, color, rating }: ColorDataType) => (
  <section>
    <h1>{title}</h1>
    <div style={{ height: 50, background: color }} />
    <StarRating selectedStars={rating} />
  </section>
)

export default Color