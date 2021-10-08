import Star from "../components/Star"

interface props {
  totalStars?: number
  selectedStars?: number
  onRate?: (n: number) => void
}

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = n => { }
}: props) {
  const stars = [...(new Array(totalStars))].map((n, i) =>
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => onRate(i + 1)}
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