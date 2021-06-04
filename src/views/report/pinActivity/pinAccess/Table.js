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

import GeneratePin from './generatePIN'


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

const DataTableWithButtons = () => {
  const statusObj = {
    inactive: 'light-secondary',
    active: 'light-success'
}
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [addClicked, setAddClicked] = useState(0) 

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
        // {
        //   name: 'Activity',
        //   selector: 'Activity',
        //   minWidth: '150px',
        //   cell: row => (
        //     <div className='d-flex justify-content-left align-items-center'>

        //       <div className='d-flex flex-column'>
                
        //           <span className='font-weight-bold'>{row.Activity[0]}</span>
        //       </div>
        //     </div>
        //   )
        // },
        
        {
          name: 'PIN',
          selector: 'PIN',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'PIN ID',
          selector: 'PIN_ID',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Reason',
          selector: 'Reason',
          sortable: true,
          // minWidth: '150px'.
               cell: row => (
            <div className='d-flex justify-content-left align-items-center'>

              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.Reason}</span>
              </div>
            </div>
          )
        },
       
        {
          name: 'PIN Generate Time',
          selector: 'PIN_Generate_Time',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Login Time',
          selector: 'Login_Time',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Logout Time',
          selector: 'Logout_Time',
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

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.customizations.toLowerCase().startsWith(value.toLowerCase()) ||
          item.deliveryDate.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Category[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          item.subCategory[0].label.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase()) ||
          item.customizations.toLowerCase().includes(value.toLowerCase()) ||
          item.deliveryDate.toLowerCase().includes(value.toLowerCase()) ||
          item.Category[0].label.toLowerCase().includes(value.toLowerCase()) ||
          item.subCategory[0].label.toLowerCase().includes(value.toLowerCase()) 

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

  const handleAddClick = () => {
    setAddClicked(!addClicked)

  }


  return (
    <Fragment>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>PIN Access Report</CardTitle>
          {/* <div className='d-flex mt-md-0 mt-1'>
             
          </div> */}
          {/* <Link to={`/add-sponsored_keyword`}> */}
            <Button className='ml-2' color='primary' onClick={handleAddClick} >
              <Plus size={15} />
              <span className='align-middle ml-50'>Access Customer Portal</span>
            </Button>

          {/* </Link> */}
           
        </CardHeader>
        {addClicked ? <GeneratePin /> : null}
        <CardBody>
          <Row className='justify-content-end mx-0'>
            <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
              <Label className='mr-1' for='search-input'>
                Search
            </Label>
              <Input
                className='dataTable-filter mb-50'
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
            data={searchValue.length ? filteredData : data}

          />
        </CardBody>

      </Card>
      
    </Fragment>
  )
}

export default DataTableWithButtons
