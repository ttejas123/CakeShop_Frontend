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
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { AllProductList } from '@store/actions/master/product'
import { SpecificProductAttribute } from '@store/actions/master/productSKU'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const AddSku = (prop) => {
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
    
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  

  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(AllProductList(5, 0))
   
  }, [useDisplatch])
  const DataTableD = useSelector(state => {
    //console.log(state.warehouse)
    return state.product
  })
  const DataAttribute = useSelector(state => {
    //console.log(state.productSKU)
    return state.productSKU
  })

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
          <h2 className="mb-1">Add SKU</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            
            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='approved_by'>Select Product</Label>
              <Select
                id='approved_by'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={DataTableD.allProductDataList}
                theme={selectThemeColors}
                
                onChange={data => {
                                   useDisplatch(SpecificProductAttribute(data.id))
                                   setValues(
                                            {
                                               ...values,
                                               productId : data.id
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
                  
                  <Input name="SKU_ID" onChange={handleInputeChange} id='SKU_ID' type="text" placeholder='SKU ID' value={values.SKU_ID} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='MRP'>MRP</Label>
                <InputGroup>
                  
                  <Input name="MRP" onChange={handleInputeChange} id='MRP' type="number" placeholder='MRP in INR'/>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md='12' sm='12'><h6>Attributes</h6></Col>
            <>{
              DataAttribute.attribute.map(item => {
                return (
                  <Col md='4' sm='12' key={item.id} >
                    <FormGroup>
                      <Label for={item.id}>{item.display_name}</Label>
                      <Select
                          id='{item.id}'
                          className='react-select'
                          classNamePrefix='select'
                          isClearable={false}
                          options={item.value}
                          theme={selectThemeColors}
                          onChange={(data) => {
                            const type = item.display_name.split(" ")[0]
                            setValues({
                              ...values,
                              storeArray: {
                                ...values.storeArray,
                                [type] : data
                              }
                            })
                          }}
                        /> 
                    </FormGroup>
                  </Col>
                )
              })
            }</>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle(e)
                                                          console.log(values)
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
export default AddSku
