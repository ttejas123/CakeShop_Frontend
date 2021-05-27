// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
import { useForm, Controller } from 'react-hook-form'

import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

  const { register, errors, control, setValue } = useForm({
    defaultValues: { isRegisteredOffice: 'No' }
  })

  const initialvalues = {
    id:0,
    role:"",
    Company:"",
    transaction: 0,
    balance: 0
  }

  const optionsUser = [
    {value: "", label: "Select sub-Category"},
    {value: "Tejas", label: "Tejas"},
    {value: "Komal", label: "Komal"},
    {value: "Pravin", label: "Pravin"}
  ]

  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  
  // ** Custom close btn
  const increaseCount = (e, i) => {
      console.log(e.target.checked)
       if (e.target.checked) {
              const val = values.subCat
               val.length = i + 1
              setValues({
                ...values,
                subCat : [...val]
                })
       } else {
              setValues({
                ...values,
                subCat : [...values.subCat, '']
              })
        }   
  }

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
    const { name, value } = event.target
    console.log({
      ...values,
      [name] : values
    })
    setValues({
      ...values,
      [name] : values
    })
    //prop.editAction(values)
    
    setValues(initialvalues)
    alert("Data successfully inserted")
  }

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Add Corporate Role</h2>
        </Col>
      
      <CardBody className=''>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Company'>Company Name</Label>
                <InputGroup>
                  
                  <Input name="Company" onChange={handleInputeChange} id='Company' placeholder='TCS' value={values.Company} />
                </InputGroup>
              </FormGroup>
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='CratedDate'>Created Date</Label>
                   <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <Calendar size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Flatpickr
                      id='CratedDate'
                      tag={Flatpickr}
                      name='CratedDate '
                      className='form-control'
                      onChange={(date) => setValues(
                                                {
                                                     ...values,
                                                    CratedDate  : date[0]
                                                }
                                           )}
                      value={values.CratedDate }
                      options={{
                        dateFormat: 'd-m-Y'
                      }}
                    />
                  </InputGroup>
              </FormGroup>
            </Col>
              
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='role'>Role</Label>
                <InputGroup>
                  
                  <Input name="role" onChange={handleInputeChange} id='role' type="text" placeholder='Admin' value={values.role} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
                    <FormGroup>
                    <Label for='optionsUser'>Users</Label>
                    <Select
                      isMulti
                      isClearable
                      isSearchable
                      id='optionsUser'
                      className='react-select'
                      classNamePrefix='select'
                      
                      options={optionsUser}
                      theme={selectThemeColors}
                      value={values.username}
                      onChange={data => {
                                         setValues(
                                                  {
                                                     ...values,
                                                     username : data
                                                  } 
                                          )
                                        }
                                }
                    /> 
                    </FormGroup>
            </Col>   

            <Col md='12' sm='12'>
              <label className='d-block mb-1'>Rights</label>
              <Row>
               <Col md="4" sm="6">
                    <FormGroup check inline>
                      <CustomInput inline type='checkbox' id='exampleCustomCheckbox' label='Create Bids' defaultChecked />
                      
                    </FormGroup>
               </Col>
               <Col md="4" sm="6">
                    <FormGroup check inline>
                      <CustomInput inline type='checkbox' id='exampleCustomCheckbox' label='Update Bid Details' defaultChecked />
                      
                    </FormGroup>
               </Col>
               <Col md="4" sm="6">
                    <FormGroup check inline>
                      <CustomInput inline type='checkbox' id='exampleCustomCheckbox' label='Delete Bid' defaultChecked />
                      
                    </FormGroup>
               </Col>
              
              </Row> 
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle(e)
                                                        }
                                                      } color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={ () => setValues(initialvalues) } outline>
                Reset
              </Button.Ripple>
            </Col> 
          </Row>
        </Form>
      </Col>
      </CardBody> 
    </Row>
    </Card>
  )
}
export default UserAccountTab
