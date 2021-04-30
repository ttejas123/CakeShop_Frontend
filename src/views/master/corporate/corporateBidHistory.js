import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const CorporateBidHistory = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        ID: '12421',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Buyer',
        time: '24 hours',
        Status: 'Live',
        sales: '68'
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        ID: '12421ls',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Buyer',
        time: '2 days',
        Status: 'Closed',
        sales: '97',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        ID: '12421ar',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Buyer',
        time: '5 days',
        Status: 'Live',
        sales: '62',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/star.svg').default,
        ID: '12421ng',
        email: 'us@cuhil.gov',
        icon: <Monitor size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Seller',
        time: '24 hour',
        Status: 'Closed',
        sales: '88',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/book.svg').default,
        ID: '12421s',
        email: 'pudais@jife.com',
        icon: <Coffee size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Seller',
        time: '1 week',
        Status: 'OnGoing',
        sales: '16'
      },
      {
        img: require('@src/assets/images/icons/rocket.svg').default,
        ID: '12421t',
        email: 'bipri@cawiw.com',
        icon: <Watch size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Buyer',
        time: '1 month',
        Status: 'OnGoing',
        sales: '78',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/speaker.svg').default,
        ID: '12421rs',
        email: 'luk@izug.io',
        icon: <Watch size={18} />,
        Date: '12-feb-21',
        ParticipatedAs: 'Buyer',
        time: '12 hours',
        Status: 'OnGoing',
        sales: '42',
        salesUp: true
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.ID}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <div className='font-weight-bolder'>{col.ID}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              
              <span>{col.Date}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.ParticipatedAs}</span>
            </div>
          </td>
          <td>{col.Status}</td>
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th style={{minWidth:100}}>ID</th>
            <th style={{minWidth:100}}>Date</th>
            <th style={{minWidth:100}}>Participated As</th>
            <th style={{minWidth:100}}>Status</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CorporateBidHistory
