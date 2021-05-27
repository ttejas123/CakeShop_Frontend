// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const UploadKyc = () => {

  const [data, setData] = useState(null)
  const { control, setValue } = useForm({
    defaultValues: { hasSubscription: 'No' }
  })

  const [img, setImg] = useState(null)
  
  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    console.log(file)
    setImg(preview)
  })

  const optionUser = [
    {value: "Mehul", label: "Mehul", id:4},
    {value: "Pravin Poshmani", label: "Pravin Poshmani", id:1},
    {value: "Tejas Thakare", label: "Tejas Thakare", id:2},
    {value: "Komal Kamble ", label: "Komal Kamble ", id:3}
  ]

  const optionDocType = [
    {value: ".img", label: ".img", id:1},
    {value: ".pdf", label: ".pdf", id:2}
  ]


    const initialvalues = {
    id:1,
    name: "",
    email: "",
    hasSubscription: "",
    isVerified: "",
    icon : "",
    phone : "",
    panNumber: "",
    User:  [{value: "Pravin Poshmani", label: "Pravin Poshmani"}],
    DocType:  [{value: ".img", label: ".img"}], 
    State:  [{value: "state", label: "Maharashtra"}],
    Country: [{value: "country", label: "India"}]
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
    role: "editor",
    status: "inactive",
    username: "gslixby0"
      }
  //console.log(selectedUser)
  // ** States
 
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
  <CardTitle tag='h1'>Add Application</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
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
          <Label for='documentFile'>Document (File)</Label>
          <Input type='text' id='documentFile' placeholder='Document (File)' />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='documentType'>Document Type</Label>
            <Select          
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              name='documentType'
              options={optionDocType}
              value={values.DocType[0]}
              menuPlacement = "auto"
            //   isLoading={true}
              isClearable={false}
              onChange={(data, index) => {

                                // setEmail(userEmails[data.id].email)
                                 setValues(
                                          {
                                             ...values,
                                             DocType : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col> 
      <Col md='12' sm='12'>
        <FormGroup>
            <CardBody>
        <h4 className='mb-1'>
            {/* <User size={20} className='mr-50' /> */}
            <span className='align-middle'>Import</span>
          </h4>
          <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
        </CardBody>
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
export default UploadKyc
