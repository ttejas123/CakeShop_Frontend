// Redressal Add/Edit
// ID
// To
// From
// Order Id
// Issue Type
// Bid Id
// Message
// Status

// //Invoice
// order_id
// invoice_number
// order_amount
// order_number
//invoice_time
import Avatar from '@components/avatar'
import Select from 'react-select'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X  } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
  const optionStatus = [
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"}
  ]

  const optionIssue_Type = [
    {value: "BidCreated", label: "BidCreated"},
    {value: "BidUpdate", label: "BidUpdate"},
    {value: "Transcation", label: "Transcation"}
  ]

  const initialvalues = {
    id:0,
    To:'',
    From:'',
    Order_Id:'',
    Issue_Type:'',
    Bid_Id:"",
    Message:'',
    Status:''
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
          <Label for='Name'>To</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="To" disabled="disabled" onChange={handleInputeChange} id='To' placeholder='Tejas' value={values.To} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Name'>From</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="From" disabled="disabled" onChange={handleInputeChange} id='From' placeholder='Mehul' value={values.From} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Name'>Order Id</Label>
          <InputGroup>
            
            <Input name="Order_Id" disabled="disabled" onChange={handleInputeChange} id='Order_Id' placeholder='1232**' value={values.Order_Id} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
            <Label for='Issue_Type'>Issue_Type</Label>
            <Select
              id='Issue_Type'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionIssue_Type}
              theme={selectThemeColors}
              value={values.Issue_Type[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             Issue_Type : data
                                          } 
                                  )
                                }
                        }
            />
          </FormGroup>

        <FormGroup>
          <Label for='Name'>Bid Id</Label>
          <InputGroup>
           
            <Input name="Bid_Id" disabled="disabled" onChange={handleInputeChange} id='Bid_Id' placeholder='Afghanistan' value={values.Bid_Id} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='Name'>Message</Label>
          <InputGroup>
            <Input type='textarea' rows='3'  name="Message" disabled="disabled" onChange={handleInputeChange} id='Message' placeholder='Afghanistan' value={values.Message} />
          </InputGroup>
        </FormGroup>

          <FormGroup>
            <Label for='Status'>Status</Label>
            <Select
              id='Status'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionStatus}
              theme={selectThemeColors}
              value={values.Status[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             Status : data
                                          } 
                                  )
                                }
                        }
            />
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
