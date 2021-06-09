// ** React Imports
import { useState, useEffect } from 'react'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
import Repeater from '@components/repeater'
import Select from 'react-select'
import Flatpickr from 'react-flatpickr'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin, Calendar } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const EditEmployee = () => {

  const [data, setData] = useState(null)
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isOnGround: 'No' }
  })

  const optionCountry1 = [
    {value: "India", label: "India"},
    {value: "UK", label: "UK"},
    {value: "USA", label: "USA"},
    {value: "Australia", label: "Australia"},
    {value: "China", label: "China"},
    {value: "Russia", label: "Russia"}
  ]

  const optionpaymentMode = [
    {value: "Credit Card", label: "Credit"},
    {value: "Debit Card", label: "Debit Card"}
  ]

  const optionCountry2 = [
    {value: "India", label: "India"},
    {value: "UK", label: "UK"},
    {value: "USA", label: "USA"},
    {value: "Australia", label: "Australia"},
    {value: "China", label: "China"},
    {value: "Russia", label: "Russia"}
  ]
  const optionsellerConfirmation1 = [
    {value: "Conform", label: "Conform"},
    {value: "Reject", label: "Reject"}
  ]
  const optionRole = [
    {value: "Admin", label: "Admin"},
    {value: "Intern", label: "Intern"},
    {value: "Full-time Employee", label: "Full-time Employee"}
  ]

  const optionState1 = [
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Andhra Pradesh", label: "Andhra Pradesh"},
    {value: "Kerala", label: "Kerala"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"},
    {value: "Gujarat", label: "Gujarat"}
  ]
  const optionState2 = [
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Andhra Pradesh", label: "Andhra Pradesh"},
    {value: "Kerala", label: "Kerala"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"},
    {value: "Gujarat", label: "Gujarat"}
  ]
  const optionCity1 = [
    {value: "Pune", label: "Pune"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Nagpur", label: "Nagpur"},
    {value: "Nashik", label: "Nashik"},
    {value: "Solapur", label: "Solapur"}
  ]
  const optionCity2 = [
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
    isOnGround: "",
    isActive: "",
    logo : "",
    phone : "",
    panNumber: "",
    Currency:  "",
    City:  "", 
    State: "",
    Country: "",
    Role: ""
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
  // useEffect(() => {
    // if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
    //   setUserData(selectedUser)
    //   if (selectedUser.avatar.length) {
    //     return setImg(selectedUser.avatar)
    //   } else {
    //     return setImg(null)
    //   }
    // }
  // })

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
  <CardTitle tag='h1'>Add Orders</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='orderNumber'>Order Number</Label>
          <Input type='text' Number='orderNumber' placeholder='Employee Number' defaultValue={userData && userData.orderNumber} />
        </FormGroup>
      </Col>
    <Col md='6' sm='12'>
        <FormGroup>
          <Label for='orderType'>Order Type</Label>
          <Input type='text' id='orderType' placeholder='First Name' defaultValue={userData && userData.orderType} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='userId'>User Id</Label>
          <Input type='text' id='userId' placeholder='Last Name' defaultValue={userData && userData.userId} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='bidId'>Bid Id</Label>
          <Input type='bidId' id='bidId' placeholder='bidId' defaultValue={userData && userData.bidId} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='sellerId'>Seller Id</Label>
          <Input type='text' id='sellerId' placeholder='sellerId' defaultValue={userData && userData.sellerId} />
        </FormGroup>
      </Col>
     
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='firstName'>First Name</Label>
          <Input type='text' id='firstName' placeholder='firstName' defaultValue={userData && userData.firstName} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='lastName'>Last Name</Label>
          <Input type='text' id='lastName' placeholder='lastName' defaultValue={userData && userData.lastName} />
        </FormGroup>
      </Col>
      
      <Col md='12' sm='12'>
            <Row>
              <Col sm='12'>
                <h4 className='mb-1 mt-2'>
                  <MapPin size={20} className='mr-50' />
                  <span className='align-middle'>Sellers Address</span>
                </h4>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='address-1'>First Seller Address</Label>
                  <Input
                    id='address-1'
                    name='address1'
                    type="textarea"
                    placeholder='A-45, Belvedere Streets'
                    innerRef={register({ required: true })}
                    className={classnames({
                      'is-invalid': errors.address1
                    })}
                  />
                </FormGroup>
              </Col>

              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='address-2'>Land Mark</Label>
                  <Input placeholder='Belvedere Streets' id='address-2' name='address-2' />
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
                     options={optionCity2}
                     theme={selectThemeColors}
                     value={values.City}
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
                    options={optionState2}
                    theme={selectThemeColors}
                    value={values.State}
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
                     options={optionCountry2}
                     theme={selectThemeColors}
                     value={values.Country}
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
            </Row> 
      </Col> 
      <Col md='12' sm='12'>
          <Row>
              <Col sm='12'>
                <h4 className='mb-1 mt-2'>
                  <MapPin size={20} className='mr-50' />
                  <span className='align-middle'>Buyers Address</span>
                </h4>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='address-1'>First Buyers Address</Label>
                  <Input
                    id='address-1'
                    name='address1'
                    type="textarea"
                   
                  />
                </FormGroup>
              </Col>

              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='address-2'>Land Mark</Label>
                  <Input placeholder='A-45, Belvedere Streets' id='address-2' name='address-2' />
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
                     options={optionCity1}
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
                     options={optionState1}
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
                     options={optionCountry1}
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
            </Row> 
      </Col> 

      <Col md='6' sm='12'>
               <FormGroup>
                  <Label for='paymentMode'>Payment Mode</Label>
                   <Select
                     id='paymentMode'
                     className='react-select'
                     classNamePrefix='select'
                     isClearable={false}
                     options={optionpaymentMode}
                     theme={selectThemeColors}
                     value={values.paymentMode}
                     onChange={data => {
       
       
                                        setValues(
                                                 {
                                                    ...values,
                                                    paymentMode : data
                                                 } 
                                         )
                                       }
                               }
                   />
                   </FormGroup> 
      </Col>

      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='balanceAmount'>Balance Amount</Label>
          <Input type='text' id='balanceAmount' placeholder='balanceAmount' defaultValue={userData && userData.balanceAmount} />
        </FormGroup>
      </Col>

      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='amountPaid'>Amount Paid</Label>
          <Input type='text' id='amountPaid' placeholder='amountPaid' defaultValue={userData && userData.amountPaid} />
        </FormGroup>
      </Col>

       <Col md='6' sm='12'>
              <FormGroup>
                <Label for='deliveryBefore'>Delivery Before</Label>
               <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Calendar size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Flatpickr
                  id='deliveryBefore'
                  tag={Flatpickr}
                  name='deliveryBefore '
                  className='form-control'
                  onChange={(date) => setValues(
                                            {
                                                 ...values,
                                                deliveryBefore  : date[0]
                                            }
                                       )}
                  value={values.deliveryBefore }
                  options={{
                    dateFormat: 'd-m-Y'
                  }}
                />
              </InputGroup>
          </FormGroup>
            </Col>

       <Col md='6' sm='12'>
               <FormGroup>
                  <Label for='sellerConfirmation'>Seller Conformation</Label>
                   <Select
                     id='sellerConfirmation'
                     className='react-select'
                     classNamePrefix='select'
                     isClearable={false}
                     options={optionsellerConfirmation1}
                     theme={selectThemeColors}
                     value={values.sellerConfirmation}
                     onChange={data => {
       
       
                                        setValues(
                                                 {
                                                    ...values,
                                                    sellerConfirmation : data
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


{ /* <Col md='4' sm='12'>
                 <FormGroup>
                   <Label for='postcode'>Postcode</Label>
                   <Input
                     id='postcode'
                     name='postcode'
                     placeholder='597424'
                     innerRef={register({ required: true })}
                     invalid={errors.postcode && true}
                   />
                 </FormGroup>
               </Col>
               <Col md='4' sm='12'>
               <FormGroup>
                  <Label for='sellerConfirmation'>sellerConfirmation</Label>
                   <Select
                     id='sellerConfirmation'
                     className='react-select'
                     classNamePrefix='select'
                     isClearable={false}
                     options={optionsellerConfirmation1}
                     theme={selectThemeColors}
                     value={values.sellerConfirmation[0]}
                     onChange={data => {
       
       
                                        setValues(
                                                 {
                                                    ...values,
                                                    sellerConfirmation : data
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
             </Row> */ }