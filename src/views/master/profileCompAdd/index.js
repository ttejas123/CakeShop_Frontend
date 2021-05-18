// ** React Imports
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect, Fragment } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus, Info  } from 'react-feather'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const InfoToast = () => (
<Fragment>
<div className='toastify-header'>
<div className='title-wrapper'>
<Avatar size='sm' color='info' icon={<Info size={12} />} />
<h6 className='text-info ml-50 mb-0'>All Done</h6>
</div>
<small className='text-muted'>{new Date().toLocaleString()}</small>
</div>
<div className='toastify-body'>
<span>Your Data is successfully inserted.</span>
</div>
</Fragment>)

const UserAccountTab = (prop) => {

  const notifyTopRight = () => toast.info(<InfoToast title='This Right!' />, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true
  })

  const optionProfCom = [
    {value: "Completed", label: "Completed"},
    {value: "WIP", label: "WIP"},
    {value: "Incomplete", label: "Incomplete"}
  ]

  const initialvalues = {
    id:0,
    Task: '',
    Score: '',
    Status: {value: "", label: "Select Status"}
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
    notifyTopRight()
  }

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Profile Completion Add</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Task'>Task</Label>
                <InputGroup>
                  
                  <Input name="Task" onChange={handleInputeChange} id='Task' placeholder='User Name Add' value={values.Task} />
                </InputGroup>
              </FormGroup>
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Score'>Score</Label>
                <InputGroup>
                  
                  <Input name="Score" type="number" onChange={handleInputeChange} placeholder='0 to 10' id='Score' placeholder='9' value={values.Score} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                                <Label for={`item-name`}>Status</Label>
                                
                                <Select
                                    id='Rating'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    options={optionProfCom}
                                    theme={selectThemeColors}
                                    value={values.Status}
                                    onChange={data => {
                                                        setValues({
                                                          ...values,
                                                          Status : data
                                                        })
                                                      }
                                              }
                                  />
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