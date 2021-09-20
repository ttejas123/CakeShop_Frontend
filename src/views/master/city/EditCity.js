//** React imports
import { useEffect, useState } from 'react'

//** Redux imports
import { useDispatch, useSelector } from 'react-redux'
import { findCountries, findStates, findCities } from '@store/actions/master/city/editCity'

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
} from 'reactstrap'

const EditForm = (props) => {
  const usedispatch = useDispatch()

  //** Fetching data to display default selection
  useEffect(() => {
    usedispatch(findCountries())
    usedispatch(findStates(props.data.country))
    usedispatch(findCities(props.data.state))
    //** If component unmounts reset redux state for this component
    return () => usedispatch({ type: 'reset_edit_states' })
  }, [usedispatch])

  //** Setting values of countries, states, and cities fetched from api
  const countries = useSelector((state) => state.editCity.countries)
  const states = useSelector((state) => state.editCity.states)
  const cities = useSelector((state) => state.editCity.cities)

  //** Local state for controlled input elements with
  //** default values set from previous component
  const [city, setCity] = useState(props.data.name)
  const [state, setState] = useState(props.data.state)
  const [country, setCountry] = useState(props.data.country)

  //** FUNC for handling input change
  const handleInputChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case 'country':
        //** If country is changed then fetch states
        //** and set value of state as the first element in states array fetched
        //** and then do the same for cities
        setCountry(value)
        usedispatch(findStates(value)).then((action) => {
          setState(action.payload[0].name)
          usedispatch(findCities(action.payload[0].name)).then((action) => {
            setCity(action.payload[0].name)
          })
        })

      //** If state is changed then only fetch new cities
      case 'state':
        setState(value)
        usedispatch(findCities(value)).then((action) => {
          if (action.payload.length > 0) setCity(action.payload[0].name)
        })
      //** If city is changed then only change controlled input value
      case 'name':
        setCity(value)
    }
  }

  //** FUNC for submission of data
  const handleSubmit = () => {
    let countryId, stateId, cityId
    for (
      let i = 0, j = 0, k = 0;
      i < countries.length && j < states.length && k < cities.length;
      i++, j++, k++
    ) {
      if (countries[i].country_name === country) countryId = countries[i].id
      if (states[j].name === state) stateId = states[j].id
      if (cities[k].name === city) cityId = cities[k].id
      if (countryId && stateId && cityId) break
    }
    props.handleSubmit({
      city: city !== props.data.name ? city : null,
      stateId,
      whereId: props.data.id
    })
  }
  return (
    <Card>
      <CardBody>
        <Form>
          <Row>
            <Col className="d-flex" md={{ size: 11, offset: 1 }}>
              <FormGroup row md={{ size: 9, offset: 3 }}>
                <Label sm="4" size="lg" for="country">
                  Country
                </Label>
                <Col sm="7">
                  <Input
                    type="select"
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleInputChange}
                  >
                    {countries.map((country) => (
                      <option value={country.country_name}>{country.country_name}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>

              {/* <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='country'>
                Country
              </Label>
              <Col sm='8'>
                <Input type='email' name='Country' id='Country' defaultValue={props.data.country} placeholder='Country' onChange={handleInputChange}/>
              </Col>
            </FormGroup> */}
              <FormGroup className="ml-3" row>
                <Label sm="4" size="lg" for="state">
                  State
                </Label>
                <Col sm="7">
                  <Input
                    type="select"
                    name="state"
                    id="state"
                    value={state}
                    onChange={handleInputChange}
                  >
                    {states.map((state) => (
                      <option value={state.name}>{state.name}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="ml-3" row>
                <Label sm="5" size="lg" for="name">
                  City
                </Label>
                <Col sm="8">
                  <Input
                    type="select"
                    name="name"
                    id="name"
                    value={city}
                    onChange={handleInputChange}
                  >
                    {cities.map((city) => (
                      <option value={city.name}>{city.name}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="mb-0 mx-auto" row>
            <Col className="d-flex" md={{ size: 8, offset: 5 }}>
              <Button.Ripple
                className="mr-1"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                Submit
              </Button.Ripple>
              <Button.Ripple outline color="secondary" type="reset" onClick={props.handleCancel}>
                Cancel
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default EditForm
