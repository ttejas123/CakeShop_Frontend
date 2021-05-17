// ** Custom Components
import Avatar from '@components/avatar'
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
import { ChevronDown, Share, Printer, File, Eye, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash, Check, X  } from 'react-feather'
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

const DataTableWithButtons = () => {
  const statusObj = {
        return: 'light-secondary',
        refund: 'light-success',
        replace: 'light-warning'
  }
  // ** States
  
  
  const [currentPage, setCurrentPage] = useState(0)
  const [reviewId, setreviewId] = useState(0)
  const [filteredData, setFilteredData] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [Filter, setFilter] = useState('')

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

  //columns
  const columns = [
//order id
//product id
//product quality
//product cost
//return
//refund
//replace
//raised by
// entity type
//raised time
        {
          name: 'Id',
          selector: 'id',
          sortable: true,
          minWidth: '50px',
          maxWidth: '150px'
        },
        {
          name: 'Order Id',
          minWidth: '150px',
          selector: 'Order_Id',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>

              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.Order_Id}</span>
              </div>
            </div>
          )
        },
        {
          name: 'Product Id',
          selector: 'product_id',
          sortable: true,
          minWidth: '130px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>{row.product_id}</span>
              </div>
            </div>
          )
        },
        {
          name: 'Action',
          selector: 'Action',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
<span className='d-block font-weight-bold text-truncate'>
                      <Badge className='text-capitalize' color={statusObj[row.Action]} pill>
                          {row.Action}
                      </Badge>
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Raised By',
          selector: 'raised_by',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                          {row.raised_by}       
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Entity Type',
          selector: 'entity_type',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Raised Time',
          selector: 'raised_time',
          sortable: true,
          minWidth: '130px',
          maxWidth: '150px'
        }
    ]

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
          <CardTitle tag='h4'>Product Issue</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
               
          </div>
        </CardHeader>

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
