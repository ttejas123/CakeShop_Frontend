// ** React Imports
import { Fragment, useState } from 'react'
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
import { MoreVertical, Edit, FileText, Archive,  Share, Printer, File, Grid, Copy, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Badge } from 'reactstrap'
//import InputBasic from './AddBadges'
// import HorizontalForm from './AddCurrency'
// import EditForm from './E
const SampleRequestList = () => {

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
      },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pr-1' tag='span'>
                <Trash size={15} onClick={e => { handleDelete(row) }} />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Link  to={`/report/add-sample-request`}><Edit  
                  size={15} 
                  onClick={ () => { 
                                    //setCurrentId(row.id)
                                    //setModal(true)
                                     } }>
                                       <Link to='/report/add-sample-request'/>
                                     </Edit></Link>
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
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Sample Request List</CardTitle>
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
              <span className='align-middle ml-50'>Add Sample Request</span>
            </Button>
            </Link>
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
        data={data}
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

export default SampleRequestList
