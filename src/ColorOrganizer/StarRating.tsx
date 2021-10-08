import Star from "../components/Star"

const StarRating = ({totalStars = 5, selectedStars = 0}) => {
  const stars = [...(new Array(totalStars))].map((n, i) => 
    <Star
      key={i}
      selected={selectedStars > i}
    />
  )

  return (
    <>
      {stars}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}

export default StarRating