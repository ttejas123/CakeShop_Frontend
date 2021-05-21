// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus, Lock  } from 'react-feather'
import { data1 } from './data'

// ** Custom Components
import Avatar from '@components/avatar'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

  const optionbackUp = [
    {value: "Tejas Thakare", label: "Tejas Thakare"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda"},
    {value: "Daksh", label: "Daksh"},
    {value: "Umang Shah", label: "Umang Shah"}
  ]
   const { id } = useParams()
  const initialvalues = {
   
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  

   useEffect(() => {
        console.log(data1[id - 1])
        setValues({
          ...data1[id - 1]
        })
    
  }, [id])

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
    alert("Data1 successfully inserted")
  }

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Edit BackUp Account</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='type'>Out Of Office</Label>
                <InputGroup>
                  
                  <Input name="outOfOffice" disabled onChange={handleInputeChange} id='outOfOffice' placeholder='Textile' value={values.outOfOffice} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                  <Label for='backUp'>BackUp</Label>
                  <Select
                    id='backUp'
                    className='react-select'
                    classNamePrefix='select'
                    isClearable={false}
                    options={optionbackUp}
                    theme={selectThemeColors}
                    value={values.backUp}
                    onChange={data => {
                                       setValues(
                                                {
                                                   ...values,
                                                   backUp : data
                                                } 
                                        )
                                      }
                              }
                  />
              </FormGroup>
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                  <Label for='from'>from</Label>
                   <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <Calendar size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Flatpickr
                    required
                    id='endDate'
                    // tag={Flatpickr}
                    name='from'
                    className='form-control'
                    onChange={(date) => setValues(
                                                {
                                                  ...values,
                                                  from : date[0]
                                                }
                              )}
                    value={values.from}
                    options={{
                      dateFormat: 'd-m-Y'
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                  <Label for='to'>to</Label>
                   <InputGroup>
                    <InputGroupAddon addonType='prepend'>
                      <InputGroupText>
                        <Calendar size={15} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Flatpickr
                    required
                    id='endDate'
                    // tag={Flatpickr}
                    name='to'
                    className='form-control'
                    onChange={(date) => setValues(
                                                {
                                                  ...values,
                                                  to : date[0]
                                                }
                              )}
                    value={values.to}
                    options={{
                      dateFormat: 'd-m-Y'
                    }}
                  />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col sm='12'>
              <div className='permissions border mt-1'>
                <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                  <Lock size={18} className='mr-25' />
                  <span className='align-middle'>Permissions</span>
                </h6>
                <Table borderless striped responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th>Rights</th>
                      <th>Create</th>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Master</td>
                      <td>
                        <CustomInput type='checkbox' id='master-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-4' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Reports</td>
                      <td>
                        <CustomInput type='checkbox' id='reports-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-2' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-4' label='' />
                      </td>
                      </tr>
                    <tr>
                      <td>USer</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-3' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-4' label='' />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
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
