// // ** React Imports
// import { Fragment, useState } from 'react'
// import '@styles/react/libs/react-select/_react-select.scss'
// import '@styles/react/libs/tables/react-dataTable-component.scss'
// // ** Table Columns
// import { srData } from './data'
// import Avatar from '@components/avatar'
// import { Link } from 'react-router-dom'
// // ** Third Party Components
// import ReactPaginate from 'react-paginate'
// import { FormattedMessage } from 'react-intl'
// import DataTable from 'react-data-table-component'
// import { MoreVertical, Edit, FileText, Archive, Share, Printer, File, Grid, Copy, Trash, ChevronDown, Plus} from 'react-feather'
// import { Card, CardHeader, CardTitle, UncontrolledDropdown, UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap'
// //import InputBasic from './AddBadges'
// // import HorizontalForm from './AddCurrency'
// // import EditForm from './EditCurrency'

// const SellerResponseDenial = () => {

//   const [currentPage, setCurrentPage] = useState(0)
//   const [searchValue, setSearchValue] = useState('')
//   const [filteredData, setFilteredData] = useState([])
//   const [addClicked, setAddClicked] = useState(0)
//   const [editClicked, setEditClicked] = useState(0)
//   const [editData, setEditData] = useState({})
  
//   const handlePagination = page => {
//     setCurrentPage(page.selected)
//   }

//   const handleEditClick = (item) => {
//       if (!addClicked) { 
//         setEditClicked(!editClicked)
//         setEditData(item)
//       }
//     //console.log(item)
//   }

//   const handleAddClick = () => {
//       if (!editClicked) {
//         setAddClicked(!addClicked)
//       }
//   }

//   const handleCancelOfEdit = () => {
//     console.log("in Cancel")
//     setEditClicked(!editClicked)
// }
// const handleCancelOfAdd = () => {
//     console.log("in Cancel")
//     setAddClicked(!addClicked)
// }
// const handleSubmitOfAdd = (data) => {
//     console.log("in submit", data)
//     setAddClicked(!addClicked)
// }

// const handleSubmitOfEdit = (data) => {
//     console.log("in submit of edit", data)
//     setEditClicked(!editClicked)
// }

// const handleDelete = (data) => {
//     const userselection = confirm("Are you sure you want to delete")
 
//       if (userselection === true) {
//         console.log(" your record is deleted")
//       } else {
//       console.log("not deleted ")
//       }
// }

// const columns = [
//     {
//       name: 'Bid Id',
//       selector: 'bidId',
//       sortable: true,
//       minWidth: '80px'
//     },
//     {
//       name: 'Seller Information',
//       selector: 'sellerInformation',
//       sortable: true,
//       minWidth: '80px'
//     },
//     {
//         name: 'Request Send Date',
//         selector: 'requestSendDate',
//         sortable: true,
//         minWidth: '80px'
//     },
//     {
//         name: 'Denial Date',
//         selector: 'denialDate',
//         sortable: true,
//         minWidth: '80px'
//     },
//     {
//         name: 'Reason',
//         selector: 'reason',
//         sortable: true,
//         minWidth: '80px'
//     }
// ]
//   // ** Pagination Previous Component
//   const Previous = () => {
//     return (
//       <Fragment>
//         <span className='align-middle d-none d-md-inline-block'>
//           {/* <FormattedMessage id='Prev' /> */}
//         </span>
//       </Fragment>
//     )
//   }

//   // ** Pagination Next Component
//   const Next = () => {
//     return (
//       <Fragment>
//         <span className='align-middle d-none d-md-inline-block'>
//           {/* <FormattedMessage id='Next' /> */}
//         </span>
//       </Fragment>
//     )
//   }

//   // ** Custom Pagination Component
//   const CustomPagination = () => (
//     <ReactPaginate
//       previousLabel={<Previous size={15} />}
//       nextLabel={<Next size={15} />}
//       forcePage={currentPage}
//       onPageChange={page => handlePagination(page)}
//       pageCount={searchValue.length ? filteredData.length / 7 : srData.length / 7 || 1}
//       breakLabel={'...'}
//       pageRangeDisplayed={2}
//       marginPagesDisplayed={2}
//       activeClassName={'active'}
//       pageClassName={'page-item'}
//       nextLinkClassName={'page-link'}
//       nextClassName={'page-item next'}
//       previousClassName={'page-item prev'}
//       previousLinkClassName={'page-link'}
//       pageLinkClassName={'page-link'}
//       breakClassName='page-item'
//       breakLinkClassName='page-link'
//       containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
//     />
//   )

   
//   // ** Converts table to CSV
//   function convertArrayOfObjectsToCSV(array) {
//     let result

//     const columnDelimiter = ','
//     const lineDelimiter = '\n'
//     const keys = Object.keys(srData[0])

//     result = ''
//     result += keys.join(columnDelimiter)
//     result += lineDelimiter

//     array.forEach(item => {
//       let ctr = 0
//       keys.forEach(key => {
//         if (ctr > 0) result += columnDelimiter

//         result += item[key]

//         ctr++
//       })
//       result += lineDelimiter
//     })

//     return result
//   }

//   // ** Downloads CSV
//   function downloadCSV(array) {
//     const link = document.createElement('a')
//     let csv = convertArrayOfObjectsToCSV(array)
//     if (csv === null) return

//     const filename = 'export.csv'

//     if (!csv.match(/^data:text\/csv/i)) {
//       csv = `data:text/csv;charset=utf-8,${csv}`
//     }

//     link.setAttribute('href', encodeURI(csv))
//     link.setAttribute('download', filename)
//     link.click()
//   }


//   return (
//       <Fragment>
//     <Card>
//       <CardHeader className='border-bottom'>
//         <CardTitle tag='h4'>Seller Response Denial Reports</CardTitle>
//         <div className='d-flex mt-md-0 mt-1'>
//             <UncontrolledButtonDropdown>
//               <DropdownToggle color='secondary' caret outline>
//                 <Share size={15} />
//                 <span className='align-middle ml-50'>Export</span>
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem className='w-100'>
//                   <Printer size={15} />
//                   <span className='align-middle ml-50'>Print</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100' onClick={() => downloadCSV(srData)}>
//                   <FileText size={15} />
//                   <span className='align-middle ml-50'>CSV</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100'>
//                   <Grid size={15} />
//                   <span className='align-middle ml-50'>Excel</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100'>
//                   <File size={15} />
//                   <span className='align-middle ml-50'>PDF</span>
//                 </DropdownItem>
//                 <DropdownItem className='w-100'>
//                   <Copy size={15} />
//                   <span className='align-middle ml-50'>Copy</span>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledButtonDropdown>
//           </div>
//       </CardHeader>
//       <DataTable
//         noHeader
//         pagination
//         selectableRowsNoSelectAll
//         columns={columns}
//         className='react-dataTable'
//         paginationPerPage={7}
//         sortIcon={<ChevronDown size={10} />}
//         paginationDefaultPage={currentPage + 1}
//         paginationComponent={CustomPagination}
//         data={srData}
//       />
//     </Card>
//     </Fragment>
//   )
// }

// export default SellerResponseDenial


//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { srData } from './data'
import Select from 'react-select'
// ** Third Party Components
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

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

  const optionSeller = [
    {value: "Pravin Poshmani", label: "Pravin Poshmani"},
    {value: "Tekas Thakare", label: "Tekas Thakare"},
    {value: "Komal Kamble", label: "Komal Kamble"},
    {value: "Himanshu Chanda", label: "Himanshu Chanda"}
  ]

const SellerResponseDenial = () => {
  const [picker, setPicker] = useState(new Date())
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  
const columns = [
    {
      name: 'Bid Id',
      selector: 'bidId',
      sortable: true,
      minWidth: '80px'
    },
    {
      name: 'Seller Information',
      selector: 'sellerInformation',
      sortable: true,
      minWidth: '80px'
    },
    {
        name: 'Request Send Date',
        selector: 'requestSendDate',
        sortable: true,
        minWidth: '80px'
    },
    {
        name: 'Denial Date',
        selector: 'denialDate',
        sortable: true,
        minWidth: '80px'
    },
    {
        name: 'Reason',
        selector: 'reason',
        sortable: true,
        minWidth: '80px'
    }
]
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

  
  // handle drop down filter
  const handleFilterByDropDown = (value) => {
    let updatedData = []
    setFilter(value)
    console.log(value.value)
    let search = "l"
    search = value.value
    setSearchValue(search)
      if (search.length) {
          updatedData = srData.filter(item => {
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
      updatedData = srData.filter(item => {
        const orderId = item.orderId.toString()
        const startsWith =
          item.orderId.toLowerCase().startsWith(value.toLowerCase())
        const includes =
          item.orderId.toLowerCase().includes(value.toLowerCase())
          
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
      pageCount={searchValue.length ? filteredData.length / rowsPerPage : srData.length / rowsPerPage || 1}
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
    const keys = Object.keys(srData[0])

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
            <Col md='3'>
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
            <Col md='3'>
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
          <CardTitle tag='h4'>Seller Response Denial</CardTitle>
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
          data={srData}
          selectableRowsComponent={BootstrapCheckbox}
        />
        
      </Card>
            {/* <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> */}
    </Fragment>
  )
}

export default SellerResponseDenial
