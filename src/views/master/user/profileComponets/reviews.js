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
import komal  from '../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../assets/images/logo/reethika.jpg'
const CardBrowserState = () => {
  const statesArr = [
    {
      name:"Komal kamble",
      avatar: komal,
      Review: 'Your Bid is awasome but we need some more items which is not metion also there are many privacy related issues you presented which is pain in my head'
    },
    {
      name:"Reethika",
      avatar: reethika,
      Review: 'looking forwork in our deal'
    },
    {
      name:"Himanshu",
      avatar: himanshu,
      Review: 'Your Bids are awasome try to add more costomization'
    }
  ]

  const renderStates = () => {
    return statesArr.map(state => {
      return (
        <div key={state.Review} className='browser-states'>
          <Media>
            { state.avatar ? (
              <Avatar img={state.avatar} width='50' height='50' className='mr-2' />
              ) : (
              <Avatar
                width='50' height='50' className='mr-2'
                color= "light-success"
                content={state.name.substring(0, 1)}
              />) }
            <div className="p-0">
              <div className="d-flex p-0 m-0">
                <p className="m-0"><b>{state.name}</b></p>
                <p className="m-0">- {new Date().toGMTString()}</p>
              </div>
              <div>
                  <p> ~ {state.Review}</p>
                </div>
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
          <CardTitle tag='h4'>Reviews and Ratings</CardTitle>
          <CardText className='font-small-2'>view all reviews</CardText>
        </div>
      </CardHeader>

      <CardBody className="pb-0 ">{renderStates()}</CardBody>
      <CardBody className="pt-0">
           <li>
                  <Button color='primary' block >
                    Read all Reviews
                  </Button>
            </li>
      </CardBody>
      
    </Card>
  )
}

export default CardBrowserState
