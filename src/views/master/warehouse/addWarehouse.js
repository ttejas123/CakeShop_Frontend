// ** React Imports
import { useState, useEffect } from 'react'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { CreateWarehouse } from '@store/actions/master/warehouse'
import { SelectedCityList } from '@store/actions/master/city'
import { dropdcountryList } from '@store/actions/master/country'
import { SelectedStateList } from '@store/actions/master/state'

const EditEmployee = () => {

  const [data, setData] = useState(null)
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isOnGround: 'No' }
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
  const optionCurrency = [
    {value: "Indian Rupee", label: "Indian Rupee"},
    {value: "Us Dollar", label: "Us Dollar"},
    {value: "Euro", label: "Euro"},
    {value: "Armerian Dram", label: "Armerian Dram"},
    {value: "Canadian Dollar", label: "Canadian Dollar"}
  ]
  const initialvalues = {is_bidoya_wareHouse: false}
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

  const useDisplatch = useDispatch()
  useEffect(() => {
    //useDisplatch(SelectedStateList("India"))
    //useDisplatch(SelectedCityList("Maharastra"))
    useDisplatch(dropdcountryList())
  }, [useDisplatch])
  const countryDropdown = useSelector(state => {
    //console.log(state.warehouse)
    return state.country
  })

  const stateDropdown = useSelector(state => {
    //console.log(state.warehouse)
    return state.states
  })

  const cityDropdown = useSelector(state => {
    //console.log(state.warehouse)
    return state.city
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
  <CardTitle tag='h1'>Add Warehouse</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='warehouseName'>Name</Label>
          <Input type='text' id='warehouseName' placeholder='Name' name='warehouse' onChange={handleInputeChange} defaultValue={userData && userData.warehouseName} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <FormGroup className='mx-auto mt-1 pt-1 d-block'>
              <CustomInput
                className='mx-auto'
                inline
                type='checkbox'
                name='terms'
                onClick={(e) => setValues({...values, is_bidoya_wareHouse: e.target.checked})}
                id='emailTerms'
                value='Is Bidoyas Warehouse'
                label='Is Bidoyas Warehouse'
              />
               </FormGroup>
        </FormGroup>
      </Col>
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
            <Label for='address-1'>Address Line 1</Label>
            <Input
              id='address-1'
              name='address1' onChange={handleInputeChange}
              placeholder='street 1'
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
            <Input placeholder='street 1' id='address-2' name='address-2' />
          </FormGroup>
        </Col>
        <Col md='4' sm='12'>
          <FormGroup>
            <Label for='pincode'>PinCode</Label>
            <Input
              id='pincode'
              name='pincode' onChange={handleInputeChange}
              placeholder='597424'
              innerRef={register({ required: true })}
              invalid={errors.pincode && true}
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
              options={countryDropdown.data}
              theme={selectThemeColors}
              
              onChange={data => {
                                 useDisplatch(SelectedStateList(data.label))
                                }
                        }
            />
            </FormGroup> 
        </Col>
        <Col md='4' sm='12'>
                      <FormGroup>
                        <Label >State</Label>
                        <Select
                              isClearable={false}
                              theme={selectThemeColors}
                              className='react-select'
                              classNamePrefix='select'
                              options={stateDropdown.data}
                              
                              onChange={data => {
                                useDisplatch(SelectedCityList(data.label))
                               }
                              }
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
              options={cityDropdown.data}
              theme={selectThemeColors}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             City : data.id
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
        </Col>
      </Row>
      </Col> 
      
      <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
        <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary' onClick={() => useDisplatch(CreateWarehouse(values))}>
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
