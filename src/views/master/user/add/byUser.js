// ** React Imports
import Uppy from '@uppy/core'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Avatar from '@components/avatar'
import axios from 'axios'
import { User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Lock, Trash2   } from 'react-feather'
import Flatpickr from 'react-flatpickr'

import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'

import {  Media, Row, Col, Button, Form, Table, CustomInput,  Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardTitle, CardBody, MoreVertical, FormFeedback  } from 'reactstrap'
import Select from 'react-select'

import komal  from '../../../../assets/images/logo/komal.jpg'

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

const optionCompany = [
    {value: "", label: "Select Your Company"},
    {value: "TCS", label: "TCS"},
    {value: "Infosys", label: "Infosys"},
    {value: "Google", label: "Google"},
    {value: "Amezon", label: "Amezon"}
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
    currency_id : "",
    telephone_city_code : "",
    landline : "",
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

  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    last_name: yup.string().min(3).required(),
    mobile: yup.number().required(),
    designation: yup.string().min(3).required(),
    first_name: yup.string().min(3).required(),
    pinCode: yup.number().required(),
    Address: yup.string().min(3).required()
   
  })

  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    console.log(data)
  }
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>First Name  {errors && errors.first_name && <span style={{fontSize:"14px", color:"red"}}>*</span>} </Label>
              <InputGroup>
                <Input name="first_name"
                  innerRef={register({ required: true })}
                 invalid={errors.first_name && true}
               onChange={handleInputeChange} id='first_name' placeholder='Ravi' value={values.first_name} />

              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Last Name  {errors && errors.last_name && <span style={{fontSize:"14px", color:"red"}}>*</span>} </Label>
              <InputGroup>
                
                <Input name="last_name"
                  innerRef={register({ required: true })}
                 invalid={errors.last_name && true}
                  onChange={handleInputeChange} id='last_name' placeholder='Kukreja' value={values.last_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Email  {errors && errors.email && <span style={{fontSize:"14px", color:"red"}}>*</span>} </Label>
              <InputGroup>
                
                <Input name="email"
                innerRef={register({ required: true })}
                 invalid={errors.email && true} onChange={handleInputeChange} id='email' placeholder='ravi@gmail.com' value={values.email} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Mobile Number  {errors && errors.mobile && <span style={{fontSize:"14px", color:"red"}}>*</span>} </Label>
              <InputGroup>
                
                <Input name="mobile"
                innerRef={register({ required: true })}
                 invalid={errors.mobile && true} onChange={handleInputeChange} id='mobile' placeholder='9768*****3' value={values.mobile} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Landline </Label>
              <InputGroup>
                
                
              </InputGroup>
              <InputGroup>
                <Input style={{width: '15%'}} name="telephone_city_code" type="number" onChange={handleInputeChange} id='telephone_city_code' placeholder='+91' value={values.telephone_city_code} />
                
                <Input style={{width: '85%'}} name="landline" type="number" onChange={handleInputeChange} id='landline' placeholder='7777***53' value={values.landline} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Designation  {errors && errors.designation && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="designation"
                innerRef={register({ required: true })}
                 invalid={errors.designation && true} onChange={handleInputeChange} id='designation' placeholder='Web devloper' value={values.designation} />
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
              <Label for='Name'>Extension</Label>
              <InputGroup>
                
                <Input name="extension" onChange={handleInputeChange} id='extension' placeholder='' value={values.extension} />
              </InputGroup>
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
              <Label for='pinCode'>Pin Code  {errors && errors.pinCode && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="pinCode"
                 innerRef={register({ required: true })}
                 invalid={errors.pinCode && true} onChange={handleInputeChange} id='pinCode' placeholder='400708' value={values.pinCode} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Address  {errors && errors.Address && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="Address" 
                innerRef={register({ required: true })}
                 invalid={errors.Address && true} type="textarea" onChange={handleInputeChange} id='Address' placeholder='Enter Your Address...' value={values.Address} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' 
                                                      type='submit'>
                                    Submit
              </Button.Ripple>
              <Button.Ripple color='secondary'  outline>
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
