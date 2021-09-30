//Lead Time, SKU ID, MOQ, Customization available, Inspection, sampling, Added time, approved by, no of seller
// ** Custom Components
import Avatar from '@components/avatar'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import axios from 'axios'
import { Link } from 'react-router-dom'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import AttributeModel from '@src/views/master/product/modelAttribute.js'
// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
//import { data } from './data'
import Select from 'react-select'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { productSkuList, DeleteProductSku, productSpecificSkuList } from '@store/actions/master/productSKU'
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
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'

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

const SkuList = (props) => {
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
  const [review, setreview] = useState({})
  const [responseModel, setResponseModel] = useState(false)
  const handleResponse = () => {
    setResponseModel(!responseModel)
  }

  const useDisplatch = useDispatch()
  // useEffect(() => {
  //   if (props.productID) {
  //     useDisplatch(productSpecificSkuList(5, 0, props.productID.productID))
  //   }
  // }, [useDisplatch])
  const DataTableD = useSelector(state => {
    //console.log(state.productSKU)
    return state.productSKU
  })

  const deleteData = (id) => {
    //console.log(props.productID.productID)
    DeletePop(DeleteProductSku, id, useDisplatch, currentPage, productSpecificSkuList, props.productID)
  }


  //columns
  const columns = [
        {
          name: 'ID',
          selector: 'id',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'SKU Title',
          selector: 'name',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'SKU ID',
          selector: 'sku_id',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'MRP in ₹',
          selector: 'mrp',
          sortable: true,
          minWidth: '100px'
        },
        {
          name: 'Attributes',
          selector: 'att',
          sortable: false,
          minWidth: '100px',
            cell: row => {
              return (
                <div className='d-flex' onClick={() => {
                      setreview(row)
                      setResponseModel(true)
                }}>
                  View 
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
                    <Trash size={15} onClick={() => deleteData(row.id) }/>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link to={`/master/SKUs/edit/${row.id}`}>
                  <Edit size={15} />
                </Link>  
              </div>
            )
          }
        }
    ]

  return (
    <Fragment>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Product SKU</CardTitle>
        </CardHeader>

        <DataTable
          noHeader
          
          selectableRows
          columns={columns}
    
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          
          data={DataTableD.data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        <ReactPagination followData = {DataTableD} dispachReq={productSkuList} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <AttributeModel
          open={responseModel}
          handleModal={handleResponse}
          name={review.name}
          data={review.attribute}
        />
      </Card>
      
    </Fragment>
  )
}

export default SkuList
