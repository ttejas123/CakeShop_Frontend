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
  
const optionDate = [
    {value: "7days", label: "7 Days"},
    {value: "1month", label: "1 Month"},
    {value: "3months", label: "3 Months"},
    {value: "today", label: "Today"},
    {value: "overall", label: "Overall"}
]

const optionRaised = [
    {value: "user1212", label: "user1212"},
    {value: "user2323", label: "user2323"},
    {value: "user3434", label: "user3434"},
    {value: "user5454", label: "user5454"},
    {value: "user6565", label: "user6565"}
]

const optionAction = [
    {value: "Return", label:"Return"},
    {value: "Refund", label:"Refund"},
    {value: "Replace", label:"Replace"}
]

const optionProduct = [
    {value: "Men's Regular Fit T-Shirt", label:"Men's Regular Fit T-Shirt"},
    {value: "Men's Regular Fit Pants", label:"Men's Regular Fit Pants"},
    {value: "Men's Regular Fit Shirt", label:"Men's Regular Fit Shirt"}
]
  
  const [currentPage, setCurrentPage] = useState(0)
  const [reviewId, setreviewId] = useState(0)
  const [filteredData, setFilteredData] = useState([])
  const [searchValue, setSearchValue] = useState('')
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

const columns = [
        {
          name: 'Name',
          minWidth: '150px',
          selector: 'product_Name',
          sortable: true
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


    // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const Order_Id = item.Order_Id.toString()
        const startsWith =
          Order_Id.toLowerCase().startsWith(value.toLowerCase())
          
          console.log(startsWith)
        const includes =
          Order_Id.toLowerCase().includes(value.toLowerCase()) 
          

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)
      setSearchValue(value)
    } else {
      setFilteredData(data)
    }
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
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='BidStatus'>Raised By</Label>
              <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionRaised}
                  theme={selectThemeColors}
                  value={values.raised}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 raised : data
                                              } 
                                      )
                                    }
                            }
                />
              </div>
            </Col>

            <Col md='4'>
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='BidStatus'>Action</Label>
              <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionAction}
                  theme={selectThemeColors}
                  value={values.action}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 action : data
                                              } 
                                      )
                                    }
                            }
                />
              </div>
            </Col>

            <Col md='4'>
            <div style={{zIndex:1000, position:'relative'}}>
              <Label for='BidStatus'>Produt</Label>
              <Select
                  id='BidStatus'
                  className='react-select'
                  classNamePrefix='select'
                  isClearable={false}
                  options={optionProduct}
                  theme={selectThemeColors}
                  value={values.product}
                  onChange={data => {
                                     setValues(
                                              {
                                                 ...values,
                                                 product : data
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
          <CardTitle tag='h4'>Product Issue</CardTitle>
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
                onChange={e => console.log(e.target.value)}
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
