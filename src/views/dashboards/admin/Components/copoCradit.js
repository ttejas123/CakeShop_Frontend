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
        cradit: '680K'
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
        cradit: '970K',
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
        cradit: '620K',
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
        cradit: '880K',
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
              <span>{col.cradit}</span>
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
            <th>Corporate</th>
            <th>Cradit Limit</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default CompanyTable
