import { useContext, useState, Fragment } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Form, Card, CardTitle, CardBody, CardText, CardHeader, Button, Media, Modal, ModalHeader, ModalBody, ModalFooter,  Label, FormGroup, Input } from 'reactstrap'
import logo from '@src/assets/images/slider/coenseLogo.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
   Plus
  } from 'react-feather'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import UserInfoCard from './userInfoCard'
import CorporateAssignedCard from './corporateAssignedCard'
import MeetingCard from './meetingCard'
import ActivityCard from './activityCard'
import Flatpickr from 'react-flatpickr'

// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'
import '@styles/react/libs/flatpickr/flatpickr.scss'


const CorporateView = () => {
  const cols = { md: '3', sm: '6' } 
    const [selectedColor, setSelectedColor] = useState('primary')
    const [picker, setPicker] = useState(new Date())
  const [formModal, setFormModal] = useState(false)

    // ** Renders color options
       const colorOptions = ["primary", "success", "waring", "danger", "info"]
  const renderColorOptions = () => {
      console.log("colors", colorOptions)
    return colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  } 
  
  const data = [
    {
      title: 'Admin',
      subtitle: 'Himanshu Chanda'
    },
    {
      title: '#Employees',
      subtitle: '12'
    },
    {
      title: '#Warehouse',
      subtitle: '10'
    },
    {
      title: 'Has Subscription',
      subtitle: 'yes'
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mt-0 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Media className='my-auto' body>
              <h5 className='font-weight-bolder text-center mb-0'>{item.title}</h5>
              <CardText className='font-small-3 text-center mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>

        <Col>
        <Row >
        <Col lg='6' md='6'>
        <UserInfoCard userId = {1}/>
        </Col>
        </Row>

        <Row className='match-height'>
          <Col lg='12' md='12'>
         <CorporateAssignedCard/>
        </Col>
      </Row> 

      <Row className='match-height'>
          <Col lg='12' md='12'>
         <MeetingCard/>
        </Col>
      </Row>

       <Row className='match-height'>
          <Col lg='12' md='12'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Activity</h4></CardTitle>
              <Button className='ml-2' color='primary'onClick={() => setFormModal(!formModal)} >
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Activity</span>
            </Button>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' md='12'>
                <ActivityCard/>
                </Col>
              </Row>
            </CardBody>  
          </Card>
        </Col>
      </Row> 
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered modal-lg'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Add Activity</ModalHeader>
          <ModalBody>
          <Row>
            <Col sm='12'>
                <Form onSubmit={e => e.preventDefault()}>
                 <Row>
                 <Col md='6' sm='12'>
              <FormGroup>
            <Fragment>
              <Label for='default-picker'>Date</Label>
            <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
              </Fragment>
                  </FormGroup> 
            </Col>
                <Col md='6' sm='12'>
            <FormGroup>
              <Label for='task'>Task</Label>
              <Input type='task' id='task' placeholder='Task' />
            </FormGroup>
            </Col>
            <Col md='6' sm='12'>
            <FormGroup>
              <Label for='userName'>User Name</Label>
              <Input type='userName' id='userName' placeholder='userName' />
            </FormGroup>
            </Col>
            <Col md='6' sm='12'>
            <FormGroup>
              <Label for='email'>Email Id</Label>
              <Input type='email' id='email' placeholder='Email' />
            </FormGroup>
            </Col>
            <Col md='6' sm='12'>
            <FormGroup>
              <Label for='status'>Status</Label>
              <Input type='status' id='status' placeholder='Status' />
            </FormGroup>
            </Col>
            <Col md='12' sm='12'>
            <FormGroup>
              <Label for='comment'>Comment</Label>
              <Input type='textarea' id='comment' placeholder='Comment' />
            </FormGroup>
            </Col>
            </Row>
            </Form>
            </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setFormModal(!formModal)}>
              Add
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </Col>
    </div>
  )
}

export default CorporateView
