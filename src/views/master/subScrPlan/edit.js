// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'

import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
import Select from 'react-select'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {
  const optionPlan = [
    {value: "Platinum", label: "Platinum"},
    {value: "Premium", label: "Premium"},
    {value: "Gold", label: "Gold"},
    {value: "Silver", label: "Silver"}
]

 const optionActive = [
    {value: "Yes", label: "Yes"},
    {value: "No", label: "No"}
 ]

 const optionbenefit = [
    {value: "No Commission on transactions", label: "No Commission on transactions"},
    {value: "Get Third party VAS", label: "Get Third party VAS"},
    {value: "Reveal names of all bidders", label: "Reveal names of all bidders"},
    {value: "Reveal Contact Details of all bidders", label: "Reveal Contact Details of all bidders"}
 ]

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
          <h2 className="mb-1">Edit Subscription Plan</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='Plan'>Subscription Plan</Label>
              <Select
                id='name'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionPlan}
                theme={selectThemeColors}
                value={values.name}Platinum
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               name : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='Benifits'>Benifits</Label>
              <Select
                isMulti
                isClearable
                isSearchable
                id='benefit'
                
                closeMenuOnSelect={false}
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionbenefit}
                theme={selectThemeColors}
                value={values.benefit}Platinum
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               benefit : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='Active'>Active</Label>
              <Select
                id='Active'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionActive}
                theme={selectThemeColors}
                value={values.Active}Platinum
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               Active : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>
            
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='cost'>Cost in (INR)</Label>
                <InputGroup>
                  
                  <Input name="cost" type="number" onChange={handleInputeChange} id='cost' value={values.cost} />
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
