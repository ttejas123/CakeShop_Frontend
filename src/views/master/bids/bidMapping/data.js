
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import DataTable from 'react-data-table-component'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import CardBody from 'reactstrap/lib/CardBody'


const Sellerscolumns = [
    {
        name: 'Seller Name',
        selector: 'name',
        sortable: true,
        minWidth: '250px'
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Phone',
        selector: 'phone',
        sortable: false,
        minWidth: '250px'
      }
]
export const data = [
    {
       rfqId : "RFQ1",
       category : "Electronics",
       subCategory : "Telivision",
       requiredQuantity : 20,
       startTime : "01-05-2020",
       endTime : "01-05-2020",
       acceptTime : "15-05-2020",
        sellers : [
        {
            name : "ReatilsNet",
            email : "abc@c.com",
            phone : 98765432
        },
        {
            name : "Titan",
            email : "abc@bc.com",
            phone : 98765432
        },
        {
            name : "Fossil",
            email : "abc@cfg.com",
            phone : 98765432
        }
    ]
    },
    {
        rfqId : "RFQ2",
        category : "Electronics",
        subCategory : "Laptop",
        requiredQuantity : 30,
        startTime : "01-06-2020",
        endTime : "01-07-2020",
       acceptTime : "15-06-2020",
        sellers : [
        {
            name : "Titan",
            email : "abc@bc.com",
            phone : 98765432
        },
        {
            name : "Fossil",
            email : "abc@cfg.com",
            phone : 98765432
        }
    ]
    },
    {
        rfqId : "RFQ3",
        category : "Footwear",
        subCategory : "Flip-Flpos",
        requiredQuantity : 25,
        startTime : "01-07-2020",
        endTime : "01-08-2020",
       acceptTime : "15-07-2020",
        sellers : [
        {
            name : "ReatilsNet",
            email : "abc@c.com",
            phone : 98765432
        },
        {
            name : "Titan",
            email : "abc@bc.com",
            phone : 98765432
        },
        {
            name : "Fossil",
            email : "abc@cfg.com",
            phone : 98765432
        }
    ]
    },
    {
        rfqId : "RFQ4",
       category : "Clothing",
       subCategory : "T-Shirt",
       requiredQuantity : 40,
       startTime : "04-05-2020",
       endTime : "08-06-2020",
       acceptTime : "017-06-2020",
       sellers : [
           {
        name : "ReatilsNet",
        email : "abc@c.com",
        phone : 98765432
    },
    {
        name : "Fossil",
        email : "abc@cfg.com",
        phone : 98765432
    }
]
    }
]
const ExpandableTable = ({ data }) => {
        return (
            // <ul>
            // <li>
            //     <span>Seller Name :</span>
            //     <span>{item.name}</span>
            //     <span className='ml-3'>Email :</span>
            //     <span>{item.email}</span>
            //     <span className='ml-3'>Phone :</span>
            //     <span>{item.phone}</span>
            // </li>
            // </ul>
            <CardBody>
            <DataTable
        noHeader
        columns={Sellerscolumns}
        className='react-dataTable'
        data={data.sellers}
      />
   </CardBody>
    )

}

export const columns = [
  
  {
    name: 'RFQ ID',
    selector: 'rfqId',
    sortable: true,
    minWidth: '250px'
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
    name: 'Required Quantity',
    selector: 'requiredQuantity',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Start Time',
    selector: 'startTime',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'End Time',
    selector: 'endTime',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Accept Time',
    selector: 'acceptTime',
    sortable: true,
    minWidth: '150px'
  }
]
export default ExpandableTable