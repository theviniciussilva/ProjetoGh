import {  useEffect, useRef, useState } from 'react'
import Cards from '../../components/Cards'
import { Carousel, InnerCarousel, SectionDiv } from './style'
import { useMotionValue } from 'framer-motion'
import { media } from '../../components/Cards'

const DRAG_BUFFER = 50;

const Trabalhos = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(0)

  useEffect(() => {
    if (cardRef.current) {
      setSlideWidth(cardRef.current.offsetWidth)
    }
  }, [])

  const [draggin, setDraggin] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)

  const dragX = useMotionValue(0)

  const onDragStart = () => {
    setDraggin(true)
  }
  const onDragEnd = () => {
    setDraggin(false)

    const x = dragX.get()
    if (x <= DRAG_BUFFER && imgIndex < media.length -3) {
      setImgIndex((pv) => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1)
    }
  }
  

  

  return (
    <div>
      <SectionDiv id="works">
        <h3>Trabalhos</h3>
        <Carousel>
          <InnerCarousel
          ref={cardRef}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: 0 }}
          animate={{ translateX: `${imgIndex * -50}%` }}
          className="inner-carousel"
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{
            x: dragX,
          }}
          >
            <Cards />
          </InnerCarousel>
        </Carousel>
      </SectionDiv>
    </div>
  )
}

export default Trabalhos
