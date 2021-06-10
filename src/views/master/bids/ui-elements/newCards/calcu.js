// ** React Imports
import Nouislider from 'nouislider-react'
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
// import { data } from './data'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

  const initialvalues = {
    id:0,
    gst:12,
    amount:1000000,
    bidoya: 5
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [Total, setTotal] = useState(0)
  const [endPicker, setEndPicker] = useState(new Date())  

  //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }


  const submitHandle = (event) => {
    const { name, value } = event.target
    console.log({
      ...values,
      [name] : values
    })
    setValues({
      ...values,
      [name] : values
    })
    //prop.editAction(values)
    
    setValues(initialvalues)
    alert("Data successfully inserted")
  }

  useEffect(() => {
     
     const amount = parseFloat(values.amount)
     const gst = amount * parseFloat(values.gst) / 100
     const bidoya = amount * parseFloat(values.bidoya) / 100
      setTotal(
        gst + amount + bidoya
        )
         
  }, [values.gst, values.amount, values.bidoya])
  

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <CardTitle tag='h4'>Calculator</CardTitle>
          
        </Col>
      
      <CardBody className='pl-3 pt-0'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='amount'>Amount without GST in (₹)</Label>
                <InputGroup>
                  
                  <Input disabled name="amount" onChange={handleInputeChange} id='amount' type="number" value={values.amount} />
                </InputGroup>
              </FormGroup>
            </Col>
            
            <Col md='12' sm='12'>
                
                  <FormGroup>
                    <Label for='gst'>Seller GST</Label>
                    <Input type='range' disabled onChange={handleInputeChange} name='gst'  min="0" max="100" step="0.2" value={values.gst} />
                    <output id="output">{values.gst}%</output>
                  </FormGroup>
              
            </Col>

            <Col md='12' sm='12'>
                
                  <FormGroup>
                    <Label for='bidoya'>Bidoya Commission</Label>
                    <Input type='range' disabled onChange={handleInputeChange} name='bidoya'  min="0" max="100" step="0.2" value={values.bidoya} />
                    <output id="output">{values.bidoya}%</output>
                  </FormGroup>
              
            </Col>
            <hr />
            <Col md='12' sm='12'>
                 
                    <Row className="pt-2">
                      <Col md="8" sm='8'>
                        <h6 for='bidoya'>Amount without GST in (₹):</h6>
                      </Col>
                      <Col md="4" sm='4'>
                        <>₹{values.amount}</>
                      
                      </Col>
                    </Row>

                    <Row>
                      <Col md="8" sm='8'>
                        <h6 for='bidoya'>Seller GST in (%):</h6>
                      </Col>
                      <Col md="4" sm='4'>
                        <>{values.gst}%</>
                      
                      </Col>
                    </Row>

                    <Row>
                      <Col md="8" sm='8'>
                        <h6 for='bidoya'>Seller GST in (%):</h6>
                      </Col>
                      <Col md="4" sm='4'>
                        <>{values.bidoya}%</>
                      
                      </Col>
                    </Row>
                      
                    
                    <hr />

                  
                  <Row>
                      <Col md="8" sm='8'>
                        <h5 for='bidoya'><b>Total Amount:</b></h5>
                      </Col>
                      <Col md="4" sm='4'>
                        <><b>₹{Total}</b></>
                      
                      </Col>
                    </Row>
            </Col> 
          </Row>
        </Form>
      </Col>

      </CardBody> 
    </Row>
    </Card>
  )
}
export default UserAccountTab
