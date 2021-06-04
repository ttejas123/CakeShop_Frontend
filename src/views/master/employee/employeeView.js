import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
    Eye,
    ShoppingCart,
    Heart,
    Circle,
    TrendingUp, User, Box, DollarSign
  } from 'react-feather'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import Address from './addressCard'
import Permissions from './permissionsCard'
import ActivityStats from './activityCard'

const EcommerceDashboard = () => {
  const cols = { md: '3', sm: '6' }
    const [selectedColor, setSelectedColor] = useState('primary')
    // ** Renders color options
       const colorOptions = ["primary", "success", "waring", "danger", "info"]
  const renderColorOptions = () => {
      console.log("colors", colorOptions)
    return colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  } 
  
  const data = [
    {
      title: 'Price Range',
      subtitle: '1000-2000'
    },
    {
      title: 'Inventory',
      subtitle: '1k'
    },
    {
      title: '#Sellers',
      subtitle: '10'
    },
    {
      title: 'Created Date',
      subtitle: '10-11-12'
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mt-0 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder text-center mb-0'>{item.title}</h4>
              <CardText className='font-small-3 text-center mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>

        <Col>
        <Row className='match-height'>
        <Col lg='8'>
        <Card >
            <Row>
                <Col lg='6' md='6' sm='6'>
                    <Row>
                        <Col lg='6' md='6'>
        <CardBody>
        <Media>
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer b-block my-auto'
          src={himanshu}
          alt='user profile avatar'
          height='150'
          width='150'
        />
            <Media className='my-auto' body>
            </Media>
          </Media>
          <Badge className='card-text font-small-2 mt-2' color="light-success" pill>
                        <span className='mb-0 text-success' >Manager</span>
                  </Badge>
          </CardBody>
                        </Col>
                        <Col lg='6' md='6' className='d-block'>
                            <div className='d-block my-auto '>
                            <CardBody className='px-0 d-inline-block'>
                            <div>
                            <span className='font-weight-bold h6'>Himanshu Chanda</span>
                        </div>
                        <div>
                            <small>HimanshuChanda@xyz.com</small>
                        </div>
                            </CardBody>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg='6' md='6' sm='6'>
                    <CardBody>
                        <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Number : </div>
                    <h5 className='mb-1'>EMP1</h5> 
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Role : </div>
                    <h5 className='mb-1'> Admin</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Mobile : </div>
                    <h5 className='mb-1'> 12345678923456</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Last Login :  </div>
                    <h5 className='mb-1'>Today</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Status :  </div>
                    <h5 className='mb-1'>Approved</h5>
                    </div>
                    </CardBody>
                 </Col>
            </Row>
    </Card>
    </Col>
    <Col lg='4' md='4' sm='4'>
        <Address/>
    </Col>
        </Row>
        <Row className='match-height'>
          <Col lg='7' sm='5' md='5'>
        <Permissions/>
        </Col>
        <Col lg='5' sm='5' md='5'>
        <Card className=''>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Acitivty Stats</h4></CardTitle>
           </CardHeader>  
            <CardBody>
                <ActivityStats/>
            </CardBody>  
          </Card>
        </Col>
        {/* Stats With Icons */}
      </Row>

      </Col>
    </div>
  )
}

export default EcommerceDashboard
