// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const EditCorporate = () => {

  const [data, setData] = useState(null)
  const { control, setValue } = useForm({
    defaultValues: { hasSubscription: 'No' }
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
    hasSubscription: "",
    isVerified: "",
    logo : "",
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

  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>Edit Corporate</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='CorporateId'>Corporate Id</Label>
          <Input type='text' id='CorporateId' placeholder='Corporate Id' defaultValue={userData && userData.CorporateId} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type='text' id='name' placeholder='Name' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
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
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='phone'>Phone</Label>
          <Input type='text' id='phone' placeholder='Phone' defaultValue={userData && userData.phone} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='State'>State</Label>
              <div style={{zIndex:999, position:'relative'}}>
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
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='City'>City</Label>
              <div style={{zIndex:998, position:'relative'}}>
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
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='Currency'>Currency</Label>
              <div style={{zIndex:997, position:'relative'}}>
            <Select
              id='Currency'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCurrency}
              theme={selectThemeColors}
              value={values.Currency[0]}
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
                      onChange={() => setValue('hasSubscription', 'No')}
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
    
      {/* <Col sm='12'>
        <div className='permissions border mt-1'>
          <h6 className='py-1 mx-1 mb-0 font-medium-2'>
            <Lock size={18} className='mr-25' />
            <span className='align-middle'>Permissions</span>
          </h6>
          <Table borderless striped responsive>
            <thead className='thead-light'>
              <tr>
                <th>Module</th>
                <th>Read</th>
                <th>Write</th>
                <th>Create</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>
                  <CustomInput type='checkbox' id='admin-1' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='admin-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='admin-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='admin-4' label='' />
                </td>
              </tr>
              <tr>
                <td>Staff</td>
                <td>
                  <CustomInput type='checkbox' id='staff-1' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='staff-2' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='staff-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='staff-4' label='' />
                </td>
              </tr>
              <tr>
                <td>Author</td>
                <td>
                  <CustomInput type='checkbox' id='author-1' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='author-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='author-3' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='author-4' label='' />
                </td>
              </tr>
              <tr>
                <td>Contributor</td>
                <td>
                  <CustomInput type='checkbox' id='contributor-1' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='contributor-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='contributor-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='contributor-4' label='' />
                </td>
              </tr>
              <tr>
                <td>User</td>
                <td>
                  <CustomInput type='checkbox' id='user-1' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='user-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='user-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='user-4' label='' defaultChecked />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Col> */}
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
