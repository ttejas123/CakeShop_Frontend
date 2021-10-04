//** React imports
import { useEffect, useState } from "react"

//** Redux imports
import { useDispatch, useSelector } from "react-redux"
import { findCountries } from "@store/actions/master/city/editAddCity"
import Loader from "../../ExCompUse/loader"

//** Imports for UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from "reactstrap"

import Select from "react-select"
const AddForm = (props) => {
  const usedispatch = useDispatch()
  const countries = useSelector((state) => state.editAddCity.countries)
  //** Fetching data to display default selection
  useEffect(() => {
    usedispatch(findCountries())
    return () => usedispatch({ type: "reset_edit_add_city" })
  }, [usedispatch])

  //** Setting values of countries, states, and cities fetched from api
  const loading = useSelector((state) => state.states.editStateLoading)

  //** Local state for controlled input elements with
  //** default values set from previous component
  const [state, setState] = useState("")
  const [country, setCountry] = useState({ value: "Select", label: "Select" })

  //** FUNC for handling input change
  const handleSubmit = () => {
    props.handleSubmit({
      state,
      countryId: country.id
    })
  }
  return (
    <Form>
      <Col md="12" sm="12">
        <Row className="mt-3 d-flex justify-content-center align-items-center">
          <Col sm="4">
            <FormGroup className="d-flex">
              <Label size="lg" for="country">
                Country
              </Label>
              <Col>
                <Select
                  id="country"
                  name="country"
                  className="react-select"
                  classNamePrefix="select"
                  isClearable={false}
                  value={country}
                  options={countries}
                  onChange={(data) => {
                    setCountry(data)
                  }}
                />
              </Col>
            </FormGroup>
          </Col>

          <Col sm="4">
            <FormGroup className="d-flex">
              <Label size="lg" for="state">
                State
              </Label>
              <Col>
                <Input
                  name="state"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col sm="3" className="mx-auto">
            <Button.Ripple
              className="mr-1"
              color="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleSubmit()
              }}
            >
              {loading ? <Loader color="light" /> : "Submit"}
            </Button.Ripple>
            <Button.Ripple outline color="secondary" type="reset" onClick={props.handleCancel}>
              Cancel
            </Button.Ripple>
          </Col>
        </Row>
      </Col>
    </Form>
  )
}
export default AddForm
