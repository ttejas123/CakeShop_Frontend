
// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Columns
import { meetingData } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'

const MeetingCard = () => {

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const handleAddClick = () => {
    if (!editClicked) {
      setAddClicked(!addClicked)
    }
  }

  const handleEditClick = (item) => {
    if (!addClicked) { 
      setEditClicked(!editClicked)
      setEditData(item)
    }
  //console.log(item)
}
const handleConverted = () => {
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

  const cityColumns = [
    {
        name: 'Contact Person Name',
        selector: 'contactPersonName',
        sortable: false,
        minWidth: '250px',
        cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              <div className=''>
                  <div className='user-info text-truncate d-flex flex-column'>
                     <span className='font-weight-bold'>{row.contactPersonName}</span>
                     <small className='text-truncate text-muted mb-0'>{row.designation}</small>
                  </div>
              </div>
            </div>
          )
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Mobile',
        selector: 'mobile',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Date',
        selector: 'date',
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
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>Update</span>
                </DropdownItem>
                {/* <DropdownItem onClick={e => {
                                                                                e.preventDefault()
                                                                                handleConverted(row.id)
                                                                              } }>
                  <Archive size={15} />
                  <span className='align-middle ml-50'>Pending</span>
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
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

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : meetingData.length / 7 || 1}
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
        <CardTitle tag='h4'>Meeting</CardTitle>
      </CardHeader>   
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={cityColumns}
        className='react-dataTable'
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={meetingData}
      />
    </Card>
    </Fragment>
  )
}

export default MeetingCard
