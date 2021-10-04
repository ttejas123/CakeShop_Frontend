// ** Custom Components
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import { Link } from "react-router-dom"
import axios from "axios"
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchAttributes, deleteCategory } from "@store/actions/master/subCat/Subattributes"
import CustomPagination from "../../../ExCompUse/ReactPagination"
import Loader from "../../../ExCompUse/loader"

import { selectThemeColors } from "@utils"
// ** Table Data & Columns
import { data } from "./data"
import Select from "react-select"

// ** Add New Modal Component
import Response from "./viewSubAttr"

// ** Third Party Components
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import {
  ChevronDown,
  Share,
  Printer,
  File,
  Grid,
  Copy,
  Plus,
  MoreVertical,
  Edit,
  FileText,
  Archive,
  Trash
} from "react-feather"
import {
  Card,
  CardText,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col,
  Badge,
  UncontrolledDropdown
} from "reactstrap"

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

// ** Renders Client Columns
const renderClient = (row) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      "light-success",
      "light-danger",
      "light-warning",
      "light-info",
      "light-primary",
      "light-secondary"
    ],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className="mr-1" img={row.avatar} width="32" height="32" />
  } else {
    return (
      <Avatar
        color={color || "primary"}
        className="mr-1"
        content={row.Name || "John Doe"}
        initials
        status="online"
      />
    )
  }
}

const optionSubAttribute = [
  { value: "", label: "Filter Status" },
  { value: "created", label: "created" },
  { value: "live", label: "live" },
  { value: "extended", label: "extended" },
  { value: "closed", label: "closed" },
  { value: "rejected", label: "rejected" },
  { value: "auto closed", label: "auto closed" }
]

const DataTableWithButtons = () => {
  const usedispatch = useDispatch()
  const attributes = useSelector((state) => state.SubAttributes)
  useEffect(() => {
    usedispatch(fetchAttributes(5, 0))
    return () => usedispatch({ type: "category_reset_list" })
  }, [usedispatch])

  //** Pagination state
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageForSearch, setCurrentPageForSearch] = useState(0)
  useEffect(() => {
    setCurrentPageForSearch(currentPage)
  }, [currentPage])

  // ** States
  const [modal, setModal] = useState(false)
  const [responseModel, setResponseModel] = useState(false)
  const [reviewId, setreviewId] = useState(0)

  //deleteCountry
  const handleDelete = (id) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      usedispatch(deleteCategory(id)).then(() => {
        if (attributes.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchAttributes(5, num)).then(() => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchAttributes(5, currentPage * 5))
        }
      })
    } else {
      console.log("not deleted ")
    }
  }
  //edit action
  const AddeditEvent = (val) => {
    //here we hande event which comming from addNewModel.js (Form for add and edit)
    setCurrentId("")
    console.log(val)
  }

  //columns
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      minWidth: "50px",
      maxWidth: "200px"
    },
    {
      name: "Attributes",
      selector: "subAttributes",
      minWidth: "150px",
      cell: (row) => (
        <div key={row.id} className="d-flex align-items-center">
          <div className="user-info text-truncate">
            <span className="d-block font-weight-bold text-truncate d-flex ">
              {row.subAttributes.map((val, index) => {
                if (index < 1) {
                  return <div className="mr-1">{val.title}</div>
                }
              })}
              {row.subAttributes.length > 1 ? (
                <u>
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => {
                      setreviewId(
                        attributes.data[attributes.data.findIndex((e) => e.id === row.id)]
                      )
                      setResponseModel(true)
                    }}
                  >
                    view
                  </span>
                </u>
              ) : null}
            </span>
          </div>
        </div>
      )
    },
    {
      name: "Category",
      selector: "Cat",
      sortable: true,
      minWidth: "130px",
      cell: (row) => (
        <div key={row.id} className="d-flex align-items-center">
          <div className="user-info text-truncate">
            <span className="d-block font-weight-bold text-truncate">{row.Cat}</span>
          </div>
        </div>
      )
    },
    {
      name: "Sub Category",
      selector: "subCat",
      sortable: true,
      minWidth: "130px",
      cell: (row) => (
        <div key={row.id} className="d-flex align-items-center">
          <div className="user-info text-truncate">
            <span className="d-block font-weight-bold text-truncate">{row.subCat[0].value}</span>
          </div>
        </div>
      )
    },
    {
      name: "Actions",
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className="d-flex">
            <UncontrolledDropdown>
              <DropdownToggle className="pr-1" tag="span">
                <Trash
                  size={15}
                  onClick={(e) => {
                    e.preventDefault()
                    handleDelete(row.id)
                  }}
                />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Link to={`/master/Sub/addE/${row.id}`}>
              <Edit size={15} />
            </Link>
          </div>
        )
      }
    }
  ]

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  const handleResponse = () => {
    setResponseModel(!responseModel)
  }
  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Category</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <Link to={`/master/sub/add`}>
              <Button className="ml-2" color="primary" onClick={handleModal}>
                <Plus size={15} />
                <span className="align-middle ml-50">Add Category</span>
              </Button>
            </Link>
          </div>
        </CardHeader>

        <Row className="justify-content-end mx-0">
          <Col className="d-flex align-items-center justify-content-end mt-1" md="6" sm="12">
            <Label className="mr-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              onChange={(e) => {
                usedispatch(fetchAttributes(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchAttributes(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>

        {attributes.fetchAttributesLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              columns={columns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={attributes.data}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={attributes}
          dispachReq={fetchAttributes}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Card>
      <Response
        open={responseModel}
        handleModal={handleResponse}
        currentId={reviewId}
        data={attributes.data}
      />
    </Fragment>
  )
}

export default DataTableWithButtons
