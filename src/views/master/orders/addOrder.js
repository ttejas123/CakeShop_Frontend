// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Custom Components
import Flatpickr from 'react-flatpickr'

import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const AddOrder = () => {

  const [data, setData] = useState(null)
  const { control, setValue } = useForm({
    defaultValues: { hasSubscription: 'No' }
  })
  const [picker, setPicker] = useState(new Date())

    const initialvalues = {
    id:1,
    name: "",
    email: "",
    hasSubscription: "",
    isVerified: "",
    icon : "",
    phone : "",
    panNumber: "",
    Currency:  [{value: "currency", label: "Indian Rupee"}],
    City:  [{value: "city", label: "Mumbai"}], 
    State:  [{value: "state", label: "Maharashtra"}],
    Country: [{value: "country", label: "India"}]
  }
  const [values, setValues] = useState(initialvalues)
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

  const submitHandle = (event) => {
    console.log(values)
    //prop.editAction(values)
    setValues(initialvalues)
  }
  const selectedUser = {
    avatar: "",
    company: "Yotz PVT LTD",
    contact: "(479) 232-9151",
    country: "El Salvador",
    currentPlan: "enterprise",
    email: "gslixby0@abc.net.au",
    fullName: "Coense Solution",
    id: 1,
    role: "editor",
    status: "inactive",
    username: "gslixby0"
      }
  

  // ** Update user image on mount or change
  useEffect(() => {
    // if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
    //   setUserData(selectedUser)
    //   if (selectedUser.avatar.length) {
    //     return setImg(selectedUser.avatar)
    //   } else {
    //     return setImg(null)
    //   }
    // }
  })

  // ** Renders User
 
  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>Add Order</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='invoiceId'>Invoice Id</Label>
          <Input type='text' id='invoiceId' placeholder='Invoice Id'  />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
      <Fragment>
         <Label for='default-picker'>Date</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Fragment>
        </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
      <Label className='d-flex my-auto' for='active'>
                <span className=''>Status</span>
              </Label>
      <FormGroup className='d-flex'>
              <Label className='d-flex my-auto' for='active'>
                <span className=''>Created</span>
              </Label>
              <CustomInput
            type='switch'
            className='ml-1 py-1'
            id='activeSwitch'
            name='activeSwitch'
            label='Paid'
            inline
            // onChange={handleInputeChange}
          />
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
export default AddOrder
