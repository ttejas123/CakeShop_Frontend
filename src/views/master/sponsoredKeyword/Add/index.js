// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import Flatpickr from 'react-flatpickr'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddSponsoredKeywords = () => {
  const [picker, setPicker] = useState(new Date())

  const [data, setData] = useState(null)
  const { control, setValue } = useForm({
    defaultValues: { hasSubscription: 'No' }
  })

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
  const optionCurrency = [
    {value: "TCS", label: "TCS"},
    {value: "Nike Solutions", label: "Nike Solutions"},
    {value: "Coense Solutions", label: "Coense Solutions"},
    {value: "Sanoffi", label: "Sanoffi"}
    ]
    const optionProduct = [
      {value: "TCSa", label: "Boxset of 10 Board Books for Kids"},
      {value: "Nike Solutions", label: "Cotton Face Mask"},
      {value: "Coense Solutions", label: "Kenstar Cool Grande 60 Litres Desert Air Cooler"},
      {value: "Sanoffi", label: "Sanoffi"}
      ]


  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>Add / Edit Sponsored Keywords</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='name'>Keyword</Label>
          {/* <Input type='text' id='Keyword' placeholder='Keyword' defaultValue={userData && userData.name} /> */}
          <Input type='text' id='Keyword' placeholder='Keyword'  />

        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='amount'>Amount Paid</Label>
          {/* <Input type='text' id='Keyword' placeholder='Keyword' defaultValue={userData && userData.name} /> */}
          <Input type='text' id='amount' placeholder='Amount'  />

        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='Currency'>Corporate</Label>
              <div style={{zIndex:997, position:'relative'}}>
            <Select
              id='Corporate'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCurrency}
              theme={selectThemeColors}
              // value={values.Currency[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             Currency : data
                                          } 
                                  )
                                }
                        }
            />
            </div>
            </FormGroup> 
      </Col> 
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='Product'>Product</Label>
              <div style={{zIndex:997, position:'relative'}}>
            <Select
              id='Product'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionProduct}
              theme={selectThemeColors}
              // value={values.Currency[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             Product : data
                                          } 
                                  )
                                }
                        }
            />
            </div>
            </FormGroup> 
      </Col>      
                

                <Col md='6' sm='12'>
                  <Label for='start_date' className=''>Start Date</Label>
                  <Flatpickr
                    value={picker}
                    data-enable-time
                    id='date-time-picker'
                    className='form-control'
                    onChange={date => setPicker(date)}
                  />
                </Col>
                <Col md='6' sm='12'>
                  <Label for='end_date' className=''>End Date</Label>
                  <Flatpickr
                    value={picker}
                    data-enable-time
                    id='date-time-picker'
                    className='form-control'
                    onChange={date => setPicker(date)}
                  />
                </Col>
                <Col md='6' sm='12'>
                  <Label for='name' className=''>Status</Label>
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
export default AddSponsoredKeywords
