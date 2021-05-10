// ** React Imports
import { useState, useEffect } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import Repeater from '@components/repeater'
import { X, Plus } from 'react-feather'

import { DragDrop } from '@uppy/react'
// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'


import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

// ** Third Party Components
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ByUserTab = () => {

  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }
    const optionCategory = [
        {value: "Electronics", label: "Electronics", id:0},
        {value: "Clothing", label: "clothing", id:1},
        {value: "Footwear", label: "Footwear", id:2}
      ]
      const optionSubCategory = [
          [   
                {
                    value: "MobilePhone",
                    label: "Mobile Phone",
                    specs :  
                    [
                    {id : "modelName", name : "Model Name", type : "text"},
                    {id : "secondaryStorage", name : "Secondary Storage", type : "text"},
                    {id : "ram", name : "RAM", type : "text"},
                    {id : "os", name : "OS", type : "text"},
                    {id : "size", name : "Size", type : "text"}
                    ]
                },
                {
                    value: "Tablet",
                     label: "Tablet",
                    specs : 
                [
                    {id : "modelName", name : "Model Name", type : "text"},
                    {id : "secondaryStorage", name : "Secondary Storage", type : "text"},
                    {id : "ram", name : "RAM", type : "text"},
                    {id : "os", name : "OS", type : "text"},
                    {id : "size", name : "Size", type : "text"}
                ]
            }
          ],
          [
                {
                    value: "Shirt",
                    label: "Shirt",
                    specs :  
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "Color", name : "Shirt Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            },
                {value: "Pant",
                label: "Pant",
                specs :
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "color", name : "Pant Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            }
          ],
          [
                {
                 value: "FilpFlops",
                 label: "Flip Flops",
                 specs :
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "color", name : "Flip-Flop Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            },
                {
                    value: "Shoes",
                    label: "Shoes",
                    specs :
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "color", name : "Shoe Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            }
          ]
      ]
    const selectedUser = {
        avatar: "",
        company: "Yotz PVT LTD",
        contact: "(479) 232-9151",
        Category: "El Salvador",
        currentPlan: "enterprise",
        email: "gslixby0@abc.net.au",
        fullName: "Coense Solutions",
        id: 1,
        role: "editor",
        status: "inactive",
        username: "gslixby0"
          }
 // console.log(selectedUser)

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
    SubCategory:  [{value: "SubCategory", label: "SubCategory"}],
    Category: [{value: "Category", label: "Category"}]
  }

  const [subCategoryOptions, setSubCatOptions] = useState(optionSubCategory[0])
  const [SpecificationsData, setSpecificationsData] = useState(optionSubCategory[0][0].specs)
  console.log(SpecificationsData)
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
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
  

  const setSubCategoryOptions = (data) => {
      
    setValues(
        {
           ...values,
           Category : data,
           SubCategory : optionSubCategory[data.id]
        } 
)
    setSubCatOptions(optionSubCategory[data.id])
  }


  // Image Upload section
  const [previewArr, setPreviewArr] = useState([])

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true,
    totalProgress: 0
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
      console.log(file.data)
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }

  // ** Update user image on mount or change
//   useEffect(() => {
//     if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
//       setUserData(selectedUser)
//       if (selectedUser.avatar.length) {
//         return setImg(selectedUser.avatar)
//       } else {
//         return setImg(null)
//       }
//     }
//   }, [selectedUser])

  return (
    <Row>
      <Col sm='12'>
        <Col md={8}>
      <Repeater count={count}>
          {i => (
            <Form key={i}>
              <Row className='justify-content-between align-itemss-center'>
                <Col md={8}>
                  <FormGroup>
                    <Label for={`attribute-name-${i}`}>Attribute Name</Label>
                    <Input type='text' id={`attribute-name-${i}`} placeholder='Attribute Name' />
                  </FormGroup>
                </Col>
                
                <Col md={4} className='d-flex my-auto'>
                  <Button.Ripple color='danger' className='text-nowrap px-1 mt-1' onClick={deleteForm} outline>
                    <X size={14} className='mr-50' />
                    <span>Delete</span>
                  </Button.Ripple>
                </Col>
                {/* <Col sm={12}>
                  <hr />
                </Col> */}
              </Row>
            </Form>
          )}
        </Repeater>
        </Col>
        <Col md={4}>
        <Button.Ripple className='d-flex btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add New</span>
        </Button.Ripple>
        </Col>
      </Col>
    </Row>
  )
}
export default ByUserTab
