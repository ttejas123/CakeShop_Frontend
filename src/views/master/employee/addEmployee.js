// ** React Imports
import { useState, useEffect, Fragment } from "react"
import { fileUpload, fileDelete } from "../../../redux/actions/file"
import { useDispatch } from "react-redux"
import Loader from "../../ExCompUse/loader"
import EmployeeEditAddress from "./employeeEditAddress"
// ** Custom Components
import UserAvatar from "../../ExCompUse/UserAvatar"
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
  CustomInput,
  CardHeader,
  CardBody,
  Card,
  CardTitle
} from "reactstrap"
import { Edit } from "react-feather"
import Select from "react-select"
import { selectThemeColors } from "@utils"
import { useForm } from "react-hook-form"
import { createEmplyee } from "../../../redux/actions/master/employee"
import { useHistory } from "react-router-dom"

const EditEmployee = () => {
  const history = useHistory()
  const usedispatch = useDispatch()
  const [isSubmittingAddress, setIsSubmittingAddress] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  const [file, setFile] = useState(null)
  const [values, setValues] = useState()
  const [submitLoading, setSubmitLoading] = useState(false)
  const optionRole = []
  useEffect(() => {
    setValues({
      first_name: "",
      last_name: "",
      postcode: "",
      email: "",
      mobile: "",
      is_onground_staff: false,
      is_active: false,
      emplyee_addresses: [],
      profile_pic: { url: "" }
    })
  }, [usedispatch])
  const { register, errors, control, setValue } = useForm({
    defaultValues: { isOnGround: "Yes", isActive: "Yes", roleAssigned: "Yes" }
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setIsChanged(true)
  }
  const handleSubmit = () => {
    if (isChanged) {
      if (file) {
        usedispatch(fileUpload(file)).then((newDpId) => {
          if (values.profile_pic !== null) usedispatch(fileDelete(values.profile_pic.id))
          usedispatch(
            createEmplyee(
              values.first_name,
              values.last_name,
              values.email,
              values.mobile,
              "123456",
              values.is_onground_staff,
              values.is_active,
              newDpId
            )
          ).then((action) => {
            setValues({ ...values, id: action.payload })
            if (values.emplyee_addresses.length === 0) {
              history.push("/employee-list")
            } else {
              setIsSubmittingAddress(true)
            }
          })
        })
      } else {
        usedispatch(
          createEmplyee(
            values.first_name,
            values.last_name,
            values.email,
            values.mobile,
            "123456",
            values.is_onground_staff,
            values.is_active
          )
        ).then((action) => {
          setValues({ ...values, id: action.payload })
          if (values.emplyee_addresses.length === 0) {
            history.push("/employee-list")
          } else {
            setIsSubmittingAddress(true)
          }
        })
      }
    }
  }

  const onImageChange = (e) => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setValues({ ...values, profile_pic: { ...values.profile_pic, url: reader.result } })
    }
    setFile(files[0])
    setIsChanged(true)
    reader.readAsDataURL(files[0])
  }

  return (
    <Fragment>
      {values && (
        <Card>
          <CardHeader>
            <CardTitle tag="h1">Add / Edit Employee</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm="12">
                <Form onSubmit={(e) => e.preventDefault()}>
                  <Row>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label for="EmployeeNumber">Employee Number</Label>
                        <Input type="text" Number="EmployeeNumber" placeholder="Employee Number" />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                          type="text"
                          id="first_name"
                          name="first_name"
                          placeholder="First Name"
                          value={values.first_name}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                          type="text"
                          id="last_name"
                          name="last_name"
                          placeholder="Last Name"
                          value={values.last_name}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label for="phone">Phone</Label>
                        <Input
                          type="number"
                          id="mobile"
                          name="mobile"
                          placeholder="Phone"
                          value={values.mobile}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <Label for="Role">Role</Label>
                        <div style={{ zIndex: 1000, position: "relative" }}>
                          <Select
                            id="Role"
                            className="react-select"
                            classNamePrefix="select"
                            isClearable={false}
                            options={optionRole}
                            theme={selectThemeColors}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <label className="d-block mb-1">Is OnGround</label>
                        <FormGroup>
                          <CustomInput
                            inline
                            type="radio"
                            label="Yes"
                            value="YesOnGround"
                            id="YesOnGround"
                            name="isOnGround"
                            checked={values.is_onground_staff}
                            onChange={() => {
                              setValues({ ...values, is_onground_staff: true })
                              setIsChanged(true)
                            }}
                          />
                          <CustomInput
                            inline
                            type="radio"
                            label="No"
                            value="NoOnGround"
                            id="NoOnGround"
                            name="isOnGround"
                            checked={!values.is_onground_staff}
                            onChange={() => {
                              setValues({ ...values, is_onground_staff: false })
                              setIsChanged(true)
                            }}
                          />
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <label className="d-block mb-1">Is Active</label>
                        <FormGroup>
                          <CustomInput
                            inline
                            type="radio"
                            label="Yes"
                            value="YesActive"
                            id="YesActive"
                            name="isActive"
                            checked={values.is_active}
                            onChange={() => {
                              setValues({ ...values, is_active: true })
                              setIsChanged(true)
                            }}
                          />
                          <CustomInput
                            inline
                            type="radio"
                            label="No"
                            value="NoActive"
                            id="NoActive"
                            name="isActive"
                            checked={!values.is_active}
                            onChange={() => {
                              setValues({ ...values, is_active: false })
                              setIsChanged(true)
                            }}
                          />
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <FormGroup>
                        <label className="d-block mb-1">Role Assigned</label>
                        <FormGroup>
                          <CustomInput
                            inline
                            type="radio"
                            label="Yes"
                            value="YesRole"
                            id="YesRole"
                            name="roleAssigned"
                            //checked={isActive}
                            //onChange={() => setIsActive(true)}
                          />
                          <CustomInput
                            inline
                            type="radio"
                            label="No"
                            value="NoRole"
                            id="NoRole"
                            name="roleAssigned"
                            //checked={!isActive}
                            //onChange={() => setIsActive(false)}
                          />
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col md="6" sm="12">
                      <Media className="mb-2">
                        <UserAvatar
                          url={values.profile_pic.url}
                          fname={values.first_name}
                          lname={values.last_name}
                          height="90px"
                          width="90px"
                        />
                        <Media className="mt-50" body>
                          <h4> Profile Pic </h4>
                          <div className="d-flex flex-wrap mt-1 px-0">
                            <Button.Ripple
                              id="change-img"
                              tag={Label}
                              className="mr-75 mb-0"
                              color="primary"
                            >
                              <span className="d-none d-sm-block">Change</span>
                              <span className="d-block d-sm-none">
                                <Edit size={14} />
                              </span>
                              <input
                                type="file"
                                hidden
                                id="change-img"
                                onChange={onImageChange}
                                accept="image/*"
                              />
                            </Button.Ripple>
                            <Button.Ripple
                              onClick={() => {
                                setValues({
                                  ...values,
                                  profile_pic: {
                                    ...values.profile_pic,
                                    url: profile_pic
                                  }
                                })
                              }}
                              color="secondary"
                              outline
                            >
                              <span className="d-none d-sm-block">Reset Image</span>
                            </Button.Ripple>
                          </div>
                        </Media>
                      </Media>
                    </Col>
                    {values.emplyee_addresses.map((address, index) => {
                      return (
                        <EmployeeEditAddress
                          setValues={setValues}
                          length={values.emplyee_addresses.length}
                          employeeId={values.id}
                          address={address}
                          key={index}
                          index={index}
                          defaultCountry="select"
                          defaultState="select"
                          defaultCity="select"
                          isSubmittingAddress={isSubmittingAddress}
                          setIsSubmittingAddress={setIsSubmittingAddress}
                        />
                      )
                    })}
                    <Col sm="12">
                      <h4 className="mb-1 mt-2">
                        <Button.Ripple
                          onClick={() => {
                            setValues((state) => {
                              const newAddress = {
                                newAdd: true,
                                address_name: "",
                                area: "",
                                street_name: "",
                                pincode: "",
                                city: {
                                  name: "select",
                                  state: { name: "select", country: { country_name: "select" } }
                                }
                              }
                              state.emplyee_addresses.push(newAddress)
                              return { ...state }
                            })
                          }}
                          color="primary"
                          className="align-middle"
                        >
                          Add Address
                        </Button.Ripple>
                      </h4>
                    </Col>
                    {/* <Col sm='12'>
        <div className='permissions border mt-1'>
          <h6 className='py-1 mx-1 mb-0 font-medium-2'>
            <Lock size={18} className='mr-25' />
            <span className='align-middle'>Permissions</span>
          </h6>
          <Table borderless striped responsive>
            <thead className='thead-light'>
              <tr>
                <th>Module</th>
                <th>Read</th>
                <th>Write</th>
                <th>Create</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>
                  <CustomInput type='checkbox' id='admin-1' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='admin-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='admin-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='admin-4' label='' />
                </td>
              </tr>
              <tr>
                <td>Staff</td>
                <td>
                  <CustomInput type='checkbox' id='staff-1' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='staff-2' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='staff-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='staff-4' label='' />
                </td>
              </tr>
              <tr>
                <td>Author</td>
                <td>
                  <CustomInput type='checkbox' id='author-1' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='author-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='author-3' label='' defaultChecked />
                </td>
                <td>
                  <CustomInput type='checkbox' id='author-4' label='' />
                </td>
              </tr>
              <tr>
                <td>Contributor</td>
                <td>
                  <CustomInput type='checkbox' id='contributor-1' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='contributor-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='contributor-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='contributor-4' label='' />
                </td>
              </tr>
              <tr>
                <td>User</td>
                <td>
                  <CustomInput type='checkbox' id='user-1' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='user-2' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='user-3' label='' />
                </td>
                <td>
                  <CustomInput type='checkbox' id='user-4' label='' defaultChecked />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Col> */}
                    <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
                      <Button.Ripple
                        className="mb-1 mb-sm-0 mr-0 mr-sm-1"
                        type="submit"
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault()
                          setSubmitLoading(true)
                          handleSubmit()
                        }}
                      >
                        {submitLoading ? <Loader /> : "Save Changes"}
                      </Button.Ripple>
                      <Button.Ripple
                        color="secondary"
                        outline
                        onClick={() => {
                          history.push("/employee-list")
                        }}
                      >
                        Cancel
                      </Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </CardBody>
        </Card>
      )}
    </Fragment>
  )
}
export default EditEmployee
