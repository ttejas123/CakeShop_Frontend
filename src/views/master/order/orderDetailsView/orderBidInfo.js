import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const OrderBidInfo = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>Bid Information</CardTitle>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Bid Id : </div>
              <h5 className='mb-1'>BID1</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Created : </div>
              <h5 className='mb-1'>01-05-2021 </h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Catalogue Id : </div>
              <h5 className='mb-1'> Cat1</h5>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default OrderBidInfo