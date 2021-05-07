// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import { Editor } from 'react-draft-wysiwyg'
// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import '@styles/react/libs/editor/editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
const EditApplication = () => {

    const optiontoEmail = [
        {value: "12@abc.com", label: "12@abc.com"},
        {value: "123@abc.com", label: "123@abc.com"},
        {value: "1@abc.com", label: "1@abc.com"},
        {value: "01@abc.com", label: "01@abc.com"},
        {value: "China@abc.com", label: "China@abc.com"},
        {value: "Russia@abc.com", label: "Russia@abc.com"}
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
        toEmail: [{value: "toEmail", label: "123@abc.com"}]
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
  <CardTitle tag='h1'>Edit Application</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='toEmail'>To Email</Label>
            <Select
              id='toEmail'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optiontoEmail}
              theme={selectThemeColors}
              value={values.toEmail[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             toEmail : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='emailName'>Email Name</Label>
          <Input type='text' id='emailName' placeholder='Email Name' defaultValue={userData && userData.emailName} />
        </FormGroup>
      </Col>  
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='emailId'>Email Id</Label>
          <Input type='text' id='emailId' placeholder='Email Id' defaultValue={userData && userData.emailId} />
        </FormGroup>
      </Col>  
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='ccEmail'>Cc Email</Label>
          <Input type='text' id='ccEmail' placeholder='Cc Emailt' defaultValue={userData && userData.ccEmail} />
        </FormGroup>
      </Col>    
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='bccEmail'>Bcc Email</Label>
          <Input type='text' id='bccEmail' placeholder='Bcc Emailt' defaultValue={userData && userData.bccEmail} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='fromEmail'>From Email</Label>
          <Input type='text' id='fromEmail' placeholder='From Emailt' defaultValue={userData && userData.fromEmail} />
        </FormGroup>
      </Col> 
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='subject'>Subject</Label>
          <Input type='text' id='subject' placeholder='Subjectt' defaultValue={userData && userData.subject} />
        </FormGroup>
      </Col>   
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='priority'>Priority</Label>
          <Input type='text' id='priority' placeholder='Priority' defaultValue={userData && userData.priority} />
        </FormGroup>
      </Col>  
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='status'>Status</Label>
          <Input type='text' id='status' placeholder='Status' defaultValue={userData && userData.status} />
        </FormGroup>
      </Col> 
      <Col md='12' sm='12'>
        <FormGroup>
          <Label for='body'>Body</Label>
          <div id='message-editor'>
            <Editor
              placeholder='Message'
              editorClassName='rounded-0'
              toolbarClassName='rounded-0'
              wrapperClassName='toolbar-bottom'
              toolbar={{
                options: ['inline', 'textAlign'],
                inline: {
                  inDropdown: false,
                  options: ['bold', 'italic', 'underline', 'strikethrough']
                }
              }}
            />
          </div>
        </FormGroup>
      </Col>  
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='type'>Type</Label>
          <Input type='text' id='type' placeholder='Type' defaultValue={userData && userData.type} />
        </FormGroup>
      </Col>  
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='sentTime'>Sent Time</Label>
          <Input type='text' id='sentTime' placeholder='Sent Time' defaultValue={userData && userData.sentTime} />
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
export default EditApplication
