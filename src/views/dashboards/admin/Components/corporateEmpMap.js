import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const CompanyTable = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        imgC: require('./assets/TCS.png').default,
        ID: '12421',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        Date: '12-feb-21',
        EMP: 'Tejas',
        time: '24 hours',
        Cop: 'TCS',
        sales: '68'
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        imgC: require('./assets/track.jpg').default,
        ID: '12421ls',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee size={18} />,
        Date: '12-feb-21',
        EMP: 'Komal',
        time: '2 days',
        Cop: 'TiT',
        sales: '97',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        imgC: require('./assets/infos.png').default,
        ID: '12421ar',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        Date: '12-feb-21',
        EMP: 'Pravin',
        time: '5 days',
        Cop: 'Infosys',
        sales: '62',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/star.svg').default,
        imgC: require('./assets/Google.jpeg').default,
        ID: '12421ng',
        email: 'us@cuhil.gov',
        icon: <Monitor size={18} />,
        Date: '12-feb-21',
        EMP: 'Surya',
        time: '24 hour',
        Cop: 'Goggle',
        sales: '88',
        salesUp: true
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.ID}>
          
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img src={col.img} alt={col.EMP} />
                </div>
              </div>
              <div>
                <div className='font-weight-bolder'>{col.EMP}</div>
                <div className='font-small-1 text-muted'>{col.email}</div>
              </div>
            </div>
          </td>

          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img width="30" height="30" src={col.imgC} alt={col.EMP} />
                </div>
              </div>
              <div>
                <div className='font-weight-bolder'>{col.Cop}</div>
              </div>
            </div>
          </td>

          <td className='text-nowrap'>
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
            <th>Employee</th>
            <th>Corporate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
