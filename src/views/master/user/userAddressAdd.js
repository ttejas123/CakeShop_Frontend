// ** React Imports
import { useState, useEffect } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const EditEmployee = () => {

  const [data, setData] = useState(null)
  const [user, setUser] = useState("")
  const [AddressProof, setAddressProof] = useState(null)

  const uppy1 = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

uppy1.use(thumbnailGenerator)

uppy1.on('thumbnail:generated', (file, preview) => {
console.log(file)
setAddressProof(preview)
})


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

  const optionUserId = [
    {value: "ID001", label: "ID001", name : "Pravin Poshmani"},
    {value: "ID002", label: "ID002", name : "Tejas Thakare"},
    {value: "ID003", label: "ID003", name : "Komal Kamble"},
    {value: "ID004", label: "ID004", name : "Salman Roshan"},
    {value: "ID005", label: "ID005", name : "Hrithik Khan"},
    {value: "ID006", label: "ID006", name : "The Ruler"}
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
  const optionVerifiedBy = [
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
    VerifiedBy:  [{value: "Pravin Poshmani", label: "Pravin Poshmani"}],
    City:  [{value: "city", label: "Mumbai"}], 
    State:  [{value: "state", label: "Maharashtra"}],
    Country: [{value: "country", label: "India"}],
    UserId: [{value: "Select User Id", label: "Select User Id"}],
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
  <CardTitle tag='h1'>Add User Address</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
    <FormGroup>
              <Label for='userId'>User Id</Label>
            <Select
              id='userId'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionUserId}
              theme={selectThemeColors}
              value={values.UserId[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             UserId : data
                                          } 
                                  )
                                  setUser(data.name)
                                }
                        }
            />
            </FormGroup> 
      </Col>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='userName'>User Name</Label>
          <Input type='text' id='userName' placeholder='User Name' defaultValue={user}  disabled/>
        </FormGroup>
      </Col>
      <hr/>
      <Col md='12' sm='12'>
      <Row>
        <Col sm='12'>
          <h4 className='mb-1 mt-2'>
            <MapPin size={20} className='mr-50' />
            <span className='align-middle'>Address</span>
          </h4>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='addressName-1'>Address Name</Label>
            <Input
              id='addressName-1'
              name='addressName-1'
              placeholder='Home'
              innerRef={register({ required: true })}
              className={classnames({
                'is-invalid': errors.addressName1
              })}
            />
          </FormGroup>
          </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='address-1'>Address Line 1</Label>
            <Input
              id='address-1'
              name='address1'
              placeholder='A-1'
              innerRef={register({ required: true })}
              className={classnames({
                'is-invalid': errors.address1
              })}
            />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='address-2'>Address Line 2</Label>
            <Input placeholder='A-1' id='address-2' name='A-2' />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='landmark'>Landmark</Label>
            <Input
              id='landmark'
              name='landmark'
              placeholder='Temple'
              innerRef={register({ required: true })}
              invalid={errors.landmark && true}
            />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='City'>City</Label>
            <Select
              id='City'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCity}
              theme={selectThemeColors}
              value={values.City[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             City : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='State'>State</Label>
            <Select
              id='State'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionState}
              theme={selectThemeColors}
              value={values.State[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             State : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='Country'>Country</Label>
            <Select
              id='Country'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCountry}
              theme={selectThemeColors}
              value={values.Country[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             Country : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='pincode'>Pincode</Label>
            <Input
              id='pincode'
              name='pincode'
              placeholder='123456'
             
            />
          </FormGroup>
        </Col>
        <Col md='12' sm='12'>
        <FormGroup >
                    <Card >
                      <CardHeader >
                        <CardTitle >Address Proof</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DragDrop uppy={uppy1}  />
                        { AddressProof !== null ? <img className='rounded mt-2 ml-1' src={AddressProof} alt='avatar' /> : null}
                      </CardBody>
                    </Card>
                </FormGroup>
          </Col>
      </Row>
      </Col> 
      <hr/>
      <Col md='6' sm='12'>
      <FormGroup>
      <label className='d-block mb-1'>Is Registered Office</label>
            <FormGroup>
              <Controller
                name='isRegisteredOffice'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Yes'
                      value='Yes'
                      id='Yes'
                      name={props.name}
                      invalid={data !== null && (data.isRegisteredOffice === undefined || data.isRegisteredOffice === null)}
                      onChange={() => setValue('isRegisteredOffice', 'Yes')}
                    />
                  )
                }}
              />
              <Controller
                name='isRegisteredOffice'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='No'
                      value='No'
                      id='No'
                      name={props.name}
                      defaultChecked
                      invalid={data !== null && (data.isRegisteredOffice === undefined || data.isRegisteredOffice === null)}
                      onChange={() => setValue('isRegisteredOffice', 'No')}
                    />
                  )
                }}
              />
            </FormGroup>
          </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
            <label className='d-block mb-1'>Is Verified</label>
            <FormGroup>
              <Controller
                name='isVerified'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Yes'
                      value='Yes'
                      id='Yes'
                      name={props.name}
                      invalid={data !== null && (data.isVerified === undefined || data.isVerified === null)}
                      onChange={() => setValue('isVerified', 'Yes')}
                    />
                  )
                }}
              />
              <Controller
                name='isVerified'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='No'
                      value='No'
                      id='No'
                      name={props.name}
                      defaultChecked
                      invalid={data !== null && (data.isVerified === undefined || data.isVerified === null)}
                      onChange={() => setValue('isVerified', 'No')}
                    />
                  )
                }}
              />
            </FormGroup>
          </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
              <Label for='VerifiedBy'>Verified By</Label>
            <Select
              id='VerifiedBy'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionVerifiedBy}
              theme={selectThemeColors}
              value={values.VerifiedBy[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             VerifiedBy : data
                                          } 
                                  )
                                }
                        }
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
export default EditEmployee
