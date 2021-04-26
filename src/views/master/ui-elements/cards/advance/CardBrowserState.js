import Chart from 'react-apexcharts'
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
  DropdownToggle
} from 'reactstrap'
import komal  from '../../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../../assets/images/logo/reethika.jpg'
const CardBrowserState = ({ colors, trackBgColor }) => {
  const statesArr = [
    {
      avatar: require('@src/assets/images/icons/google-chrome.png').default,
      title: 'Tejas',
      value: '520K'
    },
    {
      avatar: pravin,
      title: 'Pravin',
      value: '206K'
    },
    {
      avatar: komal,
      title: 'Komal',
      value: '120K'
    },
    {
      avatar: reethika,
      title: 'Reethika',
      value: '200K'
    },
    {
      avatar: himanshu,
      title: 'himanshu',
      value: '209K'
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states'>
          <Media>
            <img className='rounded mr-1' src={state.avatar} height='30' alt={state.title} />
            <h6 className='align-self-center mb-0'>{state.title}</h6>
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
          <CardTitle tag='h4'>Participents</CardTitle>
          <CardText className='font-small-2'>Budget</CardText>
        </div>
        <div color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
        </div>
      </CardHeader>
      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default CardBrowserState
