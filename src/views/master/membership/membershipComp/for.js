import Avatar from '@components/avatar'
import Blue  from '@src/assets/images/logo/blueB.jpg'

import { Card, CardBody, CardImg, Badge } from 'reactstrap'
import profileImg from '@src/assets/images/portrait/small/avatar-s-9.jpg'

const CardProfile = () => {
  return (
    <Card className='card-profile'  >
      <CardImg className='img-fluid'  src={Blue} top  />
      <CardBody>
        <div className='profile-image-wrapper'>
          <div className='profile-image'>
            <Avatar img={profileImg} />
          </div>
        </div>
        <h3>Tejas Thakare</h3>
        <h6 className='text-muted'>Mumbai</h6>
        
      </CardBody>
    </Card>
  )
}

export default CardProfile
