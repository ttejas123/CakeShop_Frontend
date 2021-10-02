// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import Uppy from '@uppy/core'
import { Link } from 'react-router-dom'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import AutoComplete from '@components/autocomplete'
// ** Custom Components
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import Select from 'react-select'
import { dropdownBrand } from '@store/actions/master/brand'
import { fetchCategories, ParentCategories, ChildCategories } from '@store/actions/master/category'
import { List, DeleteCataloge, catProductList, productSkuList, productSkuPrefetchData, createCat } from '@src/redux/actions/master/catalogue/index.js'

import { selectThemeColors, isObjEmpty } from '@utils'
import WarehouseAddressCard from './warehouseCard'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
//import { Create } from '@store/actions/Catalogue'
import { useSelector, useDispatch } from 'react-redux'
// ** Third Party Components
import { Box,  AtSign, Aperture, Check, Info } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody,  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ErrorToast = () => (
  <Fragment>
   <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Success!</h6>
      </div>
      <small className='text-muted'>Just now</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        Thanks for Submitting, We will verify your product within 48 hrs
      </span>
    </div>
  </Fragment>
)

const ByUserTab = () => {
  const dispatch = useDispatch()
  const WarehouseAddress = {
    title : '1',
    shopName: "Eagles",
    shopNumber: "A/35, 0/4",
    streetName: "sector-15",
    pincode: 400708,
    state: "Maharashtra",
    city: "Airoli",
    country: "India"
  }

 // console.log(selectedUser)

  const initialvalues = {
    custom: false,
    sampling: false
  }

  const [brandModal, setBrandModal] = useState(false)
  const [brandClicked, setBrandClicked] = useState(false)
  //const [subCategoryOptions, setSubCatOptions] = useState(optionSubCategory[0])
  const [fields, setFields] = useState(false)
  //const [SpecificationsData, setSpecificationsData] = useState(optionSubCategory[0][0].specs)
  const [values, setValues] = useState(initialvalues)
  const [formValues, setFormValues] = useState({})
  const [img, setImg] = useState(null)
  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(ParentCategories())
    useDisplatch(dropdownBrand())
    // useDisplatch(productSkuPrefetchData())
    // useDisplatch(productSkuList())
  }, [useDisplatch])
  const catalogue = useSelector(state => {
      return state.catalogue
  })
  const DataTableD = useSelector(state => {
    //console.log(state.category)
    return state.category
  })
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

  // Image Upload section
  const [previewArr, setPreviewArr] = useState([])
  const [userData, setUserData] = useState(null)
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

  const handleSubmit = () => {
    if (brandClicked) {
    setBrandModal(brandClicked)
    } else {
    toast.error(<ErrorToast />, { hideProgressBar: true })
    }
  }

  return (
    <>
     <Modal isOpen={brandModal} toggle={() => setBrandModal(!brandModal)}>
          <ModalHeader toggle={() => setBrandModal(!brandModal)}>Basic Modal</ModalHeader>
          <ModalBody>
            <h5>Caution</h5>
           You are trying to add an Unbranded product,<br/>
           Please reach bidoya executive for further assistance
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBrandModal(!brandModal)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
    <Card >
        <CardHeader>
  <CardTitle tag='h1'>Create Product</CardTitle>
</CardHeader>

  <CardBody>
  <Row>
    <Col sm='12'>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          

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
                                              useDisplatch(catProductList(data.id))
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
      <Col md='12' sm='12'>
        <h6 className='d-block mb-1 pt-2'>
            < AtSign size={17} className='mr-50' />
            <span className='align-middle'>Select Product and SKU</span>
        </h6>
      </Col>
      <Row className='w-100 pl-1'>
        <Col md='4' sm='12'>
            <FormGroup>
              <Label for='approved_by'>Select Product</Label>
              <Select
                id='approved_by'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={catalogue.productList}
                theme={selectThemeColors}
                
                onChange={data => {
                             useDisplatch(productSkuList(data.id))
                            }
                          }
              /> 
            </FormGroup>  
        </Col>
        <Col md='4' sm='12'>
            <FormGroup>
              <Label for='approved_by'>Select Product SKU</Label>
              <Select
                id='approved_by'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={catalogue.skuList}
                theme={selectThemeColors}
                
                onChange={data => {
                                  setValues({
                                    ...values,
                                    skuId: data.id
                                  })
                                  useDisplatch(productSkuPrefetchData(data.id))
                                  }
                          }
              /> 
            </FormGroup>  
        </Col>
      </Row>
      </Row>
            {
                catalogue.selectedskuProductData.id ? (
                    <Row>
                      <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Info size={20} className='mr-50' />
                    <span className='align-middle'>Identification Information</span>
                  </h4>
                  <Row>
                  <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='eanCode'>EAN Code</Label>
                  <Input type='text' id='eanCode' placeholder='EAN UPC Code' defaultValue={userData && userData.eanCode} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='upcCode'>UPC Code</Label>
                  <Input type='text' disabled id='upcCode' placeholder='EAN UPC Code' value={catalogue.selectedskuProductData.ean_upc_code} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='hsnCode'>HSN Code</Label>
                  <Input type='text' disabled id='hsnCode' placeholder='HSN Code' value={catalogue.selectedskuProductData.hsn_code} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='asinNumber'>ASIN Number</Label>
                  <Input type='text' id='asinNumber' placeholder='ASIN Code' defaultValue={userData && userData.asinNumber} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='buinNumber'>BUIN Number</Label>
                  <Input type='text' id='buinNumber' placeholder='BUIN Code' defaultValue={userData && userData.buinNumber} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='fsnNumber'>FSN Number</Label>
                  <Input type='text' id='fsnNumber' placeholder='FSN Code' defaultValue={userData && userData.fsnNumber} />
                </FormGroup>
              </Col>
              </Row>
              </Col>
              <Col sm='12' className='mt-2'>
                  <h4 className='d-block mb-1'>
                    <Box size={20} className='mr-50' />
                    <span className='align-middle'>General Information</span>
                  </h4>
              </Col>
              
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input type='text' disabled id='name' placeholder='Name' value={catalogue.selectedskuProductData.sku_title} />
                </FormGroup>
              </Col>
              
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='gstNumber'>GST (%)</Label>
                  <Input type='text' disabled id='gstNumber' placeholder='GST (%)' value={catalogue.selectedskuProductData.gst} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='mrp'>MRP</Label>
                  <Input type='text' disabled id='mrp' placeholder='Mrp' value={catalogue.selectedskuProductData.mrp} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='description'>Description</Label>
                  <Input type='textarea' disabled id='description' placeholder='Description' value={catalogue.selectedskuProductData.description} />
                </FormGroup>
              </Col>
              <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Aperture size={20} className='mr-50' />
                    <span className='align-middle'>Bid Details</span>
                  </h4>
                  <Row>
                  <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='moq'>MOQ</Label>
                  <Input type='text' id='moq' name='moq' placeholder='MOQ' onChange={handleInputeChange} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='rate'>Rate</Label>
                  <Input type='text' id='rate' name='rate' placeholder='Rate' onChange={handleInputeChange} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='lead'>Lead</Label>
                  <Input type='text' id='lead' placeholder='lead' name='lead' onChange={handleInputeChange} />
                </FormGroup>
              </Col>
                  </Row>
              </Col> 
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
                                    isDisabled={true}
                                    options={[]}
                                    theme={selectThemeColors}
                                    value={catalogue.selectedskuProductData.brand}
                                    onChange={data => {
                                                       setValues(
                                                                {
                                                                   ...values,
                                                                   brandSelection : data
                                                                } 
                                                                //seller brand
                                                        )
                                                        
                                                      }
                                              }
                            />
                            </FormGroup> 
                        </Col>
                    
                  </Row>
              </Col> 
              <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Aperture size={20} className='mr-50' />
                    <span className='align-middle'>Value Added Services</span>
                  </h4>
                  <Row>
                        <Col md='4' sm='12'>
                        <FormGroup >
                                    <CustomInput  type='checkbox' id='isSamplingAvailable' label='Is Sampling Available' onChange={(e) => {
                                      setValues({
                                        ...values,
                                        sampling: e.target.checked})
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup >
                                    <CustomInput  type='checkbox' id='isCustomizationAvailable' label='Is Customization Available' onChange={(e) => {
                                      setValues({
                                        ...values,
                                        custom: e.target.checked})
                                    }} />
                            </FormGroup> 
                        </Col>
                  </Row>
              </Col> 
              <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Aperture size={20} className='mr-50' />
                    <span className='align-middle'>Inventory</span>
                  </h4>
                  <Row>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='inventory'>Total Inventory</Label>
                      <Input type='text' id='inventory' name='totalInventry' placeholder='Inventory' onChange={handleInputeChange} />
                    </FormGroup>
                  </Col>     
                  </Row>
                  <CardBody>
                <Row>
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  </Row>
                  </CardBody>  
              </Col> 
                  <Col sm='12'>
                    <h4 className='d-block mb-1'>
                      <Box size={20} className='mr-50' />
                      <span className='align-middle'>Specifications</span>
                    </h4>
                  </Col>
                  <>{
                    catalogue.selectedskuProductData.attribute.map(item => {
                      //console.log(item)
                      return (
                        <Col md='4' sm='12' key={item.id} >
                          <FormGroup>
                            <Label for={item.id}>{item.display_name}</Label>
                            <Select
                                id='{item.id}'
                                className='react-select'
                                classNamePrefix='select'
                                isClearable={false}
                                isDisabled={true}
                                options={[]}
                                theme={selectThemeColors}
                                value={item.value}
                              /> 
                          </FormGroup>
                        </Col>
                      )
                    })
                  }</>
                  {/*
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
                  */}   
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
                      <Button.Ripple tag={Link} to='/dashboard/cateloge' className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary' onClick= {() => {
                        useDisplatch(createCat({
                                          ...values,
                                          img: fileArr
                                        }, useDisplatch, List))
                      }
                      }>
                        Save Changes
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline>
                        Reset
                      </Button.Ripple>
                    </Col>
                  </Row>
                ) : null
            } 
        </Form>
      </Col>
    </Row>
    </CardBody>
    </Card>
    </>
  )
}
export default ByUserTab
