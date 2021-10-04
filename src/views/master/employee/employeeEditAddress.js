import { Fragment, useEffect, useState } from "react"
import Loader from "../../ExCompUse/loader"
import { Col, Row, FormGroup, Label, Input, Button } from "reactstrap"
import Select from "react-select"
import { MapPin } from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import { findStates, findCountries, findCities } from "@store/actions/master/city/editAddCity"
import {
  removeEmployeeAddress,
  updateEmployeeAddress,
  addEmployeeAddress
} from "../../../redux/actions/master/employee"
import { useHistory } from "react-router"
const EmployeeEditAddress = ({
  address,
  index,
  defaultCountry,
  defaultState,
  defaultCity,
  defaultCityId,
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
  const countries = useSelector((state) => state.editAddCity.countries)
  const states = useSelector((state) => state.editAddCity.states)
  const cities = useSelector((state) => state.editAddCity.cities)
  const [country, setCountry] = useState({ value: defaultCountry, label: defaultCountry })
  const [state, setState] = useState({ value: defaultState, label: defaultState })
  const [city, setCity] = useState({ value: defaultCity, label: defaultCity, id: defaultCityId })
  const usedispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    if (!isSubmittingAddress) return
    if (isChanged) {
      if (isChanged && !address.newAdd) {
        usedispatch(
          updateEmployeeAddress(
            address.id,
            addressName,
            area,
            street,
            postcode,
            city.id,
            employeeId
          )
        )
      } else if (address.newAdd) {
        usedispatch(addEmployeeAddress(addressName, area, street, postcode, city.id, employeeId))
      }
    }
    if (length === index + 1) history.push("/employee-list")
  }, [isSubmittingAddress])
  useEffect(() => {
    usedispatch(findCountries(defaultCountry))
    usedispatch(findStates(defaultCountry))
    usedispatch(findCities(defaultState))
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
                if (address.newAdd) {
                  setValues((state) => {
                    state.emplyee_addresses.splice(index, 1)
                    return { ...state }
                  })
                } else {
                  setValues((state) => {
                    state.emplyee_addresses[index].isDeleting = true
                    return { ...state }
                  })
                  usedispatch(removeEmployeeAddress(address.id)).then(() => {
                    setValues((state) => {
                      state.emplyee_addresses.splice(index, 1)
                      return { ...state }
                    })
                  })
                  //delete address code
                }
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
export default EmployeeEditAddress
