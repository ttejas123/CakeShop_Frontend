import React, { useState, useEffect } from 'react'
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
  
  const HorizontalForm = (prop) => {
    const initialvalues = {
    Name: "",
    Cost: ""
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
    const {name, value, files} = event.target
    console.log(event.target)
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

  const submitHandle = (event) => {
    console.log(values)
    prop.editAction(values)
    prop.handleModal()
    setValues(initialvalues)
  }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 9, offset: 2 }}>
              <FormGroup row  >
                <Label sm='4' size='lg' for='Cost'>
                   Cost
                </Label>
                <Col sm='8'>
                  <Input type='number' value={values.Cost}  name='Cost' id='Cost' placeholder='Cost' onChange={handleInputeChange} />
                </Col>
              </FormGroup>
    
              <FormGroup className='ml-3' row>
                <Label sm='4' size='lg' for='state'>
                  Service
                </Label>
                <Col sm='8'>
                  <Input type='text' value={values.Name}  name='Name' id='Name' placeholder='Name' onChange={handleInputeChange} />
                </Col>
              </FormGroup>
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' onClick={ e =>  {
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
