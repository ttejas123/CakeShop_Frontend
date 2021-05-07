import classnames from 'classnames'
import Avatar from '@components/avatar'
import Timeline from '../../../timeline'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, Badge } from 'reactstrap'
import Earnings from '../analytics/Earnings'
import { data } from '../../../data'

import Products from './ProductTable'
import komal  from '../../../../../../assets/images/logo/komal.jpg'
const StatsCard = (props) => {
 const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]  
 const statesArr = [
        {
          Tag: "Posted On",
          Name: data[props.userId - 1].created
        },
        {
          Tag: "Budget",
          Name: data[props.userId - 1].BuyerBudget
        },
        {
          Tag: "Quntity",
          Name: data[props.userId - 1].ReqQuantity
        }
 ]
  const renderBidData = () => {
      return statesArr.map(state => {
          return (
                <Col className='mb-1 mr-2 pl-3'>
                  
                  <Media className='my-auto' body>
                    <CardText className='font-small-3 mb-0'>{state.Tag}</CardText>
                    <h4 className='font-weight-bolder mb-0'>{state.Name}</h4>
                  </Media>
                   
 
                </Col>
          )
    })
  }

  const renderData = () => {
      return (
          <Col className='pl-sm-2'>
            
              <Media className='d-flex p-0' body>
                  <Badge className='card-text font-small-2 mr-2' color="light-success" pill>
                        <h4 className='mb-0 text-success' > T- Shirt</h4>
                  </Badge>
                  <Badge className='card-text font-small-2 mr-25 mb-0' color="light-success" pill>
                        <h4 className='mb-0 text-success'> T- Shirt2</h4>
                  </Badge>
              </Media>
            
          </Col>
      )
  }

  return (
  <div>

    <Card className='card-statistics'>
      <CardHeader classnames="mb-0">
        <CardTitle><h1>BID {data[props.userId - 1].id}</h1></CardTitle>
        <Badge className='card-text font-small-2 mr-25 ' color="light-success" pill>
                          <h4 className='mb-0 text-success '> {data[props.userId - 1].BidStatus[0].value} </h4>
        </Badge>
      </CardHeader>
      <CardBody >
        <Row>{renderData()}</Row>
      </CardBody>
      <hr />
      <CardBody className='m-1 p-0' xs="12">
        <Row>
         <Col className='mb-1 mr-2 pl-3'>
                    <Media>
                      {data[props.userId - 1].avatar ? (
                          <Avatar img={data[props.userId - 1].avatar} status='online' imgHeight='50' imgWidth='50' className='mr-2' />
                        ) : (
                          <Avatar
                              initials
                              status='online' 
                              className='mr-2'
                              color={color}
                              
                              content={data[props.userId - 1].Name.substring(0, 1)}
                              contentStyles={{
                                borderRadius: 0,
                                fontSize: 'calc(36px)',
                                width: '100%',
                                height: '100%'
                              }}
                              style={{
                                height: '50px',
                                width: '50px'
                              }}
                          />
                        )}
                        <Media className='my-auto' body>
                          <CardText className='font-small-3 mb-0'>to</CardText>
                          <h4 className='font-weight-bolder mb-0'>{data[props.userId - 1].Name}</h4>
                        </Media>
                    </Media>
         </Col>
        {renderBidData()}</Row>
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
              <Col lg='12'  xs='12' className='match-height'>
                <Card className='card-statistics'>
                  <Earnings />
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
