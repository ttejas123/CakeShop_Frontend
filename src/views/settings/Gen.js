import { Fragment, useState } from 'react'
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { useForm, Controller } from 'react-hook-form'
import { Button, Media, Label, Row, Col, Input, FormGroup, Alert, Form } from 'reactstrap'
import useC from '../../assets/images/logo/useC.jpg'
const GeneralTabs = ({ data }) => {
  const { register, errors, handleSubmit, control, setValue, trigger } = useForm()
  const [avatar, setAvatar] = useState(data[0].avatar)
  const [values, setValues] = useState(data[0])
  //const [avatar, setAvatar] = useState(useC)

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

  const onSubmit = () => {
      console.log(values)
  }

  return (
    <Fragment>
      <Media>
        <Media className='mr-25' left>
          <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
        </Media>
        <Media className='mt-75 ml-1' body>
          <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
            Upload
            <Input type='file' onChange={onChange} hidden accept='image/*' />
          </Button.Ripple>
          <Button.Ripple tag={Label} className='mr-75' color='secondary' size='sm' outline>
            Reset
          </Button.Ripple>
          <Button.Ripple tag={Label} onClick={ () => alert("DO YOU WANT TO DELETE THIS BID")} className='mr-75 float-sm-right' size='m' color='danger'>
            Cancel Purchase
          </Button.Ripple>
          <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
        </Media>
        
      </Media>

      <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm='6'>
            <FormGroup>
              <Label for='intent_duration'>Intent Duration</Label>
              <Input name="intent_duration"  onChange={handleInputeChange} id='Name' value={values.intent_duration} />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='no_rel_product_list'>Number Related Product List</Label>
              <Input name="no_rel_product_list"  onChange={handleInputeChange} id='Name' value={values.no_rel_product_list} />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='bid_min_gap_time'>Bid Min Gap Time</Label>
              <Input name="bid_min_gap_time"  onChange={handleInputeChange} id='Name' value={values.bid_min_gap_time} />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='conform_pi_duration'>Conform Pi Duration</Label>
              <Input name="conform_pi_duration"  onChange={handleInputeChange} id='Name' value={values.conform_pi_duration} />
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='order_grivance_max_time'>Order Grivance Max Time</Label>
              <Flatpickr
                  required
                  id='endDate'
                  // tag={Flatpickr}
                  name='order_grivance_max_time'
                  className='form-control'
                  onChange={(date) => setValues(
                                              {
                                                ...values,
                                                order_grivance_max_time : date[0]
                                              }
                            )}
                  value={values.order_grivance_max_time}
                  options={{
                    dateFormat: 'd-m-Y'
                  }}
              />  
            </FormGroup>
          </Col>
          <Col sm='6'>
            <FormGroup>
              <Label for='cancel_order_duration'>Cancel Order Duration</Label>
              <Input name="cancel_order_duration"  onChange={handleInputeChange} id='Name' value={values.cancel_order_duration} />
            </FormGroup>
          </Col>
          {/*<Col className='mt-75' sm='12'>
                      <Alert className='mb-50' color='warning'>
                        <h4 className='alert-heading'>Your email is not confirmed. Please check your inbox.</h4>
                        <div className='alert-body'>
                          <a href='/' className='alert-link' onClick={e => e.preventDefault()}>
                            Resend confirmation
                          </a>
                        </div>
                      </Alert>
                    </Col>*/}
          <Col className='mt-2' sm='12'>
            <Button.Ripple type='submit' className='mr-1' color='primary'>
              Save changes
            </Button.Ripple>
            <Button.Ripple color='secondary' outline>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}

export default GeneralTabs
