import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const CorporateOffices = () => {
    const data = ['Dattani Centre, Akurli Rd, Kandivali, Akurli Nagar, Kandivali East, Mumbai, Maharashtra 400101', 'Bangalore', 'Hyderabad', 'Pune', 'Manhattan']
    const renderData = () => {
        return data.map(col => {
          return (
           <li>
               <h6 className='text-truncate'>{col}</h6></li>
          )
        })
      }
    
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>Offices</CardTitle>
            <hr />
            <ul className='pl-1'>
            {renderData()}
            </ul>
          </Col>
        </Row>
      </CardBody>
      <CardBody>
      </CardBody>
    </Card>
  )
}

export default CorporateOffices