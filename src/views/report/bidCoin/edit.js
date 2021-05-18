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
    username:"",
    Name:"",
    transaction: 0,
    balance: 0
  }
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
          <h2 className="mb-1">Edit BidCoin</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Name'>Name</Label>
                <InputGroup>
                  
                  <Input name="Name" onChange={handleInputeChange} id='Name' placeholder='Textile' value={values.Name} />
                </InputGroup>
              </FormGroup>
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='username'>username</Label>
                <InputGroup>
                  
                  <Input name="username" onChange={handleInputeChange} id='username' placeholder='Textile' value={values.username} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='transaction'>transaction</Label>
                <InputGroup>
                  
                  <Input name="transaction" onChange={handleInputeChange} id='transaction' placeholder='Textile' value={values.transaction} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='balance'>balance</Label>
                <InputGroup>
                  
                  <Input name="balance" onChange={handleInputeChange} id='balance' placeholder='Textile' value={values.balance} />
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
