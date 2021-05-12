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

  if (row.profilePic.length) {
    return <Avatar className='mr-1' img={row.profilePic} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" />
  }
}
//expot data
export const data = [
      {
        name : "Tejas Thakare",
        profilePic : pravin,
        assignedTo : "Company1",
        location : "Location1"
      },
      {
        name : "Komal Kamble",
        profilePic : pravin,
        assignedTo : "Company2",
        location : "Location2"
      },
      {
        name : "Pravin Poshmani",
        profilePic : pravin,
        assignedTo : "Company3",
        location : "Location3"
      },
      {
        name : "Mehul Sir",
        profilePic : "",
        assignedTo : "Company4",
        location : "Location4"
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
    name: 'Profile Pic',
    minWidth: '150px',
    selector: 'profilePic',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
      </div>
    )
  },
  {
    name: 'Assigned To',
    selector: 'assignedTo',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Location',
    selector: 'location',
    sortable: true,
    minWidth: '150px'
  }
]
