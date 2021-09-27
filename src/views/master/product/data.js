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

  if (row.user) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name.substring(0, 4) || 'John Doe'} initials status="online" />
  }
}

const deleteCountry = (id) => {
    DeletePop(DeleteWarehouse, id, useDisplatch, currentPage, List)
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
        sGstNumber : "18 %",
        iGstNumber : "10 %",
        cGstNumber : "20 %",
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
        sGstNumber : "18 %",
        iGstNumber : "10 %",
        cGstNumber : "20 %",
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
        sGstNumber : "18 %",
        iGstNumber : "10 %",
        cGstNumber : "20 %",
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
        sGstNumber : "18 %",
        iGstNumber : "10 %",
        cGstNumber : "20 %",
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
        CGST: 12,
        IGST: 8,
        SGST:12,
        Name: "shoes",
        id: 1
      },
      {
        Category: "Speciality",
        SubCategory: "Sports cars",
        DefaultCommission: 11,
        CGST: 12,
        IGST: 8,
        SGST:8,
        Name: "BMW",
        id: 2
      },
      {
        Category: "Shopping",
        SubCategory: "Clothes",
        DefaultCommission: 10,
        CGST: 12,
        IGST: 8,
        SGST:5,
        Name: "T-shirt's",
        id: 3
      },
      {
        Category: "Unsought",
        SubCategory: "Survival gears",
        DefaultCommission: 4,
        CGST: 12,
        IGST: 8,
        SGST:18,
        Name: "J5 Tactical 300",
        id: 4
      },
      {
        Category: "Commodity",
        SubCategory: "Metals",
        DefaultCommission: 20,
        CGST: 12,
        IGST: 8,
        SGST:22,
        Name: "Gold",
        id: 5
      },
      {
        Category: "Speciality",
        SubCategory: "designer clothing",
        DefaultCommission: 11,
        CGST: 12,
        IGST: 8,
        SGST:6,
        Name: "Guccy",
        id: 6
      },
      {
        Category: "Shopping",
        SubCategory: "furniture",
        DefaultCommission: 14,
        CGST: 12,
        IGST: 8,
        SGST:12,
        Name: "Glass",
        id: 7
      },
      {
        Category: "Convenience",
        SubCategory: "Print media",
        DefaultCommission: 7,
        CGST: 12,
        IGST: 8,
        SGST:11,
        Name: "MasterCard",
        id: 8
      }
]
export const columns = [
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
    selector: 'product_Cat',
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
