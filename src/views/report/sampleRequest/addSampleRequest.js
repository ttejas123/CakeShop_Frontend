// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import Flatpickr from 'react-flatpickr'
// ** Custom Components
import Avatar from '@components/avatar'
import { Editor } from 'react-draft-wysiwyg'
// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select, {components} from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'

const EditSampleRequest = () => {

 const [picker, setPicker] = useState(new Date())
    const optionSample = [
        {value: "pravin", img : pravin, label: "Pravin Poshmani"},
        {value: "komal", img: komal,  label: "Komal Kamble"},
        {value: "himanshu", img : himanshu, label: "Himanshu Chanda"}
      ]
      const initialvalues = {
        id:1,
        name: "",
        email: "",
        hasSubscription: "",
        isVerified: "",
        logo : "",
        phone : "",
        panNumber: "",
        Currency:  [{value: "currency", label: "Indian Rupee"}],
        City:  [{value: "city", label: "Mumbai"}], 
        State:  [{value: "state", label: "Maharashtra"}],
        Sample: [{value: "himanshu", img:himanshu, label: "123@abc.com"}]
      }
      const [values, setValues] = useState(initialvalues)
      const handleInputeChange = (event) => {
        const {name, value} = event.target
        setValues(
        {
          ...values,
          [name] : value
        }
        )
      }
    
      const SelectComponent = ({ data, ...props }) => {
        //console.log(props)
        return (
          <components.Option {...props}>
            <div className='d-flex flex-wrap align-items-center'>
              <Avatar className='my-0 mr-50' size='sm' img={data.img} />
              {data.label}
            </div>
          </components.Option>
        )
      }

      
  const [data, setData] = useState(null)
  const { control, setValue } = useForm({
    defaultValues: { hasSubscription: 'No' }
  })

  const submitHandle = (event) => {
    console.log(values)
    //prop.editAction(values)
    setValues(initialvalues)
  }
  const selectedUser = {
    avatar: "",
    company: "Yotz PVT LTD",
    contact: "(479) 232-9151",
    country: "El Salvador",
    currentPlan: "enterprise",
    email: "gslixby0@abc.net.au",
    fullName: "Coense Solution",
    id: 1,
    role: "editor",
    status: "inactive",
    username: "gslixby0"
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

  // ** Renders User
  const renderUserAvatar = () => {
    if (img === null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded mr-2 my-25'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={img}
          alt='user profile avatar'
          height='90'
          width='90'
        />
      )
    }
  }

  return (
 
<Card>
<CardHeader>
  <CardTitle tag='h1'>Edit Sample Request</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='6' sm='12'>
      <FormGroup>
      <Fragment>
         <Label for='default-picker'>Date</Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' />
        </Fragment>
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='bidId'>Bid Id</Label>
          <Input type='text' id='bidId' placeholder='Bid Id' defaultValue={userData && userData.bidId} />
        </FormGroup>
      </Col>  
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='Sample'>Sample</Label>
            <Select
              id='Sample'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              // value={renderSample(values.Sample)}
              options={optionSample}
              theme={selectThemeColors}
              className='react-select'
             classNamePrefix='select'
              components={{ Option: SelectComponent }}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             Role : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='buyer'>Buyer</Label>
          <Input type='text' id='buyer' placeholder='Buyer' defaultValue={userData && userData.buyer} />
        </FormGroup>
      </Col>    
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='status'>Status</Label>
          <Input type='text' id='status' placeholder='Status' defaultValue={userData && userData.status} />
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
  </Form>
</Col>
</Row>
</CardBody>
</Card>
  )
}
export default EditSampleRequest
