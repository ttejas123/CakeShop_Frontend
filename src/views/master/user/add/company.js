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

  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    last_name: yup.string().min(3).required(),
    pan_number: yup.string().required(),
    aadhar: yup.number().min(3).required(),
    gstno: yup.number().required(),
    designation: yup.string().min(3).required(),
    company_name: yup.string().min(3).required(),
    pinCode: yup.number().required(),
    Address: yup.string().min(3).required()
   
  })

  const { register, errors, handleSubmit } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    console.log(data)
  }

const optionCompany = [
    {value: "", label: "Select Your Company"},
    {value: "TCS", label: "TCS"},
    {value: "Infosys", label: "Infosys"},
    {value: "Google", label: "Google"},
    {value: "Amezon", label: "Amezon"}
]

const optionUserType = [
    {value: "", label: "Select user Type"},
    {value: "Buyer", label: "Buyer"},
    {value: "Seller", label: "Seller"},
    {value: "Both", label: "Both"}
  ]

const optionPanCardType = [
    {value: "Individual", label: "Individual"},
    {value: "Compnay", label: "Compnay"}
    
]

  const initialvalues = {
    
    aadhar : 0,
    corporate_id : 0,
    company_name : "",
    pan_card_type : "",
    pan_number : "",
    user_type: {value: "", label: "Select user Type"}
  }
  const [values, setValues] = useState(initialvalues) 
  const [company_logo, setcompany_logo] = useState(null)
  const [pan_card_proof, setpan_card_proof] = useState(null)

            const uppy1 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            uppy1.use(thumbnailGenerator)

            uppy1.on('thumbnail:generated', (file, preview) => {
              setcompany_logo(preview)
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
      company_logo
    }
    console.log(company_logo)
    
    //prop.editAction(values)
    setValues(initialvalues)
    setcompany_logo(null)
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

      <Col sm='16'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Company Name  {errors && errors.company_name && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="company_name"
                 innerRef={register({ required: true })}
                 invalid={errors.company_name && true} onChange={handleInputeChange} id='company_name' placeholder='Coence' value={values.company_name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='corporate'>Corporate</Label>
              <Select
                id='corporate'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionCompany}
                theme={selectThemeColors}
                value={values.corporate}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               corporate : data
                                            } 
                                    )
                                  }
                          }
              /> 
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
              <Label for='pan_card'>Pan Card Type</Label>
              <Select
                id='user_type'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionPanCardType}
                theme={selectThemeColors}
                value={values.pan_card_type}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               pan_card_type : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Pan Number  {errors && errors.pan_number && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="pan_number"
                innerRef={register({ required: true })}
                invalid={errors.pan_number && true} onChange={handleInputeChange} id='pan_number' placeholder='AIQP224***' value={values.pan_number} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>GST Number  {errors && errors.gstno && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="gstno"
                innerRef={register({ required: true })}
                invalid={errors.gstno && true} onChange={handleInputeChange} id='gstno' placeholder='' value={values.gstno} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>Aadhar Card Number  {errors && errors.aadhar && <span style={{fontSize:"14px", color:"red"}}>*</span>}</Label>
              <InputGroup>
                
                <Input name="aadhar"
                innerRef={register({ required: true })}
                invalid={errors.aadhar && true} type="number" onChange={handleInputeChange} id='aadhar' placeholder='3825****' value={values.aadhar} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='12' sm='12'>
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

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' type='submit' >
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