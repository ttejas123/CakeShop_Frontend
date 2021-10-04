// ** React Imports
import { useState, useEffect } from "react"
import Select from "react-select"
import thumbnailGenerator from "@uppy/thumbnail-generator"
// ** Custom Components
import { Link } from "react-router-dom"
import Avatar from "@components/avatar"

import { DragDrop } from "@uppy/react"
import { selectThemeColors, isObjEmpty } from "@utils"
//Redux
import { useSelector, useDispatch } from "react-redux"
import { SpecificProduct, EditC, List, ProductAttribute } from "@store/actions/master/product"
// ** Third Party Components
import { dropdownBrand } from "@store/actions/master/brand"
import { fetchCategories, ParentCategories, ChildCategories } from "@store/actions/master/category"
import { Lock, Edit, Trash2, AtSign } from "react-feather"
import {
  Media,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Table,
  CustomInput,
  CardHeader,
  CardBody,
  Card,
  CardTitle
} from "reactstrap"
import { useParams } from "react-router"
import Uppy from "@uppy/core"
import "uppy/dist/uppy.css"
import "@uppy/status-bar/dist/style.css"

const UserAccountTab = () => {
  const optionCategory = []
  const optionBrandSelection = []

  const optionProductCategory = []
  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(ParentCategories())
    useDisplatch(dropdownBrand())
    useDisplatch(ProductAttribute())
  }, [useDisplatch])
  const DataTableDC = useSelector((state) => {
    //console.log(state.category)
    return state.category
  })
  const BrandDrop = useSelector((state) => {
    //console.log(state.category)
    return state.brands
  })
  const { id } = useParams()
  //const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(SpecificProduct(id))
  }, [id])
  const DataTableD = useSelector((state) => {
    //console.log(state.product.attribute)
    return state.product
  })

  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState({})
  const [values, setValues] = useState({})

  // Image Upload section
  const [previewArr, setPreviewArr] = useState([])
  const [fileArr, setFileArr] = useState([])
  const [imgIds, setimgIds] = useState([])
  const uppy = new Uppy({
    meta: { type: "avatar" },
    autoProceed: true,
    totalProgress: 0
  })

  uppy.use(thumbnailGenerator)

  uppy.on("thumbnail:generated", (file, preview) => {
    // console.log(file.data)
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])

    const fileArrs = fileArr
    fileArrs.push(file.data)
    setFileArr([...fileArrs])
  })

  useEffect(() => {
    if (DataTableD) {
      //console.log(DataTableD.specPro)
      setUserData(DataTableD.specPro)
      setPreviewArr(DataTableD.specPro.images)
      setimgIds(DataTableD.specPro.imgIds)
    }
  }, [DataTableD])
  // ** Function to change user image
  const onChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files
    setUserData({
      ...userData,
      imgID: null,
      imgFile: files
    })
    reader.onload = function () {
      setImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onChangeHandle = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleInputeChange = (event) => {
    const { name, value } = event.target

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const renderPreview = () => {
    //console.log(previewArr)
    if (previewArr && previewArr.length) {
      return previewArr.map((src, index) => (
        <img key={index} className="rounded mt-2 mr-1" height="100rem" src={src} alt="avatar" />
      ))
    } else {
      return null
    }
    return null
  }

  // ** Update user image on mount or change

  // ** Renders User
  const renderUserAvatar = () => {
    return (
      <img
        className="user-avatar rounded mr-2 my-25 cursor-pointer"
        src={img}
        alt="user profile avatar"
        height="90"
        width="90"
      />
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h1">Edit Product</CardTitle>
      </CardHeader>

      <CardBody>
        <Row>
          <Col sm="12">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col sm="12">
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <Row>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="name">Name</Label>
                          <Input
                            type="text"
                            name="name"
                            onChange={handleInputeChange}
                            id="name"
                            placeholder="Name"
                            defaultValue={userData && userData.name}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="ean_upc_code">EAN UPC Code</Label>
                          <Input
                            type="text"
                            name="ean"
                            onChange={handleInputeChange}
                            id="ean_upc_code"
                            placeholder="EAN UPC Code"
                            defaultValue={userData && userData.ean}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="hsnCode">HSN Code</Label>
                          <Input
                            type="text"
                            name="hsn"
                            onChange={handleInputeChange}
                            id="hsnCode"
                            placeholder="HSN Code"
                            defaultValue={userData && userData.hsn}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="sGstNumber">SGST (%)</Label>
                          <Input
                            type="text"
                            name="sgst"
                            onChange={handleInputeChange}
                            id="sGstNumber"
                            placeholder="SGST (%)"
                            defaultValue={userData && userData.sgst}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="cGstNumber">CGST (%)</Label>
                          <Input
                            type="text"
                            name="cgst"
                            onChange={handleInputeChange}
                            id="cGstNumber"
                            placeholder="CGST (%)"
                            defaultValue={userData && userData.cgst}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="iGstNumber">GST (%)</Label>
                          <Input
                            type="text"
                            name="gst"
                            onChange={handleInputeChange}
                            id="iGstNumber"
                            placeholder="GST (%)"
                            defaultValue={userData && userData.gst}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="mrp">MRP</Label>
                          <Input
                            type="text"
                            name="mrp"
                            onChange={handleInputeChange}
                            id="mrp"
                            placeholder="Mrp"
                            defaultValue={userData && userData.mrp}
                          />
                        </FormGroup>
                      </Col>

                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="description">Description</Label>
                          <Input
                            type="textarea"
                            name="description"
                            onChange={handleInputeChange}
                            id="description"
                            placeholder="Description"
                            defaultValue={userData && userData.description}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="12" sm="12">
                        <h4 className="d-block mb-1">
                          <AtSign size={20} className="mr-50" />
                          <span className="align-middle">
                            Category -- ( {userData.category ? userData.category.label : ""} )
                            current Sellected
                          </span>
                        </h4>
                      </Col>

                      <Col md="4" sm="12">
                        <FormGroup>
                          <Label for="Category">Category</Label>
                          <Select
                            id="Category"
                            className="react-select"
                            classNamePrefix="select"
                            isClearable={false}
                            options={DataTableDC.categorys.parent}
                            theme={selectThemeColors}
                            onChange={(data) => {
                              useDisplatch(ChildCategories(data.id, 0))
                              setUserData({
                                ...userData,
                                category: data
                              })
                            }}
                          />
                        </FormGroup>
                      </Col>
                      {Object.keys(DataTableDC.subcategorys).map((val, index) => {
                        return (
                          <Col md="4" sm="12">
                            <FormGroup style={{ zIndex: 1000, position: "relative" }}>
                              <Label for="SubCategory">Sub Category {index}</Label>
                              <Select
                                id="SubCategory"
                                className="react-select"
                                classNamePrefix="select"
                                isClearable={false}
                                options={DataTableDC.subcategorys[val]}
                                theme={selectThemeColors}
                                onChange={(data) => {
                                  useDisplatch(ChildCategories(data.id, index + 1))
                                  setUserData({
                                    ...userData,
                                    category: data
                                  })
                                  //setSpecificationsData(data.specs)
                                }}
                              />
                            </FormGroup>
                          </Col>
                        )
                      })}
                      <Col sm="12">
                        <h4 className="d-block mb-1">
                          <AtSign size={20} className="mr-50" />
                          <span className="align-middle">Brand</span>
                        </h4>
                        <Row>
                          <Col md="4" sm="12">
                            <FormGroup>
                              <Label for="sku">Brand</Label>
                              <Select
                                id="brandSelection"
                                className="react-select"
                                classNamePrefix="select"
                                isClearable={false}
                                options={BrandDrop.brands}
                                theme={selectThemeColors}
                                value={userData.brand}
                                onChange={(data) => {
                                  setUserData({
                                    ...userData,
                                    brand: data
                                  })
                                }}
                              />
                            </FormGroup>
                          </Col>

                          <Col md="4" sm="12">
                            <FormGroup>
                              <Label for="Not in Brand">No Brand Listed</Label>
                              <CustomInput
                                type="checkbox"
                                id="exampleCustomCheckbox"
                                label="Seller Brand"
                              />
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
                      <Col sm="12">
                        <CardHeader>
                          <CardTitle tag="h4">Upload Images</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <DragDrop uppy={uppy} />
                          {renderPreview()}
                          <Button.Ripple
                            className="d-block mb-1 mb-sm-0 mr-0 mr-sm-1 mt-2"
                            type="submit"
                            color="primary"
                            onClick={(e) => {
                              e.preventDefault()
                              setPreviewArr([])
                              setFileArr([])
                              // uppy.totalProgress(0)
                            }}
                          >
                            Reset Images
                          </Button.Ripple>
                        </CardBody>
                      </Col>
                      <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
                        <Button.Ripple
                          tag={Link}
                          to="/product-list"
                          className="mb-1 mb-sm-0 mr-0 mr-sm-1"
                          type="submit"
                          color="primary"
                          onClick={() => {
                            // console.log({
                            //   ...userData,
                            //   img: fileArr,
                            //   imgIds
                            // })
                            useDisplatch(
                              EditC(
                                {
                                  ...userData,
                                  img: fileArr,
                                  imgIds
                                },
                                useDisplatch,
                                List
                              )
                            )
                          }}
                        >
                          Save Changes
                        </Button.Ripple>
                        <Button.Ripple color="secondary" outline>
                          Reset
                        </Button.Ripple>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default UserAccountTab
