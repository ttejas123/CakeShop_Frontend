import Avatar from '@components/avatar'
import Select from 'react-select'
import { useForm } from 'react-hook-form'
import Repeater from '@components/repeater'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, Form, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row  } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
    const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }
  const { register, errors, handleSubmit } = useForm()
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
    Name: "",
    DeliveryDate: new Date(),
    BidCloseDate: new Date(),
    NoOfBidder: 0,
    BidApplicationDate: new Date(),
    created: new Date(),
    GoLive: new Date(),
    DeliveryLocation : "",
    ReqQuantity: 0,
    BuyerBudget: 0,
    CustomStatus: "",
    ReqCustomization: "",
    BidStatus: ""
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  useEffect(() => {
    if (prop.currentId === "") {
        setValues({...initialvalues})
    } else {
        setValues({
          ...prop.data[prop.currentId - 1]
        })
    }
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
  //for drop down
  const handleChange = (selectedOption) => {
    
    setValues(
      {
        ...values,
        Currency : selectedOption.value
      }
    )
  }

  const submitHandle = (event) => {
    console.log(values)
    prop.editAction(values)
    setValues(initialvalues)
  }

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
      modalClassName='modal-slide-in'
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-3' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Edit Record</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
       
        <FormGroup>
          <Label for='Name'>User Name</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="Name" disabled="disabled" onChange={handleInputeChange} id='Name' placeholder='Afghanistan' value={values.Name} />
          </InputGroup>
        </FormGroup>

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
              // tag={Flatpickr}
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
              }}
            />
          </InputGroup>
          </FormGroup>

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
          <FormGroup>
           <Col>
                      <Repeater count={count}>
                        {i => (
                          <Form key={i}>
                            <Row className='justify-content-between align-itemss-center'>
                              <Col md={6}>
                                <FormGroup>
                                  <Label for={`attribute-name-${i}`}>New Pin Code</Label>
                                  <Input type='text' id={`attribute-name-${i}`} placeholder='Pin Code' />
                                </FormGroup>
                              </Col>
                              
                              <Col md={4} className='d-flex my-auto'>
                                <Button.Ripple color='danger' className='text-nowrap px-1 mt-1' onClick={deleteForm} outline>
                                  <X size={14} />
                                  <span></span>
                                </Button.Ripple>
                              </Col>
                              {/* <Col sm={12}>
                                <hr />
                              </Col> */}
                            </Row>
                          </Form>
                        )}
                      </Repeater>
            </Col>
            <Col md={6}>
            <Button.Ripple className='d-flex btn-icon' color='primary' onClick={increaseCount}>
              <Plus size={14} />
              <span className='align-middle '>Add New</span>
            </Button.Ripple>
            </Col>
          </FormGroup>

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

          <FormGroup>
            <Label for='ReqCustomization'>Requested Customization</Label>
            <InputGroup>
              <Input type="text" name="ReqCustomization" onChange={handleInputeChange} id='ReqCustomization' placeholder='Company WaterMark' value={values.ReqCustomization} />
            </InputGroup>
          </FormGroup>

        <Button className='mr-1' color='primary' onClick={ e =>  {
                                                          prop.handleModal() 
                                                          submitHandle()
                                                        }
                                                      }>
          Submit
        </Button>
        <Button color='secondary' onClick={ prop.handleModal } outline>
          Cancel
        </Button>

      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
