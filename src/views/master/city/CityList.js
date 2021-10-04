// ** React Imports
import { Fragment, useState, useEffect } from "react"
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"

// Redux imports
import { useDispatch, useSelector } from "react-redux"
import { fetchCities, updateCity, addCity, deleteCity } from "@store/actions/master/city"

// ** Table Columns
import { cityData } from "./data"

// ** Third Party Components
import CustomPagination from "../../ExCompUse/ReactPagination"
import Loader from "../../ExCompUse/loader"
import { FormattedMessage } from "react-intl"
import DataTable from "react-data-table-component"
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus } from "react-feather"
import {
  Card,
  CardHeader,
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Row,
  Col,
  Label,
  Input,
  Spinner
} from "reactstrap"
//import InputBasic from './AddCity'
import HorizontalForm from "./AddCity"
import EditForm from "./EditCity"

const CityList = () => {
  const usedispatch = useDispatch()
  //** CITY DATA fetched from back end
  const cities = useSelector((state) => {
    return state.city
  })
  //** FETCHING cities on component load
  useEffect(() => {
    usedispatch(fetchCities(5, 0))
    //** RESETTING state when component unmounts
    return () => usedispatch({ type: "cities_reset_city_list" })
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
  const handleSubmitOfAdd = (data) => {
    if (data.city === "") {
      return
    }
    const { city, stateId } = data
    usedispatch(addCity(city, stateId))
    usedispatch(fetchCities(5, currentPage * 5))
    setAddClicked(!addClicked)
  }

  //** Function to handle submission of data
  const handleSubmitOfEdit = (data) => {
    if (!data.city) {
      return setEditClicked(!editClicked)
    }
    const { city, stateId, whereId } = data
    usedispatch(updateCity(city, stateId, whereId))
    usedispatch(fetchCities(5, currentPage * 5))
    setEditClicked(!editClicked)
  }

  const handleDelete = (data) => {
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      usedispatch(deleteCity(data.id)).then(() => {
        if (cities.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchCities(5, num)).then(() => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchCities(5, currentPage * 5))
        }
      })
    } else {
      console.log("not deleted ")
    }
  }

  const cityColumns = [
    {
      name: "City Name",
      selector: "name",
      sortable: false,
      minWidth: "250px"
    },
    {
      name: "State",
      selector: "state",
      sortable: true,
      minWidth: "250px"
    },
    {
      name: "Country",
      selector: "country",
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

  // ** Custom Pagination Component
  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">City List</CardTitle>
          <Button className="ml-2" color="primary" onClick={handleAddClick}>
            <Plus size={15} />
            <span className="align-middle ml-50">Add city</span>
          </Button>
        </CardHeader>
        {addClicked ? (
          <HorizontalForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd} />
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
                usedispatch(fetchCities(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchCities(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>
        {cities.fetchCitiesLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              selectableRowsNoSelectAll
              columns={cityColumns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={cities.data}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={cities}
          dispachReq={fetchCities}
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

export default CityList
