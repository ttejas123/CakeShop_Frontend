
      //1. Transcation type(Pay, Receive)
      //2. On Bid(Drop Down of Bid) 
      //3. Amout 
      //4. User
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect, Fragment } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus, Loader, Info   } from 'react-feather'
import { data } from './data'
import Avatar from '@components/avatar'
import { toast } from 'react-toastify'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Custom Components

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'


 const ErrorToast = () => (
      <Fragment>
        <div className='toastify-header'>
          <div className='title-wrapper'>
            <Avatar size='sm' color='danger' icon={<X size={12} />} />
            <h6 className='text-danger ml-50 mb-0'>Failed</h6>
          </div>
          <small className='text-muted'>a sec ago</small>
        </div>
        <div className='toastify-body'>
          <span>This User Can't Pay.</span>
        </div>
      </Fragment>
    )

const UserAccountTab = (prop) => {
  const { id } = useParams()
  
  const optionUser = [
    {value: "Reethika", label: "Reethika", toggle: "1"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda", toggle: "0"},
    {value: "Surya Das", label: "Surya Das", toggle: "1"},
    {value: "Avinash ShriKesh", label: "Avinash ShriKesh", toggle: "0"},
    {value: "Pravin Poshmani", label: "Pravin Poshmani", toggle: "1"},
    {value: "Komal Kamble", label: "Komal Kamble", toggle: "1"},
    {value: "Mehul bindra", label: "Mehul bindra", toggle: "1"},
    {value: "Harpriya", label: "Harpriya", toggle: "0"},
    {value: "Tejas Thakare", label: "Tejas Thakare", toggle: "1"}
  ]

  const OptionType = [
    {value: "Recieved from", label: "Recieved from"},
    {value: " Paid To", label: " Paid To"}
    
  ]

  const optionBid = [
    {value: "#Bid3421", label: "#Bid3421"},
    {value: "#Bid4223", label: "#Bid4223"},
    {value: "#Bid6461", label: "#Bid6461"},
    {value: "#Bid9623", label: "#Bid9623"}
  ]

  const optionsampling = [
    {value: "Yes", label: "Yes"},
    {value: "No", label: "No"}
    
  ]

  const initialvalues = {
        id:0,
        avatar:'',
        Comment: "",
        Balance: "",
        Amount_paid: "",
        Type:"",
        
        Bid: "",
        User:"",
        Total_amout:"",
        Date:`${new Date().toGMTString()}`,
        Lead_Time: `${new Date().toGMTString()}`,
        username:"",
        Name:""
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
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

   useEffect(() => {
        console.log(data[id - 1])
        setValues({
          ...data[id - 1]
        })
    
  }, [id])

  const notifyDelay = () => toast.error(<ErrorToast />, { autoClose: 10000, hideProgressBar: true })

  const submitHandle = (event) => {
    const { name, value } = event.target
    
    // setValues({
    //   ...values,
    //   [name] : values
    // })
    // //prop.editAction(values)
    console.log(values.User)
    if (values.User === "" || values.User.toggle === "1") {
      notifyDelay()
    } else {
      console.log(values)
      setValues(initialvalues)
    }

    //alert("Data successfully inserted")
  }
   
  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Nodal Transcation Edit</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            
            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='User'>User</Label>
              <Select
                id='User'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionUser}
                theme={selectThemeColors}
                value={values.User}
                onChange={data => {
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

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Amount_paid'>Amount Paid</Label>
                <InputGroup>
                  
                  <Input name="Amount_paid" onChange={handleInputeChange} id='Amount_paid' type="number"  value={values.Amount_paid} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='Type'>Transcation type</Label>
              <Select
                id='Type'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={OptionType}
                theme={selectThemeColors}
                value={values.Type}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               Type : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
              <Label for='On_Bid'>On Bid</Label>
              <Select
                id='Bid'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={optionBid}
                theme={selectThemeColors}
                value={values.Bid}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               Bid : data
                                            } 
                                    )
                                  }
                          }
              /> 
              </FormGroup>  
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle(e)
                                                        }
                                                      } color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={ () => setValues(initialvalues) } outline>
                Reset
              </Button.Ripple>
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
