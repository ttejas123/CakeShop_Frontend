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
import Select from 'react-select'

// ** Add New Modal Component

import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'

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

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Link to={`/bidDetails/${row.id}`}> <Avatar className='mr-1' img={row.avatar} width='32' height='32'  /> </Link>
  } else {
    return <Link to={`/bidDetails/${row.id}`}><Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" /> </Link>
  }
}

const OrderInvoice = () => {

    const data = [
        {
  
          id:1,
          Name : "Tejas Thakare",
          avatar: "",
          commission: "12%",
          Amount : 12200,
          GST : "5%",
          OrderNumber: 1211,
          InvoiceNo: "#5234",
          Date: "12-02-2021",
          Email : "tthakare43@gmail.com",
          Designation : "CEO Of TCS",
          phone : 8433841610,
          status : {value: "meeting done", label: "meeting done"}
   
        },
        {
          id:2,
          Name : "Komal Jadhav",
          avatar: komal,
          commission: "12%",
          Amount : 12200,
          GST : "5%",
          Date: "12-02-2021",
          InvoiceNo: "#5234",
          OrderNumber: 1211,
          Email : "komalj@gmail.com",
          Designation : "SCO Of Infosys",
          phone : 9768936483,
          status : {value: "meeting done", label: "meeting done"}
   
        },
        {
          id:3,
          Name : "Pravin Poshmani",
          avatar: pravin,
          commission: "12%",
          Amount : 12200,
          GST : "5%",
          Date: "12-02-2021",
          InvoiceNo: "#5234",
          OrderNumber: 1211,
          Email : "pravinP@gmail.com",
          Designation : "emplyee Of TCS",
          phone : 8268771502,
          status : {value: "meeting done", label: "meeting done"}
   
        },
        {
          id:4,
          Name : "Komal Jadhav",
          avatar: komal,
          commission: "12%",
          Amount : 12200,
          GST : "5%",
          Date: "12-02-2021",
          InvoiceNo: "#5234",
          OrderNumber: 1211,
          Email : "komalj@gmail.com",
          Designation : "SCO Of Infosys",
          phone : 9768936483,
          status : {value: "meeting done", label: "meeting done"}
   
        }
  ]
  
  // ** States
  const [modal, setModal] = useState(false)
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
          name: 'Invoice No',
          minWidth: '150px',
          selector: 'InvoiceNo',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.InvoiceNo}</span>
                  </div>
                
              </div>
            </div>
          )
        },
        {
          name: 'User',
          minWidth: '250px',
          selector: 'Name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(row)}
              <div className=''>
                
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.Name}</span>
                     <small className='text-truncate text-muted mb-0'>@{row.Email}</small>
                  </div>
                
              </div>
            </div>
          )
        },
        {
          name: 'GST',
          selector: 'GST',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'commission',
          selector: 'commission',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Order Number',
          selector: 'OrderNumber',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Date',
          selector: 'Date',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Amount',
          selector: 'Amount',
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
      pageCount={searchValue.length ? filteredData.length / 4 : data.length / 4 || 1}
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
          <CardTitle tag='h4'>Invoice</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            
          </div>
        </CardHeader>
        <DataTable
          noHeader
          pagination
          responsive={true}
          paginationServer    
          className='react-dataTable'
          defaultSortField='invoiceId'
          columns={columns}
          paginationPerPage={4}
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
export default OrderInvoice
