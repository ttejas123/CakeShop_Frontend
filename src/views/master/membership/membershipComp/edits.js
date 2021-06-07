// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const EditCorporate = () => {

  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>Edit Membership</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='membershipName'>Membership Name</Label>
          <Input type='text' id='membershipName' placeholder='Membership Name' />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='membershipFor'>Nembership For</Label>
          <Input type='text' id='membershipFor' placeholder='Nembership For' />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='benefit'>Benefit</Label>
          <Input type='text' id='benefit' placeholder='Benefit'  />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='cost'>Cost</Label>
          <Input type='number' id='cost' placeholder='Cost'  />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup className='d-flex'>
              <Label className='d-flex my-auto' for='active'>
                <span className=''>Inactive</span>
              </Label>
              <CustomInput
            type='switch'
            className='ml-1 py-1'
            id='activeSwitch'
            name='activeSwitch'
            label='Active'
            inline
            // onChange={handleInputeChange}
          />
            </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='cost'>Aveiler</Label>
          <Input type='number' id='cost' placeholder='Tejas Thakare'  />
        </FormGroup>
      </Col>
      <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
          Save Changes
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          Reset
        </Button.Ripple>
      </Col>
    </Row>
  </Form>
</Col>
</Row>
</CardBody>
</Card>
  )
}
export default EditCorporate
