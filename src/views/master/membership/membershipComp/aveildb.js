//  Users
// Start_date, expiry_date, status()
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
import { data1 } from './data'
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

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
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
  const [Filter, setFilter] = useState('')

  //columns
  const columns = [
        {
          name: 'User',
          minWidth: '250px',
          selector: 'Name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(row)}
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.Name}</span>
                <small className='text-truncate text-muted mb-0'>@{row.username}</small>
              </div>
            </div>
          )
        },
        {
          name: 'Start date',
          selector: 'Start_date',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Expiry Date',
          selector: 'end_Date',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Date OF Aveiled',
          selector: 'date',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Save Amount',
          selector: 'samount',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Benifits',
          selector: 'benefit[0]',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.benefit[0]}</span>
                
              </div>
            </div>
          )
        },
        {
          name: 'Status',
          selector: 'active',
          sortable: false,
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.active}</span>
                
              </div>
            </div>
          )
        },
        {
          name: 'Actions',
          allowOverflow: true,
          cell: row => {
            return (
              <div className='d-flex'>
                <UncontrolledDropdown>
                  <DropdownToggle className='pr-1' tag='span'>
                    <Trash size={15} />
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link to={`/update-membership-plan`}>
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

  const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>Benifits:<br/></span> 
        {
          data.benefit.map((val, id) => {
            return (<><span><b>{id + 1}</b>.{val}</span><br/></>)
          })
        }
      </p>
      
    </div>
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
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
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

        <DataTable
          noHeader
          pagination
          expandableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          expandableRowsComponent={<ExpandableTable />}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data1}
          selectableRowsComponent={BootstrapCheckbox}
        />
      
    </Fragment>
  )
}

export default DataTableWithButtons
