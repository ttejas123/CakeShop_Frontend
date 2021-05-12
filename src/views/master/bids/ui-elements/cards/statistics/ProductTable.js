import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const CompanyTable = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        name: 'Bags of 180 masica brand',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        category: 'Technology',
        views: '23.4k',
        time: '24 hours',
        revenue: '891.2',
        sales: '68'
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Motels',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee size={18} />,
        category: 'Grocery',
        views: '78k',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        name: 'Zipcar',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        category: 'Fashion',
        views: '162',
        time: '5 days',
        revenue: '522.29',
        sales: '62',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/star.svg').default,
        name: 'Owning',
        email: 'us@cuhil.gov',
        icon: <Monitor size={18} />,
        category: 'Technology',
        views: '214',
        time: '24 hour',
        revenue: '291.01',
        sales: '88',
        salesUp: true
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img src={col.img} alt={col.name} />
                </div>
              </div>
              <div className="w-50">
                <div className='font-weight-bolder text-truncate'>{col.name}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              
              <span>{col.category}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.views}</span>
            </div>
          </td>
          <td>${col.revenue}</td>
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th className="w-25">Name</th>
            <th className="w-25">category</th>
            <th className="w-25">Required Quntity</th>
            <th className="w-25">Price</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
