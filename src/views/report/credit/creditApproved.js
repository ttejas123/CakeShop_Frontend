// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Table Columns
import { userData } from './data'
import Avatar from '@components/avatar'
import { selectThemeColors } from '@utils'

import { Link } from 'react-router-dom'
// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Share, Printer, File, Grid, Copy, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, UncontrolledDropdown, UncontrolledButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap'
//import InputBasic from './AddBadges'
// import HorizontalForm from './AddCurrency'
// import EditForm from './EditCurrency'

const CreditApproved = () => {

  
const optionUsers = [
  {value: "Pravin Poshmani", label: "Pravin Poshmani"},
  {value: "Tejas Thakare", label: "Tejas Thakare"},
  {value: "Komal Kamble", label: "Komal Kamble"}
]

const optionType = [
    {value: "User", label: "User"},
    {value: "Corporate", label: "Corporate"}
  ]

  const initialvalues = {
    Type : {value: "Select Type", label: "Select Type"},
    User : {value: "Select Name", label: "Select Name"}
  }

  const [currentPage, setCurrentPage] = useState(0)
  const [values, setValues] = useState(initialvalues) 
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [Filter, setFilter] = useState('')
  const [editData, setEditData] = useState({})
  
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
      name: 'Date',
      selector: 'date',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      minWidth: '150px'
    },
    {
        name: 'Email',
        selector: 'email',
        sortable: true,
        minWidth: '150px'
    },
    {
        name: 'Phone',
        selector: 'phone',
        sortable: true,
        minWidth: '150px'
    },
    {
        name: 'Approved Amount',
        selector: 'approvedAmount',
        sortable: true,
        minWidth: '150px'
    },
    {
        name: 'Approved By',
        selector: 'approvedBy',
        sortable: true,
        minWidth: '150px'
    },
    {
        name: 'FI Name',
        selector: 'fiName',
        sortable: true,
        minWidth: '150px'
    },
    {
        name: 'Brnach',
        selector: 'branch',
        sortable: true,
        minWidth: '150px'
    },
    {
        name: 'Comment',
        selector: 'comment',
        sortable: true,
        minWidth: '150px'
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
          item.PurchaseIntentName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.mrp.toLowerCase().startsWith(value.toLowerCase()) ||
          item.gst.toLowerCase().startsWith(value.toLowerCase()) 
          console.log(startsWith)
        const includes =
          item.PurchaseIntentName.toLowerCase().includes(value.toLowerCase()) ||
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
      pageCount={searchValue.length ? filteredData.length / 7 : userData.length / 7 || 1}
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

   
  // ** Converts table to CSV
  function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(userData[0])

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
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionType}
                value={values.Type}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               Type : data
                                            } 
                                    )
                                  }
                                }
              />
              </div>
            </Col>
            <Col md='4'>
            <div style={{zIndex:999, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionUsers}
                value={values.User}
                onChange={data => {
                                   setValues(
                                            {
                                               ...values,
                                               User : data
                                            } 
                                    )
                                  }}
              />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>User Activity Report</CardTitle>
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
                <DropdownItem className='w-100' onClick={() => downloadCSV(userData)}>
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
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={columns}
        className='react-dataTable'
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={userData}
      />
    </Card>
    </Fragment>
  )
}

export default CreditApproved
