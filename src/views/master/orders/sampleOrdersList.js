// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Add New Modal Component
//import FormModel from './formModel'

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
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const optionBidStatus = [
    {value: "7days", label: "7 Days"},
    {value: "1month", label: "1 Month"},
    {value: "3months", label: "3 Months"},
    {value: "today", label: "Today"},
    {value: "overall", label: "Overall"}
  ]

const OrdersList = () => {
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

  
const columns = [
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
    minWidth: '50px'
  },
  {
    name: 'Order Number',
    selector: 'orderNumber',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Order Type',
    selector: 'orderType',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'User Id',
    selector: 'userId',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Bid Id',
    selector: 'bidId',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Id',
    selector: 'sellerId',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Bid Rank',
    selector: 'bidRank',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'First Name',
    selector: 'firstName',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Last Name',
    selector: 'lastName',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Office Addres',
    selector: 'sOfficeAddress',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Office Addres 2',
    selector: 'sOfficeAddress2',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Office Landmark',
    selector: 'sOfficeLandmark',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Office City',
    selector: 'sOfficeCity',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Office State',
    selector: 'sOfficeState',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Office Country',
    selector: 'sOfficeCountry',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Company Name',
    selector: 'companyName',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Buyer Office Addres',
    selector: 'bOfficeAddress',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Buyer Office Addres 2',
    selector: 'bOfficeAddress2',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Buyer Office Landmark',
    selector: 'bOfficeLandmark',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Buyer Office City',
    selector: 'bOfficeCity',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Buyer Office State',
    selector: 'bOfficeState',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Buyer Office Country',
    selector: 'bOfficeCountry',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Payment Mode',
    selector: 'paymentMode',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Amount Paid',
    selector: 'amountPaid',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Balance Amount',
    selector: 'balanceAmount',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Delivery before',
    selector: 'deliveryBefore',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller Confirmation',
    selector: 'sellerConfirmation',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Is Cancelled',
    selector: 'isCancelled',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Created Date',
    selector: 'createdDate',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Updated Time',
    selector: 'updatedTime',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Requested By',
    selector: 'requestedBy',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Requested From',
    selector: 'requestedFrom',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <Trash size={15} onClick={e => {
                                                                              e.preventDefault()
                                                                              // deleteCountry(row.id)
                                                                            } }/>
            </DropdownToggle>
          </UncontrolledDropdown>
          <Link  to={`/edit-product/${row.id}`}><Edit  
            size={15} 
            onClick={ () => { 
                              setCurrentId(row.id)
                              setModal(true)
                               } }>
                                 <Link to='/edit-product'/>
                               </Edit></Link>
        </div>
      )
    }
  }
]


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

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // handle drop down filter
  const handleFilterByDropDown = (value) => {
    let updatedData = []
    setFilter(value)
    console.log(value.value)
    let search = "l"
    search = value.value
    setSearchValue(search)
      if (search.length) {
          updatedData = data.filter(item => {
            const startsWith =
              item.BidStatus[0].value.toLowerCase().startsWith(search.toLowerCase()) 
              
            const includes =
              item.BidStatus[0].value.toLowerCase().includes(search.toLowerCase())
    
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
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const NoOfBidder = item.NoOfBidder.toString()
        const startsWith =
          item.OrdersName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.mrp.toLowerCase().startsWith(value.toLowerCase()) ||
          item.gst.toLowerCase().startsWith(value.toLowerCase()) 
          console.log(startsWith)
        const includes =
          item.OrdersName.toLowerCase().includes(value.toLowerCase()) ||
          item.mrp.toLowerCase().includes(value.toLowerCase()) ||
          item.gst.toLowerCase().includes(value.toLowerCase()) 
          
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


  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionBidStatus}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Orderss</CardTitle>
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
            {/* <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> */}
    </Fragment>
  )
}

export default OrdersList
