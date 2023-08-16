import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface SliderProps {
  firstImage?: string
  secondImage?: string
  thirdImage?: string
  altTitle?: string
}

const Slider: FC<SliderProps> = ({
  firstImage,
  secondImage,
  thirdImage,
  altTitle,
}) => {
  return (
    <Carousel
      width={300}
      infiniteLoop
      thumbWidth={95}
      autoPlay
      interval={3000}
      dynamicHeight={false}
    >
      <div>
        <img src={firstImage} alt={altTitle} />
      </div>
      <div>
        <img src={secondImage} alt={altTitle} />
      </div>
      <div>
        <img src={thirdImage} alt={altTitle} />
      </div>
    </Carousel>
  )
}

export default Slider
