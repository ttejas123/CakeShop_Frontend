// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'
import {
  Row, Col,
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
  Button,
  Badge
} from 'reactstrap'
import komal  from '../../../../assets/images/logo/komal.jpg'
import pravin  from '../../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../../assets/images/logo/reethika.jpg'
const UserInfoCard = () => {
  // ** render user img
  const statesArr = [
    {
      name: "Komal kamble",
      avatar: komal,
      email: 'komal@gmail.com',
      lastLogin: '12-jan-2021'
    }
  ]
  const renderUserImg = () => {
      return statesArr.map(state => {
      return (
        <div key={state.title} className='browser-states'>
          <Media>
            { state.avatar ? (
              <img src={state.avatar} width='80' height='60' className='mr-2 mb-2 h-25 w-10' />
              ) : (
              <Avatar
                size="lg"
                color= "light-success"
                content={state.name.substring(0, 1)}
              />) }
          </Media>
        </div>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl='12' lg='12'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start mr-1'>
                {renderUserImg()}
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-1'><b>{statesArr[0].name}</b></h4>
                    <CardText tag='span'>
                      {statesArr[0].email}
                    </CardText><br />
                    <CardText tag='span'>
                      Last Login: {statesArr[0].lastLogin}
                    </CardText>
                  </div>
                </div>
              </div>
            </div>
            <div>
                 <div className="d-flex">
                    <Badge className='card-text w-25 mr-25 mb-1' color="light-success" pill>
                          <h5 className='mb-0'> Buyer </h5>
                    </Badge>
                    <div className='ml-1'>-Verified</div>
                  </div>
                 <div className="d-flex">
                    <Badge className='card-text w-25 mr-25 mb-0' color="light-success" pill>
                          <h5 className='mb-0'> Seller </h5>
                    </Badge>
                    <div className='ml-1'>-Verified</div>
                  </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default UserInfoCard
