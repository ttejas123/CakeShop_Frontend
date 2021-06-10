// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Table Columns
import { data1 } from './data'
import { Link } from 'react-router-dom'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
//import InputBasic from './AddMembership'
// import HorizontalForm from './AddMembership'
// import EditForm from './EditMembership'

const MembershipList = () => {

    //console.log(currencyColumns)
    console.log(data1)
  // ** State
//   const data = [
//     {
//       name: "US Dollar",
//       symbol: "$"
//     },
//     {
//       name: "Canadian Dollar",
//       symbol: "$"
//     },
//     {
//       name: "Euro",
//       symbol: "€"
//     }
// ]
// console.log(data)

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

  const MembershipColumns = [
    {
      name: 'Membership Name',
      selector: 'name',
      sortable: true,
      minWidth: '150px',
           cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <Link to={`/master/membershps/views`}>
                <div className='user-info text-truncate'>
                  <span className='d-block font-weight-bold text-truncate'>{row.name}</span>
                </div>
              </Link>  
            </div>
          )

    },
    {
      name: 'Membership For',
      selector: 'membershipFor',
      sortable: false,
      minWidth: '250px'
    },
    {
      name: 'Membership Type',
      selector: 'membershipType',
      sortable: false,
      minWidth: '250px'
    },
    {
        name: 'Benefit',
        selector: 'benefit',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Cost',
        selector: 'cost',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Duration',
        selector: 'duration',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Active',
        selector: 'active',
        sortable: false,
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
                <Trash size={15} onClick={e => { handleDelete(row) }} />
              </DropdownToggle>
            </UncontrolledDropdown>

             <Link  to={`/edit-membership`}><Edit  
                  size={15} 
                  onClick={ () => { 
                                    //setCurrentId(row.id)
                                    //setModal(true)
                                     } }>
                                       <Link to='/edit-membership'/>
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

  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data1.length / 7 || 1}
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
        <CardTitle tag='h4'>Membership List</CardTitle>
        <Link  to={`/edit-membership`}>
        <Button className='ml-2' color='primary' onClick={handleAddClick}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Membership</span>
            </Button>
            </Link>
      </CardHeader>
      {/* {addClicked ? <HorizontalForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd} /> : null} */}
      {/* {editClicked ? <EditForm data ={editData} handleCancel={handleCancelOfEdit} handleSubmit={handleSubmitOfEdit} /> : null} */}
      <DataTable
        noHeader
        pagination
        selectableRowsNoSelectAll
        columns={MembershipColumns}
        className='react-dataTable'
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={data1}
      />
    </Card>
    </Fragment>
  )
}

export default MembershipList
