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
//import FormModel from './formModel'
//import Response from './responseModel' 
import Response from './viewAllitems'
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


// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name || 'John Doe'} initials status="online" />
  }
}


const part = (data2) => {
  return (<div className='d-flex justify-content-left align-items-center'>
          {renderClient(data2)}
        <div className=''>
                                          
          <div className='user-info text-truncate d-flex flex-column'>
            <span className='font-weight-bold'>{data2.name}</span>
              <small className='text-truncate text-muted mb-0'>@{data2.userName}</small>
          </div>
                                         
        </div>
    </div>)
}


const optionPartners = [
    {value: "user1212", label: part(data[0])},
    {value: "user1231", label: part(data[1])},
    {value: "user1234", label: part(data[2])},
    {value: "user2345", label: part(data[3])},
    {value: "user3456", label: part(data[4])},
    {value: "user245", label: part(data[5])},
    {value: "user3456", label: part(data[6])},
    {value: "user235", label: part(data[7])},
    {value: "user3456", label: part(data[8])},
    {value: "user345", label: part(data[9])},
    {value: "user3456", label: part(data[10])}
]

const optionProduct = [
    {value: "T-shirt", label: "T-shirt"},
    {value: "Back-Cover", label: "Back-Cover"},
    {value: "Glasses", label: "Glasses"},
    {value: "T-Shirt", label: "T-Shirt"}
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
          minWidth: '50px',
          maxWidth: '100px'
        },
        {
          name: 'Name',
          minWidth: '200px',
          maxWidth: '310px',
          selector: 'name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              {renderClient(row)}
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.name}</span>
                <small className='text-truncate text-muted mb-0'>@{row.userName}</small>
              </div>
            </div>
          )
        },
        {
          name: 'No Of Items In Cart',
          selector: 'noOfitemInCarts',
          sortable: true,
          minWidth: '150px',
          maxWidth: '230px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              <div className='ml-1'>
                
                  <span className='font-weight-bold'>{row.noOfitemInCarts}</span>
              </div>
            </div>
          )
        },
        {
          name: 'SKU',
          selector: 'SKU',
          sortable: true,
          minWidth: '150px',
          maxWidth: '230px'
        },
        {
          name: 'MOQ Units',
          selector: 'MOQ_Units',
          sortable: true,
          minWidth: '150px',
          maxWidth: '230px'
        },
        {
          name: 'Sample MRP',
          selector: 'Sample_MRP',
          sortable: true,
          minWidth: '150px',
          maxWidth: '230px'
        },
        {
          name: 'Items In Cart',
          selector: 'bids',
          sortable: true,
          minWidth: '180px',
          maxWidth: '300px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center ml-2'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate d-flex '>
                {row.bids.map((val, index) => {
                  if (index < 1) {
                    return (
                      <div className="mr-1">{val.label}</div>
                      )
                  }
                })
                }

                {row.bids.length > 1 ? (
                                                  <u><a href="#" onClick={ () => { 
                                                                   setreviewId(row.id)
                                                                    setResponseModel(true)
                                                                     } }>
                                                      view
                                                </a></u>
                                                  ) : null}
                </span>
                
              </div>
            </div>
          )
        },
        {
          name: 'Delivery Time',
          selector: 'Delivery_Time',
          sortable: true,
          minWidth: '150px',
          maxWidth: '230px'
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
        const MOQ = item.MOQ_Units.toString()
        const startsWith =
          item.name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.userName.toLowerCase().startsWith(value.toLowerCase()) ||
          MOQ.toLowerCase().startsWith(value.toLowerCase())
          
        const includes =
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.userName.toLowerCase().includes(value.toLowerCase()) ||
          MOQ.toLowerCase().includes(value.toLowerCase())
          

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
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='BidStatus'>User</Label>
              <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionPartners}
                  theme={selectThemeColors}
                  value={values.user}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 user : data
                                              } 
                                      )
                                    }
                            }
                />
              </div>
            </Col>

            <Col md='4'>
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='Product'>Product</Label>
              <Select
                  id='Product'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionProduct}
                  theme={selectThemeColors}
                  value={values.Product}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 Product : data
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
          <CardTitle tag='h4'>Cart</CardTitle>
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
      <Response open={responseModel} handleModal={handleResponse} currentId={reviewId} data={data} />
    </Fragment>
  )
}

export default DataTableWithButtons
