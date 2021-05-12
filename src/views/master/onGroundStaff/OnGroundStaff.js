// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { User, MapPin } from 'react-feather'
import 'cleave.js/dist/addons/cleave-phone.us'
import Select from 'react-select'
// ** Third Party Components
import { Card, Row, Col, Button, Label, FormGroup, Input, CustomInput, Form  } from 'reactstrap'
import UserTable from './userTable'
import CardBody from 'reactstrap/lib/CardBody'
import { selectThemeColors } from '@utils'

const OnGroundStaff = () => {

    const optionUser = [
        {value: "Mehul", label: "Mehul", id:4},
        {value: "Pravin Poshmani", label: "Pravin Poshmani", id:1},
        {value: "Tejas Thakare", label: "Tejas Thakare", id:2},
        {value: "Komal Kamble ", label: "Komal Kamble ", id:3}
      ]

      const optionCompany = [
        {value: "TCS", label: "TCS", id:4},
        {value: "Infosys", label: "Infosys", id:1},
        {value: "Accenture", label: "Accenture", id:2},
        {value: "Goldman Sachs", label: "Goldman Sachs", id:3}
      ]

      const optionLocation = [
        {value: "Mumbai", label: "Mumbai", id:4},
        {value: "Pune", label: "Pune", id:1},
        {value: "Bangalore", label: "Bangalore", id:2},
        {value: "Hyderabad", label: "Hyderabad", id:3}
      ]

      const initialvalues = {
        Company:  [{value: "company", label: "Accenture"}],
        Location:  [{value: "location", label: "Mumbai"}], 
        User: [{value: "User", label: "Tejas Thakare", id:0}]
      }
      const [values, setValues] = useState(initialvalues)
  return (
      <Fragment>
    <Card>
      <UserTable/>
      <hr/>
      <CardBody>
      <Row className=''>
        <Col sm='12'>
          <h4 className='mb-3'>
            <User size={20} className='mr-50' />
            <span className='align-middle'>Edit User Company / Location</span>
          </h4>
        </Col>
        <Col md='4' sm='12'>
        <FormGroup>
              <Label for='User'>User</Label>
            <Select          
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='users'
              options={optionUser}
              value={values.User[0]}
              menuPlacement = "auto"
            //   isLoading={true}
              isClearable={false}
              onChange={(data, index) => {

                                // setEmail(userEmails[data.id].email)
                                 setValues(
                                          {
                                             ...values,
                                             User : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='Company'>Company</Label>
            <Select          
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='Company'
              menuPlacement = "auto"
              options={optionCompany}
              value={values.Company[0]}
            //   isLoading={true}
              isClearable={false}
              onChange={(data, index) => {

                                // setEmail(CompanyEmails[data.id].email)
                                 setValues(
                                          {
                                             ...values,
                                             Company : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='Location'>Location</Label>
            <Select          
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='Location'
              menuPlacement = "auto"
              options={optionLocation}
              value={values.Location[0]}
            //   isLoading={true}
              isClearable={false}
              onChange={(data, index) => {

                                // setEmail(LocationEmails[data.id].email)
                                 setValues(
                                          {
                                             ...values,
                                             Location : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col>
            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                Reset
              </Button.Ripple>
            </Col>
      </Row>
      </CardBody>
    </Card>
    </Fragment>
  )
}

export default OnGroundStaff
