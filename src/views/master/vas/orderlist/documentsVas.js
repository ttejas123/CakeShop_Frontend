import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput, UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/new.jpg'
import sliderImage2 from '@src/assets/images/slider/project.jpg'
import sliderImage3 from '@src/assets/images/slider/resume.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: <span className="text-white">Slide 1 Header</span>
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: <span className="text-white">Slide 2 Header</span>
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: <span className="text-white">Slide 3 Header</span>
  }
]

const CarouselPause = () => {
  return (
    <Card>
      <Row>
      
          <Col sm='12' className="pl-5 pt-2">
            <h2 className="mb-1">Document</h2>
          </Col>
          <CardBody className='pl-3 pt-2'>
            <Row>

                <Col md='8' sm='12'>
                  <UncontrolledCarousel style={{width:'100%'}} items={images} pause='hover' />
                </Col>
            </Row>
          </CardBody>
      </Row>
    </Card>
    )
}
export default CarouselPause