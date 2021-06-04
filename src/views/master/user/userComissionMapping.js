// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & pendingColumns
import { usersComissionData } from './data'
import Select from 'react-select'

// ** Add New Modal Component
//import FormModel from './formModel'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup,
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


// ** Renders Client pendingColumns
// const renderClient = row => {
//   const stateNum = Math.floor(Math.random() * 6),
//     states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
//     color = states[stateNum]

//   if (row.avatar.length) {
//     return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
//   } else {
//     return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" />
//   }
// }

const optionBidStatus = [
    {value: "", label: "Filter Status"},
    {value: "productName", label: "Product Name"},
    {value: "mrp", label: "MRP"},
    {value: "gst", label: "GSt"},
    {value: "category", label: "Category"},
    {value: "subCategory", label: "Sub Category"},
    {value: "productCategory", label: "Product Category"}
  ]

const UserComissionMapping = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success'
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
  const pendingColumns = [
    {
      name: 'User Id',
      selector: 'userId',
      sortable: true,
      minWidth: '50px'
    },
    {
      name: 'Product category Id',
      selector: 'productCategoryId',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Comission Rate',
      selector: 'comissionRate',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Comission Gst',
      selector: 'comissionGst',
      sortable: true,
      minWidth: '150px'
    }
  ]
  

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
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
      pageCount={searchValue.length ? filteredData.length / 7 : usersComissionData.length / 7 || 1}
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
          <CardTitle tag='h4'>Users Comission Mapping</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            
          </div>
        </CardHeader>
         <DataTable
          noHeader
          pagination
          selectableRows
          columns={pendingColumns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : usersComissionData}
          selectableRowsComponent={BootstrapCheckbox}
        />
        
      </Card>
    </Fragment>
  )
}

export default UserComissionMapping
