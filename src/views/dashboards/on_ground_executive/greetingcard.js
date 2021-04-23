import { Card, CardBody, CardText, Button } from 'reactstrap'
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Hey 🎉 Ravi!</h5>
        <CardText className='font-small-3'>You have 3 corporate assigned</CardText>
        <h5 className='mb-75'>Total business received</h5>
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
          ₹ 100000
          </a>
        </h3>
        <Button.Ripple color='primary'>View My Clients</Button.Ripple>
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
