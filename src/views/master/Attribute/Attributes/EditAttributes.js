import { useState } from 'react'
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
  import { useForm, Controller } from 'react-hook-form'
  
  const HorizontalForm = (props) => {
    const { register, errors, control, setValue, trigger } = useForm({
      defaultValues: { gender: 'gender-female', dob: null }
    })
    
    const [values, setValues] = useState('')
    const handleInputeChange = (event) => {
        const {name, value} = event.target
        setValues(
        {
          ...values,
          [name] : value
        }
        )
      }
    
      const handleSubmit = () => {
        if (values === "") {
            props.handleSubmit(props.data)
        } else {
            props.handleSubmit(values)
        }
        //prop.editAction(values)
        //setValues(initialvalues)
      }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 9, offset: 5 }}>
              <FormGroup row  >
                <Label sm='4' size='lg' for='name'>
                  City
                </Label>
                <Col sm='8'>
                  <Input type='text' name='Attributes' id='name' defaultValue={props.data.Attribute} placeholder='Attributes' onChange={handleInputeChange}/>
                </Col>
              </FormGroup>
  
            </Col>
            </Row>
            <FormGroup className='mb-0 mx-auto' row>
              <Col className='d-flex' md={{ size: 8, offset: 5 }}>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => { 
                                                e.preventDefault() 
                                                handleSubmit()
                                                } } >
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset' onClick={props.handleCancel} >
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
  