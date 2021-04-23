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
    Name: ""
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
    setValues(initialvalues)
  }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 7, offset: 3 }}>
              <FormGroup className='ml-3' row>
                <Label sm='4' size='lg' for='state'>
                  Partner Name 
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
