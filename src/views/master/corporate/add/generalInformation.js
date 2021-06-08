// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2, User } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const GeneralInformation = () => {

  const [data, setData] = useState(null)

  const { control, setValue } = useForm({
    defaultValues: { isVerified : 'No'}
  })

  const optionCountry = [
    {value: "India", label: "India"},
    {value: "UK", label: "UK"},
    {value: "USA", label: "USA"},
    {value: "Australia", label: "Australia"},
    {value: "China", label: "China"},
    {value: "Russia", label: "Russia"}
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
  const optionCompanyType = [
    {value: "Pvt Limited", label: "Pvt Limited"},
    {value: "Public Company", label: "Public Company"},
    {value: "Associate Company", label: "Associate Company"}
  ]

  const optionIndustryType = [
    {value: "IT", label: "IT"},
    {value: "Food", label: "Food"},
    {value: "Footwear", label: "Footwear"},
    {value: "Clothing", label: "Clothing"}
  ]

  const initialvalues = {
    id:1,
    name: "",
    email: "",
    hasSubscription: "",
    adminInfo: "",
    isVerified: "",
    logo : "",
    phone : "",
    panNumber: "",
    CompanyType:  [{value: "Select Company Type", label: "Select Company Type"}],
    IndustryType:  [{value: "Select Industry Type", label: "Select Industry Type"}],
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

  return (
 
<Card>
<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='corporateName'>Corporate Name</Label>
          <Input type='text' id='corporateName' placeholder='TCS' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='CompanyType'>Company Type</Label>
              <div style={{zIndex:1000, position:'relative'}}>
            <Select
              id='CompanyType'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCompanyType}
              theme={selectThemeColors}
              value={values.CompanyType[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             CompanyType : data
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
              <Label for='IndustryType'>Industry Type</Label>
              <div style={{zIndex:1000, position:'relative'}}>
            <Select
              id='IndustryType'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionIndustryType}
              theme={selectThemeColors}
              value={values.IndustryType[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             IndustryType : data
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
          <Label for='email'>Email</Label>
          <Input type='text' id='email' placeholder='tcs@xyz.com' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='Country'>Country</Label>
              <div style={{zIndex:999, position:'relative'}}>
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
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='phone'>Phone</Label>
          <Input type='text' id='phone' placeholder='Phone' defaultValue={userData && userData.phone} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='State'>State</Label>
              <div style={{zIndex:998, position:'relative'}}>
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
              <Label for='City'>City</Label>
              <div style={{zIndex:997, position:'relative'}}>
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
            <label className='d-block mb-1'>Has Subscription</label>
            <FormGroup>
              <Controller
                name='hasSubscription'
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
                      invalid={data !== null && (data.hasSubscription === undefined || data.hasSubscription === null)}
                      onChange={() => setValue('hasSubscription', 'Yes')}
                    />
                  )
                }}
              />
              <Controller
                name='hasSubscription'
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
                      invalid={data !== null && (data.hasSubscription === undefined || data.hasSubscription === null)}
                      onChange={() => setValue(...'hasSubscription', 'No')}
                    />
                  )
                }}
              />
            </FormGroup>
          </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='verifiedBy'>Verified By</Label>
          <Input type='text' id='verifiedBy' placeholder='Pravin Poshmani' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='headOffice'>Head Office</Label>
          <Input type='text' id='headOffice' placeholder='Mumbai' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='gstNumber'>GST Number</Label>
          <Input type='text' id='gstNumber' placeholder='1234567' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='pancard'>pancard</Label>
          <Input type='text' id='pancard' placeholder='BG4567' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='description'>Description</Label>
          <Input type='textarea' id='description' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
  <Media className='mb-2'>
    {renderUserAvatar()}
    <Media className='mt-50' body>
      <h4> Logo </h4>
      <div className='d-flex flex-wrap mt-1 px-0'>
        <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
          <span className='d-none d-sm-block'>Change</span>
          <span className='d-block d-sm-none'>
            <Edit size={14} />
          </span>
          <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
        </Button.Ripple>
        <Button.Ripple color='secondary' outline>
          <span className='d-none d-sm-block'>Remove</span>
          <span className='d-block d-sm-none'>
            <Trash2 size={14} />
          </span>
        </Button.Ripple>
      </div>
    </Media>
  </Media>
</Col>
    
        <Col sm='12'>
          <h4 className='mb-1 mt-1'>
            <User size={20} className='mr-50' />
            <span className='align-middle'>Admin Information</span>
          </h4>
        </Col>
        <Col md='12' sm='12'>
        <Col md='4' sm='12'>
      <FormGroup>
            <label className='d-block mb-1'>Add</label>
            <FormGroup>
              <Controller
                name='adminInfo'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='Existing'
                      value='Yes'
                      id='Yes'
                      name={props.name}
                      invalid={data !== null && (data.adminInfo === undefined || data.adminInfo === null)}
                      onChange={() => setValue('adminInfo', 'Yes')}
                    />
                  )
                }}
              />
              <Controller
                name='adminInfo'
                control={control}
                render={props => {
                  return (
                    <CustomInput
                      inline
                      type='radio'
                      label='New'
                      value='No'
                      id='No'
                      name={props.name}
                      defaultChecked
                      invalid={data !== null && (data.adminInfo === undefined || data.adminInfo === null)}
                      onChange={() => setValue('adminInfo', 'No')}
                    />
                  )
                }}
              />
            </FormGroup>
          </FormGroup>
      </Col>
      </Col>
        <Col md='4' sm='12'>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type='text' id='name' placeholder='Pravin Poshmani' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='text' id='email' placeholder='tcs@xyz.com' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='phone'>Phone</Label>
          <Input type='text' id='phone' placeholder='9876765432' defaultValue={userData && userData.name} />
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
export default GeneralInformation
