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
       id : "Id1",
       bidId : "Bid1",
       seller : "Nike",
       date : "01-09-2021",
       buyer : "Pravin Poshmani",
       acceptedBySeller : "Yes"
      },
      {
        id : "Id2",
        bidId : "Bid2",
        seller : "Puma",
        buyer : "Tejas Thakare",
        date : "02-09-2021",
        acceptedBySeller : "No"
      },
      {
        id : "Id3",
        bidId : "Bid3",
        seller : "Adidas",
        buyer : "Komal Kamble",
        date : "03-09-2021",
        acceptedBySeller : "Yes"
      },
      {
        id : "Id4",
        bidId : "Bid4",
        seller : "Reebok",
        date : "04-09-2021",
        buyer : "Himanshu Chanda",
        acceptedBySeller : "No"
      },
      {
        id : "Id5",
        bidId : "Bid5",
        seller : "Nike",
        date : "01-09-2021",
        buyer : "Pravin Poshmani",
        acceptedBySeller : "Yes"
       },
       {
         id : "Id6",
         bidId : "Bid6",
         seller : "Puma",
         buyer : "Tejas Thakare",
         date : "06-09-2021",
         acceptedBySeller : "No"
       },
       {
         id : "Id7",
         bidId : "Bid7",
         seller : "Adidas",
         buyer : "Komal Kamble",
         date : "07-09-2021",
         acceptedBySeller : "Yes"
       },
       {
         id : "Id8",
         bidId : "Bid8",
         seller : "Reebok",
         date : "08-09-2021",
         buyer : "Himanshu Chanda",
         acceptedBySeller : "No"
       },
       {
        id : "Id9",
        bidId : "Bid9",
        seller : "Nike",
        date : "09-09-2021",
        buyer : "Pravin Poshmani",
        acceptedBySeller : "Yes"
       },
       {
         id : "Id10",
         bidId : "Bid10",
         seller : "Puma",
         buyer : "Tejas Thakare",
         date : "10-09-2021",
         acceptedBySeller : "No"
       },
       {
         id : "Id11",
         bidId : "Bid11",
         seller : "Adidas",
         buyer : "Komal Kamble",
         date : "11-09-2021",
         acceptedBySeller : "Yes"
       },
       {
         id : "I12",
         bidId : "Bi12",
         seller : "Reebok",
         date : "12-09-2021",
         buyer : "Himanshu Chanda",
         acceptedBySeller : "No"
       },
       {
        id : "Id13",
        bidId : "Bid13",
        seller : "Nike",
        date : "13-09-2021",
        buyer : "Pravin Poshmani",
        acceptedBySeller : "Yes"
       },
       {
         id : "Id14",
         bidId : "Bid14",
         seller : "Puma",
         buyer : "Tejas Thakare",
         date : "14-09-2021",
         acceptedBySeller : "No"
       },
       {
         id : "Id15",
         bidId : "Bid15",
         seller : "Adidas",
         buyer : "Komal Kamble",
         date : "15-09-2021",
         acceptedBySeller : "Yes"
       },
       {
         id : "Id16",
         bidId : "Bid16",
         seller : "Reebok",
         date : "16-09-2021",
         buyer : "Himanshu Chanda",
         acceptedBySeller : "No"
       },
       {
         id : "Id17",
         bidId : "Bid17",
         seller : "Nike",
         date : "17-09-2021",
         buyer : "Pravin Poshmani",
         acceptedBySeller : "Yes"
        },
        {
          id : "Id18",
          bidId : "Bid18",
          seller : "Puma",
          buyer : "Tejas Thakare",
          date : "18-09-2021",
          acceptedBySeller : "No"
        },
        {
          id : "Id19",
          bidId : "Bid19",
          seller : "Adidas",
          buyer : "Komal Kamble",
          date : "19-09-2021",
          acceptedBySeller : "Yes"
        },
        {
          id : "Id20",
          bidId : "Bid20",
          seller : "Reebok",
          date : "20-09-2021",
          buyer : "Himanshu Chanda",
          acceptedBySeller : "No"
        },
        {
         id : "Id21",
         bidId : "Bid21",
         seller : "Nike",
         date : "21-09-2021",
         buyer : "Pravin Poshmani",
         acceptedBySeller : "Yes"
        },
        {
          id : "Id22",
          bidId : "Bid22",
          seller : "Puma",
          buyer : "Tejas Thakare",
          date : "22-09-2021",
          acceptedBySeller : "No"
        },
        {
          id : "Id23",
          bidId : "Bid23",
          seller : "Adidas",
          buyer : "Komal Kamble",
          date : "23-09-2021",
          acceptedBySeller : "Yes"
        },
        {
          id : "I24",
          bidId : "Bi24",
          seller : "Reebok",
          date : "24-09-2021",
          buyer : "Himanshu Chanda",
          acceptedBySeller : "No"
        },
        {
          id : "Id25",
          bidId : "Bid25",
          seller : "Adidas",
          buyer : "Komal Kamble",
          date : "25-09-2021",
          acceptedBySeller : "Yes"
        },
        {
          id : "Id26",
          bidId : "Bid26",
          seller : "Reebok",
          date : "26-09-2021",
          buyer : "Himanshu Chanda",
          acceptedBySeller : "No"
        },
        {
         id : "Id27",
         bidId : "Bid27",
         seller : "Nike",
         date : "27-09-2021",
         buyer : "Pravin Poshmani",
         acceptedBySeller : "Yes"
        },
        {
          id : "Id28",
          bidId : "Bid28",
          seller : "Puma",
          buyer : "Tejas Thakare",
          date : "28-09-2021",
          acceptedBySeller : "No"
        },
        {
          id : "Id29",
          bidId : "Bid29",
          seller : "Adidas",
          buyer : "Komal Kamble",
          date : "29-09-2021",
          acceptedBySeller : "Yes"
        },
        {
          id : "Id30",
          bidId : "Bid30",
          seller : "Reebok",
          date : "30-09-2021",
          buyer : "Himanshu Chanda",
          acceptedBySeller : "No"
        },
        {
          id : "Id17",
          bidId : "Bid17",
          seller : "Nike",
          date : "17-09-2021",
          buyer : "Pravin Poshmani",
          acceptedBySeller : "Yes"
         },
         {
           id : "Id18",
           bidId : "Bid18",
           seller : "Puma",
           buyer : "Tejas Thakare",
           date : "18-09-2021",
           acceptedBySeller : "No"
         },
         {
           id : "Id19",
           bidId : "Bid19",
           seller : "Adidas",
           buyer : "Komal Kamble",
           date : "19-09-2021",
           acceptedBySeller : "Yes"
         },
         {
           id : "Id20",
           bidId : "Bid20",
           seller : "Reebok",
           date : "20-09-2021",
           buyer : "Himanshu Chanda",
           acceptedBySeller : "No"
         },
         {
          id : "Id21",
          bidId : "Bid21",
          seller : "Nike",
          date : "21-09-2021",
          buyer : "Pravin Poshmani",
          acceptedBySeller : "Yes"
         },
         {
           id : "Id22",
           bidId : "Bid22",
           seller : "Puma",
           buyer : "Tejas Thakare",
           date : "22-09-2021",
           acceptedBySeller : "No"
         },
         {
           id : "Id23",
           bidId : "Bid23",
           seller : "Adidas",
           buyer : "Komal Kamble",
           date : "23-09-2021",
           acceptedBySeller : "Yes"
         },
         {
          id : "Id26",
          bidId : "Bid26",
          seller : "Reebok",
          date : "26-09-2021",
          buyer : "Himanshu Chanda",
          acceptedBySeller : "No"
        },
        {
         id : "Id27",
         bidId : "Bid27",
         seller : "Nike",
         date : "27-09-2021",
         buyer : "Pravin Poshmani",
         acceptedBySeller : "Yes"
        },
        {
          id : "Id28",
          bidId : "Bid28",
          seller : "Puma",
          buyer : "Tejas Thakare",
          date : "28-09-2021",
          acceptedBySeller : "No"
        },
        {
          id : "Id29",
          bidId : "Bid29",
          seller : "Adidas",
          buyer : "Komal Kamble",
          date : "29-09-2021",
          acceptedBySeller : "Yes"
        },
        {
          id : "Id30",
          bidId : "Bid30",
          seller : "Reebok",
          date : "30-09-2021",
          buyer : "Himanshu Chanda",
          acceptedBySeller : "No"
        },
        {
          id : "Id17",
          bidId : "Bid17",
          seller : "Nike",
          date : "17-09-2021",
          buyer : "Pravin Poshmani",
          acceptedBySeller : "Yes"
         },
         {
           id : "Id18",
           bidId : "Bid18",
           seller : "Puma",
           buyer : "Tejas Thakare",
           date : "18-09-2021",
           acceptedBySeller : "No"
         },
         {
           id : "Id19",
           bidId : "Bid19",
           seller : "Adidas",
           buyer : "Komal Kamble",
           date : "19-09-2021",
           acceptedBySeller : "Yes"
         },
         {
           id : "Id20",
           bidId : "Bid20",
           seller : "Reebok",
           date : "20-09-2021",
           buyer : "Himanshu Chanda",
           acceptedBySeller : "No"
         },
         {
          id : "Id21",
          bidId : "Bid21",
          seller : "Nike",
          date : "21-09-2021",
          buyer : "Pravin Poshmani",
          acceptedBySeller : "Yes"
         },
         {
           id : "Id22",
           bidId : "Bid22",
           seller : "Puma",
           buyer : "Tejas Thakare",
           date : "22-09-2021",
           acceptedBySeller : "No"
         },
         {
           id : "Id23",
           bidId : "Bid23",
           seller : "Adidas",
           buyer : "Komal Kamble",
           date : "23-09-2021",
           acceptedBySeller : "Yes"
         }
]

export const data1 = [
      {
        Category: "Convenience",
        SubCategory: "Shopping",
        DefaultCommission: 14,
        GST:12,
        Name: "shoes",
        date : "01-09-2021",
        id: 1
      },
      {
        Category: "Speciality",
        SubCategory: "Sports cars",
        DefaultCommission: 11,
        GST:8,
        Name: "BMW",
        id: 2,
        date : "02-09-2021"
      },
      {
        Category: "Shopping",
        SubCategory: "Clothes",
        DefaultCommission: 10,
        GST:5,
        Name: "T-shirt's",
        date : "03-09-2021",
        id: 4
      },
      {
        Category: "Unsought",
        SubCategory: "Survival gears",
        DefaultCommission: 4,
        GST:18,
        Name: "J5 Tactical 300",
        date : "04-09-2021",
        id: 4
      },
      {
        Category: "Commodity",
        SubCategory: "Metals",
        DefaultCommission: 20,
        GST:22,
        Name: "Gold",
        date : "05-09-2021",
        id: 5
      },
      {
        Category: "Speciality",
        SubCategory: "designer clothing",
        DefaultCommission: 11,
        GST:6,
        Name: "Guccy",
        date : "06-09-2021",
        id: 6
      },
      {
        Category: "Shopping",
        SubCategory: "furniture",
        DefaultCommission: 14,
        GST:12,
        Name: "Glass",
        date : "07-09-2021",
        id: 7
      },
      {
        Category: "Convenience",
        SubCategory: "Print media",
        DefaultCommission: 7,
        GST:11,
        Name: "MasterCard",
        date : "08-09-2021",
        id: 8
      }
]
export const columns = [
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
    minWidth: '50px'
  },
  {
    name: 'Bid Id',
    selector: 'bidId',
    sortable: true,
    minWidth: '150px'
  },
{
  name: 'Date',
  selector: 'date',
  sortable: true,
  minWidth: '150px'
},
  {
    name: 'Seller',
    selector: 'seller',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer',
    selector: 'buyer',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Accepted By Seller',
    selector: 'acceptedBySeller',
    sortable: true,
    minWidth: '150px'
  }
  // {
  //   name: 'Actions',
  //   allowOverflow: true,
  //   cell: row => {
  //     return (
  //       <div className='d-flex'>
  //         <UncontrolledDropdown>
  //           <DropdownToggle className='pr-1' tag='span'>
  //             <Trash size={15} onClick={e => {
  //                                                                             e.preventDefault()
  //                                                                             deleteCountry(row.id)
  //                                                                           } }/>
  //           </DropdownToggle>
  //         </UncontrolledDropdown>
  //         <Link  to={`/edit-product/${row.id}`}><Edit  
  //           size={15} 
  //           onClick={ () => { 
  //                             setCurrentId(row.id)
  //                             setModal(true)
  //                              } }>
  //                                <Link to='/edit-product'/>
  //                              </Edit></Link>
  //       </div>
  //     )
  //   }
  // }
]
