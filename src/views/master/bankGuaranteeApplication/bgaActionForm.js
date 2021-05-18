// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import Flatpickr from 'react-flatpickr'

// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const BgaAction = () => {

    const [picker, setPicker] = useState(new Date())
  const [data, setData] = useState(null)
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isRegisteredOffice: 'No' }
  })

  const optionCountry = [
    {value: "India", label: "India"},
    {value: "UK", label: "UK"},
    {value: "USA", label: "USA"},
    {value: "Australia", label: "Australia"},
    {value: "China", label: "China"},
    {value: "Russia", label: "Russia"}
  ]
  const optionRole = [
    {value: "Admin", label: "Admin"},
    {value: "Intern", label: "Intern"},
    {value: "Full-time Employee", label: "Full-time Employee"}
  ]

  const optionState = [
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Andhra Pradesh", label: "Andhra Pradesh"},
    {value: "Kerala", label: "Kerala"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"},
    {value: "Gujarat", label: "Gujarat"}
  ]
  const optionCity = [
    {value: "Pune", label: "Pune"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Nagpur", label: "Nagpur"},
    {value: "Nashik", label: "Nashik"},
    {value: "Solapur", label: "Solapur"}
  ]
  const optionuser = [
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Tejas Thakare", label: "Tejas Thakare"},
    {value: "Komal Kamble", label: "Komal Kamble"}
  ]
  const optionCurrency = [
    {value: "Indian Rupee", label: "Indian Rupee"},
    {value: "Us Dollar", label: "Us Dollar"},
    {value: "Euro", label: "Euro"},
    {value: "Armerian Dram", label: "Armerian Dram"},
    {value: "Canadian Dollar", label: "Canadian Dollar"}
  ]
  const initialvalues = {
    id:1,
    name: "",
    email: "",
    isRegisteredOffice: "",
    isVerified: "",
    logo : "",
    phone : "",
    panNumber: "",
    user:  [{value: "Pravin Poshmani", label: "Pravin Poshmani"}],
    City:  [{value: "city", label: "Mumbai"}], 
    State:  [{value: "state", label: "Maharashtra"}],
    Country: [{value: "country", label: "India"}],
    Role: [{value: "role", label: "Intern"}]
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
    status: "inVerified",
    username: "gslixby0"
      }
  //console.log(selectedUser)
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)
  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
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
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>BGA Approve / Reject</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
        <FormGroup>
              <Label for='user'>User</Label>
            <Select
              id='user'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionuser}
              theme={selectThemeColors}
              value={values.user[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             user : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='amountRequested'>Amount Requested</Label>
          <Input type='text' id='amountRequested' placeholder='Amount Requested' defaultValue={userData && userData.amountRequested} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='corporateName'>Corporate Name</Label>
          <Input type='text' Number='corporateName' placeholder='Corporate Name' defaultValue={userData && userData.EmployeeNumber} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='creditLimit'>Credit Limit</Label>
          <Input type='text' Number='creditLimit' placeholder='Credit Limit' defaultValue={userData && userData.creditLimit} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='sizeOfCredit'>Size of Credit</Label>
          <Input type='text' Number='sizeOfCredit' placeholder='Size of Credit' defaultValue={userData && userData.sizeOfCredit} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='numberOfDays'>Number of Days</Label>
          <Input type='text' Number='numberOfDays' placeholder='Number of Days' defaultValue={userData && userData.numberOfDays} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='finalAmountOfCreditLimit'>Final Amount Of Credit Limit</Label>
          <Input type='text' Number='finalAmountOfCreditLimit' placeholder='Final Amount Of Credit Limit' defaultValue={userData && userData.finalAmountOfCreditLimit} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='financialPartner'>Financial Partner</Label>
          <Input type='text' Number='financialPartner' placeholder='Financial Partner' defaultValue={userData && userData.financialPartner} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
      <Fragment>
         <Label for='default-picker'>Approved Date</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Fragment>
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
      <Fragment>
         <Label for='default-picker'>Reject Date</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Fragment>
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='comment'>Comment</Label>
          <Input type='textarea' Number='comment' placeholder='Comment' defaultValue={userData && userData.comment} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
      <Fragment>
         <Label for='default-picker'>Valid Till</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Fragment>
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='guarantee'>Guarantee</Label>
          <Input type='text' Number='guarantee' placeholder='Guarantee' defaultValue={userData && userData.guarantee} />
        </FormGroup>
      </Col>
      <hr/>
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
export default BgaAction
