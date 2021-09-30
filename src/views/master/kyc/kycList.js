// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Columns
//import { KYCData } from './data'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { List, DeleteKycType } from '@store/actions/master/kyc/kycType'
import ReactPagination from '@src/views/ExCompUse/reactCustPagin'
import DeletePop from '@src/views/ExCompUse/delepePop.js'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { FormattedMessage } from 'react-intl'
import DataTable from 'react-data-table-component'
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus} from 'react-feather'
import { Card, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
//import InputBasic from './AddKYC'
import HorizontalForm from './AddKyc'
import EditForm from './EditKyc'

const KYCList = () => {

    //console.log(BrandColumns)
    const useDisplatch = useDispatch()
    useEffect(() => {
      useDisplatch(List(5, 0))
     
    }, [useDisplatch])
    const KycDocTypeListDrop = useSelector(state => {
      //console.log(state.warehouse)
      return state.kycType
    })

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})
  
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  const handleEditClick = (item) => {
      if (!addClicked) { 
        setEditClicked(!editClicked)
        setEditData(item)
      }
    //console.log(item)
  }

  const handleAddClick = () => {
      if (!editClicked) {
        setAddClicked(!addClicked)
      }
  }

  const handleCancelOfEdit = () => {
    console.log("in Cancel")
    setEditClicked(!editClicked)
}
const handleCancelOfAdd = () => {
    console.log("in Cancel")
    setAddClicked(!addClicked)
}
const handleSubmitOfAdd = (data) => {
    console.log("in submit", data)
    setAddClicked(!addClicked)
}

const handleSubmitOfEdit = (data) => {
    console.log("in submit of edit", data)
    setEditClicked(!editClicked)
}

const deleteMain = (id) => {
   DeletePop(DeleteKycType, id, useDisplatch, currentPage, List)
}

  const BrandColumns = [
    {
      name: 'KYC Name',
      selector: 'name',
      sortable: true,
      minWidth: '250px',
      className : 'dt-body-right'
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: row => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pr-1' tag='span'>
                <Trash size={15} onClick={e => { deleteMain(row.id) }} />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Edit size={15} onClick={ e => { 
                                                e.preventDefault() 
                                                handleEditClick(row) 
                                                } } />
          </div>
        )
      }
    }
  ]

  return (
      <Fragment>
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>KYC List</CardTitle>
        <Button className='ml-2' color='primary' onClick={handleAddClick}>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add KYC</span>
        </Button>
      </CardHeader>
      {addClicked ? <HorizontalForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd} /> : null}
      {editClicked ? <EditForm data ={editData} handleCancel={handleCancelOfEdit} handleSubmit={handleSubmitOfEdit} /> : null}
      
      <DataTable
        noHeader
      
        selectableRowsNoSelectAll
        columns={BrandColumns}
        className='react-dataTable dt-body-right'
        paginationPerPage={7}
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        
        data={KycDocTypeListDrop.data}
      />
      <ReactPagination followData = {KycDocTypeListDrop} dispachReq={List} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* <CardFooter>
        <CardText className='mb-0'>
          <span className='font-weight-bold'>Note:</span>{' '}
          <span>Use Intl Dropdown in Navbar to change table language</span>
        </CardText>
      </CardFooter> */}
    </Card>
    </Fragment>
  )
}

export default KYCList
