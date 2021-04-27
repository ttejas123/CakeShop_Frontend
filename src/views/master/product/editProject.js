// ** React Imports

// ** Custom Components

import Avatar from '@components/avatar'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Lock, Trash2   } from 'react-feather'
import Flatpickr from 'react-flatpickr'

import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'

import {  Media, Row, Col, Button, Form, Table, CustomInput,  Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap'
import Select from 'react-select'

import komal  from '../../../assets/images/logo/komal.jpg'

const UserAccountTab = ({ selectedUser }, prop) => {
    const optionDLocation = [
    {value: "Multiple", label: "Multiple"},
    {value: "Single", label: "Single"}
  ]
  const optionCustomStatus = [
    {value: "pending", label: "pending"},
    {value: "approval", label: "approval"},
    {value: "approved", label: "approved"}
  ]
  
  const optionBidStatus = [
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"},
    {value: "auto closed", label: "auto closed"}
  ]

  const initialvalues = {
    productName: "",
    ean_upc_code: "",
    category: "",
    subCategory: "",
    productCategory: "",
    hsnCode: "",
    gstNumber: "",
    mrp : "",
    description: "",
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  useEffect(() => {
    // if (prop.currentId === "") {
    //     setValues({...initialvalues})
    // } else {
    //     setValues({
    //       ...prop.data[prop.currentId - 1]
    //     })
    // }
  }, [prop.currentId, prop.data])
  //for other input
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
    setImg(komal)
  }, [komal])

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
          content="Pravin"
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
    <Row>
      <Col sm='12'>
        <Media className='mb-2'>
          {renderUserAvatar()}
          <Media className='mt-50' body>
            <h4>Komal</h4>
            
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

      <Col sm='16'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Name'>User Name</Label>
              <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <User size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input name="Name" disabled="disabled" onChange={handleInputeChange} id='Name' placeholder='Ravi' value={values.Name} />
              </InputGroup>
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
               <Label for='created'>Bid Created Date</Label>
               <InputGroup>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Calendar size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Flatpickr
                disabled="disabled"
                required
                id='endDate'
                name='created'
                className='form-control'
                onChange={(date) => setValues(
                                            {
                                              ...values,
                                              created : date[0]
                                            }
                          )}
                value={values.created}
                options={{
                  dateFormat: 'd-m-Y'
                }}/>
                </InputGroup>
                </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
               <Label for='BidApplicationDate'>Bid Application Date</Label>
           <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Calendar size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Flatpickr
              disabled="disabled"
              required
              id='endDate'
              // tag={Flatpickr}
              name='BidApplicationDate'
              className='form-control'
              onChange={(date) => setValues(
                                          {
                                            ...values,
                                            BidApplicationDate : date[0]
                                          }
                        )}
              value={values.BidApplicationDate}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
          </InputGroup>
          </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='GoLive'>Go Live Date</Label>
           <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Calendar size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Flatpickr
              required
              id='endDate'
              // tag={Flatpickr}
              name='GoLive'
              className='form-control'
              onChange={(date) => setValues(
                                        {
                                             ...values,
                                            GoLive : date[0]
                                        }
                                   )}
              value={values.GoLive}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
          </InputGroup>
          </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='DeliveryLocation'>Delivery Location</Label>
              <Select
                id='DeliveryLocation'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionDLocation}
                theme={selectThemeColors}
                value={values.DeliveryLocation[0]}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               DeliveryLocation : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
                 <Label for='DeliveryDate'>Delivery Date</Label>
            <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Calendar size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Flatpickr
              required
              id='endDate'
              // tag={Flatpickr}
              name='DeliveryDate'
              className='form-control'
              onChange={(date) => setValues(
                                                                {
                                                                  ...values,
                                                                  DeliveryDate : date[0]
                                                                }
                                                        )}
              value={values.DeliveryDate}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
          </InputGroup>
          </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='BidCloseDate'>Bid Close Date</Label>
            <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <Calendar size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Flatpickr
              disabled="disabled"
              required
              id='endDate'
              // tag={Flatpickr}
              name='BidCloseDate'
              className='form-control'
              onChange={(date) => setValues(
                                                                {
                                                                  ...values,
                                                                  BidCloseDate : date[0]
                                                                }
                                                        )}
              value={values.BidCloseDate}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
          </InputGroup>
          </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='Bidder'>Number Of Bidders</Label>
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Users size={15} />
                </InputGroupText>
              </InputGroupAddon>
              <Input type="number" disabled="disabled" name="NoOfBidder" onChange={handleInputeChange} id='NoOfBidder' placeholder='200' value={values.NoOfBidder} />
            </InputGroup>
            </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='BuyerBudget'>Buyer Budgets</Label>
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Users size={15} />
                </InputGroupText>
              </InputGroupAddon>
              <Input type="number" disabled="disabled" name="BuyerBudget" onChange={handleInputeChange} id='BuyerBudget' placeholder='200' value={values.BuyerBudget} />
            </InputGroup>
            </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='ReqQuantity'>Required Quantity</Label>
            <InputGroup>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Users size={15} />
                </InputGroupText>
              </InputGroupAddon>
              <Input type="number" name="ReqQuantity" onChange={handleInputeChange} id='ReqQuantity' placeholder='200' value={values.ReqQuantity} />
            </InputGroup>
            </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
              <Label for='BidStatus'>Bid Status</Label>
            <Select
              id='BidStatus'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionBidStatus}
              theme={selectThemeColors}
              value={values.BidStatus[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             BidStatus : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup>  
            </Col>

            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='CustomStatus'>Customization Status</Label>
            <Select
              id='CustomStatus'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCustomStatus}
              theme={selectThemeColors}
              value={values.CustomStatus[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             CustomStatus : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup>  
            </Col>


            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='ReqCustomization'>Requested Customization</Label>
                <InputGroup>
                  <Input type="text" name="ReqCustomization" onChange={handleInputeChange} id='ReqCustomization' placeholder='Company WaterMark' value={values.ReqCustomization} />
                </InputGroup>
              </FormGroup>  
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' onClick={ e =>  {
                                                          
                                                          submitHandle()
                                                        }
                                                      }>
                                    Submit
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={() => setValues(initialvalues) } outline>
                        Cancel
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>   
  )
}
export default UserAccountTab
