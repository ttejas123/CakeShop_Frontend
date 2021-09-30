// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
//import { columns } from './data'
import Select from 'react-select'
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { List, DeleteProduct, SpecificProduct } from '@store/actions/master/product'
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


// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name.substring(0, 4) || 'John Doe'} initials status="online" />
  }
}

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

  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(List(5, 0))
   
  }, [useDisplatch])
  const DataTableD = useSelector(state => {
    //console.log(state.warehouse)
    return state.product
  })

  const deleteCountry = (id) => {
    DeletePop(DeleteProduct, id, useDisplatch, currentPage, List)
  }

  const columns = [
  {
    name: 'BUIN',
    selector: 'slug',
    sortable: true,
    maxWidth: '70px'
  },
  {
      name: 'Product Image',
      maxWidth: '150px',
      selector: 'name',
      sortable: true,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center'>
          <img src={row.img} className='w-100' height='40rem' />
        </div>
      )
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'EAN UPC Code',
    selector: 'ean_upc_code',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Product Category',
    selector: 'category',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Hsn Code',
    selector: 'hsn_code',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'SGST',
    selector: 'sGstNumber',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {row.sgst}%
      </div>
    )
  },
  {
    name: 'CGST',
    selector: 'cGstNumber',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {row.cgst}%
      </div>
    )
  },
  {
    name: 'GST',
    selector: 'iGstNumber',
    sortable: true,
    minWidth: '150px',
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {row.gst}%
      </div>
    )
  },
  {
    name: 'MRP ₹',
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
  // {
  //     name: 'User',
  //     minWidth: '150px',
  //     selector: 'Name',
  //     sortable: true,
  //     cell: row => (
  //       <div className='d-flex justify-content-left align-items-center'>
  //         {renderClient(row)}
  //       </div>
  //     )
  //   },
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
                                                                              deleteCountry(row.id)
                                                                            } }/>
            </DropdownToggle>
          </UncontrolledDropdown>
          <Link  to={`/master/editproduct/${row.id}`}><Edit  
            size={15} >
                                 <Link to='/edit-product'/>
                               </Edit></Link>
        </div>
      )
    }
  }
]

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
    useDisplatch(List(5, 0, e.target.value))
  }


  return (
    <Fragment>
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
              onChange={handleFilter}
            />
          </Col>
        </Row>

        <DataTable
          noHeader
          
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          
          data={DataTableD.data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        <ReactPagination followData = {DataTableD} dispachReq={List} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Card>
    </Fragment>
  )
}

export default ProductList
