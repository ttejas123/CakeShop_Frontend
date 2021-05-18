// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Star  } from 'react-feather'
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
    GivenBy: "",
    Name: "",
    avatar: "",
    customizations: "",
    id: 0,
    rating: 0,
    review: "",
    reviewDate: "",
    username: ""
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
  
  const renderClient = row => {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
        console.log(row)
      if (row.avatar) {
        return <Avatar className='mr-1' img={row.avatar} size='lg'  />
      } else {
        return <Avatar color={color || 'primary'} className='mr-1' size='lg' content={row.Name || 'John Doe'} initials status="online" />
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
        <h5 className='modal-title'>Review</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <Row>
          <Col xs='12'>
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(values)}
              <div className='d-flex flex-column'>
                <span className='font-weight-bold'>{values.Name}</span>
                <small className='text-truncate text-muted mb-0'>@{values.username}</small>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>User Name : </div>
              <h5 className='mb-1'> {values.Name}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Given By : </div>
              <h5 className='mb-1'> {values.GivenBy}</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Rating : </div>
              <Rating
                    className="mb-1"
                    emptySymbol={<Star size={15} fill='#babfc7' stroke='#babfc7' />}
                    fullSymbol={<Star size={15} fill='#ff9933' stroke='#ff8000' />}
                    initialRating={values.rating}
                    readonly
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Review Date : </div>
              <h5 className='mb-1'> {values.reviewDate}</h5>
            </div>
            <div className=" justify-content-between">
              <div className='font-small-2'>Review :  </div>
               <br />
              <h5 className='mb-1'> {values.review}</h5>
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
