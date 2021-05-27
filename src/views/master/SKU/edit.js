//Lead Time, SKU ID, MOQ, Customization available, Inspection, sampling, Added time, approved by, no of seller
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

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {
  const { id } = useParams()

  const optionApproveBy = [
    {value: "Reethika", label: "Reethika"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda"},
    {value: "Surya Das", label: "Surya Das"},
    {value: "Avinash ShriKesh", label: "Avinash ShriKesh"},
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Komal Kamble", label: "Komal Kamble"},
    {value: "Mehul bindra", label: "Mehul bindra"},
    {value: "Harpriya", label: "Harpriya"},
    {value: "Tejas Thakare", label: "Tejas Thakare"}
  ]

  const optionCustomization_available = [
    {value: "Yes", label: "Yes"},
    {value: "No", label: "No"}
    
  ]

  const optionInspection = [
    {value: "Yes", label: "Yes"},
    {value: "No", label: "No"}
    
  ]

  const optionsampling = [
    {value: "Yes", label: "Yes"},
    {value: "No", label: "No"}
    
  ]

  const initialvalues = {
    id:1,
    avatar:'',
    username:"",
    Name:"",

    SKU_ID: 0,
    MOQ: 0,
    Customization_available:"",
    Inspection:"",
    sampling: "",
    approved_by:"",
    no_of_seller:0,
    Created_Date:`${new Date().toGMTString()}`,
    Lead_Time: `${new Date().toGMTString()}`
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  

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

   useEffect(() => {
        console.log(data[id - 1])
        setValues({
          ...data[id - 1]
        })
    
  }, [id])

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
          <h2 className="mb-1">Edit SKU</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            
            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='approved_by'>Approved By</Label>
              <Select
                id='approved_by'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionApproveBy}
                theme={selectThemeColors}
                value={values.approved_by}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               approved_by : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='SKU_ID'>SKU ID</Label>
                <InputGroup>
                  
                  <Input name="SKU_ID" onChange={handleInputeChange} id='SKU_ID' type="number" placeholder='Textile' value={values.SKU_ID} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                    <Label for='Lead_Time'>Lead Time</Label>
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
                      name='Lead_Time'
                      className='form-control'
                      onChange={(date) => setValues(
                                                  {
                                                    ...values,
                                                    Lead_Time : date[0]
                                                  }
                                )}
                      value={values.Lead_Time}
                      options={{
                        dateFormat: 'd-m-Y'
                      }}
                    />
                  </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                    <Label for='Created_Date'>Created Date</Label>
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
                      name='Created_Date'
                      className='form-control'
                      onChange={(date) => setValues(
                                                  {
                                                    ...values,
                                                    Created_Date : date[0]
                                                  }
                                )}
                      value={values.Created_Date}
                      options={{
                        dateFormat: 'd-m-Y'
                      }}
                    />
                  </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='MOQ'>MOQ</Label>
                <InputGroup>
                  
                  <Input name="MOQ" onChange={handleInputeChange} id='MOQ' type="number" placeholder='Textile' value={values.MOQ} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='Customization_available'>Customization Available</Label>
              <Select
                id='Customization_available'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionCustomization_available}
                theme={selectThemeColors}
                value={values.Customization_available}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               Customization_available : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='Inspection'>Inspection</Label>
              <Select
                id='Inspection'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionInspection}
                theme={selectThemeColors}
                value={values.Inspection}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               Inspection : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='sampling'>sampling</Label>
              <Select
                id='sampling'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionsampling}
                theme={selectThemeColors}
                value={values.sampling}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               sampling : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='no_of_seller'>No Of Seller</Label>
                <InputGroup>
                  
                  <Input name="no_of_seller" onChange={handleInputeChange} id='no_of_seller' placeholder='Textile' value={values.no_of_seller} />
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
