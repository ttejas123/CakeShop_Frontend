// ** React Imports
import { Fragment, useState, forwardRef} from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Table Columns
import { data } from './data'
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { MoreVertical, Edit, FileText, Archive,  Share, Printer, File, Grid, Copy, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, UncontrolledDropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Badge } from 'reactstrap'
//import InputBasic from './AddBadges'
// import HorizontalForm from './AddCurrency'
// import EditForm from './E
const CustomizationList = () => {

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

    //console.log(BankGuarranteApplsColumns)
    const statusObj = {
        processed: 'light-secondary',
        shipped: 'light-success',
        accepted: 'light-warning'
  }
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})
  const [Filter, setFilter] = useState('')
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const handleEditClick = (item) => {
      if (!addClicked) { 
        setEditClicked(!editClicked)
        setEditData(item)
      }
    //console.log(item)
  }

  const handleAddClick = () => {
      if (!editClicked) {
        setAddClicked(!addClicked)
      }
  }

  const handleCancelOfEdit = () => {
    console.log("in Cancel")
    setEditClicked(!editClicked)
}
const handleCancelOfAdd = () => {
    console.log("in Cancel")
    setAddClicked(!addClicked)
}
const handleSubmitOfAdd = (data) => {
    console.log("in submit", data)
    setAddClicked(!addClicked)
}

const handleSubmitOfEdit = (data) => {
    console.log("in submit of edit", data)
    setEditClicked(!editClicked)
}

const handleDelete = (data) => {
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) {
        console.log(" your record is deleted")
      } else {
      console.log("not deleted ")
      }
}

  const columns = [
    {
        name: 'User Name',
        selector: 'userName',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Bid Id',
        selector: 'bidId',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Customization',
        selector: 'customization',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Approved',
        selector: 'approved',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Approved By',
        selector: 'approvedBy',
        sortable: true,
        minWidth: '250px'
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
                                                                                  deleteState(row.id)
                                                                                } }/>
                </DropdownToggle>
              </UncontrolledDropdown>

              <Edit size={15} onClick={ () => { 
                                  setCurrentId(row.id)
                                   setAddClicked(!addClicked)
                                   } }/>
            </div>
          )
        }
      }
      ]
 
  // ** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Prev' /> */}
        </span>
      </Fragment>
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>
          {/* <FormattedMessage id='Next' /> */}
        </span>
      </Fragment>
    )
  }
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


  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate pagination-sm justify-content-end pr-1 mt-1'}
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
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Customization List</CardTitle>
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
            <Link  to={`/report/add-sample-request`}>
            <Button className='ml-2' color='primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Email</span>
            </Button>
            </Link>
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
        
      {/* <CardFooter>
        <CardText className='mb-0'>
          <span className='font-weight-bold'>Note:</span>{' '}
          <span>Use Intl Dropdown in Navbar to change table language</span>
        </CardText>
      </CardFooter> */}
    </Card>
    </Fragment>
  )
}

export default CustomizationList

