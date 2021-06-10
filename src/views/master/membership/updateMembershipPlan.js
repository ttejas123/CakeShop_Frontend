// ** React Imports
import { useState, useEffect } from 'react'
// ** Custom Components
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
// ** Third Party Components
import { Lock, Edit, Trash2, MapPin } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import CorporateCreditUtilization from '../corporate/corporateView/corporateCreditUtilization'
const corporateAddressAdd = () => {

  const [picker, setPicker] = useState(new Date())
  const [benefits, setBenefits] = useState([])
  const [data, setData] = useState(null)
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isRegisteredOffice: 'No' }
  })

  const optionMembershipPlans = [
    {value: "Platinum", label: "Platinum", benefits : ["No Commission on transactions", "Get Third party VAS", "reveal name"]},
    {value: "Gold", label: "Gold", benefits : ["No Commission on transactions", "Get Third party VAS"]},
    {value: "Silver", label: "Silver", benefits : ["No Commission on transactions"]}
  ]

  const initialvalues = {
    MembershipPlan: [{value: "Select Plan", label: "Select Plan"}]
  }
  const [values, setValues] = useState(initialvalues)
  const [AddressProof, setAddressProof] = useState(null)
  const [showBenefits, setShowBenefits] = useState(false)

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
    console.log(values)
    //prop.editAction(values)
    setValues(initialvalues)
  }
  //console.log(selectedUser)
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)
  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  // ** Update user image on mount or change
  useEffect(() => {
    // if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
    //   setUserData(selectedUser)
    //   if (selectedUser.avatar.length) {
    //     return setImg(selectedUser.avatar)
    //   } else {
    //     return setImg(null)
    //   }
    // }
  })

  const renderBenefits = () => { 
      const data = benefits  
        return data.map(col => {
            return (
             <li>
                 <h6 className='text-truncate'>{col}</h6></li>
            )
          })
  }
  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>Update Membership Plan</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
    <Col md='6' sm='12'>
    <FormGroup>
              <Label for='MembershipPlan'>Membership Plan</Label>
            <div style={{zIndex:1000, position:'relative'}}>
            <Select
              id='MembershipPlan'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionMembershipPlans}
              theme={selectThemeColors}
              value={values.MembershipPlan[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             MembershipPlan : data
                                          },
                                setBenefits(data.benefits),
                                setShowBenefits(true)
                                  )
                                }
                        }
            />
            </div>
            </FormGroup> 
      </Col>
      <Col md='12' sm='12'>
        {/* <FormGroup>
          <Label for='benefits'>Benefits</Label>
          <Input type='text' id='benefits' defaultValue={benefits} />
        </FormGroup> */}
        {showBenefits ?  <>
        <h6 className='mb-1'>Benefits</h6>
            <ul className='pl-1'>
            {renderBenefits()}
            </ul>
            </> : null}
       
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='amount'>Amount</Label>
          <Input type='text' id='amount' placeholder='Amount'  />

        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='discount'>Discount ( If Any )</Label>
          <Input type='text' id='discount' placeholder='discount'  />

        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
                  <Label for='start_date' className=''>Start Date</Label>
                  <Flatpickr
                    value={picker}
                    data-enable-time
                    id='date-time-picker'
                    className='form-control'
                    onChange={date => setPicker(date)}
                  />
                </Col>
                <Col md='6' sm='12'>
                  <Label for='end_date' className=''>End Date</Label>
                  <Flatpickr
                    value={picker}
                    data-enable-time
                    id='date-time-picker'
                    className='form-control'
                    onChange={date => setPicker(date)}
                  />
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
  </Form>
</Col>
</Row>
</CardBody>
</Card>
  )
}
export default corporateAddressAdd
