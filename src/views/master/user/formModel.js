// ** Custom Components
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

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
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
    if (prop.currentId === "") {
        setValues({...initialvalues})
    } else {
        setValues({
          ...prop.data[prop.currentId - 1]
        })
    }
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


  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Add/Edit Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
       
         
              <FormGroup>
              <Label for='Name'>First Name</Label>
              <InputGroup>
                
                <Input name="first_name" onChange={handleInputeChange} id='first_name' placeholder='Ravi' value={values.first_name} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Last Name</Label>
              <InputGroup>
                
                <Input name="last_name" onChange={handleInputeChange} id='last_name' placeholder='Kukreja' value={values.last_name} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Email</Label>
              <InputGroup>
                
                <Input name="email" onChange={handleInputeChange} id='email' placeholder='ravi@gmail.com' value={values.email} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Mobile Number</Label>
              <InputGroup>
                
                <Input name="mobile" onChange={handleInputeChange} id='mobile' placeholder='9768*****3' value={values.mobile} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Designation</Label>
              <InputGroup>
                
                <Input name="designation" onChange={handleInputeChange} id='designation' placeholder='Web devloper' value={values.designation} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Department</Label>
              <InputGroup>
                
                <Input name="department" onChange={handleInputeChange} id='department' placeholder='Web Devlopment' value={values.department} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Specialization</Label>
              <InputGroup>
                
                <Input name="specialization" onChange={handleInputeChange} id='specialization' placeholder='web Devlopment' value={values.specialization} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Currency_id</Label>
              <InputGroup>
                
                <Input name="currency_id" onChange={handleInputeChange} id='currency_id' placeholder='$' value={values.currency_id} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Telephone City Code</Label>
              <InputGroup>
                
                <Input name="telephone_city_code" onChange={handleInputeChange} id='telephone_city_code' placeholder='+91' value={values.telephone_city_code} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Landline</Label>
              <InputGroup>
                
                <Input name="landline" onChange={handleInputeChange} id='landline' placeholder='7777***53' value={values.landline} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Extension</Label>
              <InputGroup>
                
                <Input name="extension" onChange={handleInputeChange} id='extension' placeholder='Ravi' value={values.extension} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>corporate_id</Label>
              <InputGroup>
                
                <Input name="corporate_id" onChange={handleInputeChange} id='corporate_id' placeholder='' value={values.corporate_id} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Company Name</Label>
              <InputGroup>
                
                <Input name="company_name" onChange={handleInputeChange} id='company_name' placeholder='Coence' value={values.company_name} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Pan Card Type</Label>
              <InputGroup>
                
                <Input name="pan_card_type" onChange={handleInputeChange} id='pan_card_type' placeholder='49A' value={values.pan_card_type} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Pan Number</Label>
              <InputGroup>
                
                <Input name="pan_number" onChange={handleInputeChange} id='pan_number' placeholder='AIQP224***' value={values.pan_number} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Exim Details</Label>
              <InputGroup>
                
                <Input name="exim_details" onChange={handleInputeChange} id='exim_details' placeholder='' value={values.exim_details} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Bank Name</Label>
              <InputGroup>
                
                <Input name="bank_name" onChange={handleInputeChange} id='bank_name' placeholder='ICICI Bank' value={values.bank_name} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Bank Branch</Label>
              <InputGroup>
                <Input name="bank_branch" onChange={handleInputeChange} id='bank_branch' placeholder='Airoli' value={values.bank_branch} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='userType'>User Type</Label>
              <Select
                id='userType'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionUserType}
                theme={selectThemeColors}
                value={values.userType}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               userType : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            
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
            
              <FormGroup>
              <Label for='state'>State</Label>
              <Select
                id='state'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionState}
                theme={selectThemeColors}
                value={values.state}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               state : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            
              <FormGroup>
              <Label for='city'>City</Label>
              <Select
                id='city'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionCity}
                theme={selectThemeColors}
                value={values.city}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               city : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Bank Account</Label>
              <InputGroup>
                
                <Input name="bank_account" onChange={handleInputeChange} id='bank_account' placeholder='Ravi' value={values.bank_account} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Ifsc Code</Label>
              <InputGroup>
                
                <Input name="ifsc_code" onChange={handleInputeChange} id='ifsc_code' placeholder='Ravi' value={values.ifsc_code} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>micr Code</Label>
              <InputGroup>
                
                <Input name="micr_code" onChange={handleInputeChange} id='micr_code' placeholder='Ravi' value={values.micr_code} />
              </InputGroup>
              </FormGroup>  
            
              <FormGroup>
              <Label for='Name'>Password</Label>
              <InputGroup>         
                <Input name="password" onChange={handleInputeChange} id='password' placeholder='Ravi' value={values.password} />
              </InputGroup>
              </FormGroup>  
            
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
        <Button className='mr-1' color='primary' onClick={ e =>  {
                                                          prop.handleModal() 
                                                          submitHandle()
                                                        }
                                                      }>
          Submit
        </Button>
        <Button color='secondary' onClick={ prop.handleModal } outline>
          Cancel
        </Button>

      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
