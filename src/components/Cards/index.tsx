import { Card, CardFilter } from './style'
import video1 from '../../assets/videos/MOTION 01 - AZZUS.mp4'
import video2 from '../../assets/videos/Motion-CINCOW.mp4'
// import { useInView } from 'react-intersection-observer'
// import { useEffect, useRef } from 'react'


export const media = [video1,video2,video1,video2,video1,video2]

const Cards = () => {
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     console.log('teste')
  //   }

  //   cardRef.current.addEventListener('mousemove', handleMouseMove)

  //   return () => {
  //   cardRef.current.removeEventListener('mousemove', handleMouseMove)
  //   }
  // }, [])

  return (
    <>
      {media.map((video) => {
        // const { ref, inView } = useInView({
        //   threshold: 0.5,
        //   triggerOnce: false,
        // })

        return (
          <Card key={video}>
            <>
              <CardFilter />
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                style={{ width: '100%' }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </>
          </Card>
        )
      })}
    </>
  )
}

export default Cards
