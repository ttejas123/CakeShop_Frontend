import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'
import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import Uppy from '@uppy/core'
import { DragDrop } from '@uppy/react'
import { useHistory } from 'react-router-dom'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import { Create } from "@src/redux/actions/cake"

const HorizontalForm = () => {
  const [values, setValues] = useState({})
  const [imgA, setImgA] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const [previewArr, setPreviewArr] = useState([])
  const [fileArr, setFileArr] = useState([])

    const renderPreview = () => {
     if (previewArr.length) {
      console.log(previewArr[0])
       return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mb-2 mr-1' style={{height: "20rem"}} src={src} alt='avatar' />)
     } else {
       return null
     }
    }

    const uppy = new Uppy({
      meta: { type: 'avatar' },
      autoProceed: true,
      totalProgress: 0
    })

    uppy.use(thumbnailGenerator)

    uppy.on('thumbnail:generated', (file, preview) => {
      // console.log(file.data)
      const arr = previewArr
      arr[0] = preview
      setPreviewArr([...arr])

      const fileArrs = fileArr
      fileArrs[0] = file.data
      setFileArr([...fileArrs])
    })

    const handleInputeChange = (event) => {
      const { name, value } = event.target
      setValues({
        ...values,
        [name] : value
      })
    }

  return (
    <Card className="row col-md-10 offset-md-1">
      <CardHeader>
        <CardTitle tag='h4'>Add New Cake</CardTitle>
      </CardHeader>

      <CardBody>
       
          <FormGroup row>
            <Label sm='3' for='name'>
              Cake Name
            </Label>
            <Col sm='9'>
              <Input type='text' onChange={(e) => handleInputeChange(e)} value={values.name} name='name' id='name' placeholder='Cake Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Email'>
              Type
            </Label>
            <Col sm='9'>
              <Input type='email' onChange={(e) => handleInputeChange(e)} value={values.type} name='type' id='type' placeholder='type' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='price'>
              price
            </Label>
            <Col sm='9'>
              <Input type='number' onChange={(e) => handleInputeChange(e)} value={values.price} name='price' id='price' placeholder='price' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Description'>
              Description
            </Label>
            <Col sm='9'>
              <Input type='Description' onChange={(e) => handleInputeChange(e)} value={values.description} name='description' id='description' placeholder='Description' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='Description'>
              File
            </Label>
            <Col sm='9'>
               <DragDrop uppy={uppy} />
                 {renderPreview()}
            </Col>
              
          </FormGroup>  

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => {
                e.preventDefault()
                dispatch(Create(values, fileArr))
                history.push('/')
              }}>
                Submit
              </Button.Ripple>
            </Col>
          </FormGroup>
        
      </CardBody>
    </Card>
  )
}
export default HorizontalForm
