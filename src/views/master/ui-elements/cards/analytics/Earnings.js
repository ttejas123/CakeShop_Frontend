import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Earnings = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='7'>
            <CardTitle className='mb-1'>Details</CardTitle>
            <div className='font-small-2'>Bid Id</div>
            <h5 className='mb-1'>123432</h5>
            <div className='font-small-2'>Live Date</div>
            <h5 className='mb-1'>24-mar-21</h5>
            <div className='font-small-2'>Close Date</div>
            <h5 className='mb-1'>23-mar-21</h5>
            <div className='font-small-2'>Application Date</div>
            <h5 className='mb-1'>22-mar-21</h5>
            <div className='font-small-2'>Coustomization required</div>
            <h5 className='mb-1'>1. Company Logo</h5>
          </Col>
          <Col xs='6'>
            
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Earnings
