import { Link } from 'react-router-dom'
import axios from 'axios'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { data } from './data'
import Select from 'react-select'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { List, DeleteAttribute, specificAttribute } from '@store/actions/master/attribute'
import ModelCat from './modelC'
// ** Add New Modal Component
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash  } from 'react-feather'
import {
  Card,
  CardText,
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
  Badge, UncontrolledDropdown,
  UncontrolledTooltip  
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

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" />
  }
}

const optionSubAttribute = [
    {value: "", label: "Filter Status"},
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"},
    {value: "auto closed", label: "auto closed"}
  ]

const DataTableWithButtons = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [responseModel, setResponseModel] = useState(false)
  const [review, setreview] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [tooltipOpen, setTooltipOpen] = useState(false)

    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
      setCurrentId("")
      console.log(val)
  }

  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(List(5, 0))
   
  }, [useDisplatch])
  const attributeData = useSelector(state => {
    //console.log(state.warehouse)
    return state.attribute
  })

     //deleteCountry
  const deleteMain = (id) => {
     DeletePop(DeleteAttribute, id, useDisplatch, currentPage, List)
  }

  //columns
  const columns = [
        {
          name: 'Name',
          selector: 'name',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'unit',
          selector: 'unit',
          sortable: true,
          minWidth: '130px'
        },
        {
          name: 'Attribute Values',
          selector: 'Attvalues[0]',
          sortable: true,
          minWidth: '130px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate'>{row.Attvalues.map((val, index) => {
                  return `  ${val},  `
                })}</span>
              </div>
            </div>
          )
        },
        {
          name: 'Attribute Type',
          selector: 'type',
          sortable: true,
          minWidth: '130px'
        },
        {
          name: 'Categories',
          selector: 'unit',
          sortable: true,
          minWidth: '130px',
          cell: row => (
            <div key={row.id} className='d-flex align-items-center'>
              <div className='user-info text-truncate'>
                <span className='d-block font-weight-bold text-truncate cursor-pointer' onClick={() => {
                      setreview(row)
                      setResponseModel(true)
                }}>View</span>
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
                  <DropdownToggle className='pr-1 cursor-pointer' tag='span'>
                    <Trash size={15} onClick={e => {
                                                                                    e.preventDefault()
                                                                                    deleteMain(row.id)
                                                                                  } }/>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link to={`/edit-attribute/${row.id}`} onClick={() => useDisplatch(specificAttribute(row.id))}>
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
  
  const handleResponse = () => {
    setResponseModel(!responseModel)
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
    
  }

  return (
    <Fragment>
      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Attributes</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <Link to={`/add-attribute`}>
              <Button className='ml-2' color='primary' onClick={handleModal}>
                                          <Plus size={15} />
                                          <span className='align-middle ml-50'>Add Attributes</span>
              </Button>
            </Link>
          </div>
        </CardHeader>

        <DataTable
          noHeader
         
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
         
          data={attributeData.data}
          
        />
        <ReactPagination followData = {attributeData} dispachReq={List} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ModelCat
        open={responseModel}
        handleModal={handleResponse}
        name={review.name}
        data={review.categories}
      />
        
      </Card>
    </Fragment>
  )
}

export default DataTableWithButtons