// ** React Imports
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody,
  CardTitle } from 'reactstrap'

const UserAccountTab = (prop) => {
  const [count, setCount] = useState(1)

  const optionBidStatus = [
    {value: "height", label: "height"},
    {value: "width", label: "width"},
    {value: "Brand", label: "Brand"},
    {value: "Manifacturing Date", label: "Manifacturing Date"},
    {value: "material", label: "material"},
    {value: "SmoothNess", label: "SmoothNess"}
  ]

  const initialvalues = {
    id:0,
    Cat: "",
    subCat: [],
    subAttributes: '' 
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  
  // ** Custom close btn
  const increaseCount = () => {
    setValues({
      ...values,
      subCat : [...values.subCat, '']
    })
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
  //for drop down
  const handleChange = (selectedOption) => {
    
    setValues(
      {
        ...values,
        Currency : selectedOption.value
      }
    )
  }

  const submitHandle = (event) => {
    console.log(values)
    //prop.editAction(values)
    setValues(initialvalues)
  }

  const handleInput = (i, e) => {
    const { name, value } = event.target
    const val = [...values.subCat]
    val[i] = value
    setValues({
      ...values,
      subCat : val
    })
  }

  const deleteForm = (e, index) => {
    e.preventDefault()
    const val = values.subCat
    val.splice(index, 1)
    setValues({
      ...values,
      subCat : [...val]
    })
    
  }
  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Add Your SubCategory</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Name'>Category</Label>
                <InputGroup>
                  
                  <Input name="Cat" onChange={handleInputeChange} id='Cat' placeholder='Textile' value={values.Cat} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='ReqCustomization'>Attribute</Label>
                
                <Select
                  isMulti
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionBidStatus}
                  theme={selectThemeColors}
                  value={values.subAttributes}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 subAttributes : data
                                              } 
                                      )
                                    }
                            }
                />
              </FormGroup>
            </Col>

            <Col md='12' sm='12'>
                  { values.subCat.map((val, i) => {

                    return (
                        <Form key={i} onSubmit={ (e) => e.preventDefault() }>
                          <Row className='justify-content-between align-items-center'>
                            <Col md={6}>
                              <FormGroup>
                                <Label for={`item-name-${i}`}>Sub Category Name</Label>
                                <Input type='text' id={`item-name-${i}`} placeholder='Sub Category' value={val} onChange={ (e) => handleInput(i, e)}  />
                              </FormGroup>
                            </Col>
                            
                            <Col md={4}>
                              <Button.Ripple color='danger' className='text-nowrap px-1' onClick={ (e) => deleteForm(e, i)} outline>
                                <X size={14} className='mr-50' />
                                <span>Delete</span>
                              </Button.Ripple>
                            </Col>
                            <Col sm={12}>
                              <hr />
                            </Col>
                          </Row>
                      </Form>
                      )
                  }
                  )}

              <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
                <Plus size={10} />
                <span className='align-middle ml-25'>Add sub Category</span>
              </Button.Ripple>
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle()
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
