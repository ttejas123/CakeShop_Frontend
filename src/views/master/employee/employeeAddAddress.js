import { Fragment, useEffect, useState } from "react"
import Loader from "../../ExCompUse/loader"
import { Col, Row, FormGroup, Label, Input, Button } from "reactstrap"
import Select from "react-select"
import { MapPin } from "react-feather"
import { useDispatch } from "react-redux"
import { findStates, findCountries, findCities } from "@store/actions/master/city/editAddCity"
import {
  removeEmployeeAddress,
  updateEmployeeAddress,
  addEmployeeAddress
} from "../../../redux/actions/master/employee"
import { useHistory } from "react-router"
const EmployeeAddAddress = ({
  address,
  index,
  setValues,
  isSubmittingAddress,
  employeeId,
  length
}) => {
  const [isChanged, setIsChanged] = useState(false)
  const [addressName, setAddressName] = useState(address.address_name)
  const [area, setArea] = useState(address.area)
  const [street, setStreet] = useState(address.street_name)
  const [postcode, setPostCode] = useState(address.pincode)
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [country, setCountry] = useState("")
  const usedispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    console.log(employeeId)
    if (!isSubmittingAddress || !employeeId) return
    usedispatch(addEmployeeAddress(addressName, area, street, postcode, city.id, employeeId))
    if (length === index + 1) history.push("/employee-list")
  }, [isSubmittingAddress, employeeId])
  useEffect(() => {
    usedispatch(findCountries()).then((action) => {
      setCountries(
        action.payload.countries.map((c) => {
          return { value: c.country_name, label: c.country_name }
        })
      )
    })
  }, [usedispatch])
  return (
    <Fragment>
      <Col md="12" sm="12">
        <Row>
          <Col sm="12">
            <h4 className="mb-1 mt-2">
              <MapPin size={20} className="mr-50" />
              <span className="align-middle">Address Line {index + 1}</span>
            </h4>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="address-1">Address Line {index + 1}</Label>
              <Input
                id="address-1"
                name="address1"
                placeholder="Address Line 1"
                value={addressName}
                onChange={(e) => {
                  setIsChanged(true)
                  setAddressName(e.target.value)
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="address-2">Area</Label>
              <Input
                placeholder="Area"
                id="address-2"
                name="address-2"
                value={area}
                onChange={(e) => {
                  setIsChanged(true)
                  setArea(e.target.value)
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="address-2">Street Name</Label>
              <Input
                placeholder="Address Line 2"
                id="address-2"
                name="address-2"
                value={street}
                onChange={(e) => {
                  setIsChanged(true)
                  setStreet(e.target.value)
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="postcode">Postcode</Label>
              <Input
                id="postcode"
                name="postcode"
                type="number"
                placeholder="PIN CODE"
                value={postcode}
                onChange={(e) => {
                  setIsChanged(true)
                  setPostCode(e.target.value)
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="Country">Country</Label>
              <Select
                id="Country"
                className="react-select"
                classNamePrefix="select"
                isClearable={false}
                options={countries}
                value={country}
                onChange={(data) => {
                  if (data.value === country.value) return
                  setCountry(data)
                  usedispatch(findStates(data.value)).then((action) => {
                    setStates(
                      action.payload.map((s) => {
                        return { value: s.name, label: s.name }
                      })
                    )
                    setState({ value: "select", label: "select" })
                    setCity({ value: "select", label: "select" })
                  })
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="State">State</Label>
              <Select
                id="State"
                className="react-select"
                classNamePrefix="select"
                isClearable={false}
                value={state}
                options={states}
                onChange={(data) => {
                  if (data.value === state.value) return
                  usedispatch(findCities(data.value)).then((action) => {
                    setCities(
                      action.payload.map((c) => {
                        return { value: c.name, label: c.name, id: c.id }
                      })
                    )
                    setState({ value: data.value, label: data.label })
                    setCity({ value: "select", label: "select" })
                  })
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12">
            <FormGroup>
              <Label for="City">City</Label>
              <Select
                id="City"
                className="react-select"
                classNamePrefix="select"
                isClearable={false}
                value={city}
                options={cities}
                onChange={(data) => {
                  setIsChanged(true)
                  setCity(data)
                }}
              />
            </FormGroup>
          </Col>
          <Col md="3" sm="12" className="mt-1">
            <Button.Ripple
              color="danger"
              className="align-middle"
              onClick={() => {
                setValues((state) => {
                  state.emplyee_addresses.splice(index, 1)
                  return { ...state }
                })
              }}
            >
              {address.isDeleting ? <Loader /> : "Remove Address"}
            </Button.Ripple>
          </Col>
        </Row>
      </Col>
    </Fragment>
  )
}
export default EmployeeAddAddress
