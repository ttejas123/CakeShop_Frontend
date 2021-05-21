// ** React Imports
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Avatar from '@components/avatar'
import axios from 'axios'
import { User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Lock, Trash2   } from 'react-feather'
import Flatpickr from 'react-flatpickr'

import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'

import {  Media, Row, Col, Button, Form, Table, CustomInput,  Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardTitle, CardBody, MoreVertical  } from 'reactstrap'
import Select from 'react-select'

// company_logo
// pan_card_proof
// exim_doc
// cancelled_cheque
// profile_pic

const UserAccountTab = ({ selectedUser }, prop) => {

  const initialvalues = {
    first_name : "",
    last_name : "",
    email : "",
    mobile  : "",
    designation : "",
    department : "",
    specialization : "",
    currency_id : 0,
    telephone_city_code : 0,
    landline : 0,
    extension : "",
    company_name : "",
    pan_card_type : "",
    pan_number : 0,
    exim_details : "",
    bank_name : "",
    bank_branch : "",
    bank_account : 0,
    ifsc_code : 0,
    micr_code : 0,
    password : 0,
    gstno: 0,
    corporate : {value: "", label: "Select Your Corporate"},
    user_type: {value: "", label: "Select user Type"},
    country:  {value: "", label: "Search country"},
    State: {value: "", label: "Search State"},
    City : {value: "", label: "Search City"}
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues) 
  const [userProfile, setUserProfile] = useState(null)
  const [company_logo, setcompany_logo] = useState(null)
  const [pan_card_proof, setpan_card_proof] = useState(null)
  const [aadhar, setAddhar] = useState(null)

            const uppy1 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            const uppy2 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            const uppy3 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            uppy1.use(thumbnailGenerator)

            uppy1.on('thumbnail:generated', (file, preview) => {
              setcompany_logo(preview)
            })

            uppy2.use(thumbnailGenerator)

            uppy2.on('thumbnail:generated', (file, preview) => {
              setpan_card_proof(preview)
            })

            uppy3.use(thumbnailGenerator)

            uppy3.on('thumbnail:generated', (file, preview) => {
              console.log(preview)
              setAddhar(preview)
            })
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />
  
  const submitHandle = (event) => {
    const data = {
      ...values,
      userProfile,
      company_logo,
      pan_card_proof
    }
    console.log(company_logo)
    
    //prop.editAction(values)
    setValues(initialvalues)
  }

  // ** States
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setUserProfile(reader.result)
    }
    reader.readAsDataURL(files[0])
  }


  return (
    <Row>

      <Col sm='16'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='4' sm='12'>
              <FormGroup>
              <Card>
                <CardHeader>
                  <CardTitle tag='h4'> Company Logo </CardTitle>
                </CardHeader>
                <CardBody>
                  <DragDrop uppy={uppy1} />
                  {company_logo !== null ? <img className='rounded mt-2' src={company_logo} alt='avatar' /> : null}
                </CardBody>
              </Card>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Card>
                <CardHeader>
                  <CardTitle tag='h4'> Pan Card Proof </CardTitle>
                </CardHeader>
                <CardBody>
                  <DragDrop uppy={uppy2} />
                  {pan_card_proof !== null ? <img className='rounded mt-2' src={pan_card_proof} alt='avatar' /> : null}
                </CardBody>
              </Card>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Card>
                <CardHeader>
                  <CardTitle tag='h4'> Aadhar Card Proof </CardTitle>
                </CardHeader>
                <CardBody>
                  <DragDrop uppy={uppy3} />
                  {aadhar !== null ? <img className='rounded mt-2' src={aadhar} alt='avatar' /> : null}
                </CardBody>
              </Card>
              </FormGroup>  
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' onClick={ e =>  {
                                                          
                                                          submitHandle()
                                                        }
                                                      }>
                                    Submit
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={() => setValues(initialvalues) } outline>
                        Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>   
  )
}
export default UserAccountTab
