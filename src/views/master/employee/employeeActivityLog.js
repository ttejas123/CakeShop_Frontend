
// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'

import { Table, Card } from 'reactstrap'
import { ChevronDown } from 'react-feather'

const EmployeeActivityLogCard = () => {

    const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  const data = [
      {
        id: 1,
        userName: "Komal Kamble",
        task: "Meeting",
        with : "Pravin Poshmani",
        emailId : "pravin@abc.com",
        status : "Completed",
        comment : "Anything",
        date: "12-04-2021"
      },
      {
        id: 2,
        userName: "Tejas Thakre",
        task : "Document Verification",
        with : "Komal Kamble",
        emailId : "komal@abc.com",
        status : "Completed",
        comment : "Anything",
        date: "12-04-2021"
      },
      {
        id: 3,
        userName: "Pravin Poshmani",
        task: "Meeting",
        with : "Allu Arjun",
        emailId : "Arjun@abc.com",
        status : "Completed",
        comment : "Anything",
        date: "12-04-2021"
      },
      {
        id: 4,
        userName: "Salman Khan",
        task: "Document Verification",
        with : "Himanshu Chanda",
        emailId : "himanshu@abc.com",
        status : "Pending",
        comment : "Anything",
        date: "12-04-2021"
      }
    ]

const columns = [
    {
        name: 'Task',
        selector: 'task',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'With',
        selector: 'with',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Email Id',
        selector: 'emailId',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Comment',
        selector: 'comment',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Date',
        selector: 'date',
        sortable: false,
        minWidth: '250px'
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
    <Card className='card-company-table'>
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
    </Card>
  )
}

export default EmployeeActivityLogCard
