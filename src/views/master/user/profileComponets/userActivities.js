import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const CompanyTable = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        Activity: 'Visited Bid432',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        Date: `${new Date().toGMTString()}`,
        ParticipatedAs: 'Buyer',
        time: '24 hours',
        Status: 'Live',
        sales: '68'
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        Activity: 'Forgot Password',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee size={18} />,
        Date: `${new Date().toGMTString()}`,
        ParticipatedAs: 'Buyer',
        time: '2 days',
        Status: 'Closed',
        sales: '97',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        Activity: 'User Name Change',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        Date: `${new Date().toGMTString()}`,
        ParticipatedAs: 'Buyer',
        time: '5 days',
        Status: 'Live',
        sales: '62',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/star.svg').default,
        Activity: 'Bid Closed',
        email: 'us@cuhil.gov',
        icon: <Monitor size={18} />,
        Date: `${new Date().toGMTString()}`,
        ParticipatedAs: 'Seller',
        time: '24 hour',
        Status: 'Closed',
        sales: '88',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/book.svg').default,
        Activity: 'bid Created',
        email: 'pudais@jife.com',
        icon: <Coffee size={18} />,
        Date: `${new Date().toGMTString()}`,
        ParticipatedAs: 'Seller',
        time: '1 week',
        Status: 'OnGoing',
        sales: '16'
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.Activity}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <span className='font-weight'>{col.Activity}</span>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td >
            <div className='d-flex align-items-center'>
              <span>{col.Date}</span>
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th className="w-50">Activity</th>
            <th className="w-50">Date Time</th>
            
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
