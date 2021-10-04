// ** Custom Components
import Avatar from "@components/avatar"
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react"

import Loader from "../../ExCompUse/loader"
import {
  fetchStates,
  addState,
  editState,
  delete__State
} from "../../../redux/actions/master/state"

// ** Table Data & Columns
import { data } from "./data"

// ** Add New Modal Component
import AddForm from "./AddState"
import EditForm from "./EditState"
import CustomPagination from "../../ExCompUse/ReactPagination"

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
import { useDispatch, useSelector } from "react-redux"

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {
  const usedispatch = useDispatch()
  //** CITY DATA fetched from back end
  const states = useSelector((state) => {
    return state.states
  })
  //** FETCHING cities on component load
  useEffect(() => {
    usedispatch(fetchStates(5, 0))
    //** RESETTING state when component unmounts
    return () => usedispatch({ type: "states_reset_list_page" })
  }, [usedispatch])

  //** Pagination state
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageForSearch, setCurrentPageForSearch] = useState(0)
  useEffect(() => {
    setCurrentPageForSearch(currentPage)
  }, [currentPage])

  //** state when city is added or edited or cancelled editing or adding
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)

  //** state for sending props to edit component
  const [editData, setEditData] = useState({})

  //** Function to open add city component
  const handleAddClick = () => {
    if (!editClicked) {
      setAddClicked(!addClicked)
    }
  }

  //** Function to open edit city component
  const handleEditClick = (item) => {
    if (!addClicked) {
      setEditClicked(!editClicked)
      setEditData(item)
    }
  }

  //** Function to handle cancel of edit city
  const handleCancelOfEdit = () => {
    setEditClicked(!editClicked)
  }

  //** Function to handle cancel of add city
  const handleCancelOfAdd = () => {
    setAddClicked(!addClicked)
  }

  //** Function to handle submit of add data
  const handleSubmitOfAdd = ({ state, countryId }) => {
    if (state === "") return
    usedispatch(addState(state, countryId))
    usedispatch(fetchStates(5, currentPage * 5))
    setAddClicked(!addClicked)
  }

  //** Function to handle submission of data
  const handleSubmitOfEdit = ({ whereId, countryId, state }) => {
    if (!state) return
    usedispatch(editState(whereId, state, countryId))
    usedispatch(fetchStates(5, currentPage * 5))
    setEditClicked(!editClicked)
  }

  const handleDelete = (data) => {
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      usedispatch(delete__State(data.id)).then(() => {
        if (states.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchStates(5, num)).then(() => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchStates(5, currentPage * 5))
        }
      })
    } else {
      console.log("not deleted ")
    }
  }

  const stateColumns = [
    {
      name: "State",
      selector: "StateName",
      sortable: true,
      minWidth: "250px"
    },
    {
      name: "Country",
      selector: "Country",
      sortable: true,
      minWidth: "250px"
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
                    handleDelete(row)
                  }}
                />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Edit
              size={15}
              onClick={(e) => {
                e.preventDefault()
                handleEditClick(row)
              }}
            />
          </div>
        )
      }
    }
  ]

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">States</CardTitle>
          <Button className="ml-2" color="primary" onClick={handleAddClick}>
            <Plus size={15} />
            <span className="align-middle ml-50">Add State</span>
          </Button>
        </CardHeader>
        {addClicked ? (
          <AddForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd} />
        ) : null}
        {editClicked ? (
          <EditForm
            data={editData}
            handleCancel={handleCancelOfEdit}
            handleSubmit={handleSubmitOfEdit}
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
                usedispatch(fetchStates(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchStates(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>
        {states.fetchStatesLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              selectableRowsNoSelectAll
              columns={stateColumns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={states.data}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={states}
          dispachReq={fetchStates}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {/* <CardFooter>
        <CardText className='mb-0'>
          <span className='font-weight-bold'>Note:</span>{' '}
          <span>Use Intl Dropdown in Navbar to change table language</span>
        </CardText>
      </CardFooter> */}
      </Card>
    </Fragment>
  )
}

export default DataTableWithButtons
