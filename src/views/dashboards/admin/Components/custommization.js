import classnames from 'classnames'
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import { TrendingUp, Package, Box, DollarSign, Layers, Calendar, Edit, Trash} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, Button, Badge } from 'reactstrap'

const CCExecutiveDashboardStatistic = ({ cols }) => {
  const data = [
    {
      title: 'Bid',
      subtitle: 'Bid89231',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: 'Customization',
      subtitle: [<Badge className='text-capitalize' color='light-info' pill> Logo </Badge>, <Badge className='text-capitalize ml-1' color='light-danger' pill> Custom data </Badge>],
      color: 'light-info',
      icon: <Package size={24} />
    },
    {
      title: 'Date',
      subtitle: '12-08-2020',
      color: 'light-danger',
      icon: <Calendar size={24} />
    },
    {
      title: 'Action',
      subtitle: [<Edit className='ml-1' size={18} />, <Trash className='ml-1' size={18} />],
      color: 'light-success',
      icon: <Layers size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              {item.subtitle === 'Edit' ? (
                <Link to={`/adashboard`}>
                <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                </Link>
              ) : (
                <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
              )}
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Customization</CardTitle>
        <CardText className='card-text font-small-2 mr-75 mb-0 pb-0'><Button.Ripple color='primary' className="">View All</Button.Ripple></CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
        <hr />
      </CardBody>
    </Card>
  )
}

export default CCExecutiveDashboardStatistic
