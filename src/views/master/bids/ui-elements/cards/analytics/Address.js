import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Address = (props) => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>{props.title}</CardTitle>
            <hr />
            <h4>{props.Address}</h4>   
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Address