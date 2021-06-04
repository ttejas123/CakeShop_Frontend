import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Col,
    Input,
    Form,
    Button,
    CustomInput,
    Label
  } from 'reactstrap'
  import Select, { components } from 'react-select'

  import { useState, Fragment } from 'react'


  import { isObjEmpty, selectThemeColors } from '@utils'

  const GeneratePin = () => {
      // ** Assignee Select Options
      const initialvalues = {
        id:0,
        type: '',
        Name: "",
        onBihalf: "",
        allocate:"",
        behalf: "",
        amount: 0
      }
      const [values, setValues] = useState(initialvalues)

    
  const assigneeOptions = [
    { value: 'komal', label: 'Komal Kamble'},
    { value: 'hara', label: 'Harapriya Akk'},
    { value: 'tej', label: 'Tejas Jadhav' },
    { value: 'uma', label: 'Umang Shah' },
    { value: 'pravi', label: 'Pravin Patel'},
    { value: 'sam', label: 'Sameer K'}
  ]
  const [addClicked, setAddClicked] = useState(0) 

  const handleAddClick = () => {
      console.log("added the click", addClicked)
    setAddClicked(!addClicked)

  }
  const abc  = () => {
      return  <FormGroup row>
      <Label sm='3' for='Email'>
        PIN
      </Label>
      <Col sm='6'>
        <Input type='email' name='PIN' id='PIN' placeholder='PIN' />
      </Col>
      <Col sm='3'>
              {/* <Button.Ripple className='mr-1' color='primary' type='submit' onClick={handleAddClick}> */}
              <Button.Ripple className='mr-1' color='primary' >
                Verify & Navigate
              </Button.Ripple>
              </Col>
    </FormGroup> 
    

  }

    return (
      <Card>
        <CardHeader>
          {/* <CardTitle tag='h4'>Horizontal Form</CardTitle> */}
        </CardHeader>
  
        <CardBody>
          <Form>
            <FormGroup row>
              <Label sm='3' for='name'>
                Customer
              </Label>
              <Col sm='6'>
              <Select
                  id='allocate'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={assigneeOptions}
                  theme={selectThemeColors}
                //   value={values.Name[0]}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Name : data
                                              } 
                                      )
                                    }
                            }
                /> 
              </Col>
              <Col sm='3'>
              {/* <Button.Ripple className='mr-1' color='primary' type='submit' onClick={handleAddClick}> */}
              <Button.Ripple className='mr-1' color='primary' onClick={handleAddClick}>
                Send PIN
              </Button.Ripple>
              </Col>
            </FormGroup>

            {addClicked ? abc() : null}

          </Form>
        </CardBody>
      </Card>
    )
  }
  export default GeneratePin
  