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
       orderNumber : "Ord1",
       orderType : "Type1",
       userId : "User1",
       bidId : "Bid1",
       sellerId : "S1",
       bidRank : "BR1",
       firstName : "Pravin",
       lastName : "Poshmani",
       sOfficeAddress : "SADD1",
       sOfficeAddress2 : "SADD11",
       sOfficeLandmark : "SL1",
       sOfficeCity : "SCity1",
       sOfficeState : "SState1",
       sOfficeCountry : "SCountry1",
       bOfficeAddress : "BADD1",
       bOfficeAddress2 : "BADD11",
       bOfficeLandmark : "BL1",
       bOfficeCity : "BCity1",
       bOfficeState : "BState1",
       bOfficeCountry : "BCountry1",
       paymentMode : "PM1",
       balanceAmount : "1000",
       amountPaid : "100",
       deliveryBefore : "01-06-2021",
       sellerConfirmation : "conirmed",
       isCancelled : "Yes",
       createdDate : "01-05-2021",
       updatedTime : "01-05-2021"
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
        sOfficeAddress : "SADD2",
        sOfficeAddress2 : "SADD22",
        sOfficeLandmark : "SL2",
        sOfficeCity : "SCity2",
        sOfficeState : "SState2",
        sOfficeCountry : "SCountry2",
        bOfficeAddress : "BADD2",
        bOfficeAddress2 : "BADD22",
        bOfficeLandmark : "BL2",
        bOfficeCity : "BCity2",
        bOfficeState : "BState2",
        bOfficeCountry : "BCountry2",
        paymentMode : "PM2",
        balanceAmount : "2000",
        amountPaid : "200",
        deliveryBefore : "02-06-2021",
        sellerConfirmation : "conirmed",
        isCancelled : "Yes",
        createdDate : "02-05-2021",
        updatedTime : "02-05-2021"
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
        sOfficeAddress : "SADD3",
        sOfficeAddress2 : "SADD33",
        sOfficeLandmark : "SL3",
        sOfficeCity : "SCity3",
        sOfficeState : "SState3",
        sOfficeCountry : "SCountry3",
        bOfficeAddress : "BADD3",
        bOfficeAddress2 : "BADD33",
        bOfficeLandmark : "BL3",
        bOfficeCity : "BCity3",
        bOfficeState : "BState3",
        bOfficeCountry : "BCountry3",
        paymentMode : "PM3",
        balanceAmount : "3000",
        amountPaid : "300",
        deliveryBefore : "03-06-2021",
        sellerConfirmation : "conirmed",
        isCancelled : "Yes",
        createdDate : "03-05-2021",
        updatedTime : "03-05-2021"
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
        sOfficeAddress : "SADD4",
        sOfficeAddress2 : "SADD44",
        sOfficeLandmark : "SL4",
        sOfficeCity : "SCity4",
        sOfficeState : "SState4",
        sOfficeCountry : "SCountry4",
        bOfficeAddress : "BADD4",
        bOfficeAddress2 : "BADD44",
        bOfficeLandmark : "BL4",
        bOfficeCity : "BCity4",
        bOfficeState : "BState4",
        bOfficeCountry : "BCountry4",
        paymentMode : "PM4",
        balanceAmount : "4000",
        amountPaid : "400",
        deliveryBefore : "04-06-2021",
        sellerConfirmation : "conirmed",
        isCancelled : "Yes",
        createdDate : "04-05-2021",
        updatedTime : "04-05-2021"
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