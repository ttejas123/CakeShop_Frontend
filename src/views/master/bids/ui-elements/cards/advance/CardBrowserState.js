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
  DropdownToggle
} from 'reactstrap'
import komal  from '../../../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../../../assets/images/logo/reethika.jpg'
const CardBrowserState = ({ colors, trackBgColor }) => {
  const statesArr = [
    {
      name: 'Tejas',
      value: '520K'
    },
    {
      avatar: pravin,
      name: 'Pravin',
      value: '206K'
    },
    {
      avatar: komal,
      name: 'Komal',
      value: '120K'
    },
    {
      avatar: reethika,
      name: 'Reethika',
      value: '200K'
    },
    {
      avatar: himanshu,
      name: 'himanshu',
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
            <h6 className='align-self-center mb-0'>{state.name}</h6>
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
