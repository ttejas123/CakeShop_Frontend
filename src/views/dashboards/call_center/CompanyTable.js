import Avatar from '@components/avatar'
import { Table, Card, Badge} from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const CompanyTable = () => {
    const statusObj = {
        pending: 'light-warning',
        approved: 'light-success',
        approval: 'light-secondary'
      }
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        name: 'HCL',
        email: 'ravi@htc.com',
        icon: <Monitor size={18} />,
        category: 'Technology',
        views: '23.4k',
        time: '24 hours',
        revenue: '891.2',
        sales: '68',
        headquarters :'Mumbai',
        status : 'active',
        employee : "90K",
        bids : 421
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        name: 'Walmart',
        email: 'vecav@walmart.com',
        icon: <Coffee size={18} />,
        category: 'Grocery',
        views: '78k',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true,
        headquarters :'Bentonville, Arkansas',
        status : 'active',
        employee : 40,
        bids : 12
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        name: 'Reliance Industries Limited',
        email: 'anup@ril.com',
        icon: <Watch size={18} />,
        category: 'Fashion',
        views: '162',
        time: '5 days',
        revenue: '522.29',
        sales: '62',
        salesUp: true,
        headquarters :'Mumbai, India',
        status : 'inactive',
        employee : 10,
        bids : 12
      },
      {
        img: require('@src/assets/images/icons/star.svg').default,
        name: 'HDFC',
        email: 'contact@hdfc.com',
        icon: <Monitor size={18} />,
        category: 'Technology',
        views: '214',
        time: '24 hour',
        revenue: '291.01',
        sales: '88',
        salesUp: true,
        headquarters :'Delhi, India',
        status : 'active',
        employee : 10,
        bids : 12
      },
      {
        img: require('@src/assets/images/icons/book.svg').default,
        name: 'Cafés',
        email: 'pudais@jife.com',
        icon: <Coffee size={18} />,
        category: 'Grocery',
        views: '208',
        time: '1 week',
        revenue: '783.93',
        sales: '16',
        headquarters :'Mumbai, India',
        status : 'active',
        employee : 157,
        bids : 12
      },
      {
        img: require('@src/assets/images/icons/rocket.svg').default,
        name: 'Coal India',
        email: 'email@coalin.com',
        icon: <Coffee size={18} />,
        category: 'Grocery',
        views: '208',
        time: '1 week',
        revenue: '783.93',
        sales: '16',
        headquarters :'Kolkata, India',
        status : 'pending',
        employee : 1,
        bids : 0
      }
      
     
    ],
    colorsArr = {
      Technology: 'light-primary',
      Grocery: 'light-success',
      Fashion: 'light-warning'
    }

  const renderData = () => {
    return data.map(col => {
      const IconTag = col.salesUp ? (
        <TrendingUp size={15} className='text-success' />
      ) : (
        <TrendingDown size={15} className='text-danger' />
      )

    //   headquarters
    //   status
    //   employee
      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img src={col.img} alt={col.name} />
                </div>
              </div>
              <div>
                <div className='font-weight-bolder'>{col.name}</div>
                <div className='font-small-2 text-muted'>{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              {/* <Avatar className='mr-1' color={colorsArr[col.category]} icon={col.icon} /> */}
              <span>{col.headquarters}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            {/* <div className='d-flex flex-column'> */}
              {/* <span className='font-weight-bolder mb-25'>{col.bids}</span>
              <span className='font-small-2 text-muted'>in {col.time}</span> */}
                      <Badge className='text-capitalize' color={statusObj[col.status]} pill>
                          {col.status}
                      </Badge>
            {/* </div> */}
          </td>
          <td>{col.bids}</td>
          <td>
            <div className='d-flex align-items-center'>
              <span className='font-weight-bolder mr-1'>{col.employee}</span>
              {/* {IconTag} */}
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
            <th>Company</th>
            <th>Headquarter</th>
            <th>Status</th>
            <th>Bids Created</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
