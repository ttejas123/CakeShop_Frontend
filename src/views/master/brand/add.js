// ** React Imports
import { ReactSortable } from "react-sortablejs"
import { useParams } from "react-router-dom"
import Repeater from "@components/repeater"
import Select from "react-select"
import { DragDrop } from "@uppy/react"
import { selectThemeColors, isObjEmpty } from "@utils"
import { useState, useEffect } from "react"
import Flatpickr from "react-flatpickr"
import { useHistory } from "react-router"
import { addBrand } from "@store/actions/master/brand"
import { fileUpload } from "../../../redux/actions/file"
import Loader from "../../ExCompUse/loader"
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
import Uppy from "@uppy/core"
import thumbnailGenerator from "@uppy/thumbnail-generator"
import "@styles/react/apps/app-users.scss"
import "@uppy/status-bar/dist/style.css"
import "@styles/react/libs/file-uploader/file-uploader.scss"
import "uppy/dist/uppy.css"
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
import { useDispatch, useSelector } from "react-redux"
const UserAccountTab = (props) => {
  const usedispatch = useDispatch()
  useEffect(() => {
    return () => usedispatch({ type: "brand_reset_edit_add" })
  }, [usedispatch])
  const loading = useSelector((state) => state.brands.addBrandLoading)
  const [name, setName] = useState("")
  const [logo, setLogo] = useState(null)
  const [file, setFile] = useState(null)
  const uppy1 = new Uppy({
    meta: { type: "avatar" },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy1.use(thumbnailGenerator)

  uppy1.on("thumbnail:generated", (file, preview) => {
    setFile(file)
    setLogo(preview)
  })
  const handleInputeChange = (event) => {
    const { value } = event.target
    console.log(value)
    setName(value)
  }
  const history = useHistory()
  const submitHandle = (event) => {
    usedispatch({ type: "add_brand_loading" })
    usedispatch(fileUpload(file)).then((newDpId) => {
      usedispatch(addBrand(name, newDpId)).then(() => {
        history.push("/brand")
      })
    })
  }

  return (
    <Card>
      <Row>
        <Col sm="12" className="pl-5 pt-2">
          <h2 className="mb-1">Add Your Brand</h2>
        </Col>

        <CardBody className="pl-3 pt-2">
          <Col sm="12">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col md="7" sm="12">
                  <FormGroup>
                    <Label for="Name">Brand Name</Label>
                    <InputGroup>
                      <Input
                        name="Name"
                        onChange={handleInputeChange}
                        id="Name"
                        type="text"
                        value={name}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>

                <Col md="6" sm="12" className="pl-0">
                  <FormGroup>
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Brand Logo/Image</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <DragDrop uppy={uppy1} />
                        {logo !== null ? (
                          <img className="rounded mt-2 ml-1" src={logo} alt="avatar" />
                        ) : null}
                      </CardBody>
                    </Card>
                  </FormGroup>
                </Col>

                <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
                  <Button.Ripple
                    className="mb-1 mb-sm-0 mr-0 mr-sm-1"
                    onClick={(e) => {
                      e.preventDefault()
                      submitHandle(e)
                    }}
                    color="primary"
                  >
                    {loading ? <Loader color="light" /> : "Submit"}
                  </Button.Ripple>
                  {!loading && (
                    <Button.Ripple
                      color="secondary"
                      onClick={() => setValues(initialvalues)}
                      outline
                    >
                      Reset
                    </Button.Ripple>
                  )}
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
