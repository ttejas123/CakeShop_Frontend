import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media, Row, Col} from 'reactstrap'
import '@styles/base/pages/app-invoice.scss'

const Quickhelp = () => {
  const transactionsArr = [
    {
      title: 'Wallet',
      color: 'light-primary',
      subtitle: 'Starbucks',
      amount: '- $74',
      Icon: Icon['Pocket'],
      down: true
    }
    
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} >
          {/* <Media>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <Media body>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </Media>
          </Media>
           */}
            <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title'>Admin</div>
                  <div className='detail-amt'>9089909890</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Call Center</div>
                  <div className='detail-amt'>908989988</div>
                </li>
                
              </ul>
          {/* <Row>
              <Col className='p-0 mt-xl-0 mt-2' lg='12' md = '12'>
            <table>
              <tbody>
               
                <tr>
                  <td className='pr-1'>Admin:</td>
                  <td>9088989098</td>
                </tr>
                <tr>
                  <td className='pr-1'>Call Center:</td>
                  <td>9088098908</td>
                </tr>
               
              </tbody>
            </table>
          </Col>
             
          </Row> */}
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Quick Help</CardTitle>
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default Quickhelp
