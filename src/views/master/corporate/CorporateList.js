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
// ** Table Data & Columns
import { kycCorporateData, nonKycCorporateData } from './data'
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


const optionBidStatus = [
    {value: "kyc", label: "KYC"},
    {value: "nonKyc", label: "Non Kyc"}
  ]

const DataTableWithButtons = () => {

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
  //columns
  const kycColumns = [
    {
      name: 'Corporate Name',
      selector: 'corporateName',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Comapny Type',
      selector: 'companyType',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Industry',
      selector: 'industry',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Contact Email',
      selector: 'email',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Country Code',
      selector: 'countryCode',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Phone',
      selector: 'phone',
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
      name: 'City',
      selector: 'city',
      sortable: true,
      minWidth: '150px'
    },
    {
        name: 'Is Verified',
        selector: 'isVerified',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Has Subscription',
        selector: 'hasSubscription',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Verified By',
        selector: 'verifiedBy',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Created By',
        selector: 'createdBy',
        sortable: true,
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

            <Link  to={`/edit-corporate/${row.id}`}><Edit  
              size={15} 
              onClick={ () => { 
                                setCurrentId(row.id)
                                setModal(true)
                                 } }>
                                   <Link to='/edit-product'/>
                                 </Edit></Link>
          </div>
        )
      }
    }
]


  //columns
  const nonKycColumns = [
    {
      name: 'Corporate Name',
      selector: 'corporateName',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Comapny Type',
      selector: 'companyType',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Industry',
      selector: 'industry',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Contact Email',
      selector: 'email',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Country Code',
      selector: 'countryCode',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Phone',
      selector: 'phone',
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
      name: 'City',
      selector: 'city',
      sortable: true,
      minWidth: '150px'
    },
    {
        name: 'Is Verified',
        selector: 'isVerified',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Has Subscription',
        selector: 'hasSubscription',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Verified By',
        selector: 'verifiedBy',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Created By',
        selector: 'createdBy',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Added By',
        selector: 'addedBy',
        sortable: true,
        minWidth: '150px'
      },
      {
        name: 'Used By',
        selector: 'usedBy',
        sortable: true,
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

            <Link  to={`/edit-corporate/${row.id}`}><Edit  
              size={15} 
              onClick={ () => { 
                                setCurrentId(row.id)
                                setModal(true)
                                 } }>
                                   <Link to='/edit-product'/>
                                 </Edit></Link>
          </div>
        )
      }
    }
]

const [columns, setColumns] = useState(kycColumns)
  const [data, setData] = useState(kycCorporateData)
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }

  const initialValues = {
    filter : [{value: "kyc", label: "KYC"}]
  }
  const [values, setValues] = useState(initialValues)

  const setInformation = (data) => {
    if (data.value === 'nonKyc') {
      setData(nonKycCorporateData)
      setColumns(nonKycColumns)
    } else {
      setData(kycCorporateData)
      setColumns(kycColumns)
    }
    setValues(
      {
         ...values,
         filter : data
      } 
)
  }
  // ** States
 
    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
      setCurrentId("")
      console.log(val)
  }

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // handle drop down filter
  // const handleFilterByDropDown = (value) => {
  //   let updatedData = []
  //   setFilter(value)
  //   console.log(value.value)
  //   let search = "l"
  //   search = value.value
  //   setSearchValue(search)
  //     if (search.length) {
  //         updatedData = data.filter(item => {
  //           const startsWith =
  //             item.BidStatus[0].value.toLowerCase().startsWith(search.toLowerCase()) 
              
  //           const includes =
  //             item.BidStatus[0].value.toLowerCase().includes(search.toLowerCase())
    
  //           if (startsWith) {
  //             return startsWith
  //           } else if (!startsWith && includes) {
  //             return includes
  //           } else return null
  //          })
        
  //     setFilteredData(updatedData)
  //     // setSearchValue(search)
  //     setFilter(value)
  //   }
  // }
  // // ** Function to handle filter
  // const handleFilter = e => {
  //   const value = e.target.value
  //   let updatedData = []
  //   setSearchValue(value)

  //   if (value.length) {
  //     updatedData = data.filter(item => {
  //       const NoOfBidder = item.NoOfBidder.toString()
  //       const startsWith =
  //         item.productName.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.mrp.toLowerCase().startsWith(value.toLowerCase()) ||
  //         item.gst.toLowerCase().startsWith(value.toLowerCase()) 
  //         console.log(startsWith)
  //       const includes =
  //         item.productName.toLowerCase().includes(value.toLowerCase()) ||
  //         item.mrp.toLowerCase().includes(value.toLowerCase()) ||
  //         item.gst.toLowerCase().includes(value.toLowerCase()) 
          
  //       if (startsWith) {
  //         return startsWith
  //       } else if (!startsWith && includes) {
  //         return includes
  //       } else return null
  //      })
  //     setFilteredData(updatedData)
  //     setSearchValue(value)
  //   }
  // }

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
            <div style={{zIndex:997, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionBidStatus}
                value={values.filter[0]}
                onChange={data => {
                  setInformation(data)
                }}
              />
              </div>
            </Col>
            
          </Row>
        </CardBody>
      </Card>

      <Card>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Corporate list</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            
          </div>
        </CardHeader>

        {/* <Row className='justify-content-end mx-0'>
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
        </Row> */}

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
            {/* <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> */}
    </Fragment>
  )
}

export default DataTableWithButtons
