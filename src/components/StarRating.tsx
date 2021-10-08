import {useState} from 'react'
import Star from './Star'

const createArray = (length: number) => [...Array(length)]

const StarRating = ({style = {}, totalstars = 5, ...props}) => {
  const [selectedStars, setSelectedStar] = useState(3)

  return (
    <div style={{ padding: "5px", ...style}} {...props}>
      {createArray(totalstars).map((n, i) => (
        <Star key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStar(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalstars} stars
      </p>
    </div>    
  )
}

export default StarRating