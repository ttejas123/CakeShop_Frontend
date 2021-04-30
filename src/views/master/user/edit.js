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

import komal  from '../../../assets/images/logo/komal.jpg'

// company_logo
// pan_card_proof
// exim_doc
// cancelled_cheque
// profile_pic

const UserAccountTab = ({ selectedUser }, prop) => {
const optionCountry = [
    {value: "", label: "Select Your country"},
    {value: "India", label: "India"},
    {value: "USA", label: "USA"},
    {value: "Canada", label: "Canada"},
    {value: "Japan", label: "Japan"}
]

const optionCity = [
    {value: "", label: "Select Your City"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Pune", label: "Pune"}
]

const optionState = [
    {value: "", label: "Select Your State"},
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Up", label: "Up"}
]

const optionUserType = [
    {value: "", label: "Select user Type"},
    {value: "Buyer", label: "Buyer"},
    {value: "Seller", label: "Seller"},
    {value: "Both", label: "Both"}
  ]

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
    corporate_id : 0,
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

            uppy1.use(thumbnailGenerator)

            uppy1.on('thumbnail:generated', (file, preview) => {
              setcompany_logo(preview)
            })

            uppy2.use(thumbnailGenerator)

            uppy2.on('thumbnail:generated', (file, preview) => {
              setpan_card_proof(preview)
            })
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />
  
  useEffect(() => {
    // if (prop.currentId === "") {
    //     setValues({...initialvalues})
    // } else {
    //     setValues({
    //       ...prop.data[prop.currentId - 1]
    //     })
    // }
  }, [prop.currentId, prop.data])
  //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

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


  // ** Update user image on mount or change
  useEffect(() => {
    // if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
    //   setUserData(selectedUser)
    //   if (selectedUser.avatar.length) {
    //     return setImg(selectedUser.avatar)
    //   } else {
    //     return setImg(null)
    //   }
    // }
    
  }, [komal])

  // ** Renders User
  const renderUserAvatar = () => {
    if (userProfile === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content="Komal"
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={userProfile}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          {renderUserAvatar()}
          <Media className='mt-50' body>
            <Media className='mt-50' body>
            <h4>Upload Profile</h4>
            <div className='d-flex flex-wrap mt-1 px-0'>
              <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                <span className='d-none d-sm-block'>Change</span>
                <span className='d-block d-sm-none'>
                  <Edit size={14} />
                </span>
                <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                <span className='d-none d-sm-block'>Remove</span>
                <span className='d-block d-sm-none'>
                  <Trash2 size={14} />
                </span>
              </Button.Ripple>
            </div>
          </Media>
          </Media>
        </Media>
      </Col>

      <Col sm='16'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>First Name</Label>
              <InputGroup>
                
                <Input name="first_name" onChange={handleInputeChange} id='first_name' placeholder='Ravi' value={values.first_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Last Name</Label>
              <InputGroup>
                
                <Input name="last_name" onChange={handleInputeChange} id='last_name' placeholder='Kukreja' value={values.last_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Email</Label>
              <InputGroup>
                
                <Input name="email" onChange={handleInputeChange} id='email' placeholder='ravi@gmail.com' value={values.email} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Mobile Number</Label>
              <InputGroup>
                
                <Input name="mobile" onChange={handleInputeChange} id='mobile' placeholder='9768*****3' value={values.mobile} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Designation</Label>
              <InputGroup>
                
                <Input name="designation" onChange={handleInputeChange} id='designation' placeholder='Web devloper' value={values.designation} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Department</Label>
              <InputGroup>
                
                <Input name="department" onChange={handleInputeChange} id='department' placeholder='Web Devlopment' value={values.department} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Specialization</Label>
              <InputGroup>
                
                <Input name="specialization" onChange={handleInputeChange} id='specialization' placeholder='web Devlopment' value={values.specialization} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Currency_id</Label>
              <InputGroup>
                
                <Input name="currency_id" onChange={handleInputeChange} id='currency_id' placeholder='$' value={values.currency_id} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Telephone City Code</Label>
              <InputGroup>
                
                <Input name="telephone_city_code" onChange={handleInputeChange} id='telephone_city_code' placeholder='+91' value={values.telephone_city_code} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Landline</Label>
              <InputGroup>
                
                <Input name="landline" onChange={handleInputeChange} id='landline' placeholder='7777***53' value={values.landline} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Extension</Label>
              <InputGroup>
                
                <Input name="extension" onChange={handleInputeChange} id='extension' placeholder='Ravi' value={values.extension} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>corporate_id</Label>
              <InputGroup>
                
                <Input name="corporate_id" onChange={handleInputeChange} id='corporate_id' placeholder='' value={values.corporate_id} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Company Name</Label>
              <InputGroup>
                
                <Input name="company_name" onChange={handleInputeChange} id='company_name' placeholder='Coence' value={values.company_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Pan Card Type</Label>
              <InputGroup>
                
                <Input name="pan_card_type" onChange={handleInputeChange} id='pan_card_type' placeholder='49A' value={values.pan_card_type} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Pan Number</Label>
              <InputGroup>
                
                <Input name="pan_number" onChange={handleInputeChange} id='pan_number' placeholder='AIQP224***' value={values.pan_number} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Exim Details</Label>
              <InputGroup>
                
                <Input name="exim_details" onChange={handleInputeChange} id='exim_details' placeholder='' value={values.exim_details} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Bank Name</Label>
              <InputGroup>
                
                <Input name="bank_name" onChange={handleInputeChange} id='bank_name' placeholder='ICICI Bank' value={values.bank_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Bank Branch</Label>
              <InputGroup>
                <Input name="bank_branch" onChange={handleInputeChange} id='bank_branch' placeholder='Airoli' value={values.bank_branch} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='user_type'>User Type</Label>
              <Select
                id='user_type'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionUserType}
                theme={selectThemeColors}
                value={values.user_type}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               user_type : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='country'>Country</Label>
              <Select
                id='country'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionCountry}
                theme={selectThemeColors}
                value={values.country}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               country : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='State'>State</Label>
              <Select
                id='State'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionState}
                theme={selectThemeColors}
                value={values.State}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               State : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='City'>City</Label>
              <Select
                id='City'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionCity}
                theme={selectThemeColors}
                value={values.City}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               City : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Bank Account</Label>
              <InputGroup>
                
                <Input name="bank_account" onChange={handleInputeChange} id='bank_account' placeholder='Ravi' value={values.bank_account} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Ifsc Code</Label>
              <InputGroup>
                
                <Input name="ifsc_code" onChange={handleInputeChange} id='ifsc_code' placeholder='Ravi' value={values.ifsc_code} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>micr Code</Label>
              <InputGroup>
                
                <Input name="micr_code" onChange={handleInputeChange} id='micr_code' placeholder='Ravi' value={values.micr_code} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Password</Label>
              <InputGroup>         
                <Input name="password" onChange={handleInputeChange} id='password' placeholder='Ravi' value={values.password} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
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

            <Col md='6' sm='12'>
              <FormGroup>
              <Card>
                <CardHeader>
                  <CardTitle tag='h4'> Pan Card Proof </CardTitle>
                </CardHeader>
                <CardBody>
                  <DragDrop uppy={uppy2} />
                  {company_logo !== null ? <img className='rounded mt-2' src={pan_card_proof} alt='avatar' /> : null}
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

{ /*
// ** React Imports
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2, Calendar } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'

const UserAccountTab = ({ selectedUser }) => {
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Update user image on mount or change
  // useEffect(() => {
  //   if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
  //     setUserData(selectedUser)
  //     if (selectedUser.avatar.length) {
  //       return setImg(selectedUser.avatar)
  //     } else {
  //       return setImg(null)
  //     }
  //   }
  // }, [selectedUser])

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <h1></h1>
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  return (
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          {renderUserAvatar()}
          <Media className='mt-50' body>
            <h4> </h4>
            <div className='d-flex flex-wrap mt-1 px-0'>
              <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                <span className='d-none d-sm-block'>Change</span>
                <span className='d-block d-sm-none'>
                  <Edit size={14} />
                </span>
                <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                <span className='d-none d-sm-block'>Remove</span>
                <span className='d-block d-sm-none'>
                  <Trash2 size={14} />
                </span>
              </Button.Ripple>
            </div>
          </Media>
        </Media>
      </Col>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input type='text' id='username' placeholder='Username' defaultValue={userData && userData.username} />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input type='text' id='name' placeholder='Name' defaultValue={userData && userData.fullName} />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='text' id='email' placeholder='Email' defaultValue={userData && userData.email} />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='status'>Status</Label>
                <Input type='select' name='status' id='status' defaultValue={userData && userData.status}>
                  <option value='pending'>Pending</option>
                  <option value='active'>Active</option>
                  <option value='inactive'>Inactive</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='BidCloseDate'>Bid Close Date</Label>
                <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Calendar size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Flatpickr
                 
                  required
                  id='endDate'
                  name='BidCloseDate'
                  className='form-control'
                  
                  options={{
                    dateFormat: 'd-m-Y'
                  }}
                />
              </InputGroup>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='company'>Company</Label>
                <Input
                  type='text'
                  id='company'
                  defaultValue={userData && userData.company}
                  placeholder='WinDon Technologies Pvt Ltd'
                />
              </FormGroup>
            </Col>
            
            
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                Reset
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}
export default UserAccountTab
*/ }