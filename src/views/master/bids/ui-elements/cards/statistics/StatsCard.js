import classnames from 'classnames'
import Avatar from '@components/avatar'
import Timeline from '../../../timeline'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, Badge } from 'reactstrap'
import Earnings from '../analytics/Earnings'
import Address from '../analytics/Address'
import Products from './ProductTable'
import komal  from '../../../../../../assets/images/logo/komal.jpg'
const StatsCard = () => {
    const ShoopingAddre = "Shivshakti so, A-35 0/4 sector-15 airoli navi mumbai 400708" 
  const BillAddre = "Shivshakti so, A-35 0/4 sector-15 airoli navi mumbai 400708" 
 const statesArr = [
        {
          avatar: komal,
          Tag: "by",
          Name: "Komal"
        },
        {
          Tag: "Posted On",
          Name: "21-feb-21"
        },
        {
          Tag: "Budget",
          Name: "150K"
        },
        {
          Tag: "Quntity",
          Name: "100"
        }
 ]
  const renderBidData = () => {
      return statesArr.map(state => {
          return (
                <Col className='mb-2 mr-2'>
                  { state?.avatar ? (
                      <Media>
                        <Avatar img={state.avatar} size='lg' className='mr-2' />
                        <Media className='my-auto' body>
                          <CardText className='font-small-3 mb-0'>{state.Tag}</CardText>
                          <h4 className='font-weight-bolder mb-0'>{state.Name}</h4>
                        </Media>
                      </Media>
                    ) : (
                  <Media className='my-auto' body>
                    <CardText className='font-small-3 mb-0'>{state.Tag}</CardText>
                    <h4 className='font-weight-bolder mb-0'>{state.Name}</h4>
                  </Media>
                   )
                 }
 
                </Col>
          )
    })
  }

  const renderData = () => {
      return (
          <Col>
            <Media>
              <Media className='my-auto d-flex' body>
                  <Badge className='card-text font-small-2 mr-2' color="light-success" pill>
                        <h4 className='mb-0 text-success' color="success"> T- Shirt</h4>
                  </Badge>
                  <Badge className='card-text font-small-2 mr-25 mb-0' color="light-success" pill>
                        <h4 className='mb-0 text-success'> T- Shirt2</h4>
                  </Badge>
              </Media>
            </Media>
          </Col>
      )
  }

  return (
  <div>

    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'><h2>BID 468</h2></CardTitle>
        <Badge className='card-text font-small-2 mr-25 mb-0' color="light-success" pill>
                          <h4 className='mb-0 text-success'> OnGoing </h4>
        </Badge>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
      <hr />
      <CardBody className='statistics-body' xs="12">
        <Row>{renderBidData()}</Row>
      </CardBody>
    </Card>

{ /* here we Have Timeline*/ }
    <div >
        <Row className='match-height'>

          <Col lg="12" xs="12">
            <Timeline />
          </Col>
        </Row>
    </div>

{ /* here we Have Timeline + Details + seller Addess + billing Address*/ }
    <div className='match-height'>
        <Row className='match-height'>
              <Col lg='4'  xs='12' className='match-height'>
                <Card className='card-statistics'>
                  <Earnings />
                </Card>
              </Col>
              <Col lg='4'  xs='12'>
                    <Card className='card-statistics'>
                      <Address title="Shooping Address" Address={ShoopingAddre}/>
                    </Card>
              </Col>
              <Col lg='4'  xs='12'>
                    <Card className='card-statistics'>
                      <Address title="Billing Address" Address={BillAddre}/>
                    </Card>
              </Col>

        </Row>
    </div>

{ /* here we Have Product list*/ }
    <div className='match-height'>
    <Card className='card-statistics'>
       <CardHeader>  
          <CardTitle tag='h4'><h2>Products</h2></CardTitle>
       </CardHeader>  
        <CardBody>
          <Row className='match-height'>
            <Col lg='12' xs='12'>
              <Products />
            </Col>
          </Row>
        </CardBody>  
      </Card>

    </div>

  </div>
  )
}

export default StatsCard
