// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import {
  User,
  Mail,
  LogOut,
  CheckSquare,
  MessageSquare,
  Bell,
  Settings,
  CreditCard,
  HelpCircle,
  Power
} from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/elements/g1.jpeg'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  //const userAvatar = (userData && userData.avatar) || defaultAvatar
  const userAvatar = defaultAvatar

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          {/*<span className="user-name font-weight-bold"> {(userData && userData.username) || 'Ravi Kukreja'} </span>
           {(userData && userData.email) || 'Ravi Kukreja'} 
          <span className="user-status">

          
            Super Admin
            
          </span>*/}
          <span className="user-name font-weight-bold"> {'Khushboo_yadav'} </span>
           {'khushyad223@gmail.com'} 
          <span className="user-status">

          
            Cake Shop
            
          </span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      {/*<DropdownMenu right>
              <DropdownItem tag={Link} to="/PReviewsle">
                <User size={14} className="mr-75" />
                <span className="align-middle">Profile</span>
              </DropdownItem>
      
              <DropdownItem tag={Link} to="#">
                <Bell size={14} className="mr-75" />
                <span className="align-middle">Notification</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="#">
                <CheckSquare size={14} className="mr-75" />
                <span className="align-middle">Report</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="#">
                <MessageSquare size={14} className="mr-75" />
                <span className="align-middle">Status</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/settings">
                <Settings size={14} className="mr-75" />
                <span className="align-middle">Settings</span>
              </DropdownItem>
              <DropdownItem tag={Link} to="/login" onClick={() => dispatch(handleLogout())}>
                <LogOut size={14} className="mr-75" />
                <span className="align-middle">Logout</span>
              </DropdownItem>
            </DropdownMenu>*/}
    </UncontrolledDropdown>
  )
}

export default UserDropdown
