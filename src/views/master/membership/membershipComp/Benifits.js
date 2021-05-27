import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const CardTransactions = () => {
  const transactionsArr = [
    {
      title: 'No transactions Commission',
      color: 'light-primary',
      subtitle: 'No Commission on transactions (depending on buyer or Seller)',
      amount: '- $74',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Get Third party VAS',
      color: 'light-success',
      subtitle: 'This will give you 3rd Party Value added services',
      amount: '+ $480',
      Icon: Icon['Check']
    },
    {
      title: 'Reveal your Bidders Name',
      color: 'light-danger',
      subtitle: 'Reveal names of all bidders in your list',
      amount: '+ $590',
      Icon: Icon['DollarSign']
    }
  ]

// No Commission on transactions (depending on buyer or Seller)
// ii. Get Third party VAS
// iii. Reveal names of all bidders
// iv. Reveal Contact Details of all bidders
// v. Allow ranking of sellers

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
          {/*<div className={`font-weight-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>*/}
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Benifits</CardTitle>
        
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default CardTransactions
