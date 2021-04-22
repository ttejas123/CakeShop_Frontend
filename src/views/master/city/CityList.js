
// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Columns
import { cityData } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
//import InputBasic from './AddCity'
import HorizontalForm from './AddCity'
import EditForm from './EditCity'

const CityList = () => {

    //console.log(cityColumns)
    console.log(cityData)
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

//   const cityColumns = [
//     {
//       name: 'city Name',
//       selector: 'name',
//       sortable: true,
//       minWidth: '200px'
//     },
//     {
//       name: 'Symbol',
//       selector: 'symbol',
//       sortable: false,
//       minWidth: '250px'
//     },
//     {
//       name: 'Actions',
//       allowOverflow: true,
//       cell: row => {
//         return (
//           <div className='d-flex'>
//             <UncontrolledDropdown>
//               <DropdownToggle className='pr-1' tag='span'>
//                 <MoreVertical size={15} />
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   <FileText size={15} />
//                   <span className='align-middle ml-50'>Details</span>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <Archive size={15} />
//                   <span className='align-middle ml-50'>Archive</span>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <Trash size={15} />
//                   <span className='align-middle ml-50'>Delete</span>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//             <Edit size={15} />
//           </div>
//         )
//       }
//     }
//   ]

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
  // ** Function to handle filter
  // const handleFilter = e => {
  //   const value = e.target.value
  //   let updatedData = []
  //   setSearchValue(value)

  //   const status = {
  //     1: { title: 'Current', color: 'light-primary' },
  //     2: { title: 'Professional', color: 'light-success' },
  //     3: { title: 'Rejected', color: 'light-danger' },
  //     4: { title: 'Resigned', color: 'light-warning' },
  //     5: { title: 'Applied', color: 'light-info' }
  //   }

  //   if (value.length) {
  //     updatedData = data.filter(item => {
  //       const startsWith =
  //         item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.post.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.email.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.age.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
  //         status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

  //       const includes =
  //         item.full_name.toLowerCase().includes(value.toLowerCase()) ||
  //         item.post.toLowerCase().includes(value.toLowerCase()) ||
  //         item.email.toLowerCase().includes(value.toLowerCase()) ||
  //         item.age.toLowerCase().includes(value.toLowerCase()) ||
  //         item.salary.toLowerCase().includes(value.toLowerCase()) ||
  //         item.start_date.toLowerCase().includes(value.toLowerCase()) ||
  //         status[item.status].title.toLowerCase().includes(value.toLowerCase())

  //       if (startsWith) {
  //         return startsWith
  //       } else if (!startsWith && includes) {
  //         return includes
  //       } else return null
  //     })
  //     setFilteredData(updatedData)
  //     setSearchValue(value)
  //   }
  // }

  const cityColumns = [
    {
        name: 'City Name',
        selector: 'name',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'State',
        selector: 'state',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Country',
        selector: 'country',
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
                  <Trash size={15} onClick={e => { handleDelete(row) }} />
                </DropdownToggle>
              </UncontrolledDropdown>
              <Edit size={15} onClick={ e => { 
                                                e.preventDefault() 
                                                handleEditClick(row) 
                                                } } />
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
      pageCount={searchValue.length ? filteredData.length / 7 : cityData.length / 7 || 1}
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
        <CardTitle tag='h4'>City List</CardTitle>
        <Button className='ml-2' color='primary' onClick={handleAddClick} >
              <Plus size={15} />
              <span className='align-middle ml-50'>Add city</span>
            </Button>
      </CardHeader>
      {addClicked ? <HorizontalForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd}/> : null}
      {editClicked ? <EditForm data = {editData} handleCancel={handleCancelOfEdit} handleSubmit={handleSubmitOfEdit}/> : null}
      {/* <Row className='justify-content-end mx-0'>
        <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
          <Label className='mr-1' for='search-input-1'>
            <FormattedMessage id='Search' />
          </Label>
          <Input
            className='dataTable-filter mb-50'
            type='text'
            bsSize='sm'
            id='search-input-1'
            value={searchValue}
            onChange={handleFilter}
          />
        </Col>
      </Row> */}
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
        data={cityData}
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

export default CityList
