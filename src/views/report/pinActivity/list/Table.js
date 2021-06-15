//Name,Email, Designation(CEO of TCS),phone

// ** Custom Components
import Avatar from '@components/avatar'

//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Add New Modal Component

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Eye, Trash  } from 'react-feather'
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

// ** Renders EMployee Columns
const renderEmployee = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Link to={`/bidDetails/${row.id}`}> <Avatar className='mr-1' img={row.avatar} width='32' height='32'  /> </Link>
  } else {
    return <Link to={`/bidDetails/${row.id}`}><Avatar color={color || 'primary'} className='mr-1' content={row.Employee_Name || 'John Doe'} initials status="online" /> </Link>
  }
}

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Link to={`/bidDetails/${row.id}`}> <Avatar className='mr-1' img={row.avatar} width='32' height='32'  /> </Link>
  } else {
    return <Link to={`/bidDetails/${row.id}`}><Avatar color={color || 'primary'} className='mr-1' content={row.Client || 'John Doe'} initials status="online" /> </Link>
  }
}

  const optionDate = [
    {value: "7days", label: "7 Days"},
    {value: "1month", label: "1 Month"},
    {value: "3months", label: "3 Months"},
    {value: "today", label: "Today"},
    {value: "overall", label: "Overall"}
  ]

const DataTableWithButtons = () => {
  const statusObj = {
    inactive: 'light-secondary',
    active: 'light-success'
}
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState(data)
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
   const [values, setValues] = useState('')

    const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) { 
        console.log("Deleted")
      } else {
      console.log("not deleted ")
      }
  }

  //columns
  const columns = [
        {
          name: 'Employee',
          minWidth: '250px',
          selector: 'Employee_Name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderEmployee(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                    <span className='font-weight-bold'>{row.Employee_Name}</span>
                    <small className='text-truncate text-muted mb-0'>{row.Employee_Email}</small>
                  </div>
                
              </div>
            </div>
          )
        },
        {
          name: 'Client',
          minWidth: '250px',
          selector: 'Client',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                    <span className='font-weight-bold'>{row.Client}</span>
                    <small className='text-truncate text-muted mb-0'>@{row.Client_Email}</small>
                  </div>
                
              </div>
            </div>
          )
        },
        {
          name: 'Activity',
          selector: 'Activity',
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>

              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.Activity[0]}</span>
              </div>
            </div>
          )
        },
        
        {
          name: 'PIN',
          selector: 'PIN',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Activiy Time',
          selector: 'Activiy_Time',
          sortable: true,
          minWidth: '150px'
        },
       
        {
          name: 'Duration',
          selector: 'Duration',
          sortable: true,
          minWidth: '150px'
        }
        
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

    const handleempFilter = e => {
    const value = e.target.value
    let updatedData = []

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
         item.Employee_Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Employee_Email.toLowerCase().startsWith(value.toLowerCase())
          
        const includes =
          item.Employee_Name.toLowerCase().includes(value.toLowerCase()) ||
          item.Employee_Email.toLowerCase().includes(value.toLowerCase())
          

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)

    } else { 
      setFilteredData(data)
    }
  }

  const handleclientFilter = e => {
    const value = e.target.value
    let updatedData = []

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
         item.Client.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Client_Email.toLowerCase().startsWith(value.toLowerCase())
          
        const includes =
          item.Client.toLowerCase().includes(value.toLowerCase()) ||
          item.Client_Email.toLowerCase().includes(value.toLowerCase())
          

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)

    }
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
          item.Employee_Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Client.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Activity[0].toLowerCase().startsWith(value.toLowerCase()) ||
          item.PIN.toLowerCase().startsWith(value.toLowerCase())  

        const includes =
          item.Employee_Name.toLowerCase().includes(value.toLowerCase()) ||
          item.Client.toLowerCase().includes(value.toLowerCase()) ||
          item.Activity[0].toLowerCase().includes(value.toLowerCase()) ||
          item.PIN.toLowerCase().includes(value.toLowerCase()) 

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
      pageCount={filteredData ? filteredData.length / 7 : data.length / 7 || 1}
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
  const handleAddClick = () => {
    // setAddClicked(!addClicked)

  }


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
              <Label for='BidStatus'>Date</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionDate}
                value={values.Date}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Date : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>
            
            <Col md='4'>
              <Label>
                Buyer
              </Label>
              <Input
               
                type='text'
                bsSize='sm'
                id='search-input'
                onChange={handleempFilter}
              />
            </Col>

             <Col md='4'>
              <Label>
                Seller
              </Label>
              <Input
               
                type='text'
                bsSize='sm'
                id='search-input'
                onChange={handleclientFilter}
              />
            </Col>

          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>PIN Access Report</CardTitle>
          {/* <div className='d-flex mt-md-0 mt-1'>
             
          </div> */}
        
           
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
          responsive={true}
          paginationServer
            
          className='react-dataTable'
          defaultSortField='invoiceId'
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={ filteredData }
          
        />
        
      </Card>
      
    </Fragment>
  )
}

export default DataTableWithButtons
