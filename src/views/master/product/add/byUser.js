// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { Add, ProductAttribute } from '@store/actions/master/product'
import { recentAddedProduct } from '@store/actions/master/productSKU'
import { dropdownBrand } from '@store/actions/master/brand'
import { fetchCategories, ParentCategories, ChildCategories } from '@store/actions/master/category'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

// ** Third Party Components
import { Box,  AtSign } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ByUserTab = () => {
    const optionCategory = []
    const optionBrandSelection = []

    const optionProductCategory = []
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
    const useDisplatch = useDispatch()
    useEffect(() => {
      useDisplatch(ParentCategories())
      useDisplatch(dropdownBrand())
      useDisplatch(ProductAttribute())
    }, [useDisplatch])
    const DataTableD = useSelector(state => {
      //console.log(state.category)
      return state.category
    })
    const BrandDrop = useSelector(state => {
      //console.log(state.category)
      return state.brands
    })
    const productAtt = useSelector(state => {
      //console.log(state.product.attribute)
      return state.product
     })
 // console.log(selectedUser)

  const initialvalues = {}

  //const [subCategoryOptions, setSubCatOptions] = useState(optionSubCategory[0])
  //const [SpecificationsData, setSpecificationsData] = useState(optionSubCategory[0][0].specs)
  //console.log(SpecificationsData)
  const [values, setValues] = useState(initialvalues)
  
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues({
      ...values,
      [name] : value
    })
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
  const [fileArr, setFileArr] = useState([])
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
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }


  return (
    <Row>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='name'>Name</Label>
          <Input type='text' name='name' onChange={handleInputeChange} id='name' placeholder='Name' defaultValue={userData && userData.name} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='ean_upc_code'>EAN UPC Code</Label>
          <Input type='text' name='ean' onChange={handleInputeChange} id='ean_upc_code' placeholder='EAN UPC Code' defaultValue={userData && userData.ean_upc_code} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='hsnCode'>HSN Code</Label>
          <Input type='text' name='hsn' onChange={handleInputeChange} id='hsnCode' placeholder='HSN Code' defaultValue={userData && userData.hsnCode} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='sGstNumber'>SGST (%)</Label>
          <Input type='text' name='sgst' onChange={handleInputeChange} id='sGstNumber' placeholder='SGST (%)' defaultValue={userData && userData.gstNumber} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='cGstNumber'>CGST (%)</Label>
          <Input type='text' name='cgst' onChange={handleInputeChange} id='cGstNumber' placeholder='CGST (%)' defaultValue={userData && userData.gstNumber} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='iGstNumber'>GST (%)</Label>
          <Input type='text' name='gst' onChange={handleInputeChange} id='iGstNumber' placeholder='GST (%)' defaultValue={userData && userData.gstNumber} />
        </FormGroup>
      </Col>
      <Col md='4' sm='12'>
        <FormGroup>
          <Label for='mrp'>MRP</Label>
          <Input type='text' name='mrp' onChange={handleInputeChange} id='mrp' placeholder='Mrp' defaultValue={userData && userData.mrp} />
        </FormGroup>
      </Col>
            {/*<Col md='4' sm='12'>
                                  <FormGroup>
                                    <Label for='attribute'>Select Product Attribute</Label>
                                      <Select
                                        id='attribute'
                                        className='react-select'
                                        classNamePrefix='select'
                                        isClearable={false}
                                        isMulti
                                        options={productAtt.attribute}
                                        theme={selectThemeColors}
                                        onChange={data => {
                                                          setValues({
                                                            ...values,
                                                            attribute : data
                                                          })
                                                    }
                                                  }
                                      />
                                  </FormGroup> 
                            </Col>*/}
            <Col md='4' sm='12'>
        <FormGroup>
          <Label for='description'>Description</Label>
          <Input type='textarea' name='description' onChange={handleInputeChange} id='description' placeholder='Description' defaultValue={userData && userData.description} />
        </FormGroup>
      </Col>
      <Col md='12' sm='12'>
        <h4 className='d-block mb-1'>
            < AtSign size={20} className='mr-50' />
            <span className='align-middle'>Category</span>
        </h4>
      </Col>

      <Col md='4' sm='12'>
          <FormGroup>
                  <Label for='Category'>Category</Label>
                <Select
                  id='Category'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={DataTableD.categorys.parent}
                  theme={selectThemeColors}
                  onChange={data => {
                                    useDisplatch(ChildCategories(data.id, 0))
                                    setValues({
                                      ...values,
                                      category : data.id
                                    })      
                              }
                            }
                />
          </FormGroup> 
      </Col>
      {Object.keys(DataTableD.subcategorys).map((val, index) => {
          return (
                <Col md='4' sm='12'>
                    <FormGroup style={{zIndex:1000, position:'relative'}}>
                        <Label for='SubCategory'>Sub Category {index}</Label>
                          <Select

                            id='SubCategory'
                            className='react-select'
                            classNamePrefix='select'
                            isClearable={false}
                            options={DataTableD.subcategorys[val]}
                            theme={selectThemeColors}
                            onChange={data => {
                                              useDisplatch(ChildCategories(data.id, index + 1))
                                              setValues(
                                                        {
                                                           ...values,
                                                           category : data.id
                                                        } 
                                              )
                                                //setSpecificationsData(data.specs)
                                              }
                                      }
                          />
                    </FormGroup> 
                </Col>
        )
      })}

      <Col sm='12'>
          <h4 className='d-block mb-1'>
            < AtSign size={20} className='mr-50' />
            <span className='align-middle'>Brand</span>
          </h4>
          <Row>
                <Col md='4' sm='12'>
                    <FormGroup>
                            <Label for='sku'>Brand</Label>
                          <Select
                            id='brandSelection'
                            className='react-select'
                            classNamePrefix='select'
                            isClearable={false}
                            options={BrandDrop.brands}
                            theme={selectThemeColors}
                            
                            onChange={data => {
                                              setValues({
                                                ...values,
                                                brand: data.id
                                              })
                                              // setValues(
                                              //          {
                                              //             ...values,
                                              //             brandSelection : data
                                              //          } 
                                              //          //seller brand
                                              //  )
                                                
                                              }
                                      }
                    />
                    </FormGroup> 
                </Col>
                <Col md='4' sm='12'>
                    <FormGroup >
                            <Label for='Not in Brand'>No Brand Listed</Label>
                            <CustomInput  type='checkbox' id='exampleCustomCheckbox' label='Seller Brand' />
                    </FormGroup> 
                </Col>
          </Row>
      </Col> 
          {/*<Col sm='12'>
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
                    }   */}
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
              <Button.Ripple tag={Link} to='/master/product/create-sku' className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary' onClick={() => { 
                // console.log({
                //   ...values,
                //   img: fileArr
                // })
                // useDisplatch(recentAddedProduct(
                //   {
                //   ...values,
                //   img: fileArr
                // }))
                useDisplatch(Add({
                  ...values,
                  img: fileArr
                }, useDisplatch, recentAddedProduct))
              }
              }>
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
