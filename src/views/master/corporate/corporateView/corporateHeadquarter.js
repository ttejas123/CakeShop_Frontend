import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Headquarter = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>Headquarter</CardTitle>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Area : </div>
              <h5 className='mb-1'>Dattani Centre</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Street Name : </div>
              <h5 className='mb-1'> Akurli Rd</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>City : </div>
              <h5 className='mb-1'> Kandivali East, Mumbai</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>State :  </div>
               <h5 className='mb-1'> Maharashtra</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>PinCode : </div>
              <h5 className='mb-1'> 400101</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Country : </div>
              <h5 className='mb-1'> India</h5>
            </div>  
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Contact Number : </div>
              <h5 className='mb-1'> 9876543244</h5>
            </div>   
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Headquarter