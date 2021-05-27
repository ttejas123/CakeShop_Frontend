// Assigned to(any onground staff), status(meeting done, Coprorate converted,..)
// Name,Email, Designation(),phone

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

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {
   const { id } = useParams()
  const initialvalues = {
    id:0,
    type: 'Category',
    default_c: 10
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  

  const optionStatus = [
    {value: "meeting done", label: "meeting done"},
    {value: "Coprorate converted", label: "Coprorate converted"}
  ]
   useEffect(() => {
        console.log(data[id - 1])
        setValues({
          ...data[id - 1]
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
    alert("Data successfully inserted")
  }

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Edit OnGround Lead</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Name'>Assigned to</Label>
                <InputGroup>
                  
                  <Input name="Name" onChange={handleInputeChange} id='type' value={values.Name} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='status'>Status</Label>
              <Select
                id='status'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionStatus}
                theme={selectThemeColors}
                value={values.status}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               status : data
                                            } 
                                    )
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
