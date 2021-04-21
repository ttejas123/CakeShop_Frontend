// ** Custom Components
import Avatar from '@components/avatar'


// ** React Imports
import { Fragment, useState, forwardRef } from 'react'

// ** Table Data & Columns
import { data } from './data'

// ** Add New Modal Component
import ModelForm from './FormModel'

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
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})


   //deleteCountry
  const deleteState = (val) => {
    //here we passing id to delete this specific record
    console.log(val)
  }
    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
     console.log(currentId)
      setCurrentId("")
      console.log(val)
  }

  //columns
  const columns = [
        {
          name: 'StateName',
          selector: 'StateName',
          sortable: true,
          minWidth: '250px',
          cell: row => (
            <div className='d-flex align-items-center'>
              <div className='user-info text-truncate ml-1'>
                <span className='d-block font-weight-bold text-truncate'>{row.StateName}</span>
              </div>
            </div>
          )
        },
        {
          name: 'Country',
          selector: 'Country',
          sortable: true,
          minWidth: '250px',
          cell: row => {
            return (
                <div className='d-flex align-items-center'>
                  <div className='user-info text-truncate ml-1'>
                    <span className='d-block font-weight-bold text-truncate'>{row.Country}</span>
                  </div>
                </div>
            )
          }
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
                    <DropdownItem tag='a' href='/' className='w-100' onClick={e => {
                                                                                    e.preventDefault()
                                                                                    deleteState(row.id)
                                                                                  } }>
                      <Trash size={15} />
                      <span  className='align-middle ml-50'>Delete</span>
                    </DropdownItem>
                  </DropdownMenu>
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


  // ** Function to handle toggle
  const handleModal = () => {
    if (addClicked === 1) {
     setAddClicked(0)
    } else {
      setAddClicked(1)
    }
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    console.log(data)
    setSearchValue(value)
    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.StateName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Country.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.StateName.toLowerCase().includes(value.toLowerCase()) ||
          item.Country.toLowerCase().includes(value.toLowerCase()) 
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
          <CardTitle tag='h4'>States List</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            {addClicked === 0 ? (
                <Button className='ml-2' color='primary' onClick={handleModal}>
                                        <Plus size={15} />
                                        <span className='align-middle ml-50'>Add Your State</span>
                </Button>
                ) : (
                <span></span>
                )
            }
          </div>
        </CardHeader>
        {addClicked ? <ModelForm handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> : null}
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
