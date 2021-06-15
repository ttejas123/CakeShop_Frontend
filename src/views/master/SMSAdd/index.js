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
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return  <Avatar className='mr-1' img={row.avatar} width='32' height='32'  /> 
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" /> 
  }
}

const part = (data2) => {
  return (<div className='d-flex justify-content-left align-items-center'>
          {renderClient(data2)}
        <div className=''>
                                          
          <div className='user-info text-truncate d-flex flex-column'>
            <span className='font-weight-bold'>{data2.Name}</span>
              <small className='text-truncate text-muted mb-0'>@{data2.username}</small>
          </div>
                                         
        </div>
    </div>)
}

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

  const optionPartners = [
    {value: "user1212", label: part(data[0])},
    {value: "user1231", label: part(data[1])},
    {value: "user1234", label: part(data[2])},
    {value: "user2345", label: part(data[3])},
    {value: "user3456", label: part(data[4])}
  ]

  const initialvalues = {
    id:0,
    user: '',
    reciverType: '',
    number: '',
    content: ''
  }

  const [values, setValues] = useState(initialvalues)

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
          <h2 className="mb-1">Add SMS</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='BidStatus'>User</Label>
                <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionPartners}
                  theme={selectThemeColors}
                  value={values.Name}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Name : data
                                              } 
                                      )
                                    }
                            }
                />
              </FormGroup>
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='reciverType'>Reciver Type</Label>
                <InputGroup>
                  
                  <Input name="reciverType" onChange={handleInputeChange} id='reciverType' placeholder='' value={values.reciverType} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='content'>Content</Label>
                <InputGroup>
                  
                  <Input name="content" type="textarea" row="5" onChange={handleInputeChange} id='content' maxLength="100" placeholder='Write your msg here !!!' value={values.content} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='number'>User Number</Label>
                <InputGroup>
                  
                  <Input name="number" type="number" onChange={handleInputeChange} id='number' value={values.number} />
                </InputGroup>
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