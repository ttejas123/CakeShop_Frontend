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

// ** Add New Modal Component
import FormModel from './formModel'
import Response from './responseModel' 

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
  <div className='custom-control custom-checkbox static'>
    <input  type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))


// ** Renders Client Columns
const renderClient = (avatarImag, Name) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (avatarImag.length) {
    return <Avatar className='mr-1' img={avatarImag} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={Name || 'John Doe'} initials status="online" />
  }
}

const part = (data2) => {
  return (<div className='d-flex justify-content-left align-items-center'>
          {renderClient(data2.avatar, data2.To)}
        <div className=''>
                                          
          <div className='user-info text-truncate d-flex flex-column'>
            <span className='font-weight-bold'>{data2.To}</span>
              <small className='text-truncate text-muted mb-0'>@{data2.To}</small>
          </div>
                                         
        </div>
    </div>)
}

const optionStatus = [
    {value: "", label: "Filter Status"},
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"}
  ]

const optionDate = [
    {value: "7days", label: "7 Days"},
    {value: "1month", label: "1 Month"},
    {value: "3months", label: "3 Months"},
    {value: "today", label: "Today"},
    {value: "overall", label: "Overall"}
  ]

const optionRespoded = [
    {value: "Responded ", label: "Responded "},
    {value: "Not Responded", label: "Not Responded"}
]

const optionTo = [
    {value: "user1212", label: part(data[0])},
    {value: "user1231", label: part(data[1])},
    {value: "user1234", label: part(data[2])},
    {value: "user2345", label: part(data[3])},
    {value: "user3456", label: part(data[4])}
  ]

const optionFrom = [
    {value: "user1212", label: part(data[5])},
    {value: "user1231", label: part(data[6])},
    {value: "user1234", label: part(data[7])},
    {value: "user2345", label: part(data[8])},
    {value: "user3456", label: part(data[9])}
]

const DataTableWithButtons = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [responseModel, setResponseModel] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [reviewId, setreviewId] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [values, setValues] = useState('')
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

  //add or edit response
  const responseADDEDIT = (val) => {
     setreviewId("")
     console.log(val)
  }

  //columns
  const columns = [
        // id
// To
// From
// Order_Id
// Issue_Type
// Bid_Id
// Message
// Status
// Created_Time
// Action(Response)
        {
          name: 'Id',
          selector: 'id',
          sortable: true,
          minWidth: '50px'
        },
        {
          name: 'To',
          minWidth: '200px',
          selector: 'To',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(row.avatar, row.To)}
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.To}</span>
                <small className='text-truncate text-muted mb-0'>@{row.To}</small>
              </div>
            </div>
          )
        },
        {
          name: 'From',
          selector: 'From',
          sortable: true,
          minWidth: '130px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>{row.From}</span>
              </div>
            </div>
          )
        },
        {
          name: 'Order Id',
          selector: 'Order_Id',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Issue Type',
          selector: 'Issue_Type',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.Issue_Type[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Bid Id',
          selector: 'Bid_Id',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Message',
          selector: 'Message',
          sortable: true,
          minWidth: '130px',
          maxWidth: '150px'
        },
        {
          name: 'Status',
          selector: 'Status',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      <Badge className='text-capitalize' color={statusObj[row.Status[0].label]} pill>
                          {row.Status[0].label}
                      </Badge>
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Created Time',
          selector: 'Created_Time',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Admin response',
          selector: 'adminRes',
          sortable: true,
          minWidth: '130px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center ml-1'>
              <div className='user-info text-truncate'>
               { row.adminRes === "" ? (
                    <X size={15} />
               ) : (
                    <Check size={15} />
               ) }
              </div>
            </div>
          )
        },
        {
          name: 'Actions',
          allowOverflow: true,
          minWidth:'130px',
          cell: row => {
            return (
              <div className='d-flex'>
                <UncontrolledDropdown>
                  <DropdownToggle className='pr-1' tag='span'>
                    <Trash size={15} onClick={e => {
                                                                                    e.preventDefault()
                                                                                    deleteCountry(row.id)
                                                                                  } }/>
                  </DropdownToggle>
                </UncontrolledDropdown>

                <Edit size={15} className='mr-1' onClick={ () => { 
                                    setCurrentId(row.id)
                                    setModal(true)
                                     } }/>

                <Eye size={15} onClick={ () => { 
                                    setreviewId(row.id)
                                    setResponseModel(true)
                                     } }/>
              </div>
            )
          }
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  const handleResponse = () => {
    setResponseModel(!responseModel)
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
              item.Status[0].value.toLowerCase().startsWith(search.toLowerCase()) 
              
            const includes =
              item.Status[0].value.toLowerCase().includes(search.toLowerCase())
    
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
       const Order_Id = item.Order_Id.toString()
        const startsWith =
          item.To.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Issue_Type[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Status[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          Order_Id.toLowerCase().startsWith(value.toLowerCase()) 
 
        const includes =
          item.To.toLowerCase().includes(value.toLowerCase()) ||
          item.Issue_Type[0].label.toLowerCase().includes(value.toLowerCase()) ||
          item.Status[0].label.toLowerCase().includes(value.toLowerCase()) ||
          Order_Id.toLowerCase().includes(value.toLowerCase())
         
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

    //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
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
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>

            <Col md='4'>
            <div >
              <Label for='BidStatus'>To</Label>
              <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionTo}
                  theme={selectThemeColors}
                  value={values.To}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 To : data
                                              } 
                                      )
                                    }
                            }
                />
              </div>
            </Col>

            <Col md='4'>
            <div style={{ position:'relative'}}>
              <Label for='BidStatus'>Date</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionDate}
                value={values.Date}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Date : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>

            <Col md='4'>
            <div style={{ position:'relative'}}>
              <Label for='BidStatus'>Admin Response</Label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionRespoded}
                value={values.resp}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 resp : data
                                              } 
                                      )
                                    }
                            }
                />
              
              </div>
            </Col>
        </Row>
        <Row>

            <Col md='4'>
              <label>Status</label>
              <Select
                 style={{position:'relative', zIndex:1000}}
                isClearable={false}
                theme={selectThemeColors}

                className='react-select '
               
                classNamePrefix='select'
                options={optionStatus}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
            

            <Col md='4'>
            <div >
              <Label for='BidStatus'>From</Label>
              <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionFrom}
                  theme={selectThemeColors}
                  value={values.from}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 from : data
                                              } 
                                      )
                                    }
                            }
                />
              </div>
            </Col>

          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Redressal</CardTitle>
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
               <Button className='ml-2' color='primary' onClick={handleModal}>
                  <Plus size={15} />
                  <span className='align-middle ml-50'>Add New</span>
              </Button>
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
            <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} />
            <Response open={responseModel} handleModal={handleResponse}  responseADDEDIT={responseADDEDIT} currentId={reviewId} data={data} />
    </Fragment>
  )
}

export default DataTableWithButtons
