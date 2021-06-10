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
//expot data
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
export const data1 = [
    {
        invoiceId : "Invoice2",
        date : "02-05-2021",
        status : "Created"
    },
    {
        invoiceId : "Invoice2",
        date : "02-05-2021",
        status : "Created"
    },
    {
        invoiceId : "Invoice3",
        date : "03-05-2021",
        status : "Created"
    },
    {
        invoiceId : "Invoice4",
        date : "04-05-2021",
        status : "Created"
    }
]

//expot data
export const data = [
      {
       id : "Id1",
       orderNumber : "Ord1",
       orderType : "Type1",
       userId : "User1",
       bidId : "Bid1",
       sellerId : "S1",
       bidRank : "BR1",
       firstName : "Pravin",
       lastName : "Poshmani",
       sOfficeAddress : "Block-1",
       sOfficeAddress2 : "Avenue Appt.",
       sOfficeLandmark : "Hanuman Temple",
       sOfficeCity : "Mumbai",
       sOfficeState : "Maharashtra",
       sOfficeCountry : "India",
       bOfficeAddress : "B-1",
       bOfficeAddress2 : "Glory Villa",
       bOfficeLandmark : "Tripura Hotel",
       bOfficeCity : "Chennai",
       bOfficeState : "TamilNadu",
       bOfficeCountry : "India",
       paymentMode : "UPI",
       balanceAmount : "1000",
       amountPaid : "100",
       deliveryBefore : "01-06-2021",
       sellerConfirmation : "conirmed",
       isCancelled : "Yes",
       createdDate : "01-05-2021",
       updatedTime : "01-05-2021",
       companyName : "TCS",
       requestedBy : "Pravin Poshmani",
       requestedFrom : "Tejas Thakare"
      },
      {
        id : "Id2",
        orderNumber : "Ord2",
        orderType : "Type2",
        userId : "User2",
        bidId : "Bid2",
        sellerId : "S2",
        bidRank : "BR2",
        firstName : "Tejas",
        lastName : "Thakare",
        sOfficeAddress : "Block-2",
       sOfficeAddress2 : "Girish Appt.",
       sOfficeLandmark : "Mahalaxmi Temple",
       sOfficeCity : "Pune",
       sOfficeState : "Maharashtra",
       sOfficeCountry : "India",
       bOfficeAddress : "B-2",
       bOfficeAddress2 : "Falcon Villa",
       bOfficeLandmark : "Swap Hotel",
       bOfficeCity : "Chennai",
       bOfficeState : "TamilNadu",
       bOfficeCountry : "India",
       paymentMode : "Internet Banking",
        balanceAmount : "2000",
        amountPaid : "200",
        deliveryBefore : "02-06-2021",
        sellerConfirmation : "conirmed",
        isCancelled : "Yes",
        createdDate : "02-05-2021",
        updatedTime : "02-05-2021",
        companyName : "Infosys",
        requestedBy : "Tejas Thakare",
        requestedFrom : "Pravin Poshmani"
      },
      {
        id : "Id3",
        orderNumber : "Ord3",
        orderType : "Type3",
        userId : "User3",
        bidId : "Bid3",
        sellerId : "S3",
        bidRank : "BR3",
        firstName : "Tejas",
        lastName : "Thakare",
        sOfficeAddress : "Block-3",
       sOfficeAddress2 : "Avenue Appt.",
       sOfficeLandmark : "Raj Circle",
       sOfficeCity : "Mumbai",
       sOfficeState : "Maharashtra",
       sOfficeCountry : "India",
       bOfficeAddress : "B-3",
       bOfficeAddress2 : "Raj Appt",
       bOfficeLandmark : "Tripusundari Hotel",
       bOfficeCity : "Bangalore",
       bOfficeState : "Karnataka",
       bOfficeCountry : "India",
       paymentMode : "Cheque",
        balanceAmount : "3000",
        amountPaid : "300",
        deliveryBefore : "03-06-2021",
        sellerConfirmation : "conirmed",
        isCancelled : "Yes",
        createdDate : "03-05-2021",
        updatedTime : "03-05-2021",
        companyName : "Accenture",
        requestedBy : "Tejas Thakare",
        requestedFrom : "Himanshu Chanda"
        
      },
      {
        id : "Id4",
        orderNumber : "Ord4",
        orderType : "Type1",
        userId : "User4",
        bidId : "Bid4",
        sellerId : "S4",
        bidRank : "BR4",
        firstName : "Tejas",
        lastName : "Thakare",
        sOfficeAddress : "Block-4",
       sOfficeAddress2 : "Sarovar Appt.",
       sOfficeLandmark : "Ganesh Temple",
       sOfficeCity : "Thane",
       sOfficeState : "Maharashtra",
       sOfficeCountry : "India",
       bOfficeAddress : "B-4",
       bOfficeAddress2 : "Arjun Villa",
       bOfficeLandmark : "Balaji Hotel",
       bOfficeCity : "Pune",
       bOfficeState : "Maharashtra",
       bOfficeCountry : "India",
       paymentMode : "UPI",
        balanceAmount : "4000",
        amountPaid : "400",
        deliveryBefore : "04-06-2021",
        sellerConfirmation : "conirmed",
        isCancelled : "Yes",
        createdDate : "04-05-2021",
        updatedTime : "04-05-2021",
        companyName : "Google",
        requestedBy : "Pravin Poshmani",
        requestedFrom : "Himanshu Chanda"
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
    name: 'Order Number',
    selector: 'orderNumber',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Order Type',
    selector: 'orderType',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'User Id',
    selector: 'userId',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Bid Id',
    selector: 'bidId',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Id',
    selector: 'sellerId',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Bid Rank',
    selector: 'bidRank',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'First Name',
    selector: 'firstName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Last Name',
    selector: 'lastName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Office Addres',
    selector: 'sOfficeAddress',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Office Addres 2',
    selector: 'sOfficeAddress2',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Office Landmark',
    selector: 'sOfficeLandmark',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Office City',
    selector: 'sOfficeCity',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Office State',
    selector: 'sOfficeState',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Office Country',
    selector: 'sOfficeCountry',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Company Name',
    selector: 'companyName',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer Office Addres',
    selector: 'bOfficeAddress',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer Office Addres 2',
    selector: 'bOfficeAddress2',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer Office Landmark',
    selector: 'bOfficeLandmark',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer Office City',
    selector: 'bOfficeCity',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer Office State',
    selector: 'bOfficeState',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Buyer Office Country',
    selector: 'bOfficeCountry',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Payment Mode',
    selector: 'paymentMode',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Amount Paid',
    selector: 'amountPaid',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Balance Amount',
    selector: 'balanceAmount',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Delivery before',
    selector: 'deliveryBefore',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Seller Confirmation',
    selector: 'sellerConfirmation',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Is Cancelled',
    selector: 'isCancelled',
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
    name: 'Updated Time',
    selector: 'updatedTime',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Requested By',
    selector: 'requestedBy',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Requested From',
    selector: 'requestedFrom',
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
          <Link  to={`/edit-product/${row.id}`}><Edit  
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
