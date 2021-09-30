import { useParams } from 'react-router-dom'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'

import { useSelector, useDispatch } from 'react-redux'
// import { AllProductList } from '@store/actions/master/product'

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'
import { PerticularCategory } from '@store/actions/master/category'
import { Add, productSpecificSkuList } from '@store/actions/master/productSKU'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import ProductSkuDataTable from './productSkuDatatable'
const AddSku = (prop) => {
  const {id} = useParams()

  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(productSpecificSkuList(5, 0, id))
  }, [id])
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

  const DataAttribute = useSelector(state => {
    //console.log(state.product)
    //recentAddedProduct
    return state.product
  })

  useEffect(() => {
   if (DataAttribute.specPro && DataAttribute.specPro.category) {
      useDisplatch(PerticularCategory(DataAttribute.specPro.category.id))
   }
  }, [DataAttribute.specPro])

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
    setValues({
      ...values,
      [name] : values
    })
    
    setValues(initialvalues)
  }

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
    <>
    <Card>
    <Row>
      
      <CardBody>
      <Col sm='12' >
          <h4 className="mb-1">Add SKU For {DataAttribute.recentAddedProduct ? DataAttribute.recentAddedProduct.name : ""}</h4>
      </Col>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='SKU_ID'>SKU ID</Label>
                <InputGroup>
                  
                  <Input name="skuid" onChange={handleInputeChange} id='SKU_ID' type="text" placeholder='SKU ID' value={values.SKU_ID} />
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
                  
                  <Input name="mrp" onChange={handleInputeChange} id='MRP' type="number" placeholder='MRP in INR'/>
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
                            } }>
                      Reset Images
                    </Button.Ripple>
                  </CardBody>
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle(e)
                                                          // console.log({...values,
                                                          //   img: fileArr,
                                                          //   productID: id})
                                                          useDisplatch(Add({...values,
                                                            img: fileArr,
                                                            productID: id}, useDisplatch, productSpecificSkuList))
                                                          setFileArr([])
                                                          setPreviewArr([])
                                                          setValues({})
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
    <ProductSkuDataTable productID={DataAttribute.specPro.id} />
    
    </>
  )
}
export default AddSku
