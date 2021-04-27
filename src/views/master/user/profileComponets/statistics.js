import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media, Truck, User } from 'reactstrap'

const CardTransactions = () => {
  const transactionsArr = [
    {
      title: 'Bid Created',
      color: 'light-info',
      subtitle: 'No Created Bids',
      amount: '250',
      Icon: Icon['Truck']
    },
    {
      title: 'Bid Participents',
      color: 'light-success',
      subtitle: 'Participents',
      amount: '74',
      Icon: Icon['User']
    },
    {
      title: 'Bid Live',
      color: 'light-success',
      subtitle: 'No live Bids',
      amount: '18',
      Icon: Icon['Check']
    },
    {
      title: 'Bid Closed',
      color: 'light-danger',
      subtitle: 'No Closed Bids',
      amount: '21',
      Icon: Icon['AlertTriangle']
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <Media>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <Media body>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </Media>
          </Media>
          <div className={`font-weight-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Transactions</CardTitle>
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default CardTransactions
