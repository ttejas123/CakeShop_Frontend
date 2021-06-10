// ** React Imports
import { useState, useEffect } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'


import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

// ** Third Party Components
import { Box,  AtSign } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ByUserTab = () => {
    const optionCategory = [
        {value: "Electronics", label: "Electronics", id:0},
        {value: "Clothing", label: "clothing", id:1},
        {value: "Footwear", label: "Footwear", id:2}
      ]
    const optionSKU = [
        {value: "Google", label: "Google"},
        {value: "Amazon", label: "Amazon"},
        {value: "Apple", label: "Apple"},
        {value: "Microsoft", label: "Microsoft"},
        {value: "Verizon", label: "Verizon"}
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
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
          <Col md='4' sm='12'>
        <FormGroup>
          <Label for='productId'>Product Id</Label>
          <Input type='text' id='productId' placeholder='Product Id' defaultValue={userData && userData.productId} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type='text' id='name' placeholder='Name' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='ean_upc_code'>EAN UPC Code</Label>
          <Input type='text' id='ean_upc_code' placeholder='EAN UPC Code' defaultValue={userData && userData.ean_upc_code} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='hsnCode'>HSN Code</Label>
          <Input type='text' id='hsnCode' placeholder='HSN Code' defaultValue={userData && userData.hsnCode} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='sGstNumber'>SGST (%)</Label>
          <Input type='text' id='sGstNumber' placeholder='SGST (%)' defaultValue={userData && userData.gstNumber} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='cGstNumber'>CGST (%)</Label>
          <Input type='text' id='cGstNumber' placeholder='CGST (%)' defaultValue={userData && userData.gstNumber} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='iGstNumber'>IGST (%)</Label>
          <Input type='text' id='iGstNumber' placeholder='IGST (%)' defaultValue={userData && userData.gstNumber} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='mrp'>Mrp</Label>
          <Input type='text' id='mrp' placeholder='Mrp' defaultValue={userData && userData.mrp} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='Category'>Category</Label>
            <Select
              id='Category'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={optionCategory}
              theme={selectThemeColors}
              value={values.Category[0]}
              onChange={data => {

                                setSubCategoryOptions(data)
                                setSpecificationsData(optionSubCategory[data.id][0].specs)
                                //  setValues(
                                //           {
                                //              ...values,
                                //              Category : data
                                //           } 
                                //   )
                                }
                        }
            />
            </FormGroup> 
      </Col>
      <Col md='4' sm='12'>
      <FormGroup>
              <Label for='SubCategory'>Sub Category</Label>
            <Select
              id='SubCategory'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={subCategoryOptions}
              theme={selectThemeColors}
              value={values.SubCategory[0]}
              onChange={data => {
                                 setValues(
                                          {
                                             ...values,
                                             SubCategory : data
                                          } 
                                  )
                                  setSpecificationsData(data.specs)
                                }
                        }
            />
            </FormGroup> 
            </Col>
            <Col md='4' sm='12'>
        <FormGroup>
          <Label for='productCategory'>Product Category</Label>
          <Input type='text' id='productCategory' placeholder='Product Category' defaultValue={userData && userData.productCategory} />
        </FormGroup>
      </Col>
            <Col md='4' sm='12'>
        <FormGroup>
          <Label for='description'>Description</Label>
          <Input type='textarea' id='description' placeholder='Description' defaultValue={userData && userData.description} />
        </FormGroup>
      </Col>
      <Col sm='12'>
          <h4 className='d-block mb-1'>
            < AtSign size={20} className='mr-50' />
            <span className='align-middle'>Brand</span>
          </h4>
          <Row>
                <Col md='4' sm='12'>
                    <FormGroup>
                            <Label for='sku'>SKU</Label>
                          <Select
                            id='sku'
                            className='react-select'
                            classNamePrefix='select'
                            isClearable={false}
                            options={optionSKU}
                            theme={selectThemeColors}
                            value={values.sku}
                            onChange={data => {
                                               setValues(
                                                        {
                                                           ...values,
                                                           sku : data
                                                        } 
                                                        //seller brand
                                                )
                                                
                                              }
                                      }
                    />
                    </FormGroup> 
                </Col>
                <Col md='4' sm='12'>
                    <FormGroup >
                            <Label for='Not in Brand'>Not in SKU</Label>
                            <CustomInput  type='checkbox' id='exampleCustomCheckbox' label='Seller Brand' />
                    </FormGroup> 
                </Col>
          </Row>
      </Col> 
          <Col sm='12'>
          <h4 className='d-block mb-1'>
            <Box size={20} className='mr-50' />
            <span className='align-middle'>Specifications</span>
          </h4>
          </Col>
          {
              SpecificationsData.map(item => {
                  return (
                    <Col md='4' sm='12' key={item.id}>
                    <FormGroup>
                      <Label for={item.id}>{item.name}</Label>
                      <Input type={item.name} id={item.id} placeholder={item.name}  />
                    </FormGroup>
                  </Col>
                  )
              })
          }   
        <Col sm='12'>
       
          <CardHeader>
        <CardTitle tag='h4'>Upload Images</CardTitle>
      </CardHeader>
      <CardBody>
        <DragDrop uppy={uppy} />
        {renderPreview()}
        <Button.Ripple className='d-block mb-1 mb-sm-0 mr-0 mr-sm-1 mt-2' type='submit' color='primary' onClick={e => {
                                                                                    e.preventDefault()
                                                                                    // uppy.totalProgress(0)
                                                                                  } }>
                Reset Images
              </Button.Ripple>
      </CardBody>
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
  )
}
export default ByUserTab
