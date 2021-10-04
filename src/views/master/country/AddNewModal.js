// ** Custom Components
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Avatar from "@components/avatar"
import Select from "react-select"
// ** Third Party Components
import Loader from "../../ExCompUse/loader"
import axios from "axios"
import { MoreVertical, Edit, FileText, Archive, Trash, MapPin, DollarSign, X } from "react-feather"
import { fetchCurrenciesForAddEdit } from "@store/actions/master/country/index"
import { editCountry, addCountry } from "../../../redux/actions/master/country"

// ** React Imports
import { useState, useEffect } from "react"

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
  FormFeedback
} from "reactstrap"

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss"
import { useDispatch, useSelector } from "react-redux"

const AddNewModal = (props) => {
  const usedispatch = useDispatch()
  // ** Custom close btn
  const loading = useSelector((state) => state.country.editAddCountryLoading)
  const CloseBtn = <X className="cursor-pointer" size={15} onClick={props.handleModal} />
  const [country_name, setCountryName] = useState(props.currentId !== "" ? props.data.name : "")
  const [initial, setInitial] = useState(props.currentId !== "" ? props.data.country_initial : "")
  const [country_code, setCountryCode] = useState(
    props.currentId !== "" ? props.data.country_code : ""
  )
  const [currency, setCurrency] = useState()
  const currencies = useSelector((state) => state.country.currencies)
  useEffect(() => {
    usedispatch(fetchCurrenciesForAddEdit())
  }, [])
  //for other input
  const handleInputeChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case "Name":
        setCountryName(value)
        break
      case "Initial":
        setInitial(value)
        break
      case "code":
        setCountryCode(value)
    }
  }
  //for drop down
  const handleChange = (selectedOption) => {
    setCurrency(selectedOption.label)
  }

  const submitHandle = (event) => {
    if (props.currentId !== "") {
      usedispatch(editCountry(props.data.id, country_name, initial, country_code, currency)).then(
        () => {
          props.handleModal()
        }
      )
    } else {
      usedispatch(addCountry(country_name, initial, country_code, currency)).then(() => {
        props.handleModal()
      })
    }
  }

  return (
    <Modal
      isOpen={props.open}
      toggle={props.handleModal}
      className="sidebar-sm"
      modalClassName="modal-slide-in"
      contentClassName="pt-0"
    >
      <ModalHeader className="mb-3" toggle={props.handleModal} close={CloseBtn} tag="div">
        <h5 className="modal-title">New Record</h5>
      </ModalHeader>
      <ModalBody className="flex-grow-1">
        <FormGroup>
          <Label for="Name">Name</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <MapPin size={15} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="Name"
              onChange={handleInputeChange}
              id="Name"
              placeholder="Afghanistan"
              value={country_name}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="Initial">Initial</Label>
          <InputGroup>
            <Input
              name="Initial"
              onChange={handleInputeChange}
              id="Initial"
              placeholder="eg. Afghanistan : AF"
              value={initial}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <Label for="code">Country code</Label>
          <InputGroup>
            <Input
              name="code"
              onChange={handleInputeChange}
              id="post"
              placeholder="eg. Afghanistan : 004"
              value={country_code}
            />
          </InputGroup>
        </FormGroup>

        <FormGroup className="mb-4">
          <Label for="Currency">Currency</Label>

          <Select
            className="mb-4"
            name="Currency"
            defaultValue={"select"}
            onChange={handleChange}
            options={currencies}
          />
        </FormGroup>

        <Button
          className="mr-1"
          color="primary"
          onClick={(e) => {
            e.preventDefault()
            submitHandle()
          }}
        >
          {loading ? <Loader color="light" /> : "Submit"}
        </Button>
        {!loading && (
          <Button color="secondary" onClick={props.handleModal} outline>
            Cancel
          </Button>
        )}
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal
