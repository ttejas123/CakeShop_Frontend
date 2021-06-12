// ** React Imports

// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
import Flatpickr from 'react-flatpickr'
import '@styles/react/libs/flatpickr/flatpickr.scss'
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

const optionDaysFilter = [
    {value: "7days", label: "7 Days"},
    {value: "1month", label: "1 Month"},
    {value: "3months", label: "3 Months"},
    {value: "today", label: "Today"},
    {value: "overall", label: "Overall"}
  ]

  const optionStatus = [
    {value: "Accepted", label: "Accepted"},
    {value: "Processed", label: "Processed"},
    {value: "Shipped", label: "Shipped"}
  ]
  const optionBuyer = [
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Tekas Thakare", label: "Tekas Thakare"},
    {value: "Komal Kamble", label: "Komal Kamble"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda"}
  ]

  const optionSeller = [
    {value: "Komal Kamble", label: "Komal Kamble"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda"},
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Tekas Thakare", label: "Tekas Thakare"}
  ]


const SampleRequestList = () => {
  const [picker, setPicker] = useState(new Date())
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

 
const renderBuyer = row => {
    const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
  
    if (row.buyerAvatar.length) {
      return <Link to={`/bidDetails/${row.id}`}> <Avatar className='mr-1' img={row.buyerAvatar} width='32' height='32'  /> </Link>
    } else {
      return <Link to={`/bidDetails/${row.id}`}><Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" /> </Link>
    }
  }
  
  const renderSeller = row => {
    const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
  
    if (row.sellerAvatar.length) {
      return <Link to={`/bidDetails/${row.id}`}> <Avatar className='mr-1' img={row.sellerAvatar} width='32' height='32'  /> </Link>
    } else {
      return <Link to={`/bidDetails/${row.id}`}><Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" /> </Link>
    }
  }

const columns = [
    {
      name: 'Request Date',
      selector: 'requestDate',
      sortable: true,
      minWidth: '80px'
    },
    {
      name: 'Bid Id',
      selector: 'bidId',
      sortable: true,
      minWidth: '80px'
    },
    {
        name: 'Buyer',
        minWidth: '250px',
        selector: 'buyer',
        sortable: true,
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            {renderBuyer(row)}
            <div className=''>
              {/* <Link to={`/bidDetails/${row.id}`}> */}
                <div className='user-info text-truncate d-flex flex-column'>
                   <span className='font-weight-bold'>{row.buyerName}</span>
                   {/* <small className='text-truncate text-muted mb-0'>@{row.username}</small> */}
                </div>
              {/* </Link>   */}
            </div>
          </div>
        )
      },
      {
        name: 'Seller',
        minWidth: '250px',
        selector: 'seller',
        sortable: true,
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            {renderSeller(row)}
            <div className=''>
              {/* <Link to={`/bidDetails/${row.id}`}> */}
                <div className='user-info text-truncate d-flex flex-column'>
                   <span className='font-weight-bold'>{row.sellerName}</span>
                   {/* <small className='text-truncate text-muted mb-0'>@{row.username}</small> */}
                </div>
              {/* </Link>   */}
            </div>
          </div>
        )
      },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
        minWidth: '150px',
        cell: row => (
          <div key={row.id} className='d-flex align-items-center'>
            <div className='user-info text-truncate'>
              <span className='d-block font-weight-bold text-truncate'>
                    <Badge className='text-capitalize' color={statusObj[row.status[0].label]} pill>
                        {row.status[0].label}
                    </Badge>
              </span>
            </div>
          </div>
        )
      }
    // {
    //   name: 'Actions',
    //   allowOverflow: true,
    //   cell: row => {
    //     return (
    //       <div className='d-flex'>
    //         <UncontrolledDropdown>
    //           <DropdownToggle className='pr-1' tag='span'>
    //             <Trash size={15} onClick={e => { handleDelete(row) }} />
    //           </DropdownToggle>
    //         </UncontrolledDropdown>
    //         <Link  to={`/report/add-sample-request`}><Edit  
    //               size={15} 
    //               onClick={ () => { 
    //                                 //setCurrentId(row.id)
    //                                 //setModal(true)
    //                                  } }>
    //                                    <Link to='/report/add-sample-request'/>
    //                                  </Edit></Link>
    //       </div>
    //     )
    //   }
    // }
  ]

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
          item.SMSHistoryName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.mrp.toLowerCase().startsWith(value.toLowerCase()) ||
          item.gst.toLowerCase().startsWith(value.toLowerCase()) 
          console.log(startsWith)
        const includes =
          item.SMSHistoryName.toLowerCase().includes(value.toLowerCase()) ||
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

  const handlePerPage = e => {
    setRowsPerPage(20)
    console.log(e.target.value)
    // dispatch(
    //   getData({
    //     page: currentPage,
    //     perPage: parseInt(e.target.value),
    //     q: searchValue
    //   })
    // )
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / rowsPerPage : data.length / rowsPerPage || 1}
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
            <Label className='mr-1 mt-1' for='search-input'>
                Filter Period
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionDaysFilter}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
              </div>
            </Col>
            <Col md='4'>
            <Label className='mr-1 mt-1' for='search-input'>
                Filter Date
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
            <Flatpickr
                    value={picker}
                    id='delivered-date-time-picker'
                    className='form-control'
                    onChange={date => setPicker(date)}
                  />
              </div>
            </Col>
            <Col md='4'>
            <Label className='mr-1 mt-1' for='search-input'>
                Filter Status
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionStatus}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
              </div>
            </Col>
            <Col md='4'>
            <Label className='mr-1 mt-1' for='search-input'>
                Filter Buyer
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionBuyer}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
              </div>
            </Col>
            <Col md='4'>
            <Label className='mr-1 mt-1' for='search-input'>
                Filter Seller
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionSeller}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Sample Request</CardTitle>
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
                value={rowsPerPage}
                onChange={e => handlePerPage(e)}
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
          paginationPerPage={rowsPerPage}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        
      </Card>
            {/* <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> */}
    </Fragment>
  )
}

export default SampleRequestList
