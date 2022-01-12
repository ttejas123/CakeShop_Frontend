import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const URL = "http://159.65.156.12:1337"
const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: true
}

const SwiperAutoplay = (props) => {
  const { images, isRtl } = props
  return (
    <Card className='m-0 p-0'>
      <CardBody className='m-0 p-0'>
        <Swiper  dir={isRtl ? 'rtl' : 'ltr'} {...params}>
         {images && images.map(slide => {
            return (
              <SwiperSlide className='d-flex justify-content-center align-items-center w-100'>
                <img  style={{height: '35rem'}} src={slide} alt={slide.name} className='img-fluid m-0 p-0' />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperAutoplay