
import { Card, CardBody, CardText, Button } from 'reactstrap'
// import medal from '@src/assets/images/avatars/1-small.png'
import medal from '@src/assets/images/illustration/badge.svg'
import { Link } from 'react-router-dom'
const CCExecutiveTicketCard = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Hi Ravi,</h5>
        <CardText className='font-small-3'>For All Cradit Approved</CardText>
        {/* <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            $48.9k
          </a>
        </h3> */}
        <Link  to={`/report/ticket-list`}>
        <Button.Ripple color='primary' className="mt-1">View All</Button.Ripple>
        </Link>
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CCExecutiveTicketCard
