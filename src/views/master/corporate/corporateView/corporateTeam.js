import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, Form, CardHeader, Button, Media,  Modal, ModalHeader, ModalBody, ModalFooter,  Label, FormGroup, Input  } from 'reactstrap'
import logo from '@src/assets/images/slider/coenseLogo.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
    Plus
  } from 'react-feather'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import TeamCard from './teamCard'
import CorporateDetails from './corporateDetails'
import Headquarter from './corporateHeadquarter'
import CorporateKyc from './corporateKyc'
import CorporateBidStats from './corporateBidStats'
import TeamActivityStats from './teamAcitivityStats'
import CorporateBidHistory from './corporateBidHistory'
import ApplicationStatus from './applicationStatus'
import CorporateTransactions from './corporateTransactions'
import CorporateOffices from './corporateOffices'
// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'

const CorporateTeam = () => {

  const [formModal, setFormModal] = useState(false)
 
  return (
    <div id='dashboard-ecommerce'>

        <Col>
      <Row className='match-height'>
      <Col lg='6' md='6'>
        <Card className='card-statistics'>
       <CardHeader>  
          <CardTitle tag='h4'><h4>Team</h4></CardTitle>
          <Button className='ml-2' color='primary'onClick={() => setFormModal(!formModal)} >
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Team</span>
            </Button>
       </CardHeader>  
        <CardBody>
          <Row className='match-height'>
            <Col lg='12' xs='12'>
            <TeamCard    cols={{ xl: '3', sm: '6' }}/>
            </Col>
          </Row>
        </CardBody>  
      </Card>
        </Col>
          <Col lg='6' md='6'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Team Acitivty Stats</h4></CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' md='12'>
                <TeamActivityStats/>
                </Col>
              </Row>
            </CardBody>  
          </Card>
        </Col>
      </Row> 
      </Col>
      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Add Activity</ModalHeader>
          <ModalBody>
          <Row>
            <Col sm='12'>
                <Form onSubmit={e => e.preventDefault()}>
                 <Row>
                <Col md='12' sm='12'>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input type='text' id='name' placeholder='Name' />
            </FormGroup>
            </Col>
            <Col md='12' sm='12'>
            <FormGroup>
              <Label for='role'>Role</Label>
              <Input type='text' id='role' placeholder='Role' />
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

    </div>
  )
}

export default CorporateTeam
