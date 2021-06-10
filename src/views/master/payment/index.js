// ** Custom Components
import { Link } from 'react-router-dom'
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

// ** Add New Modal Component

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Eye  } from 'react-feather'
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

   //view
  const view = (val) => {
    //here we passing id to delete this specific record
   setModal(true)
  }

  //columns
  const columns = [
        {
          name: 'Id',
          selector: 'id',
          sortable: true,
          minWidth: '120px',
          maxWidth: '150px'
        },
        {
          name: 'Payment Mode',
          selector: 'payment_mode',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.payment_mode}</span>
               
              </div>
            </div>
          )
        },
        {
          name: 'Amount Paid',
          selector: 'amount_paid',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px'
        },
        {
          name: 'Time',
          selector: 'time',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px'
        },
        {
          name: 'Order Id',
          selector: 'Order_Id',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                <Link to={`/order-details`}>
                  <span className='font-weight-bold'>{row.Order_Id}</span>
                </Link>
              </div>
            </div>
          )
        },
        {
          name: 'Invoice Id',
          selector: 'Invoice_Id',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
             
              <div className='d-flex flex-column'>
                <Link to={`/master/Invoice/view`}>
                  <span className='font-weight-bold'>{row.Invoice_Id}</span>
                </Link>
              </div>
            </div>
          )
        },
        {
          name: 'Invoice Amount',
          selector: 'Invoice_amount',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px'
        },
        {
          name: 'Payment Date',
          selector: 'payment_date',
          sortable: true,
          minWidth: '120px',
          maxWidth: '200px'
        }
    ]

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }


  // ** Converts table to CSV
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
          <CardTitle tag='h4'>Payments</CardTitle>
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
