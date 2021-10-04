// ** Custom Components
import Avatar from "@components/avatar"
import { Link } from "react-router-dom"
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"
import { fileDelete } from "../../../redux/actions/file"
// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchBrands, deleteBrand } from "../../../redux/actions/master/brand"
// ** Table Data & Columns
import { data } from "./data"

// ** Add New Modal Component
import ModelForm from "./formModel"
import CustomPagination from "../../ExCompUse/ReactPagination"

// ** Third Party Components
import ReactPaginate from "react-paginate"
import Loader from "../../ExCompUse/loader"
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
  CardHeader,
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

const DataTableWithButtons = () => {
  const usedispatch = useDispatch()
  const brands = useSelector((state) => state.brands)

  useEffect(() => {
    usedispatch(fetchBrands(5, 0))
    return () => usedispatch({ type: "brands_reset_list" })
  }, [usedispatch])

  //** Pagination state
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageForSearch, setCurrentPageForSearch] = useState(0)
  useEffect(() => {
    setCurrentPageForSearch(currentPage)
  }, [currentPage])

  // ** States
  const [currentId, setCurrentId] = useState("")
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  // ** Function to handle toggle
  const handleModal = () => {
    if (addClicked === 1) {
      setAddClicked(0)
    } else {
      setAddClicked(1)
    }
  }

  //deleteCountry
  const handleDelete = (id, logoID) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      usedispatch(deleteBrand(id, logoID)).then(() => {
        usedispatch(fileDelete(logoID))
        if (brands.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchBrands(5, num)).then(() => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchBrands(5, currentPage * 5))
        }
      })
    } else {
      console.log("not deleted ")
    }
  }
  //edit action
  const AddeditEvent = (val) => {
    //here we hande event which comming from addNewModel.js (Form for add and edit)
    console.log(currentId)
    setCurrentId("")
    console.log(val)
  }

  //columns
  const columns = [
    {
      name: "Brand Logo",
      selector: "Logo",
      sortable: true,
      minWidth: "250px",
      cell: (row) => (
        <div className="d-flex align-items-center">
          <div className="user-info text-truncate ml-1">
            <span className="d-block font-weight-bold text-truncate">
              <img height="40rem" src={row.logo} alt={row.Name} />
            </span>
          </div>
        </div>
      )
    },
    {
      name: "Brand Name",
      selector: "Name",
      sortable: true,
      minWidth: "250px",
      cell: (row) => {
        return (
          <div className="d-flex align-items-center">
            <div className="user-info text-truncate ml-1">
              <span className="d-block font-weight-bold text-truncate">{row.Name}</span>
            </div>
          </div>
        )
      }
    },
    {
      name: "Actions",
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className="d-flex">
            <UncontrolledDropdown>
              <DropdownToggle className="pr-1" tag="span">
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  tag="a"
                  href="/"
                  className="w-100"
                  onClick={(e) => {
                    e.preventDefault()
                    handleDelete(row.id, row.logoID)
                  }}
                >
                  <Trash size={15} />
                  <span className="align-middle ml-50">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link to={`/master/branda/edit/${row.id}`}>
              <Edit size={15} />
            </Link>
          </div>
        )
      }
    }
  ]

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Brand List</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <Link to={`/master/branda/add`}>
              <Button className="ml-2" color="primary" onClick={handleModal}>
                <Plus size={15} />
                <span className="align-middle ml-50">Add Your Brand</span>
              </Button>
            </Link>
          </div>
        </CardHeader>
        {addClicked ? (
          <ModelForm
            handleModal={handleModal}
            editAction={AddeditEvent}
            currentId={currentId}
            data={brands.data}
          />
        ) : null}
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
                usedispatch(fetchBrands(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchBrands(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>
        {brands.fetchBrandsLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              selectableRows
              columns={columns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={brands.data}
              selectableRowsComponent={BootstrapCheckbox}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={brands}
          dispachReq={fetchBrands}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Card>
    </Fragment>
  )
}

export default DataTableWithButtons
