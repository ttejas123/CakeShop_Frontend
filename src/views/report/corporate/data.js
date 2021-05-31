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
       name : "Pravin Poshmani",
       role : "Intern",
       createdDate : "01-05-2021",
       bidsCreated : 1
      },
      {
        name : "Himanshu Chanda",
        role : "Admin",
        createdDate : "02-05-2021",
        bidsCreated : 2
      },
      {
        name : "Tejas Thakare",
        role : "Intern",
        createdDate : "03-05-2021",
        bidsCreated : 3
      },
      {
        name : "Komal Kamble",
        role : "IOS Dev",
        createdDate : "04-05-2021",
        bidsCreated : 4
      }
]

export const paidCorporateData = [
  {
  amount : 2000,
  corporate : "TCS",
  validity : "01-06-2021"
  },
  {
    amount : 3000,
  corporate : "Infosys",
  validity : "03-06-2021"
  },
  {
    amount : 4000,
  corporate : "Accenture",
  validity : "04-06-2021"
  },
  {
    amount : 5000,
  corporate : "Coense",
  validity : "05-06-2021"
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
        id: 4
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
    name: 'Name',
    selector: 'name',
    sortable: true,
    minWidth: '50px'
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Created Date',
    selector: 'createdDate',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Bids Created',
    selector: 'bidsCreated',
    sortable: true,
    minWidth: '150px'
  }
//   },
//   {
//     name: 'Accepted By Seller',
//     selector: 'acceptedBySeller',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Actions',
//     allowOverflow: true,
//     cell: row => {
//       return (
//         <div className='d-flex'>
//           <UncontrolledDropdown>
//             <DropdownToggle className='pr-1' tag='span'>
//               <Trash size={15} onClick={e => {
//                                                                               e.preventDefault()
//                                                                               deleteCountry(row.id)
//                                                                             } }/>
//             </DropdownToggle>
//           </UncontrolledDropdown>
//           <Link  to={`/edit-product/${row.id}`}><Edit  
//             size={15} 
//             onClick={ () => { 
//                               setCurrentId(row.id)
//                               setModal(true)
//                                } }>
//                                  <Link to='/edit-product'/>
//                                </Edit></Link>
//         </div>
//       )
//     }
//   }
]
