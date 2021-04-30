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
            <h4>Dattani Centre, Akurli Rd, Kandivali, Akurli Nagar, Kandivali East, Mumbai, Maharashtra 400101</h4>   
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Headquarter