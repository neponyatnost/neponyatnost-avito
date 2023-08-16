import { memo } from 'react'
import { Rating } from 'react-simple-star-rating'

interface RatingComponentProps {
  rating: number
  fillColorArray?: string[]
  handleRating: (rated: number) => void
  readOnly: boolean
  transition: boolean
  size: number
}

const RatingMemoized = memo(function RatingComponent({
  fillColorArray,
  handleRating,
  rating,
  readOnly,
  size,
  transition,
}: RatingComponentProps) {
  return (
    <Rating
      size={size}
      initialValue={rating}
      transition={transition}
      fillColorArray={fillColorArray}
      onClick={handleRating}
      readonly={readOnly}
    />
  )
})

export default RatingMemoized
