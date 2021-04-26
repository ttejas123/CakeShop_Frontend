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
  DropdownToggle,
  Button
} from 'reactstrap'
import komal  from '../../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../../assets/images/logo/reethika.jpg'
const CardBrowserState = () => {
  const statesArr = [
    {
      avatar: require('@src/assets/images/icons/google-chrome.png').default,
      title: 'This is Question and answer section'
    },
    {
      avatar: pravin,
      title: 'This is Question and answer sectionn'
    },
    {
      avatar: komal,
      title: 'This is Question and answer section'
    },
    {
      avatar: reethika,
      title: 'This is Question and answer section'
    },
    {
      avatar: himanshu,
      title: 'This is Question and answer section'
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
