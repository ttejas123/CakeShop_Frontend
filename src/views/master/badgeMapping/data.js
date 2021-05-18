
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, Edit, FileText, Archive, Trash } from 'react-feather'
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import Avatar from '@components/avatar'
export const data = [
    {
        userName : "Pravin Poshmani",
        noOfBadges : 2,
        badges : ["Badge1", "Badge2"]
    },
    {
        userName : "Tejas Thakare",
        noOfBadges : 3,
        badges : ["Badge1", "Badge2", "Badge3"]
    },
    {
        userName : "Komal Kamble",
        noOfBadges : 2,
        badges : ["Badge1", "Badge2"]
    },
    {
        userName : "Mehul Bhadra",
        noOfBadges : 2,
        badges : ["Badge1", "Badge2"]
    }
]
const ExpandableTable = ({ data }) => {
    return data.badges.map(item => {
        return (
      <div className='expandable-content p-2 d-inline-block'>
        <span>
        <Badge className='text-capitalize' color={"success"} pill>
                        {item}
        </Badge>
        </span>
      </div>
    )
  })
}

export const columns = [
  
  {
    name: 'User Name',
    selector: 'userName',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'No. of Badges',
    selector: 'noOfBadges',
    sortable: true,
    minWidth: '150px'
  }
]
export default ExpandableTable