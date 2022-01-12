import React, {useState, useEffect, forwardRef} from "react"
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Label, Input, Row, Col, Modal, ModalHeader, ModalBody, Button, ModalFooter, TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import { ChevronDown, Download, Trash2, Edit } from 'react-feather'
import DataTable from 'react-data-table-component'
import axios from 'axios'
import { List, Single, deleteD } from "@src/redux/actions/orders"
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@components/avatar'
// import { baseUrl } from '../AllUrls.js'

const Contact = () => {
  const [contactObject, setContactObject] = useState([])
  const [allData, setAllData] = useState([])
  const [currentId, setCurrentId] = useState("")
  const [centeredModal, setCenteredModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [modelData, setModeldata] = useState({})
  const [active, setActive] = useState('1')
  const [gg, setgg] = useState([])
  const baseUrl = 'http://localhost:3001/'
  const dispatch = useDispatch()
  
  const handleFilter = e => {
    const value = e.target.value
    setSearchValue(value)
   
    if (value.length) {
      let updatedData = []
      updatedData = allData.filter(item => {
        const contact =  item.contact.toString()
        
        const startsWith =
          item.userName.toLowerCase().startsWith(value.toLowerCase()) ||
          contact.toLowerCase().startsWith(value.toLowerCase())
         
        const includes =
          item.userName.toLowerCase().includes(value.toLowerCase()) ||
          contact.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
       setContactObject(updatedData)
       setSearchValue(value)
    }
  }

  const toggle = tab => {
    setActive(tab)
  }

  const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => {
      return (
        <div className="custom-control custom-checkbox">
          <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
          <label className='custom-control-label' onClick={onClick} />
        </div>
      )
    }
  )

  const store = useSelector(state => {
    console.log(state.order)
     return state.order
  })

  //get data from mongo DataBase and store in setContactObject
  useEffect(() => {
    dispatch(List(0, 5, ""))
  }, [dispatch])

  //Store data into firebase, or update data into database

const headerss = [
  
    // Title of the columns (column_names)
    {key: '_id', label: '_id'},
    {key: 'url', label: 'url'},
    {key: 'fullName', label: 'fullName'},
    {key: 'mobile', label: 'mobile'},
    {key: 'email', label: 'email'},
    {key: 'address', label: 'address'}
  ]

  const headerssImg = [{key: 'url', label: 'Image'}]

  const basicColumns = [
      {
        name: 'ID',
        selector: row => row._id,
        sortable: true
        // maxWidth: '100px'
      },
      {
        name: 'Image',
        sortable: true,
          selector: row => (
            <div className='d-flex align-items-center'>
              {row.cakeUrl === '' ? (
                 <div className='vertically-centered-modal'>
                    <Button color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
          Launch Modal
        </Button>
                    <Button >
                      <Avatar size="40" round="20px" facebook-id="invalidfacebookusername" img={`http://localhost:3001/dainty-black-forest-cake-9871060ca-A_0_1641550735381.jpg`} />
                  </Button>
                  
                </div>
              ) : (
                <div className="cursor-pointer">
                    <Avatar size="40" round="20px" facebook-id="invalidfacebookusername" img={baseUrl + row.cakeUrl} />
                </div>
              )}
            </div>
          )
        // minWidth: '100px'
      },
      {
        name: 'Name',
        selector: row => row.userName,
        sortable: true
        // minWidth: '225px'
      },
      {
        name: 'Mobile',
        selector: row => row.contact,
        sortable: true
        // minWidth: '225px'
      },
      {
        name: 'Ordered Cake',
        selector: row => row.cakeName,
        sortable: true
        // minWidth: '310px'
      },
      {
        name: 'Quatity',
        selector: row => row.quatity,
        sortable: true
        // minWidth: '310px'
      },
      {
        name: 'Total Price',
        selector: row => row.totalPrice,
        sortable: true
        // minWidth: '175px'
      },
      {
        name: 'Action',
        sortable: false,
        selector: row => (
          <>
            <a className="btn px-1" onClick={() => { setCurrentId(row._id) }}>
              <Edit size='15' color='black' />
            </a>
            <a className="btn px-1" onClick={() => { dispatch(deleteD(row._id, dispatch, List)) }}>
              <Trash2 size='15' color='red'/>
            </a>
        </>
          ) 
      }
    ]

    return (
      <div>          
                  <Card className='row col-md-10 offset-md-1'>
                   
                    <CardHeader className='d-flex justify-content-between'>
                      <div>Order Table</div> <div>{gg.length > 0 ? (<div className="d-flex justify-content-center align-items-center">
                        <div className='ml-5'><Trash2 onClick={() => {
                        const NewData = gg.map((val) => {
                                    return val._id
                                  })
  
                        axios.post('http://localhost:3001/deleteManyById', {
                              deleteManyById: NewData
                          })
                        window.location.reload()
                      }} color='red' size='15' /></div>
                      </div>) : (<></>)}</div>
                    </CardHeader>
                      <DataTable
                        noHeader
                        selectableRows
                        pagination
                        striped
                        onSelectedRowsChange = {(e) => {
                          setgg(e.selectedRows) 
                        }}
                        data={store.data}
                        columns={basicColumns}
                        className='react-dataTable'
                        sortIcon={<ChevronDown size={10} />}
                        selectableRowsComponent={BootstrapCheckbox}

                        paginationRowsPerPageOptions={[10, 25, 50, 100]}
                      />
                    </Card>
    </div>
      )
}

export default Contact