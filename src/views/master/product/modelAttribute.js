// ** Custom Components
import Avatar from '@components/avatar'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X  } from 'react-feather'

import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'

import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col  } from 'reactstrap'

const AddNewModal = (prop) => {
  //console.log(prop)
  const [values, setValues] = useState([])
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm'
     
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>View Attributes</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
        <Row>
          <Col xs='12'>
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                <span className='font-weight-bold'>Sku Title: <b>{prop.name ? prop.name : ""}</b></span>
                
              </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between mb-2'>
                <span className='font-small-2'>Attributes :
                    {
                    prop.data ? prop.data.map((val) => {
                      return (
                          <Badge className='text-capitalize ml-1' color='primary' pill>
                                   {val.name} -- {val.value}
                          </Badge>
                        )
                    }) : (<> Nah </>)
                    }  
                              
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
