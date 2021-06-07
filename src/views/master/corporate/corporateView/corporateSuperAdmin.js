import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col, Media } from 'reactstrap'
import himanshu  from '../../../../assets/images/logo/himanshu.jpg'
const SuperAdmin = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>Super Admin</CardTitle>
            <hr />
            <Col lg='6' md='6' className='d-block'>
            <Media>
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer b-block my-auto'
          src={himanshu}
          alt='user profile avatar'
          height='100'
          width='100'
        />
            <Media className='my-auto' body>
            </Media>
          </Media>
             </Col>
             <CardBody>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Name : </div>
              <h5 className='mb-1'>Himanshu Chanda</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Email : </div>
              <h5 className='mb-1'> himanshuSir@xyz.com</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Contact Number : </div>
              <h5 className='mb-1'> 9876543244</h5>
            </div>   
            </CardBody>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default SuperAdmin