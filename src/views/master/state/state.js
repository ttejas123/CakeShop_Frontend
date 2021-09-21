// ** Custom Components
import Avatar from '@components/avatar'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'

import { fetchStates } from '../../../redux/actions/master/state'

// ** Table Data & Columns
import { data } from './data'

// ** Add New Modal Component
import ModelForm from './FormModel'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
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
} from 'react-feather'
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
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

const DataTableWithButtons = () => {
  const start = useSelector((state) => state.states.start)
  const states = useSelector((state) => state.states.states)
  console.log(states)
  const usedispatch = useDispatch()
  useEffect(() => {
    usedispatch(fetchStates(start))
  }, [])
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')

  const [addClicked, setAddClicked] = useState(0)

  //deleteCountry
  const deleteState = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm('Are you sure you want to delete')

    if (userselection === true) {
      console.log(' your record is deleted')
    } else {
      console.log('not deleted ')
    }
  }
  //edit action
  const AddeditEvent = (val) => {
    //here we hande event which comming from addNewModel.js (Form for add and edit)
    console.log(currentId)
    setCurrentId('')
    console.log(val)
  }
  const basicColumns = [
    {
      name: 'ID',
      selector: 'StateName',
      // sortable: true,
      maxWidth: '100px'
    }
  ]

  //columns
  const columns = [
    {
      name: 'StateName',
      selector: 'StateName',
      sortable: true,
      minWidth: '250px',
      cell: (row) => (
        <div className="d-flex align-items-center">
          <div className="user-info text-truncate ml-1">
            <span className="d-block font-weight-bold text-truncate">{row.StateName}</span>
          </div>
        </div>
      )
    },
    {
      name: 'Country',
      selector: 'Country',
      sortable: true,
      minWidth: '250px',
      cell: (row) => {
        return (
          <div className="d-flex align-items-center">
            <div className="user-info text-truncate ml-1">
              <span className="d-block font-weight-bold text-truncate">{row.Country}</span>
            </div>
          </div>
        )
      }
    },
    {
      name: 'Actions',
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
                    deleteState(row.id)
                  }}
                />
              </DropdownToggle>
            </UncontrolledDropdown>

            <Edit
              size={15}
              onClick={() => {
                setCurrentId(row.id)
                setAddClicked(!addClicked)
              }}
            />
          </div>
        )
      }
    }
  ]

  // ** Function to handle toggle
  const handleModal = () => {
    if (addClicked === 1) {
      setAddClicked(0)
    } else {
      setAddClicked(1)
    }
  }

  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value
    let updatedData = []
    console.log(data)
    setSearchValue(value)

    if (value.length) {
      updatedData = states.filter((item) => {
        const startsWith =
          item.StateName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Country.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.StateName.toLowerCase().includes(value.toLowerCase()) ||
          item.Country.toLowerCase().includes(value.toLowerCase())
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = (page) => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : states.length / 7 || 1}
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextLinkClassName="page-link"
      nextClassName="page-item next"
      previousClassName="page-item prev"
      previousLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"
    />
  )

  return (
    <Fragment>
      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">States List</CardTitle>
          <div className="d-flex mt-md-0 mt-1">
            {addClicked === 0 ? (
              <Button className="ml-2" color="primary" onClick={handleModal}>
                <Plus size={15} />
                <span className="align-middle ml-50">Add Your State</span>
              </Button>
            ) : (
              <span></span>
            )}
          </div>
        </CardHeader>
        {addClicked ? (
          <ModelForm
            handleModal={handleModal}
            editAction={AddeditEvent}
            currentId={currentId}
            data={states}
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
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>
        <DataTable
          noHeader
          pagination
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : states}
          selectableRowsComponent={BootstrapCheckbox}
        />
      </Card>
    </Fragment>
  )
}

export default DataTableWithButtons
