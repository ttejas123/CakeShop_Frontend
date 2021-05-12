import Chart from 'react-apexcharts'
import Avatar from '@components/avatar'
import { MoreVertical } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button
} from 'reactstrap'
import komal  from '../../../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../../../assets/images/logo/reethika.jpg'
const CardBrowserState = () => {
  const statesArr = [
    {
      name:"Tejas",
      title: 'This is my Comment'
    },
    {
      name:"Pravin",
      avatar: pravin,
      title: 'This is my Comment'
    },
    {
      name:"Komal",
      avatar: komal,
      title: 'This is my Comment'
    },
    {
      name:"Reethika",
      avatar: reethika,
      title: 'This is my Comment'
    },
    {
      name:"Himanshu",
      avatar: himanshu,
      title: 'This is my Comment'
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states'>
          <Media>
            { state.avatar ? (
              <Avatar img={state.avatar} width='50' height='50' className='mr-2' />
              ) : (
              <Avatar
                width='50' height='50' className='mr-2'
                color= "light-success"
                content={state.name.substring(0, 1)}
              />) }
            <div>
              <p>{state.name} ~ {state.title}</p>
            </div>
          </Media>
        </div>
      )
    })
  }

  return (
    <Card className='card-browser-states'>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Comments</CardTitle>
          <CardText className='font-small-2'>view all comments</CardText>
        </div>
        <div color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
        </div>
      </CardHeader>

      <CardBody>{renderStates()}</CardBody>

      <CardBody>
           <li className='dropdown-menu-footer'>
                  <Button color='primary' block>
                    Read all Comments
                  </Button>
            </li>
      </CardBody>
      
    </Card>
  )
}

export default CardBrowserState
