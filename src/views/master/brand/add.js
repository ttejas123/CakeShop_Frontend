// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { DragDrop } from '@uppy/react'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import '@styles/react/apps/app-users.scss'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {

  const initialvalues = {
    id:0,
    logo:'',
    Name:''
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())  
  const [Brand, setBrand] = useState(null)

    const uppy1 = new Uppy({
                  meta: { type: 'avatar' },
                  restrictions: { maxNumberOfFiles: 1 },
                  autoProceed: true
                })

    uppy1.use(thumbnailGenerator)

    uppy1.on('thumbnail:generated', (file, preview) => {
              console.log(file)
              setBrand(preview)
    })
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
      logo : Brand
    })
    // setValues({
    //   ...values,
    //   [name] : values
    // })
    // //prop.editAction(values)
    
    setValues(initialvalues)
    setBrand(null)
    alert("Data successfully inserted")
  }

  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Add Your Brand</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='7' sm='12'>
              <FormGroup>
                <Label for='Name'>Brand Name</Label>
                <InputGroup>
                  
                  <Input name="Name" onChange={handleInputeChange} id='Name' type="text" value={values.Name} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12' className='pl-0'>
                <FormGroup >
                    <Card >
                      <CardHeader >
                        <CardTitle >Your Brand Logo/Image</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DragDrop uppy={uppy1}  />
                        { Brand !== null ? <img className='rounded mt-2 ml-1' src={Brand} alt='avatar' /> : null}
                      </CardBody>
                    </Card>
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
