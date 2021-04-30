// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Add New Modal Component
import FormModel from './formModel'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Eye, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash, Check, X  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
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
  const optionCountry = [
    {value: "", label: "Select Your country"},
    {value: "India", label: "India"},
    {value: "USA", label: "USA"},
    {value: "Canada", label: "Canada"},
    {value: "Japan", label: "Japan"}
]

const optionCity = [
    {value: "", label: "Select Your City"},
    {value: "Mumbai", label: "Mumbai"},
    {value: "Pune", label: "Pune"}
]

const optionState = [
    {value: "", label: "Select Your State"},
    {value: "Maharashtra", label: "Maharashtra"},
    {value: "Up", label: "Up"}
]
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

   //deleteCountry
  const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) { 
        console.log("Deleted")
      } else {
      console.log("not deleted ")
      }
  }
    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
      setCurrentId("")
      console.log(val)
  }


  //columns
  const columns = [
        {
          name: 'Id',
          selector: 'id',
          sortable: true,
          minWidth: '50px'
        },
        {
          name: 'WareHouse Name',
          minWidth: '200px',
          selector: 'name',
          sortable: true,
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>{row.name}</span>
               
              </div>
            </div>
          )
        },
        {
          name: 'Country',
          selector: 'country',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.country[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'State',
          selector: 'state',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.state[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'City',
          selector: 'city',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      
                          {row.city[0].label}
                      
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Is Bidoya WareHouse',
          selector: 'is_Bidoya_WareHouse',
          sortable: true,
          minWidth: '150px',
          cell: row => (
            <div key={row.id} className='ml-1 d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>
                      { row.is_Bidoya_WareHouse === 0 ? (
                            <X size={15} />
                       ) : (
                            <Check size={15} />
                       ) }
                </span>
              </div>
            </div>
          )
        },
        {
          name: 'Created Date',
          selector: 'Created_Date',
          sortable: true,
          minWidth: '130px'
        },
        {
          name: 'Actions',
          allowOverflow: true,
          minWidth:'130px',
          cell: row => {
            return (
              <div className='d-flex'>
                <UncontrolledDropdown>
                  <DropdownToggle className='pr-1' tag='span'>
                    <Trash size={15} onClick={e => {
                                                                                    e.preventDefault()
                                                                                    deleteCountry(row.id)
                                                                                  } }/>
                  </DropdownToggle>
                </UncontrolledDropdown>

                <Edit size={15} className='mr-1' onClick={ () => { 
                                    setCurrentId(row.id)
                                    setModal(true)
                                     } }/>

              </div>
            )
          }
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // handle drop down filter
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
              item.Status[0].value.toLowerCase().startsWith(search.toLowerCase()) 
              
            const includes =
              item.Status[0].value.toLowerCase().includes(search.toLowerCase())
    
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
          item.To.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Issue_Type.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Status[0].label.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.To.toLowerCase().includes(value.toLowerCase()) ||
          item.Issue_Type.toLowerCase().includes(value.toLowerCase()) ||
          item.Status[0].label.toLowerCase().includes(value.toLowerCase())
         
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
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <label>Search Country</label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCountry}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
            <Col md='4'>
              <label>Search Country</label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCountry}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
            <Col md='4'>
              <label>Search Country</label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCountry}
                value={Filter}
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Redressal</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
               <Button className='ml-2' color='primary' onClick={handleModal}>
                  <Plus size={15} />
                  <span className='align-middle ml-50'>Add New</span>
              </Button>
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
            <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} />
            
    </Fragment>
  )
}

export default DataTableWithButtons
