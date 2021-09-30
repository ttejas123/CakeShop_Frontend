//Lead Time, SKU ID, MOQ, Customization available, Inspection, sampling, Added time, approved by, no of seller
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { PerticularCategory } from '@store/actions/master/category'
import { AllProductList } from '@store/actions/master/product'
import { SpecificProductAttribute, SpecificProductSku } from '@store/actions/master/productSKU'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const AddSku = (prop) => {
  const {id} = useParams()
  const useDisplatch = useDispatch()
  const optionApproveBy = [
    {value: "Reethika", label: "Reethika"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda"},
    {value: "Surya Das", label: "Surya Das"},
    {value: "Avinash ShriKesh", label: "Avinash ShriKesh"},
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Komal Kamble", label: "Komal Kamble"},
    {value: "Mehul bindra", label: "Mehul bindra"},
    {value: "Harpriya", label: "Harpriya"},
    {value: "Tejas Thakare", label: "Tejas Thakare"}
  ]

  useEffect(() => {
    useDisplatch(SpecificProductSku(id))
  }, [id])
  // const DataTableD = useSelector(state => {
  //   //console.log(state.product.attribute)
  //   return state.product
  // })

  const initialvalues = {
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date())

    // Image Upload section
  const [previewArr, setPreviewArr] = useState([])
  const [fileArr, setFileArr] = useState([])
  const [imgIds, setimgIds] = useState([])  

  const productSku = useSelector(state => {
    //console.log(state.productSKU)
    return state.productSKU
  })

  useEffect(() => {
    if (productSku) {
      setValues(productSku.specPro)
      setPreviewArr(productSku.specPro.images)
      setimgIds(productSku.specPro.imgIds)
    }
  }, [productSku])

  useEffect(() => {
   if (productSku.specPro) {
      //console.log(productSku.specPro)
      useDisplatch(PerticularCategory(productSku.specPro.categoryID))
   }
  }, [productSku.specPro])

  const CategoryAttributes = useSelector(state => {
    //console.log(state.category)
    //recentAddedProduct
    return state.category
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
      [name] : values
    })
    setValues({
      ...values,
      [name] : values
    })
    //prop.editAction(values)
    
    setValues(initialvalues)
    alert("Data successfully inserted")
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
    arr.push(preview)
    setPreviewArr([...arr])

    const fileArrs = fileArr
    fileArrs.push(file.data)
    setFileArr([...fileArrs])
  })
  const renderPreview = () => {
    //console.log(previewArr)
    if (previewArr && previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' height='100rem' src={src} alt='avatar' />)
    } else {
      return null
    }
    return null
  }


  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h4>Edit SKU</h4>
        </Col>
      
      <CardBody className='pl-3 pt-1'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='SKU_ID'>SKU ID</Label>
                <InputGroup>
                  
                  <Input name="productSku" onChange={handleInputeChange} id='productSku' type="text" placeholder='SKU ID' value={values.productSku} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='sku_title'>Title</Label>
                <InputGroup>
                  
                  <Input name="sku_title" onChange={handleInputeChange} id='sku_title' type="text" placeholder='sku_title' value={values.sku_title} />
                </InputGroup>
              </FormGroup>
            </Col>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='MRP'>MRP</Label>
                <InputGroup>
                  
                  <Input name="mrp" onChange={handleInputeChange} id='mrp' type="number" value={values.mrp} placeholder='MRP in INR'/>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md='12' sm='12'><h6>Attributes</h6></Col>
            <>{
              CategoryAttributes.attribute.map(item => {

                return (
                  <Col md='4' sm='12' key={item.id} >
                    <FormGroup>
                      <Label for={item.id}>{item.display_name}</Label>
                      <Select
                          id='{item.id}'
                          className='react-select'
                          classNamePrefix='select'
                          isClearable={false}
                          options={item.value}
                          theme={selectThemeColors}
                          value={values.storeArray ? values.storeArray[item.display_name.split(" ")[0]] : ''}
                          onChange={(data) => {
                            const type = item.display_name.split(" ")[0]
                            setValues({
                              ...values,
                              storeArray: {
                                ...values.storeArray,
                                [type] : {...data, attributeName: item.display_name, attributeID: item.id}
                              }
                            })
                          }}
                        /> 
                    </FormGroup>
                  </Col>
                )
              })
            }</>

            <Col className='m-0 p-0' sm='12'>
                  <CardHeader>
                     <CardTitle tag='h4'>Upload Images</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <DragDrop uppy={uppy} />
                    {renderPreview()}
                    <Button.Ripple className='d-block mb-1 mb-sm-0 mr-0 mr-sm-1 mt-2' type='submit' color='primary' onClick={e => {
                              setPreviewArr([])
                              setFileArr([])
                              setimgIds([])
                            } }>
                      Reset Images
                    </Button.Ripple>
                  </CardBody>
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
export default AddSku
