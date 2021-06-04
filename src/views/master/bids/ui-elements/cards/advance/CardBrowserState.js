import Chart from 'react-apexcharts'
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
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
const CardBrowserState = ({ colors, trackBgColor }) => {
  const statesArr = [
    {
      name: 'Tejas Vijay Thakare',
      value: '520K'
    },
    {
      avatar: pravin,
      name: 'Pravin poshmani',
      value: '206K'
    },
    {
      avatar: komal,
      name: 'Komal Kamble',
      value: '120K'
    },
    {
      avatar: reethika,
      name: 'Reethika john Deo',
      value: '200K'
    },
    {
      avatar: himanshu,
      name: 'himanshu Chanda',
      value: '209K'
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.name} className='browser-states'>
          <Media>
            { state.avatar ? (
              <Avatar img={state.avatar} width='50' height='50' className='mr-2' />
              ) : (
              <Avatar
                width='50' height='50' className='mr-2'
                color= "light-success"
                content={state.name.substring(0, 1)}
              />) }
            <h6 className='align-self-center mb-0 text-truncate w-50'>{state.name}</h6>
          </Media>
          <div className='d-flex align-items-center'>
            <div className='font-weight-bold text-body-heading mr-1'>{state.value}</div>
          </div> 
        </div>
      )
    })
  }

  return (
    <Card className='card-browser-states'>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Participants</CardTitle>
        </div>
        <div color='' className='bg-transparent border-0' >
          <Link to={`/bidDetail/communication`}>
              <Button>
                View Chats
              </Button>
          </Link>
        </div>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default CardBrowserState
