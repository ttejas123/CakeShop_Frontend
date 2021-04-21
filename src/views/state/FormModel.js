import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    CustomInput,
    Label
  } from 'reactstrap'
  

  const option = [
    {value: "India", label: "India"},
    {value: "USA", label: "USA"},
    {value: "Japan", label: "Japan"}
  ]

  const HorizontalForm = (prop) => {
    const initialvalues = {
    StateName: "",
    Country: ""
  }

  const [values, setValues] = useState(initialvalues)

  useEffect(() => {
    if (prop.currentId === "") {
        setValues({...initialvalues})
    } else {
        setValues({
          ...prop.data[prop.currentId - 1]
        })
    }
  }, [prop.currentId, prop.data])

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
        Country : selectedOption.value
      }
    )
  }

  const submitHandle = (event) => {
    console.log(values)
    prop.editAction(values)
    setValues(initialvalues)
  }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 11, offset: 1 }}>
              <FormGroup row  md={{ size: 9, offset: 3 }}>
                <Label sm='4' size='lg' for='StateName'>
                  State Name
                </Label>
                <Col sm='8'>
                  <Input type='text' value={values.StateName}  name='StateName' id='StateName' placeholder='StateName' onChange={handleInputeChange} />
                </Col>
              </FormGroup>
              <FormGroup className='ml-5 ' row>
                  <Label sm='10' size='lg' for='state'>
                  Country
                  </Label>
                  <Col sm='12'>
                    <Select
                      className='ml-5'
                      name='Country'
                      value={values.Country}
                      onChange={handleChange}
                      options={option}
                  />
                  </Col>
         
              </FormGroup>
              
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' onClick={ e =>  {
                                                          prop.handleModal() 
                                                          submitHandle()
                                                        }
                                                      }>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset' onClick={prop.handleModal} >
                  Cancel
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default HorizontalForm
