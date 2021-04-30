import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown, Eye } from 'react-feather'

const CorporateKyc = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        name: 'PAN',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        nav: 'Technology',
        Date: '12-feb-21',
        time: '24 hours',
        revenue: '891.2',
        sales: '68'
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Adhar',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee size={18} />,
        nav: 'Grocery',
        Date: '23-feb-21',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        name: 'Driving Licence',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        nav: 'Fashion',
        Date: '02-feb-21',
        time: '5 days',
        revenue: '522.29',
        sales: '62',
        salesUp: true
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <div className='font-weight-bolder'>{col.name}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <span><Eye color="LightGreen" /></span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.Date}</span>
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CorporateKyc
