// ** React Imports
import { useState, useEffect } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
const corporateAddressAdd = () => {

  const [data, setData] = useState(null)
  const [corporate, setCorporate] = useState("")
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
  const optionVerifiedBy = [
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Tejas Thakare", label: "Tejas Thakare"},
    {value: "Komal Kamble", label: "Komal Kamble"}
  ]
  const optionCorporateId = [
    {value: "CP001", label: "CP001", name : "Coense"},
    {value: "CP002", label: "CP002", name : "Infosys"},
    {value: "CP003", label: "CP003", name : "TCS"},
    {value: "CP004", label: "CP004", name : "Accenture"},
    {value: "CP005", label: "CP005", name : "Cognizant"}
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
    CorporateId: [{value: "Select Corporate", label: "Select Corporate"}],
    Role: [{value: "role", label: "Intern"}]
  }
  const [values, setValues] = useState(initialvalues)
  const [AddressProof, setAddressProof] = useState(null)
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

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
  <CardTitle tag='h1'>Add Corporate Address</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
    <FormGroup>
              <Label for='CorporateId'>Corporate</Label>
            <div style={{zIndex:1000, position:'relative'}}>
            <Select
              id='CorporateId'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCorporateId}
              theme={selectThemeColors}
              value={values.CorporateId[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             CorporateId : data
                                          } 
                                  )
                                  setCorporate(data.name)
                                }
                        }
            />
            </div>
            </FormGroup> 
      </Col>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='corporateName'>Corporate Name</Label>
          <Input type='text' id='corporateName' placeholder='Corporate Name' defaultValue={corporate} disabled />
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
            <Input  id='address-2' name='address-2' />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='landmark'>Landmark</Label>
            <Input
              id='landmark'
              name='landmark'
              innerRef={register({ required: true })}
              invalid={errors.landmark && true}
            />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='City'>City</Label>
            <div style={{zIndex:1000, position:'relative'}}>
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
            </div>
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='State'>State</Label>
            <div style={{zIndex:1000, position:'relative'}}>
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
            </div>
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='Country'>Country</Label>
            <div style={{zIndex:1000, position:'relative'}}>
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
            </div>
            </FormGroup> 
        </Col>
        <Col  md='4' sm='12'>
        <FormGroup>
            <Label for='pinCode'>PinCode</Label>
            <Input
              id='pinCode'
              name='pinCode'
              innerRef={register({ required: true })}
              className={classnames({
                'is-invalid': errors.addressName1
              })}
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
              <Label for='VerifiedBy'>Verified By</Label>
            <div style={{zIndex:999, position:'relative'}}>
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
            </div>
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
export default corporateAddressAdd
