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
    return <Avatar className='mr-1' img={row.profilePic} width='32' height='32' status="online"  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name || 'John Doe'} initials status="online" />
  }
}
//expot data
export const data = [
      {
        name : "Tejas Thakare",
        profilePic : "",
        assignedTo : "TCS",
        location : "Hyderabad"
      },
      {
        name : "Komal Kamble",
        profilePic : komal,
        assignedTo : "Infosys",
        location : "Mumbai"
      },
      {
        name : "Pravin Poshmani",
        profilePic : pravin,
        assignedTo : "Accenture",
        location : "bangalore"
      },
      {
        name : "Mehul Sir",
        profilePic : "",
        assignedTo : "Ashok Leyland",
        location : "Mumbai"
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
