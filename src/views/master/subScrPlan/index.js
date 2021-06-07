// Type : Category, User, Transcation
// default Commission %

// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'

// ** Add New Modal Component

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Eye, Trash  } from 'react-feather'
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


const DataTableWithButtons = () => {

  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')

    const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) { 
        console.log("Deleted")
      } else {
      console.log("not deleted ")
      }
  }

  //columns
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      minWidth: '200px',
      maxWidth: '200px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              
              <div className='d-flex flex-column'>
                <Link to={`/master/subscription/aveil/${row.id}`}>
                  <span className='font-weight-bold'>{row.name.label}</span>
                </Link>
              </div>
            </div>
          )
    },
    {
        name: 'Benefit',
        selector: 'benefit',
        sortable: false,
        minWidth: '250px',
        maxWidth: '350px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              
              <div className='d-flex flex-column'>
                {
                  row.benefit.map((val, index) => {
                    return (
                        <span className='font-weight-bold'>{val.label}</span>
                    )
                  })
                }
                
              </div>
            </div>
          )
      },
      {
        name: 'Cost',
        selector: 'cost',
        sortable: false,
        minWidth: '250px',
        maxWidth: '300px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              
              <div className='d-flex flex-column'>
                
                  <span className='font-weight-bold'>₹{row.cost}</span>
               
              </div>
            </div>
          )
      },
      {
        name: 'Active',
        selector: 'active.label',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'No user Availed',
        selector: 'aveil',
        sortable: false,
        minWidth: '250px',
          cell: row => (
            <div className='d-flex justify-content-left align-items-center'>
              
              <div className='d-flex flex-column'>
                <Link to={`/master/subscription/aveil/${row.id}`}>
                  <span className='font-weight-bold'>{row.aveil}</span>
                </Link>
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
                    <Trash size={15} />
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link to={`/master/subscriptionplans/edit/${row.id}`}>
                  <Edit size={15} />
                </Link>  
              </div>
            )
          }
        }
    ]


  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.customizations.toLowerCase().startsWith(value.toLowerCase()) ||
          item.deliveryDate.toLowerCase().startsWith(value.toLowerCase()) ||
          item.Category[0].label.toLowerCase().startsWith(value.toLowerCase()) ||
          item.subCategory[0].label.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase()) ||
          item.customizations.toLowerCase().includes(value.toLowerCase()) ||
          item.deliveryDate.toLowerCase().includes(value.toLowerCase()) ||
          item.Category[0].label.toLowerCase().includes(value.toLowerCase()) ||
          item.subCategory[0].label.toLowerCase().includes(value.toLowerCase()) 

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
          <CardTitle tag='h4'>Subscription Plan</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <Link to={`/master/subscriptionplans/add`}>
              <Button className='ml-2' color='primary'>
                  <Plus size={15} />
                  <span className='align-middle ml-50'>Add New</span>
              </Button>
            </Link>
          </div>
        </CardHeader>

        <DataTable
          noHeader
          pagination
          
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
          
        />
        
      </Card>
      
    </Fragment>
  )
}

export default DataTableWithButtons
