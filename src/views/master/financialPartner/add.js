// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@uppy/status-bar/dist/style.css'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

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
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date()) 
  const [logo, setlogo] = useState(null)
  const uppy1 = new Uppy({
                meta: { type: 'avatar' },
                restrictions: { maxNumberOfFiles: 1 },
                autoProceed: true
              })
  uppy1.use(thumbnailGenerator)

              uppy1.on('thumbnail:generated', (file, preview) => {
                console.log(file)
                setlogo(preview)
              }) 
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
          <h2 className="mb-1">Add Financial Partner</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='name'>Name</Label>
                <InputGroup>
                  
                  <Input name="name" onChange={handleInputeChange} id='name' placeholder='' value={values.name} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='State'>State</Label>
              <Select
                id='State'
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
            </Col>

            <Col md='6' sm='12'>
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

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='landmark'>Landmark</Label>
                <InputGroup>
                  
                  <Input name="landmark" onChange={handleInputeChange} id='landmark' placeholder='Aayapa temple' value={values.landmark} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='pincode'>Pincode</Label>
                <InputGroup>
                  
                  <Input name="pincode" type="number" onChange={handleInputeChange} id='pincode' placeholder='400708' value={values.pincode} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Address'>Address</Label>
                <InputGroup>
                  
                  <Input name="Address" onChange={handleInputeChange} id='Address' placeholder='TCS' value={values.Address} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='6'>
              <label className='d-block mb-1'>Status</label>
              <Row>
               <Col md="6" sm="6">
                    <FormGroup check inline>
                      <CustomInput inline type='checkbox' id='exampleCustomCheckbox' label='Active' defaultChecked />
                      
                    </FormGroup>
               </Col>
              </Row> 
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Card>
                <CardHeader>
                  <CardTitle tag='h4'>Logo</CardTitle>
                </CardHeader>
                <CardBody>
                  <DragDrop uppy={uppy1} />
                  {logo !== null ? <img className='rounded mt-2' src={logo} alt='avatar' /> : null}
                </CardBody>
              </Card>
              </FormGroup>  
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
