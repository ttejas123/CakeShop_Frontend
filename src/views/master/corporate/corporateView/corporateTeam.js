import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardTitle, CardBody, Form, CardHeader, Button, Media,  Modal, ModalHeader, ModalBody, ModalFooter,  Label, FormGroup, Input  } from 'reactstrap'
import logo from '@src/assets/images/slider/coenseLogo.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
    Plus
  } from 'react-feather'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import { selectThemeColors, isObjEmpty } from '@utils'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'

import Select from 'react-select'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import TeamCard from './teamCard'
import TeamActivityStats from './teamAcitivityStats'
// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'

const CorporateTeam = () => {

  const optionUsers = [
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Tejas Thakare", label: "Tejas Thakare"},
    {value: "Komal Kamble", label: "Komal Kamble"}
  ]

  const optionRole = [
    {value: "Admin", label: "Admin"},
    {value: "Intern", label: "Intern"},
    {value: "Full-time Employee", label: "Full-time Employee"}
  ]

  const initialvalues = {
    user: [{value: "Select User", label: "Select User"}],
    Role: [{value: "role", label: "Intern"}]
  }

  const [values, setValues] = useState(initialvalues)
  const [formModal, setFormModal] = useState(false)
 
  return (
    <div id='dashboard-ecommerce'>

        <Col>
      <Row className='match-height'>
      <Col lg='6' md='6'>
        <Card className='card-statistics'>
       <CardHeader>  
          <CardTitle tag='h4'><h4>Team</h4></CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
          <Button className='ml-2' color='primary'onClick={() => setFormModal(!formModal)} >
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Team</span>
            </Button>
            <Link  to={`/master/corporateRoles/add`}>
            <Button className='ml-2' color='primary' >
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Role</span>
            </Button>
            </Link>
            </div>
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
          <ModalHeader toggle={() => setFormModal(!formModal)}>Add Team</ModalHeader>
          <ModalBody>
          <Row>
            <Col sm='12'>
                <Form onSubmit={e => e.preventDefault()}>
                 <Row>
                <Col md='12' sm='12'>
            <FormGroup>
              <Label for='name'>Name</Label>
            <Select
              id='name'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionUsers}
              theme={selectThemeColors}
              value={values.user[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             user : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
            </Col>
            <Col md='12' sm='12'>
            <FormGroup>
              <Label for='role'>Name</Label>
            <Select
              id='role'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionRole}
              theme={selectThemeColors}
              value={values.Role[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             Role : data
                                          } 
                                  )
                                }
                        }
            />
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
