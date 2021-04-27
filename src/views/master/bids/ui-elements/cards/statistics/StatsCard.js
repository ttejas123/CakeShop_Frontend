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

  const renderBidData = () => {
      return (
        <>
        <Col className='mb-2'>
          <Media>
            <Avatar img={komal} width='50' height='50' className='mr-2' />
            <Media className='my-auto' body>
              <CardText className='font-small-3 mb-0'>By</CardText>
              <h4 className='font-weight-bolder mb-0'>Komal</h4>
            </Media>
          </Media>
        </Col>
        <Col className='mb-2'>
          <Media>
            <Media className='my-auto' body>
              <CardText className='font-small-3 mb-0'>Posted On</CardText>
              <h4 className='font-weight-bolder mb-0'>21-feb-21</h4>
            </Media>
          </Media>
        </Col>
        <Col className='mb-2'>
          <Media>
            <Media className='my-auto' body>
              <CardText className='font-small-3 mb-0'>Budget</CardText>
              <h4 className='font-weight-bolder mb-0'>150K</h4>
            </Media>
          </Media>
        </Col>
        <Col className='mb-2'>
          <Media>
            <Media className='my-auto' body>
              <CardText className='font-small-3 mb-0'>Quntity</CardText>
              <h4 className='font-weight-bolder mb-0'>100</h4>
            </Media>
          </Media>
        </Col>
        </>

      )
  }

  const renderData = () => {
      return (
          <Col>
            <Media>
              <Media className='my-auto ' body>
                  <Badge className='card-text font-small-2 mr-25 mb-0' color="light-success" pill>
                        <h5 className='font-weight-bolder '>  T - Shirt  </h5>
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
                          OnGoing
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
