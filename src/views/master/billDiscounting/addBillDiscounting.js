// ** React Imports
import { useState, useEffect } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, CustomInput, CardHeader, CardBody, Card, CardTitle } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useForm, Controller } from 'react-hook-form'

const AddBillDiscountingAppl = () => {

  const [data, setData] = useState(null)
  const [addDocumnet, setaddDocumnet] = useState(null)
  const { control, setValue } = useForm({
    defaultValues: { hasSubscription: 'No' }
  })

  const optionUserId = [
    {value: "ID001", label: "ID001", name : "Pravin Poshmani"},
    {value: "ID002", label: "ID002", name : "Tejas Thakare"},
    {value: "ID003", label: "ID003", name : "Komal Kamble"},
    {value: "ID004", label: "ID004", name : "Salman Roshan"},
    {value: "ID005", label: "ID005", name : "Hrithik Khan"},
    {value: "ID006", label: "ID006", name : "The Ruler"}
  ]

  const optionFiId = [
    {value: "FI001", label: "FI001", name : "ICICI"},
    {value: "FI002", label: "FI002", name : "SBI"},
    {value: "FI003", label: "FI003", name : "UNION"},
    {value: "FI004", label: "FI004", name : "Muthooth"},
    {value: "FI005", label: "FI005", name : "BOI"},
    {value: "FI006", label: "FI006", name : "Canara"}
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
    UserId: [{value: "Select User Id", label: "Select User Id"}],
    FiId: [{value: "Select Financial Institute Id", label: "Select Financial Institute Id"}]
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

  
  const uppy1 = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

uppy1.use(thumbnailGenerator)

uppy1.on('thumbnail:generated', (file, preview) => {
console.log(file)
setaddDocumnet(preview)
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
  <CardTitle tag='h1'>Add Application</CardTitle>
</CardHeader>

<CardBody>
<Row>
<Col sm='12'>
  <Form onSubmit={e => e.preventDefault()}>
    <Row>
      <Col md='6' sm='12'>
      <FormGroup>
              <Label for='userId'>User Id</Label>
            <Select
              id='userId'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionUserId}
              theme={selectThemeColors}
              value={values.UserId[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             UserId : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='billDiscountingApplication'>Bill Discounting Application</Label>
          <Input type='text' id='billDiscountingApplication' placeholder='Bill Discounting Application' defaultValue={userData && userData.billDiscountingApplication} />
        </FormGroup>
      </Col>
      <Col md='6' sm='12'>
          <FormGroup>
              <Label for='fiId'>Financial Institute Id</Label>
            <Select
              id='fiId'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionFiId}
              theme={selectThemeColors}
              value={values.FiId[0]}
              onChange={data => {


                                 setValues(
                                          {
                                             ...values,
                                             FiId : data
                                          } 
                                  )
                                }
                        }
            />
            </FormGroup> 
      </Col> 
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='billAmount'>Bill Amount</Label>
          <Input type='text' id='billAmount' placeholder='Bill Amount' defaultValue={userData && userData.billAmount} />
        </FormGroup>
      </Col>  
      <Col md='6' sm='12'>
        <FormGroup>
          <Label for='settlementAmount'>Settlement Amount</Label>
          <Input type='text' id='settlementAmount' placeholder='Settlement Amount' defaultValue={userData && userData.settlementAmount} />
        </FormGroup>
      </Col>    
      <Col md='12' sm='12'>
        <FormGroup >
                    <Card >
                      <CardHeader >
                        <CardTitle >Add Document</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DragDrop uppy={uppy1}  />
                        { addDocumnet !== null ? <img className='rounded mt-2 ml-1' src={addDocumnet} alt='avatar' /> : null}
                      </CardBody>
                    </Card>
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
export default AddBillDiscountingAppl
