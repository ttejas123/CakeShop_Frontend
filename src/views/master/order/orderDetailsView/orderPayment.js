import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const OrderPayment = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>Payment</CardTitle>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Total : </div>
              <h5 className='mb-1'>50000</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Balance : </div>
              <h5 className='mb-1'> 10000</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>GST : </div>
              <h5 className='mb-1'> 9000</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Comission :  </div>
               <h5 className='mb-1'> 4500</h5>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default OrderPayment