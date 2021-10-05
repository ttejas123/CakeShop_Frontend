//User Info, SKU, Product Name, MRP, MOQ, Image, added Date
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import { List, DeleteCataloge } from '@src/redux/actions/master/catalogue/index.js'
import Select from 'react-select'

// ** Third Party Components
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { ChevronDown, Share, Printer, File, Grid, Package, DollarSign, Clock, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash, Eye, Check, X  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup,
  Input,
  Label,
  Row,
  Media,
  Col,
  Badge, UncontrolledDropdown,
  DropdownToggle
} from 'reactstrap'
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
    // <div className='custom-control custom-checkbox' style={{ height: '100%', color:'black' }}>

  <div className='custom-control custom-checkbox d-block my-auto'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.image.length) {
    return <Avatar className='mr-1' img={row.image} width='32' height='32'  /> 
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.sku_title || 'John Doe'} initials status="online" /> 
  }
}

const renderProduct = row => {
  const stateNum = Math.floor(Math.random() * 6),
  states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
  color = states[stateNum]
  const str = `${row.sku_title || 'John Doe'}`
  const initial = str.substring(0, 1)
  return (
      <Media>
            { row.image.length ? (
                <CardBody>
              <img src={row.image} width='60'  className='h-25 w-10' />
              </CardBody>
              ) : (
                <Avatar
                  initials
                  className='mr-2 mb-3 h-25 w-10'
                  color={color}
                  className='rounded mr-2 my-25'
                  content={initial}
                  contentStyles={{
                    borderRadius: 0,
                    fontSize: 'calc(36px)',
                    width: '100%',
                    height: '100%'
                  }}
                  style={{
                    height: '40px',
                    width: '40px'
                  }}
              />)
             }
          </Media>
    )
}

const MyProducts = () => {
  // ** States
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(List(5, 0))
  }, [dispatch])
  const catalogue = useSelector(state => {
      return state.catalogue
  })
  //console.log("In P", data)
  const [formModal, setFormModal] = useState(false)
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [selectedProduct, setselectedProduct] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [addClicked, setAddClicked] = useState(0)
  const [values, setValues] = useState('')

  const optionCategory = []
  const optionSubCategory = []

  const optionReportReasons = []

   //deleteCountry
  const deletePop = (id) => {
    DeletePop(DeleteCataloge, id, dispatch, currentPage, List)
  }


  const tempStyle = {
      minHeight : '6.8rem'
  }

  const special = {
      minHeight : '6.8rem',
      backgroundColor: '#f0f0f0'
  }

  //columns
  const columns = [
    {
      name: 'Image',
      selector: 'Image',
      sortable: false,
      minWidth: '50px',
      style : tempStyle,
      allowOverflow : true,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center '>
          {renderProduct(row)}
          <div className=''>
             
          </div>
        </div>
      )
    },
        {
          name: 'Product Name',
          selector: 'sku_title',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
        },
        {
          name: 'MRP ₹',
          selector: 'mrp',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
        },
        {
          name: 'My Price ₹',
          selector: 'unit_price',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
      },
        {
          name: 'Asin / Fsn/ Hsn Code',
          selector: 'hsn_code',
          sortable: true,
          minWidth: '50px',
          style : tempStyle,
          cell: row => (
            <div className=' '>
              <span>{row.asinNumber}</span> <br/>
              <span>{row.fsnNumber}</span> <br/>
              <span>{row.hsn_code}</span> 
              <div className=''>
                 
              </div>
            </div>
          )
        },
  {
    name: <div className='d-flex align-items-center' ><Clock size={14} /><div style={{marginLeft: '5px'}}>Lead Time</div></div>,
    minWidth: '160px',
    style: special,
    selector: 'delivery_days',
    sortable: true,
    cell: row => {
      return (
        <div className='d-flex align-items-center justify-content-center'>
          <div id={`Buyer-tooltip-${row.id}`} className='cursor-pointer user-name text-truncate' style={{marginBottom: '5px'}}> 
               {row.delivery_days}
          </div>
          
        </div>
      )
    }
  },
  {
    name: <div className='d-flex align-items-center'>₹<div style={{marginLeft: '5px'}}>Rate</div></div>,
    minWidth: '150px',
    style: special,
    selector: 'unit_price',
    sortable: true,
    cell: row => {
      return (

        <div className=' align-items-center'>
          <div id={`Buyer-tooltip-${row.id}`} className='cursor-pointer user-name text-truncate' style={{marginBottom: '5px'}}> 
              
                ₹{row.unit_price}
              
          </div>
        </div>

      )
    }
  },
  {
    name: <div className='d-flex align-items-center'><Package  size={14} /><div style={{marginLeft: '5px'}}>MOQ</div></div>,
    minWidth: '150px',
    style: special,
    selector: 'moq',
    sortable: true,
    cell: row => {
      return (
        <div className=' align-items-center'>
          <div id={`Buyer-tooltip-${row.id}`} className='cursor-pointer user-name text-truncate' style={{marginBottom: '5px'}}> 
              {row.moq}
          </div>
        </div>
      )
    }
  },
        {
            name: 'EAN UPC Code',
            selector: 'ean_upc_code',
            sortable: true,
            minWidth: '50px',
            style : tempStyle
        },
        {
            name: 'Inventory',
            selector: 'avail_quantity',
            sortable: true,
            minWidth: '50px',
            style : tempStyle
        },
        {
            name: 'Customization Available',
            selector: 'customization_avail',
            sortable: true,
            minWidth: '50px',
            style : tempStyle,
            cell: row => (
                <div className='d-flex justify-content-left align-items-center '>
                 {row.customization_avail === true ? <Check/> : <X/>}
                </div>
              )
        },
        {
            name: 'Sampling Available',
            selector: 'sample_avail',
            sortable: true,
            minWidth: '50px',
            style : tempStyle,
            cell: row => (
                <div className='d-flex justify-content-left align-items-center '>
                  {row.sample_avail === true ? <Check/> : <X/>}
                </div>
              )
        },       
        {
          name: 'Actions',
          allowOverflow: true,
          style : tempStyle,
          cell: row => {
            return (
              <div className='d-flex'>
                 <UncontrolledDropdown>
                  <DropdownToggle className='pr-1' tag='span'>
                    <Trash size={15} onClick={e => {                              
                                                    deletePop(row.id)
                                                  } }/>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link tag={Link} to={`/dashboard/updatecatalague/${row.id}`}>
                  <Edit  size={15} />
                </Link>
              </div>
            )
          }
        }
    ]


  const handleFilter = e => {
     dispatch(List(5, 0, e.target.value))
  }

  return (
    <Fragment>
      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Catalogue</CardTitle>
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
          
          dense='true'
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
         
          data={catalogue.data}
          selectableRowsComponent={BootstrapCheckbox}
        />

        <ReactPagination followData = {catalogue} dispachReq={List} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
      </Card>
      
    </Fragment>
  )
}

export default MyProducts
