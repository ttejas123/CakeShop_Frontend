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
//import { wareHouseData } from './data'
import Select from 'react-select'

// ** Add New Modal Component
//import FormModel from './formModel'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { List, CreateWarehouse, DeleteWarehouse } from '@store/actions/master/warehouse'
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
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'
//C:\Users\Tejas\Documents\react\bidoya\src\views\ExCompUse\delepePop.js
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

const optionState = [
    {value: "", label: "Filter Status"},
    {value: "Maharshtra", label: "Maharshtra"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"}
  ]

  const optionCorporate = [
    {value: "", label: "Filter Status"},
    {value: "Bidoya", label: "Bidoya"},
    {value: "Other Corporate", label: "Other Corporate"}
  ]

const WarehouseList = () => {
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
  const [values, setValues] = useState('')

  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(List(5, 0))
   
  }, [useDisplatch])
  const KycDocTypeListDrop = useSelector(state => {
    console.log(state.warehouse)
    return state.warehouse
  })
   //deleteCountry
  const deleteCountry = (id) => {
    DeletePop(DeleteWarehouse, id, useDisplatch)
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
          name: 'Name',
          selector: 'warehouse_name',
          sortable: false,
          minWidth: '50px'
        },
        {
          name: 'Address',
          selector: 'address_1',
          sortable: false,
          minWidth: '150px'
        },
        {
          name: 'City',
          selector: 'city',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'State',
          selector: 'state',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: 'Country',
          selector: 'country',
          sortable: true,
          minWidth: '150px'
        },
        {
          name: `Bidoya's Warehouse`,
          selector: 'is_bidoya_warehouse',
          sortable: true,
          minWidth: '150px',
          cell: row => {
                  return (
                    
                      <div>
                        {row.is_bidoya_warehouse ? "Yes" : "No"}
                      </div>
                    
                  )
          }
        },
        {
          name: 'Created Date',
          selector: 'createdAt',
          sortable: false,
          minWidth: '150px'
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
                                                deleteCountry(row.id)
                                              } }/>
                  </DropdownToggle>
                </UncontrolledDropdown>
                <Link  to={`/edit-warehouse/${row.id}`}>
                  <Edit size={15} >
                 
                                     </Edit></Link>
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
    //console.log()
    useDisplatch(List(5, 0, e.target.value))
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }


  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
          <Link  to={`/add-warehouse`}>
          <Button className='ml-2' color='primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Warehouse</span>
            </Button>
            </Link>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
            <Label className='mr-1' for='search-input'>
                Filter State
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionState}
                value={values.state}
                onChange={data => {
                  setValues(
                           {
                              ...values,
                              state : data
                           } 
                   )
                 }
         }
              />
              </div>
            </Col>
            <Col md='4'>
            <Label className='mr-1' for='search-input'>
                Filter Corporate
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCorporate}
                value={values.corporate}
                onChange={data => {
                  setValues(
                           {
                              ...values,
                              corporate : data
                           } 
                   )
                 }
         }
              />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Warehouse List</CardTitle>
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
          
          data={KycDocTypeListDrop.data}
          selectableRowsComponent={BootstrapCheckbox}
        />
        <ReactPagination followData = {KycDocTypeListDrop} dispachReq={List} />
      </Card>
            {/* <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> */}
    </Fragment>
  )
}

export default WarehouseList
