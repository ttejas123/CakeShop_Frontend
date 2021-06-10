import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { Link } from 'react-router-dom'

// ** Table Data & Columns
import { data } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash  } from 'react-feather'
import {
  Card,
  CardHeader,
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
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')

  const [addClicked, setAddClicked] = useState(0)


   //deleteCountry
  const deleteState = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) {
        console.log(" your record is deleted")
      } else {
      console.log("not deleted ")
      }
  }

  //columns
  const columns = [
        {
          name: 'Service Name',
          selector: 'Name',
          sortable: true,
          minWidth: '250px',
          cell: row => (
            <div className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
              
              <Link to={`/master/VasDetail`}>
                <span className='d-block font-weight-bold text-truncate'>{row.Name}</span>
              </Link>
              </div>
            </div>
          )
        },
        {
          name: 'Rate',
          selector: 'rate',
          sortable: true,
          minWidth: '250px',
          cell: row => (
            <div className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>{row.unit === "Hours" ? (<>₹{row.rate}/hr</>) : (<>₹{row.rate}/min</>) }</span>
              </div>
            </div>
          )
        },
        {
          name: 'Quantity',
          selector: 'quantity',
          sortable: true,
          minWidth: '250px'
        },
        {
          name: 'Unit',
          selector: 'unit',
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
                <Link to={`/master/vass/edit/${row.id}`}>
                    <Edit size={15} />
                </Link>
              </div>
            )
          }
        }
    ]


  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    console.log(data)
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const Cost = item.Cost.toString() 
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase()) ||
          Cost.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase()) ||
          Cost.toLowerCase().includes(value.toLowerCase()) 
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

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>VAS List</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
              <Link to={`/master/vass/add`}>
                <Button className='ml-2' color='primary' >
                                        <Plus size={15} />
                                        
                                        <span className='align-middle ml-50'>Add New</span>
                </Button>
              </Link>
                
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
    </Fragment>
  )
}

export default DataTableWithButtons
