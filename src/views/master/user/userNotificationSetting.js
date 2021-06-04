// ** React Imports
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// ** Custom Components
import Avatar from '@components/avatar'
import classnames from 'classnames'
// ** Third Party Components
import { Lock } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const UserNotificationsSetting = () => {

  const { id } = useParams()
  console.log("ID", id)
  const [data, setData] = useState(null)
  const [email, setEmail] = useState("himanshiSir@gmail.com")
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isOnGround: 'No' }
  })

  const optionUser = [
    {value: "Tejas Thakare", label: "Tejas Thakare", id:1},
    {value: "Pravin Poshmani", label: "Pravin Poshmani", id:2},
    {value: "Komal Kamble ", label: "Komal Kamble ", id:3},
    {value: "Mehul Bhadra", label: "Mehul Bhadra", id:4},
    {value: "Harpriya Akella", label: "Harpriya Akella", id:5},
    {value: "Reethika Renganathan", label: "Reethika Renganathan", id:6},
    {value: "Himanshu Chanda", label: "Himanshu Chanda", id:7}

  ]
  
  const userEmails =
  [
    {
        email : "Tejast@gmail.com"
    },
    {
        email : "pravinp@gmail.com" 
    },
    {
        email : "Komalmam@gmail.com"
    },
    {
        email : "mehulb@gmail.com"
    },
    {
        email : "AHarpriya@gmail.com"
    },
    {
        email : "reethikar@gmail.com"
    },
    {
        email : "HimanshuC@gmail.com"
    }
  ]

  const initialvalues = {
    id:1,
    name: "",
    email: "",
    isOnGround: "",
    isActive: "",
    logo : "",
    phone : "",
    panNumber: "",
    Currency:  [{value: "currency", label: "Indian Rupee"}],
    City:  [{value: "city", label: "Mumbai"}], 
    State:  [{value: "state", label: "Maharashtra"}],
    Country: [{value: "country", label: "India"}],
    User: [{value: "User", label: "Himanshu Chanda", id:0}]
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
    User: "editor",
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
  <CardTitle tag='h1'>Right Assignment</CardTitle>
</CardHeader>
<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
         <Col md='6' sm='12'>
      <FormGroup>
              <Label for='User'>User</Label>
          <Input type='user' id='readonlyInput' readOnly value={optionUser[id - 1].label} placeholder='User' />
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='Email'>Email</Label>
          <Input type='email' id='readonlyInput' readOnly value={userEmails[id - 1].email} placeholder='Email' />
        </FormGroup>
      </Col>
      <Col sm='12'>
              <div className='permissions border mt-1'>
                <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                  <Lock size={18} className='mr-25' />
                  <span className='align-middle'>Permissions</span>
                </h6>
                <Table borderless striped responsive>
                  <thead className='thead-light'>
                    <tr>
                      <th>Notifications</th>
                      <th>Email</th>
                      <th>SMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bid</td>
                      <td>
                        <CustomInput type='checkbox' id='master-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-2' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Change Password</td>
                      <td>
                        <CustomInput type='checkbox' id='reports-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-2' label='' defaultChecked />
                      </td>
                      </tr>
                    <tr>
                      <td>Payment</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
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
export default UserNotificationsSetting
