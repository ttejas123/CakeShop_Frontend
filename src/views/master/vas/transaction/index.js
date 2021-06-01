//Amout paid, date, Provider Info, Provided to, Service name
//                      Status - (a.receive service), (b.service pending), (c.completed...)
// Type : Category, User, Transcation
// default Commission %

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
const renderProvider = row => {

  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar_P.length) {
    return <Avatar className='mr-1' img={row.avatar_P} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.P_Name || 'John Doe'} initials status="online" />
  }
}

// ** Add New Modal Component
const renderTo = row => {

  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar_T.length) {
    return <Avatar className='mr-1' img={row.avatar_T} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.T_Name || 'John Doe'} initials status="online" />
  }
}

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


const DataTableWithButtons = () => {

  // ** States
  
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

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
          name: 'Provider',
          minWidth: '150px',
          selector: 'P_Name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderProvider(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.P_Name}</span>
                     <small className='text-truncate text-muted mb-0'>@{row.P_userName}</small>
                  </div>
                
              </div>
            </div>
          )
        },
        {
          name: 'Provided to',
          minWidth: '150px',
          selector: 'T_Name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderTo(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.T_Name}</span>
                     <small className='text-truncate text-muted mb-0'>@{row.T_userName}</small>
                  </div>
                
              </div>
            </div>
          )
        },
        {
          name: 'Service',
          selector: 'Service',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'amount_paid',
          selector: 'amount_paid',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              <div className='d-flex flex-column ml-2'>
                
                  <span className='font-weight-bold'>₹{row.amount_paid}</span>
                
              </div>
            </div>
          )
        },
        {
          name: 'Status',
          selector: 'Status',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Date',
          selector: 'Date',
          sortable: true,
          minWidth: '150px'
        }
        // {
        //   name: 'Actions',
        //   allowOverflow: true,
        //   cell: row => {
        //     return (
        //       <div className='d-flex'>
        //         <UncontrolledDropdown>
        //           <DropdownToggle className='pr-1' tag='span'>
        //             <Trash size={15} onClick={e => {
        //                                                    } }/>
        //           </DropdownToggle>
        //         </UncontrolledDropdown>
        //         <Link to={`/master/cmmi/edit/${row.id}`}>
        //           <Edit size={15} />
        //         </Link>  
        //       </div>
        //     )
        //   }
        // }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
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

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>VAS Transaction</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            
          </div>
        </CardHeader>

        <DataTable
          noHeader
          pagination
          
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          
        />
        
      </Card>
      
    </Fragment>
  )
}

export default DataTableWithButtons
