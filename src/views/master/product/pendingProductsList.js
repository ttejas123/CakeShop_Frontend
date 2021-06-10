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
import { data } from './data'
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

const ProductList = () => {
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
    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
      setCurrentId("")
      console.log(val)
  }

  const handleReject = (val) => {
    setModal(!modal)
  }

  const renderClient = row => {
    const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
  
    if (row.avatar.length) {
      return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
    } else {
      return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" />
    }
  }

  const pendingColumns = [
    {
      name: 'BUIN',
      selector: 'buin',
      sortable: true,
      minWidth: '50px'
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      minWidth: '150px',
      cell: row => (
        <div key={row.id} className='d-flex align-items-center'>
          <Link  to={`/productDetails/${row.id}`}>
          <div className='user-info text-truncate'>
            <span className='d-block font-weight-bold text-truncate'>
                 {row.name}
            </span>
          </div>
          </Link>
        </div>
      )
    },
    {
      name: 'EAN UPC Code',
      selector: 'ean_upc_code',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Category',
      selector: 'category',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Sub Category',
      selector: 'subCategory',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Product Category',
      selector: 'productCategory',
      sortable: true,
      minWidth: '150px'
    },
    // {
    //   name: 'Status',
    //   selector: 'status',
    //   sortable: true,
    //   minWidth: '150px',
    //   cell: row => (
    //     <div key={row.id} className='d-flex align-items-center'>         
    //       <div className='user-info text-truncate'>
    //         <span className='d-block font-weight-bold text-truncate'>
    //               <Badge className='text-capitalize' color={statusObj[row.status[0].label]} pill>
    //                   {row.status[0].label}
    //               </Badge>
    //         </span>
    //       </div>
    //     </div>
    //   )
    // },
    {
      name: 'Hsn Code',
      selector: 'hsnCode',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'gst(Number)%',
      selector: 'gstNumber',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'MRP',
      selector: 'mrp',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
      minWidth: '150px'
    },
    {
        name: 'User',
        minWidth: '150px',
        selector: 'Name',
        sortable: true,
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            {renderClient(row)}
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
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ml-50'>Approve</span>
              </DropdownItem>
              <DropdownItem onClick={e => {
                                                                              e.preventDefault()
                                                                              handleReject(row.id)
                                                                            } }>
                <Archive size={15} />
                <span className='align-middle ml-50'>Reject</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
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
              item.BidStatus[0].value.toLowerCase().startsWith(search.toLowerCase()) 
              
            const includes =
              item.BidStatus[0].value.toLowerCase().includes(search.toLowerCase())
    
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
          item.productName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.mrp.toLowerCase().startsWith(value.toLowerCase()) ||
          item.gst.toLowerCase().startsWith(value.toLowerCase()) 
          console.log(startsWith)
        const includes =
          item.productName.toLowerCase().includes(value.toLowerCase()) ||
          item.mrp.toLowerCase().includes(value.toLowerCase()) ||
          item.gst.toLowerCase().includes(value.toLowerCase()) 
          
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
        <Modal isOpen={modal} toggle={() => setModal(!modal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setModal(!modal)}>Reject</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='reason'>Reason:</Label>
              <Input type='textarea' id='reason' placeholder='Reason for Rejection' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModal(!modal)}>
              Submit
            </Button>{' '}
          </ModalFooter>
        </Modal>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionBidStatus}
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
          <CardTitle tag='h4'>Products</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            
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
          columns={pendingColumns}
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

export default ProductList
