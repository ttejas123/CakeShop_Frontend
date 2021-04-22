import React, { useState, useEffect } from 'react'
import { selectThemeColors } from '@utils'
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
    console.log(selectedOption)
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
            <Col  className="ml-5">
              <FormGroup row >
                <Label sm='4' size='lg' for='StateName'>
                  State Name
                </Label>
                <Col sm='4'>
                  <Input type='text' value={values.StateName}  name='StateName' id='StateName' placeholder='StateName' onChange={handleInputeChange} />
                </Col>
              </FormGroup>
              <FormGroup  row>
                  <Label md='4' sm='1'>
                      Country
                  </Label>
                  <Col className='mb-1' md='4' sm='8'>
                  <Select
                    theme={selectThemeColors}
                    className='react-select'
                    classNamePrefix='select'
                    defaultValue={values.Country}
                    name='Country'
                    options={option}
                    isLoading={false}
                    onChange={handleChange}
                    isClearable={false}
                  />
                  </Col>
         
              </FormGroup>
              
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 4 }}>
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
