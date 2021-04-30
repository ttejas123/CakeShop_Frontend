// ** Custom Components
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

  const Category = [
    {value: "", label: "Select Category"},
    {value: "Cate1", label: "Cate1"},
    {value: "Cat2", label: "Cat2"}
  ]
  const subCategory = [
    {value: "", label: "Select sub-Category"},
    {value: "subCat1", label: "subCat1"},
    {value: "subCat2", label: "subCat2"},
    {value: "subCat3", label: "subCat3"}
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
        deliveryDate :"",
        avatar:'',
        startTime : "",
        budget: 0,
        endTime: "",
        GoLive: "",
        BuyerBudget : 0,
        ReqQuantity : 0,
        customizations :"",
        Category: "",
        username:"",
        Name:"",
       subCategory: ""
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
       console.log(prop)
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
        <h5 className='modal-title'>ADD/Edit Record</h5>
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
            <Label for='Category'>Category</Label>
            <Select
              id='Category'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={Category}
              theme={selectThemeColors}
              value={values.Category[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             Category : data
                                          } 
                                  )
                                }
                        }
            />
        </FormGroup>

        <FormGroup>
            <Label for='subCategory'>sub Category</Label>
            <Select
              id='subCategory'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={subCategory}
              theme={selectThemeColors}
              value={values.subCategory[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             subCategory : data
                                          } 
                                  )
                                }
                        }
            />
        </FormGroup>

        <FormGroup>
          <Label for='budget'>Budget</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="budget" disabled="disabled" onChange={handleInputeChange} id='budget' placeholder='Afghanistan' value={values.budget} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='ReqQuantity'>ReqQuantity</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="ReqQuantity" disabled="disabled" onChange={handleInputeChange} id='ReqQuantity' placeholder='Afghanistan' value={values.ReqQuantity} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for='customizations'>customizations</Label>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <User size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input name="customizations" disabled="disabled" onChange={handleInputeChange} id='customizations' placeholder='Afghanistan' value={values.customizations} />
          </InputGroup>
        </FormGroup>

        <FormGroup>
            <Label for='startTime'>StartTime</Label>
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
              name='startTime'
              className='form-control'
              onChange={(date) => setValues(
                                          {
                                            ...values,
                                            startTime : date[0]
                                          }
                        )}
              value={values.startTime}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
            <Label for='endTime'>End Time</Label>
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
              name='endTime'
              className='form-control'
              onChange={(date) => setValues(
                                          {
                                            ...values,
                                            endTime : date[0]
                                          }
                        )}
              value={values.endTime}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
          </InputGroup>
          </FormGroup>

          <FormGroup>
            <Label for='deliveryDate'>Delivery Date</Label>
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
              name='deliveryDate'
              className='form-control'
              onChange={(date) => setValues(
                                          {
                                            ...values,
                                            deliveryDate : date[0]
                                          }
                        )}
              value={values.deliveryDate}
              options={{
                dateFormat: 'd-m-Y'
              }}
            />
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
