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
  import Select from 'react-select'
  import { selectThemeColors } from '@utils'
  
  const HorizontalForm = (props) => {
    const colourOptions = [
      { value: 'ocean', label: 'Ocean' },
      { value: 'blue', label: 'Blue' },
      { value: 'purple', label: 'Purple' },
      { value: 'red', label: 'Red' },
      { value: 'orange', label: 'Orange' }
    ]
    
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
        console.log(values)
        props.handleSubmit(values)
        //prop.editAction(values)
        //setValues(initialvalues)
      }
    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 15, offset: 3 }}>
            <FormGroup row  >
              <Label sm='4' size='lg' for='name'>
                Name
              </Label>
              <Col sm='8'>
                <Input type='text' name='name' id='name' placeholder='Sub Category Name' onChange={handleInputeChange}/>
              </Col>
            </FormGroup>
  
            {/* <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='country'>
                Country
              </Label>
              <Col sm='8'>
                <Input type='email' name='Country' id='Country' placeholder='Country' onChange={handleInputeChange}/>
              </Col>
            </FormGroup> */}
              <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='country' >Category</Label>
              <Col sm='8'>
            <Select
              name='category'
              id='category'
              onChange={handleInputeChange}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[3]}
              options={colourOptions}
              isDisabled={false}
              isClearable={false}
            />
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
  