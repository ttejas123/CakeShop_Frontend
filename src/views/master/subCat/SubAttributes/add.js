// ** React Imports
import { ReactSortable } from "react-sortablejs"
import { useParams } from "react-router-dom"
import Repeater from "@components/repeater"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import {
  fetchAttributes,
  addCategory
} from "../../../../redux/actions/master/subCat/Subattributes/addCategory"
import Select from "react-select"
import Loader from "../../../ExCompUse/loader"
import { selectThemeColors, isObjEmpty } from "@utils"
import { useState, useEffect } from "react"
import Flatpickr from "react-flatpickr"
import {
  MoreVertical,
  User,
  Users,
  Edit,
  Calendar,
  FileText,
  Archive,
  Trash,
  MapPin,
  DollarSign,
  X,
  Plus
} from "react-feather"
import { data } from "./data"
import "antd/dist/antd.css"
import { Transfer } from "antd"

// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components

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
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardHeader,
  CardBody,
  Badge,
  ListGroupItem,
  CardTitle,
  CustomInput
} from "reactstrap"

const UserAccountTab = (prop) => {
  const dispatch = useDispatch()
  const [targetKeysA, settargetKeysA] = useState([])
  const [name, setName] = useState("")
  const [isParent, setIsparent] = useState(false)
  const attributes = useSelector((state) => state.editAddCategory.data)
  const loading = useSelector((state) => state.editAddCategory.addCategoryLoading)
  const parentCategories = useSelector((state) => state.editAddCategory.parentCategories)
  const parentCategoriesOptions = parentCategories.map((cat) => {
    return { value: cat.category, label: cat.category, id: cat.id }
  })
  const [parentCategory, setParentCategory] = useState()
  useEffect(() => {
    dispatch(fetchAttributes())
    return () => dispatch({ type: "attributes_edit_add_reset_list" })
  }, [dispatch])

  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1

  const handleChangeInTarg = (targetKeys) => {
    settargetKeysA(targetKeys)
  }

  const handleSearch = (dir, value) => {
    console.log("search:", dir, value)
  }

  //for other input
  const handleInputeChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case "name":
        setName(value)
    }
  }
  const history = useHistory()
  const submitHandle = (event) => {
    dispatch(addCategory(name, isParent, targetKeysA, parentCategory && parentCategory.id))
    history.push("/master/subattribute")
  }

  const handleInput = (i, e) => {
    const { name, value } = event.target
    const val = [...values.subCat]
    val[i] = value
    setValues({
      ...values,
      subCat: val
    })
  }

  const deleteForm = (e, index) => {
    e.preventDefault()
    const val = values.subCat
    val.splice(index, 1)
    setValues({
      ...values,
      subCat: [...val]
    })
  }
  return (
    <Card>
      <Row>
        <Col sm="12" className="pl-5 pt-2">
          <h2 className="mb-1">Add Your Category</h2>
        </Col>

        <CardBody className="pl-3 pt-2">
          <Col sm="12">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="Name">Category</Label>
                    <InputGroup>
                      <Input
                        name="name"
                        onChange={handleInputeChange}
                        id="name"
                        placeholder="Category Name"
                        value={name}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="d-flex justify-content-left align-items-center">
                    <CustomInput
                      type="switch"
                      value={isParent}
                      id="exampleCustomSwitch"
                      name="customSwitch"
                      label="Is This A Parent Category"
                      onClick={() => {
                        setIsparent(!isParent)
                      }}
                      inline
                    />
                    {!isParent && (
                      <Select
                        id="parentCategory"
                        className="react-select w-50"
                        classNamePrefix="select"
                        isClearable={false}
                        options={parentCategoriesOptions}
                        value={parentCategory}
                        onChange={(data) => setParentCategory(data)}
                        inline
                      />
                    )}
                  </FormGroup>
                  <CustomInput
                    defaultChecked
                    type="switch"
                    id="exampleCustomAvail"
                    name="customSwitch"
                    label="Customization Available"
                    inline
                  />
                </Col>

                <Col md="12" sm="12">
                  {/*values.subCat.map((val, i) => {
                    return (
                      <Form key={i} onSubmit={(e) => e.preventDefault()}>
                        <Row className="justify-content-between align-items-center">
                          <Col md={6} className="mt-1">
                            <FormGroup>
                              <Label for={`item-name-${i}`}>Sub Category Name</Label>

                              <Select
                                id="BidStatus"
                                className="react-select"
                                classNamePrefix="select"
                                isClearable={false}
                                options={optionSubC}
                                theme={selectThemeColors}
                                value={values.subCat[i]}
                                onChange={(data) => {
                                  const val = [...values.subCat]
                                  val[i] = data
                                  setValues({
                                    ...values,
                                    subCat: val
                                  })
                                }}
                              />
                            </FormGroup>
                          </Col>

                          <Col md={4} className="mt-2">
                            <Button.Ripple
                              color="danger"
                              className="text-nowrap px-1"
                              onClick={(e) => deleteForm(e, i)}
                              outline
                            >
                              <X size={14} className="mr-50" />
                              <span>Delete</span>
                            </Button.Ripple>
                          </Col>
                        </Row>
                      </Form>
                    )
                  })}
                  {values.Cat === "" ? null : (
                    <div className="mt-1">
                      Pathing: <b>{values.Cat} </b> >{" "}
                      {values.subCat[0] ? <b> {values.subCat[0].value} </b> : null}{" "}
                    </div>
                  )*/}
                  <hr />
                </Col>

                <Col>
                  <h3 className="mb-2 mt-2"> Select Attributes </h3>
                  <Transfer
                    dataSource={attributes}
                    showSearch
                    filterOption={filterOption}
                    targetKeys={targetKeysA}
                    onChange={handleChangeInTarg}
                    onSearch={handleSearch}
                    render={(item) => item.title}
                  />
                </Col>

                <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
                  <Button.Ripple
                    className="mb-1 mb-sm-0 mr-0 mr-sm-1"
                    onClick={(e) => {
                      e.preventDefault()
                      submitHandle()
                    }}
                    color="primary"
                  >
                    {loading ? <Loader /> : "Save Changed"}
                  </Button.Ripple>
                  <Button.Ripple color="secondary" onClick={() => setValues(initialvalues)} outline>
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
