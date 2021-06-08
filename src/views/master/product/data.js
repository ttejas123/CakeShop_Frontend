//expot data
// Bid id
// User Name
//username:"",// Bid S
//tatus - created,live,extended,closed,rejected,auto closed
// Requested Customization
// Customization Status : pending, approval, approved, 
// catalogue id
// Req Quantity
// created time
// Go Live date
// Bid Close Date
// Bid Application Date
// Nos of bidder
// Delivery date
// Buyer Budget
// Delivery Location : Multiple Or Single location
// finalize seller id
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
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


//expot data
export const data = [
      {
        buin : 1,
        name : "Shirt",
        ean_upc_code : 12334,
        category : "Clothing",
        subCategory : "subClothing",
        productCategory : "cat1",
        hsnCode : 231,
        gstNumber : "18 %",
        mrp : 234,
        status: [{value: "approved", label: "approved"}],
        description : "dfsghjfhsjhe",
        avatar : pravin
      },
      {
        buin : 2,
        name : "T-Shirt",
        ean_upc_code : 1233456,
        category : "Clothing",
        subCategory : "subClothing",
        productCategory : "cat2",
        hsnCode : 2310,
        status: [{value: "pending", label: "pending"}],
        gstNumber : "20 %",
        mrp : 2314,
        description : "dfsghjfhfgbf",
        avatar : komal
      },
      {
        buin : 3,
        name : "Denim",
        ean_upc_code : 12,
        category : "Clothing",
        subCategory : "subClothing",
        productCategory : "cat3",
        status: [{value: "approved", label: "approved"}],
        hsnCode : 21,
        gstNumber : "22 %",
        mrp : 23,
        description : "abcdsjhe",
        avatar : himanshu
      },
      {
        buin : 4,
        name : "Trusers",
        ean_upc_code : 12,
        category : "Clothing",
        subCategory : "subClothing",
        productCategory : "cat4",
        status: [{value: "pending", label: "pending"}],
        hsnCode : 2310,
        gstNumber : "18 %",
        mrp : 2134,
        description : "abcddfsghjfhsjhe",
        avatar : ""
      }
]

export const data1 = [
      {
        Category: "Convenience",
        SubCategory: "Shopping",
        DefaultCommission: 14,
        GST:12,
        Name: "shoes",
        id: 1
      },
      {
        Category: "Speciality",
        SubCategory: "Sports cars",
        DefaultCommission: 11,
        GST:8,
        Name: "BMW",
        id: 2
      },
      {
        Category: "Shopping",
        SubCategory: "Clothes",
        DefaultCommission: 10,
        GST:5,
        Name: "T-shirt's",
        id: 3
      },
      {
        Category: "Unsought",
        SubCategory: "Survival gears",
        DefaultCommission: 4,
        GST:18,
        Name: "J5 Tactical 300",
        id: 4
      },
      {
        Category: "Commodity",
        SubCategory: "Metals",
        DefaultCommission: 20,
        GST:22,
        Name: "Gold",
        id: 5
      },
      {
        Category: "Speciality",
        SubCategory: "designer clothing",
        DefaultCommission: 11,
        GST:6,
        Name: "Guccy",
        id: 6
      },
      {
        Category: "Shopping",
        SubCategory: "furniture",
        DefaultCommission: 14,
        GST:12,
        Name: "Glass",
        id: 7
      },
      {
        Category: "Convenience",
        SubCategory: "Print media",
        DefaultCommission: 7,
        GST:11,
        Name: "MasterCard",
        id: 8
      }
]
export const columns = [
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
    minWidth: '150px'
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
  {
    name: 'Hsn Code',
    selector: 'hsnCode',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'GST',
    selector: 'gstNumber',
    sortable: true,
    minWidth: '150px'
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
              <Trash size={15} onClick={e => {
                                                                              e.preventDefault()
                                                                              deleteCountry(row.id)
                                                                            } }/>
            </DropdownToggle>
          </UncontrolledDropdown>
          <Link  to={`/edit-product/${row.id}`}><Edit  
            size={15} 
            onClick={ () => { 
                             
                             } }>
                                 <Link to='/edit-product'/>
                               </Edit></Link>
        </div>
      )
    }
  }
]


export const pendingColumns = [
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
    minWidth: '150px'
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
            <DropdownItem>
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
