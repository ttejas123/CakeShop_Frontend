// ** Custom Components
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import { Link } from 'react-router-dom'
import axios from 'axios'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAttributes } from '@store/actions/master/subCat/Subattributes'

import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Add New Modal Component
import Response from './viewSubAttr'

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
} from 'reactstrap'

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
      'light-success',
      'light-danger',
      'light-warning',
      'light-info',
      'light-primary',
      'light-secondary'
    ],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className="mr-1" img={row.avatar} width="32" height="32" />
  } else {
    return (
      <Avatar
        color={color || 'primary'}
        className="mr-1"
        content={row.Name || 'John Doe'}
        initials
        status="online"
      />
    )
  }
}

const optionSubAttribute = [
  { value: '', label: 'Filter Status' },
  { value: 'created', label: 'created' },
  { value: 'live', label: 'live' },
  { value: 'extended', label: 'extended' },
  { value: 'closed', label: 'closed' },
  { value: 'rejected', label: 'rejected' },
  { value: 'auto closed', label: 'auto closed' }
]

const DataTableWithButtons = () => {
  const usedispatch = useDispatch()
  const start = useSelector((state) => state.SubAttributes.start)
  const data = useSelector((state) => state.SubAttributes.data)
  useEffect(() => {
    usedispatch(fetchAttributes(start))
  }, [usedispatch])
  console.log(data)
  const statusObj = {
    pending: 'light-secondary',
    approved: 'light-success',
    approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [responseModel, setResponseModel] = useState(false)
  const [reviewId, setreviewId] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

  //deleteCountry
  const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm('Are you sure you want to delete')

    if (userselection === true) {
      console.log('Deleted')
    } else {
      console.log('not deleted ')
    }
  }
  //edit action
  const AddeditEvent = (val) => {
    //here we hande event which comming from addNewModel.js (Form for add and edit)
    setCurrentId('')
    console.log(val)
  }

  //columns
  const columns = [
    {
      name: 'Id',
      selector: 'id',
      sortable: true,
      minWidth: '50px',
      maxWidth: '200px'
    },
    {
      name: 'Attributes',
      selector: 'subAttributes',
      minWidth: '150px',
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
                  <a
                    href="#"
                    onClick={() => {
                      setreviewId(row.id)
                      setResponseModel(true)
                    }}
                  >
                    view
                  </a>
                </u>
              ) : null}
            </span>
          </div>
        </div>
      )
    },
    {
      name: 'Category',
      selector: 'Cat',
      sortable: true,
      minWidth: '130px',
      cell: (row) => (
        <div key={row.id} className="d-flex align-items-center">
          <div className="user-info text-truncate">
            <span className="d-block font-weight-bold text-truncate">{row.Cat}</span>
          </div>
        </div>
      )
    },
    {
      name: 'Sub Category',
      selector: 'subCat',
      sortable: true,
      minWidth: '130px',
      cell: (row) => (
        <div key={row.id} className="d-flex align-items-center">
          <div className="user-info text-truncate">
            <span className="d-block font-weight-bold text-truncate">{row.subCat[0].value}</span>
          </div>
        </div>
      )
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
                    deleteCountry(row.id)
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
  // handle drop down filter
  const handleFilterByDropDown = (value) => {
    let updatedData = []
    setFilter(value)
    console.log(value.value)
    let search = 'l'
    search = value.value
    setSearchValue(search)
    if (search.length) {
      updatedData = data.filter((item) => {
        const startsWith = item.BidStatus[0].value.toLowerCase().startsWith(search.toLowerCase())

        const includes = item.BidStatus[0].value.toLowerCase().includes(search.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })

      setFilteredData(updatedData)
      // setSearchValue(search)
      setFilter(value)
    }
  }
  // ** Function to handle filter
  const handleFilter = (e) => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)
    if (value.length) {
      updatedData = data.filter((item) => {
        const startsWith =
          item.subCat.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Cat.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.subCat.toLowerCase().includes(value.toLowerCase()) ||
          item.Cat.toLowerCase().includes(value.toLowerCase())

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
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
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
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>

        <DataTable
          noHeader
          pagination
          columns={columns}
          paginationPerPage={7}
          className="react-dataTable"
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
        />
      </Card>
      <Response
        open={responseModel}
        handleModal={handleResponse}
        currentId={reviewId}
        data={data}
      />
    </Fragment>
  )
}

export default DataTableWithButtons

