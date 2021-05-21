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
         id:4,
        Notification_To: "",
        notification_type: "",
        description: "",
        notification_for : "",
        Status: [{value: "s", label: "s"}],
        Notification_time: `${new Date().toGMTString()}`
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

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
     
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Review</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <Row>
          <Col xs='12'>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>ID : </div>
              <h5 className='mb-1'> {values.id}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Notification To : </div>
              <h5 className='mb-1'> {values.Notification_To}</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Notification Type : </div>
              <h5 className='mb-1'> {values.notification_type}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Description : </div>
              <h5 className='mb-1'> {values.description}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Notification For : </div>
              <h5 className='mb-1'> {values.notification_for}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Status : </div>
              <h5 className='mb-1'> { values.Status ? (<div>{values.Status[0].label}</div>) : (<div></div>)}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Notification Time : </div>
              <h5 className='mb-1'> {values.Notification_time}</h5>
            </div>
          </Col>
        </Row>
        <Button color='secondary' onClick={ prop.handleModal } outline>
          Cancel
        </Button>

      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
