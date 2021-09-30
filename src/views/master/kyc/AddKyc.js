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
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { CreateKycType } from '@store/actions/master/kyc/kycType'
  const HorizontalForm = (props) => {
    
    const [values, setValues] = useState('')
    const useDisplatch = useDispatch()
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
        useDisplatch(CreateKycType(values))
        props.handleSubmit(values)
      }

    return (
      <Card>  
        <CardBody>
          <Form>
            <Row >
            <Col className='d-flex' md={{ size: 9, offset: 5 }}>
            <FormGroup row  md={{ size: 9, offset: 3 }}>
              <Label sm='4' size='lg' for='name'>
                Name
              </Label>
              <Col sm='8'>
                <Input type='text' name='name' id='name' placeholder='KYC Name' onChange={handleInputeChange} />
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
  