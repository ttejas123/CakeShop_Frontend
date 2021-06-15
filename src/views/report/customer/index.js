// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash  } from 'react-feather'
import {
  Card,
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
  Badge, UncontrolledDropdown
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    {console.log(onClick)}
    <label className='custom-control-label' onClick={onClick} />
  </div>
))


// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" />
  }
}

const optionCountry = [
    {value: "", label: "Search country"},
    {value: "India", label: "India"},
    {value: "USA", label: "USA"},
    {value: "Canada", label: "Canada"},
    {value: "Japan", label: "Japan"}
]

const optionCity = [
    {value: "", label: "Search City"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Pune", label: "Pune"}
]

const optionUserType = [
    {value: "Buyer", label: "Buyer"},
    {value: "Seller", label: "Seller"},
    {value: "Both", label: "Both"}
  ]

const optionKyc = [
    {value: "Approval", label: "Approval"},
    {value: "Pending", label: "Pending"},
    {value: "Approved", label: "Approved"}
  ]

const optionState = [
    {value: "", label: "Search State"},
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Up", label: "Up"}
]

const DataTableWithButtons = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [FilterCity, setFilterCity] = useState('')
  const [FilterState, setFilterState] = useState('')
  const [FilterCountry, setFilterCountry] = useState('')
  const [values, setValues] = useState('')

   //deleteCountry
  const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) { 
        console.log("Deleted")
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
          name: 'First Name',
          selector: 'first_name',
          sortable: true,
          minWidth: '150px',
           cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <Link to={`/PReviewsle/${row.id}`}>
                <div className='user-info text-truncate'>
                  <span className='d-block font-weight-bold text-truncate'>{row.first_name}</span>
                </div>
              </Link>  
            </div>
          )
        },
        {
          name: 'Last Name',
          minWidth: '150px',
          selector: 'last_name',
          sortable: true,
           cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <Link to={`/PReviewsle/${row.id}`}>
                <div className='user-info text-truncate'>
                  <span className='d-block font-weight-bold text-truncate'>{row.last_name}</span>
                </div>
              </Link>  
            </div>
          )
        },
        {
          name: 'Email',
          selector: 'email',
          sortable: true,
          minWidth: '200px',
           cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <Link to={`/PReviewsle/${row.id}`}>
                <div className='user-info text-truncate'>
                  <span className='d-block font-weight-bold text-truncate'>{row.email}</span>
                </div>
              </Link>  
            </div>
          )
        },
        {
          name: 'Mobile',
          selector: 'mobile',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'User-Type',
          selector: 'userType[0].label',
          sortable: true,
          minWidth: '150px',
           cell: row => (
            <div key={row.created} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.userType[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'KYC Verified',
          selector: 'isVerified[0].label',
          sortable: true,
          minWidth: '150px',
           cell: row => (
            <div key={row.created} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.isVerified[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'State',
          selector: 'state[0].label',
          sortable: true,
          minWidth: '150px',
           cell: row => (
            <div key={row.created} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.state[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'City',
          selector: 'city[0].label',
          sortable: true,
          minWidth: '150px',
           cell: row => (
            <div key={row.created} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.city[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Profile Score',
          selector: 'profileScore',
          sortable: true,
          minWidth: '150px',
           cell: row => (
            <div key={row.created} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.profileScore}%
                      
                </span>
              </div>
            </div>
          )
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // handle drop down filter
  const handleFilterByDropDown = (name, value) => {
   const updatedData = []
   if (name === 'country') {
      setFilterCountry(value)
   } else if (name === 'state') {
      setFilterState(value)
   } else if (name === 'city') {
      setFilterCity(value)
   }
  }
  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const mobile = item.mobile.toString()
        const startsWith =
          item.userType[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          item.isVerified[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          item.first_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.last_name.toLowerCase().startsWith(value.toLowerCase()) ||
          mobile.toLowerCase().startsWith(value.toLowerCase())
          console.log(startsWith)
        const includes =
          item.userType[0].label.toLowerCase().includes(value.toLowerCase()) ||
          item.isVerified[0].label.toLowerCase().includes(value.toLowerCase()) ||
          item.first_name.toLowerCase().includes(value.toLowerCase()) ||
          item.last_name.toLowerCase().includes(value.toLowerCase()) ||
          mobile.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)
      setSearchValue(value)
    } else {
      setFilteredData(data)
    }
  }

    function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(data[0])

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

    //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }
  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )


  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='BidStatus'>User Type</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionUserType}
                value={values.user}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 user : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>
            <Col md='4'>
              <Label className='mr-1' for='search-input'>
                Filter Country
              </Label>

              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCountry}
                value={FilterCountry}
                onChange={data => {
                  handleFilterByDropDown("country", data)
                }}
              />
            </Col>
            <Col md='4'>
              <Label className='mr-1' for='search-input'>
                Filter State
              </Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCity}
                value={FilterState}
                onChange={data => {
                  handleFilterByDropDown("state", data)
                }}
              />
            </Col>

            <Col md='4'>
            <div>
              <Label for='BidStatus'>User KYC</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionKyc}
                value={values.kyc}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 kyc : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>

            <Col md='4'>
              <Label className='mr-1' for='search-input'>
                Filter City
              </Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionState}
                value={FilterCity}
                onChange={data => {
                  handleFilterByDropDown("city", data)
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Customer</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
              <UncontrolledButtonDropdown>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ml-50'>Export</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='w-100'>
                  <Printer size={15} />
                  <span className='align-middle ml-50'>Print</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Grid size={15} />
                  <span className='align-middle ml-50'>Excel</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <File size={15} />
                  <span className='align-middle ml-50'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100'>
                  <Copy size={15} />
                  <span className='align-middle ml-50'>Copy</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </CardHeader>

        <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>show</Label>
              <Input
                className='dataTable-select'
                type='select'
                id='sort-select'
                onChange={e => console.log(e.target.value)}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>entries</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter'
              type='text'
              bsSize='sm'
              id='search-input'
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
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        
      </Card>
            
    </Fragment>
  )
}

export default DataTableWithButtons
