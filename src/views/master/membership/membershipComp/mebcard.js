
import { Card, CardBody, CardText, Button } from 'reactstrap'
// import medal from '@src/assets/images/avatars/1-small.png'
import medal from '@src/assets/images/illustration/badge.svg'
import { Link } from 'react-router-dom'
const CCExecutiveTicketCard = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h3>Bidoya Silver</h3>
        <CardText className='font-small-3'>Bidoya Silver Membership</CardText>
         <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            $48.9k
          </a>
        </h3> 
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CCExecutiveTicketCard
