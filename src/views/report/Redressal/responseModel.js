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
import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col  } from 'reactstrap'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {
  const init = {
    id:0,
    adminRes:"",
    To:'',
    From:'',
    Order_Id:'',
    Issue_Type:[{value: "dd", label: ""}],
    Bid_Id:0,
    Message:'',
    Status:''
  }
  const [values, setValues] = useState('')
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  useEffect(() => {
    if (prop.currentId === "") {
        setValues("")
    } else {
        setValues({
          ...prop.data[prop.currentId - 1]
        })
    }
  }, [prop.currentId, prop.data])

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
//handle admin submit
  const submitHandle = (event) => {
    console.log(values)
    prop.responseADDEDIT(values)
    setValues(init)
  }
  
  const renderClient = row => {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      if (row.avatar) {
        return <Avatar className='mr-1' img={row.avatar} size='lg'  />
      } else {
        return <Avatar color={color || 'primary'} className='mr-1' size='lg' content={row.To || 'John Doe'} initials status="online" />
      }
  }
  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
     
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Redressal Response</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <Row>
          <Col xs='12'>
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(values)}
              <div className='d-flex flex-column'>
                <span className='font-weight-bold'>{values.To}</span>
                <small className='text-truncate text-muted mb-0'>@{values.To}</small>
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <span className='font-small-2'>To :</span>
                <h5 className='font-weight-bold'>{values.To}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>From : </div>
              <h5 className='mb-1'> {values.From}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Issue Type : </div>
              <h5 className='mb-1'> {values.Issue_Type ? (<div> {values.Issue_Type[0].label} </div>) : null }</h5> 
            </div>
            <div className="justify-content-between">
              <div className='font-small-2'>Message : </div><br />
              <h5 className='mb-1'> {values.Message}</h5>
            </div>
            <hr />
            <FormGroup>
              <Label for='Name'>Admin Response</Label>
              <InputGroup>
                <Input type='textarea' rows='3'  name="adminRes" onChange={handleInputeChange} id='Message' placeholder='Your Response ...' value={values.adminRes} />
              </InputGroup>
            </FormGroup>
            
          </Col>
        </Row>
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
