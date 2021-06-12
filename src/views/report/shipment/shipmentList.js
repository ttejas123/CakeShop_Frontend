// // ** React Imports
// import { Fragment, useState } from 'react'
// import '@styles/react/libs/react-select/_react-select.scss'
// import '@styles/react/libs/tables/react-dataTable-component.scss'
// // ** Table Columns
// import { data } from './data'
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

// const ShipmentReportsList = () => {

//     //console.log(BankGuarranteApplsColumns)
//     console.log(data)
//   // ** State
// //   const data = [
// //     {
// //       name: "US Dollar",
// //       symbol: "$"
// //     },
// //     {
// //       name: "Canadian Dollar",
// //       symbol: "$"
// //     },
// //     {
// //       name: "Euro",
// //       symbol: "€"
// //     }
// // ]
// // console.log(data)

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

// const renderClient = row => {
//     const stateNum = Math.floor(Math.random() * 6),
//       states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
//       color = states[stateNum]
  
//     if (row.icon.length) {
//       return <Avatar className='mr-1' img={row.icon} width='32' height='32'  />
//     } else {
//       return <Avatar color={color || 'primary'} className='mr-1' content={row.name || 'John Doe'} initials status="online" />
//     }
//   }

// const columns = [
//     {
//       name: 'Carrier',
//       selector: 'carrier',
//       sortable: true,
//       minWidth: '150px'
//     },
//     {
//       name: 'Method',
//       selector: 'method',
//       sortable: true,
//       minWidth: '150px'
//     },
//     {
//         name: 'Weight',
//         selector: 'weight',
//         sortable: true,
//         minWidth: '150px'
//     },
//     {
//         name: 'Price',
//         selector: 'price',
//         sortable: true,
//         minWidth: '150px'
//     },
//     {
//         name: 'Packing Type',
//         selector: 'packingType',
//         sortable: true,
//         minWidth: '150px'
//     },
//     {
//         name: 'Description',
//         selector: 'description',
//         sortable: true,
//         minWidth: '150px'
//     },
//     {
//         name: 'Address',
//         selector: 'address',
//         sortable: true,
//         minWidth: '150px'
//     },
//     {
//         name: 'Status',
//         selector: 'status',
//         sortable: true,
//         minWidth: '150px'
//     },
//     {
//         name: 'Contact Number',
//         selector: 'contactNumber',
//         sortable: true,
//         minWidth: '150px'
//     }
//     // ,
//     // {
//     //   name: 'Actions',
//     //   allowOverflow: true,
//     //   cell: row => {
//     //     return (
//     //       <div className='d-flex'>
//     //         <UncontrolledDropdown>
//     //           <DropdownToggle className='pr-1' tag='span'>
//     //             <Trash size={15} onClick={e => { handleDelete(row) }} />
//     //           </DropdownToggle>
//     //         </UncontrolledDropdown>
//     //         <Link  to={`/report/add-GstReport`}><Edit  
//     //               size={15} 
//     //               onClick={ () => { 
//     //                                 //setCurrentId(row.id)
//     //                                 //setModal(true)
//     //                                  } }>
//     //                                    <Link to='/report/add-GstReport'/>
//     //                                  </Edit></Link>
//     //       </div>
//     //     )
//     //   }
//   ]
  
//   // ** Function to handle filter
//   // const handleFilter = e => {
//   //   const value = e.target.value
//   //   let updatedData = []
//   //   setSearchValue(value)

//   //   const status = {
//   //     1: { title: 'Current', color: 'light-primary' },
//   //     2: { title: 'Professional', color: 'light-success' },
//   //     3: { title: 'Rejected', color: 'light-danger' },
//   //     4: { title: 'Resigned', color: 'light-warning' },
//   //     5: { title: 'Applied', color: 'light-info' }
//   //   }

//   //   if (value.length) {
//   //     updatedData = data.filter(item => {
//   //       const startsWith =
//   //         item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
//   //         item.post.toLowerCase().startsWith(value.toLowerCase()) ||
//   //         item.GstReport.toLowerCase().startsWith(value.toLowerCase()) ||
//   //         item.age.toLowerCase().startsWith(value.toLowerCase()) ||
//   //         item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
//   //         item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
//   //         status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

//   //       const includes =
//   //         item.full_name.toLowerCase().includes(value.toLowerCase()) ||
//   //         item.post.toLowerCase().includes(value.toLowerCase()) ||
//   //         item.GstReport.toLowerCase().includes(value.toLowerCase()) ||
//   //         item.age.toLowerCase().includes(value.toLowerCase()) ||
//   //         item.salary.toLowerCase().includes(value.toLowerCase()) ||
//   //         item.start_date.toLowerCase().includes(value.toLowerCase()) ||
//   //         status[item.status].title.toLowerCase().includes(value.toLowerCase())

//   //       if (startsWith) {
//   //         return startsWith
//   //       } else if (!startsWith && includes) {
//   //         return includes
//   //       } else return null
//   //     })
//   //     setFilteredData(updatedData)
//   //     setSearchValue(value)
//   //   }
//   // }

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
//       pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
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
//     const keys = Object.keys(data[0])

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
//         <CardTitle tag='h4'>Shipment Reports</CardTitle>
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
//                 <DropdownItem className='w-100' onClick={() => downloadCSV(data)}>
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
//       {/* {addClicked ? <HorizontalForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd} /> : null}
//       {editClicked ? <EditForm data ={editData} handleCancel={handleCancelOfEdit} handleSubmit={handleSubmitOfEdit} /> : null} */}
//       {/* <Row className='justify-content-end mx-0'>
//         <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
//           <Label className='mr-1' for='search-input-1'>
//             <FormattedMessage id='Search' />
//           </Label>
//           <Input
//             className='dataTable-filter mb-50'
//             type='text'
//             bsSize='sm'
//             id='search-input-1'
//             value={searchValue}
//             onChange={handleFilter}
//           />
//         </Col>
//       </Row> */}
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
//         data={data}
//       />
//       {/* <CardFooter>
//         <CardText className='mb-0'>
//           <span className='font-weight-bold'>Note:</span>{' '}
//           <span>Use Intl Dropdown in Navbar to change table language</span>
//         </CardText>
//       </CardFooter> */}
//     </Card>
//     </Fragment>
//   )
// }

// export default ShipmentReportsList


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
import { data, columns } from './data'
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
    {value: "Shipped", label: "Shipped"},
    {value: "Delivered", label: "Delivered"},
    {value: "Cancelled", label: "Cancelled"}
  ]
const ShipmentList = () => {
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
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Shipment</CardTitle>
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

export default ShipmentList
