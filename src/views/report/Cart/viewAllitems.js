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
    id:2,
    Attribute: "",
    subAttributes: ""
        
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
        <h5 className='modal-title'>View Items In Cart</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <Row>
          <Col xs='12'>
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                <span className='font-weight-bold'>Items In Cart: <b>{values.Attribute}</b></span>
                
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between mb-2'>
                <span className='font-small-2'>Items :
                      {prop.data[prop.currentId - 1] ? (
                        <div className="mt-1">
                          {prop.data[prop.currentId - 1].bids.map((val) => {
                             return (
                                <Badge className='text-capitalize ml-1' color='primary' pill>
                                    {val.value}
                                </Badge>
                              )
                          })}
                        </div>
                        ) : null}
                          
                </span>
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
