
import Chart from 'react-apexcharts'
import { MoreVertical, CheckSquare } from 'react-feather'
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
      avatar: require('@src/assets/images/icons/google-chrome.png').default,
      title: 'We require a new coustom made logo in our T-shirt Also it need to be more colorfull'
    },
    {
      avatar: pravin,
      title: 'we require some T-shirt for our x-employess so we need 25 xl size.'
    },
    {
      avatar: komal,
      title: 'we require some designed T-shirts for young employees'
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.title} className='mb-2 container-fluid'>
            <div className='d-flex'>
              <CheckSquare color="lightGreen"/>
              <label className="float-right w-75 float-right ml-2">{state.title}</label>
            </div>
        </div>
      )
    })
  }

  return (
  <Card className='card-browser-states'>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Approved Customization</CardTitle>
          <CardText className='font-small-2'>All Request</CardText>
        </div>
        {/*<div color='' className='bg-transparent btn-sm border-0 p-50'>
                    <MoreVertical size={18} className='cursor-pointer' />
                </div>*/}
      </CardHeader>

      <CardBody>{renderStates()}</CardBody>
      
    </Card>
  )
}

export default CardBrowserState
