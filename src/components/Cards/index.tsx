import { Card, CardFilter } from './style'

import video from '../../assets/videos/MOTION 01 - AZZUS.mp4'

const Videos = [
  {
    id: 1
  }
]

const Cards = () => {
  console.log(typeof(video))

  return (
    <>
      <Card
      >
        <CardFilter/>
        
        <video autoPlay muted src={video}/>
      </Card>
    </>
  )
}

export default Cards
