import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const OrderDocuments = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>Other Documents</CardTitle>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Purchase Intent : </div>
              <h5 className='mb-1'>-</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Proof Of Delivery : </div>
              <h5 className='mb-1'>Invoice </h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Payment Received : </div>
              <h5 className='mb-1'> Yes</h5>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default OrderDocuments