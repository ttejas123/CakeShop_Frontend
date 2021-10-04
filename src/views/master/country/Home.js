// ** Custom Components
import Avatar from "@components/avatar"
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from "axios"
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"
import CustomPagination from "../../ExCompUse/ReactPagination"
import Loader from "../../ExCompUse/loader"

// ** React Imports
import { Fragment, useState, useEffect, forwardRef } from "react"

// ** Table Data & Columns

// ** Add New Modal Component
import AddNewModal from "./AddNewModal"

//Redux
import { useSelector, useDispatch } from "react-redux"
import { fetchCountries, deleteCountry } from "@store/actions/master/country"

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
  // ** States
  const [modal, setModal] = useState(false)
  const [currentId, setCurrentId] = useState("")

  const usedispatch = useDispatch()

  useEffect(() => {
    usedispatch(fetchCountries(5, 0))
  }, [usedispatch])
  const countries = useSelector((state) => {
    return state.country
  })

  //** Pagination state
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageForSearch, setCurrentPageForSearch] = useState(0)
  useEffect(() => {
    setCurrentPageForSearch(currentPage)
  }, [currentPage])
  //deleteCountry
  const handleDelete = (id) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      usedispatch(deleteCountry(id)).then(() => {
        if (countries.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchCountries(5, num)).then(() => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchCountries(5, currentPage * 5))
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
  }

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }
  //columns
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
      minWidth: "250px",
      cell: (row) => (
        <div className="d-flex align-items-center">
          <div className="user-info text-truncate ml-1">
            <span className="d-block font-weight-bold text-truncate">{row.name}</span>
          </div>
        </div>
      )
    },
    {
      name: "initial",
      selector: "country_initial",
      sortable: true,
      minWidth: "250px"
    },
    {
      name: "Code",
      selector: "country_code",
      sortable: true,
      minWidth: "150px"
    },

    {
      name: "Currency",
      selector: "currency",
      sortable: true,
      minWidth: "150px",
      cell: (row) => {
        return (
          <div className="d-flex align-items-center">
            <div className="user-info text-truncate ml-1">
              <span className="d-block font-weight-bold text-truncate">{row.currency}</span>
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
              <div className="pr-1" tag="span">
                <Trash
                  size={15}
                  onClick={(e) => {
                    e.preventDefault()
                    handleDelete(row.id)
                  }}
                />
              </div>
            </UncontrolledDropdown>

            <Edit
              size={15}
              onClick={() => {
                setCurrentId(row.id)
                handleModal()
              }}
            />
          </div>
        )
      }
    }
  ]

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Countries List</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            <Button
              className="ml-2"
              color="primary"
              onClick={() => {
                setCurrentId("")
                handleModal()
              }}
            >
              <Plus size={15} />
              <span className="align-middle ml-50">Add Your Country</span>
            </Button>
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
                usedispatch(fetchCountries(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchCountries(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>

        {countries.fetchCountriesLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              selectableRows
              columns={columns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={countries.data}
              selectableRowsComponent={BootstrapCheckbox}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={countries}
          dispachReq={fetchCountries}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Card>
      {modal && (
        <AddNewModal
          open={modal}
          handleModal={handleModal}
          editAction={AddeditEvent}
          currentId={currentId}
          data={countries.data[countries.data.findIndex((c) => c.id === currentId)]}
        />
      )}
    </Fragment>
  )
}

export default DataTableWithButtons
