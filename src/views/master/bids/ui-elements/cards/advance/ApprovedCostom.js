// <input
//                 className='custom-control-input'
//                 type='checkSquarebox'
//                 id="checkSquarebox"
//                 checkSquareed={}
//                 {  onChange={e => e.stopPropagation()}
//                                 onClick={e => {
//                                   e.stopPropagation()
//                                 }} 
//                                 }
//               />
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
            <div>
              <CheckSquare color="lightGreen" className='mr-2'/>
              <label className="float-right">{state.title}</label>
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
        <div color='' className='bg-transparent btn-sm border-0 p-50'>
            <MoreVertical size={18} className='cursor-pointer' />
        </div>
      </CardHeader>

      <CardBody>{renderStates()}</CardBody>
    </Card>
  )
}

export default CardBrowserState
