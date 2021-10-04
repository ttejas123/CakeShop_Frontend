// ** Custom Components
import Avatar from "@components/avatar"
import Select from "react-select"
// ** Third Party Components
import axios from "axios"
import {
  MoreVertical,
  User,
  Users,
  Edit,
  Calendar,
  FileText,
  Archive,
  Trash,
  MapPin,
  DollarSign,
  X
} from "react-feather"
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import { useState, useEffect } from "react"
import { selectThemeColors, isObjEmpty } from "@utils"
// ** Third Party Components
import Flatpickr from "react-flatpickr"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col
} from "reactstrap"
// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss"

const AddNewModal = (prop) => {
  console.log(prop)
  const [cat, setCat] = useState(prop.data[prop.data.findIndex((c) => c.id === prop.currentId)])
  console.log(cat)
  // ** Custom close btn
  const CloseBtn = <X className="cursor-pointer" size={15} onClick={prop.handleModal} />

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className="sidebar-sm"
      contentClassName="pt-0"
    >
      <ModalHeader className="mb-1" toggle={prop.handleModal} close={CloseBtn} tag="div">
        <h5 className="modal-title">View Category</h5>
      </ModalHeader>
      <ModalBody className="flex-grow-1">
        <Row>
          <Col xs="12">
            <div className="d-flex justify-content-left align-items-center">
              <div className="d-flex flex-column">
                <span className="font-weight-bold">
                  Category: <b>{prop.currentId.Cat}</b>
                </span>
              </div>
            </div>
            <hr />
            <div className="d-flex  justify-content-left align-items-center mb-2">
              Attributes :
              {prop.currentId &&
                prop.currentId.subAttributes.map((subAtt) => {
                  return (
                    <span className="font-small-2 " key={subAtt.key}>
                      <div>
                        <Badge className="text-capitalize ml-1 inline" color="primary" pill>
                          {subAtt.title}
                        </Badge>
                      </div>
                    </span>
                  )
                })}
            </div>
          </Col>
        </Row>

        <Button color="secondary" onClick={prop.handleModal} outline>
          Cancel
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
