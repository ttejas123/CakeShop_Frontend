import React, { useState, useEffect } from 'react'
import { selectThemeColors } from '@utils'
import { findCountries } from '../../../redux/actions/master/city/editAddCity'
import Select from 'react-select'
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
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

const option = [
  { value: 'India', label: 'India' },
  { value: 'USA', label: 'USA' },
  { value: 'Japan', label: 'Japan' }
]

const HorizontalForm = (prop) => {
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const usedispatch = useDispatch()
  const countries = useSelector((state) => state.editAddCity.countries)
  countries.forEach((country) => {
    country.value = country.country_name
    country.label = country.country_name
  })
  useEffect(() => {
    usedispatch(findCountries()).then((action) => {
      setCountry(action.payload.countries[0].country_name)
      if (prop.currentId !== '') {
        const index = prop.data.findIndex((s) => s.id === prop.currentId)
        setCountry(prop.data[index].Country)
      }
    })
    return () => usedispatch({ type: 'reset_edit_add_city' })
  }, [usedispatch])
  const submitHandle = (event) => {
    const index = countries.findIndex((c) => c.country_name === country)
    console.log(country, state)
    prop.editAction({
      whereId: prop.currentId,
      country: countries[index].id,
      state
    })
  }
  return (
    <Card>
      <CardBody>
        <Form>
          <Row>
            <Col className="ml-5">
              <FormGroup row>
                <Label md="4" sm="1">
                  Country
                </Label>
                <Col className="mb-1" md="4" sm="8">
                  <Input
                    type="select"
                    theme={selectThemeColors}
                    className="react-select"
                    classNamePrefix="select"
                    value={country}
                    name="country"
                    isLoading={false}
                    onChange={(e) => setCountry(e.target.value)}
                    isClearable={false}
                  >
                    {countries.map((country) => (
                      <option value={country.country_name} id={country.id}>
                        {country.country_name}
                      </option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm="4" size="lg" for="StateName">
                  State Name
                </Label>
                <Col sm="4">
                  <Input
                    type="text"
                    value={state}
                    name="state"
                    id="state"
                    placeholder="StateName"
                    onChange={(e) => setState(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="mb-0 mx-auto" row>
            <Col className="d-flex" md={{ size: 8, offset: 4 }}>
              <Button.Ripple
                className="mr-1"
                color="primary"
                onClick={(e) => {
                  prop.handleModal()
                  submitHandle()
                }}
              >
                Submit
              </Button.Ripple>
              <Button.Ripple outline color="secondary" type="reset" onClick={prop.handleModal}>
                Cancel
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default HorizontalForm
