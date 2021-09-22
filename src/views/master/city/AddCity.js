//** React imports
import { useEffect, useState } from 'react'
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
import { useForm, Controller } from 'react-hook-form'

//** Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { findCountries, findStates } from '@store/actions/master/city/editAddCity.js'

const HorizontalForm = (props) => {
  const countries = useSelector((state) => state.editAddCity.countries)
  const states = useSelector((state) => state.editAddCity.states)
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const usedispatch = useDispatch()
  useEffect(() => {
    usedispatch(findCountries()).then((action) => {
      setCountry(action.payload.countries[0].country_name)
      usedispatch(findStates(action.payload.countries[0].country_name)).then((action) => {
        setState(action.payload[0].name)
      })
    })
    return () => usedispatch({ type: 'reset_edit_add_city' })
  }, [usedispatch])
  const { register, errors, control, setValue, trigger } = useForm({
    defaultValues: { gender: 'gender-female', dob: null }
  })
  const [name, setName] = useState('')
  const handleInputeChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case 'country':
        //** If country is changed then fetch states
        //** and then do the same for cities
        setCountry(value)
        usedispatch(findStates(value)).then((action) => {
          console.log(action.payload)
          setState(action.payload[0].name)
          setName('')
        })
        break

      //** If state is changed then only change state value
      case 'state':
        setState(value)
        setName('')
        break
      case 'name':
        setName(value)
    }
  }

  const handleSubmit = () => {
    const stateId = states.findIndex((s) => s.name === state)
    props.handleSubmit({ name, state: states[stateId].id })
    //prop.editAction(values)
    //setValues(initialvalues)
  }
  return (
    <Card>
      <CardBody>
        <Form>
          <Row>
            <Col className="d-flex" md={{ size: 9, offset: 1 }}>
              <FormGroup row>
                <Label sm="6" size="lg" for="name">
                  Country
                </Label>
                <Col sm="7">
                  <Input
                    type="select"
                    name="country"
                    value={country}
                    id="country"
                    onChange={handleInputeChange}
                  >
                    {countries.map((country) => (
                      <option value={country.country_name}>{country.country_name}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup className="ml-3" row>
                <Label sm="4" size="lg" for="Country">
                  State
                </Label>
                <Col sm="8">
                  <Input
                    type="select"
                    name="state"
                    id="state"
                    value={state}
                    onChange={handleInputeChange}
                  >
                    {states.map((state) => (
                      <option value={state.name}>{state.name}</option>
                    ))}
                  </Input>
                </Col>
              </FormGroup>
              {/* <FormGroup className='ml-3' row>
              <Label sm='4' size='lg' for='country'>
                Country
              </Label>
              <Col sm='8'>
                <Input type='email' name='Country' id='Country' placeholder='Country' onChange={handleInputeChange}/>
              </Col>
            </FormGroup> */}
              <FormGroup className="ml-3" row>
                <Label sm="5" size="lg" for="country">
                  City
                </Label>
                <Col sm="7">
                  <Input
                    type="text"
                    value={name}
                    name="name"
                    id="name"
                    onChange={handleInputeChange}
                    placeholder="Enter City"
                  />
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
export default HorizontalForm
