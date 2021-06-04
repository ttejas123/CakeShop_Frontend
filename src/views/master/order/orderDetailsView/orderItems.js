
// ** React Imports
import { Fragment, useState } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'

import { Table, Card, CardHeader, CardTitle } from 'reactstrap'
import { ChevronDown } from 'react-feather'

const Items = () => {

    const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  const data = [
      {
        product : "Nike Shoes",
        quantity : 2,
        rate : 2000,
        cost : 2000
      },
      {
        product : "Puma Shoes",
        quantity : 3,
        rate : 2000,
        cost : 2000
      },
      {
        product : "Titan Watch",
        quantity : 200,
        rate : 2000,
        cost : 200000
      },
      {
        product : "Cello Pens",
        quantity : 2000,
        rate : 2000,
        cost : 20000
      }
    ]

const columns = [
    {
        name: 'Product',
        selector: 'product',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Quantity',
        selector: 'quantity',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Rate',
        selector: 'rate',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Cost',
        selector: 'cost',
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
<CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
  <CardTitle tag='h4'>Items</CardTitle>
  <div className='d-flex mt-md-0 mt-1'>
    
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
    </Card>
  )
}

export default Items
