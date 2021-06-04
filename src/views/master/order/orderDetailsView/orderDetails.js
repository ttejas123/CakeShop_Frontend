import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import himanshu  from '../../../../assets/images/logo/himanshu.jpg'
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
import OrderInfo from './orderInfo'
import OrderPayment from './orderPayment'
import Items from './orderItems'
import OrderUsers from './orderUsersInfo'
import OrderInvoice from './orderInvoiceList'
import Address from './address'
import OrderTimeline from './orderTimeline'
import OrderDocuments from './orderDocuments'
import OrderBidInfo from './orderBidInfo'

const EcommerceDashboard = () => {
  const cols = { md: '3', sm: '6' }
  const ShoopingAddre = {
    shopName: "Shivshakti so, CHS",
    shopNumber: "A/35, 0/4",
    streetName: "sector-15",
    pincode: 400708,
    state: "Maharashtra",
    city: "Airoli",
    country: "India"
  }
  const BillAddre = {
    shopName: "Shivshakti so, CHS",
    shopNumber: "A/35, 0/4",
    streetName: "sector-15",
    pincode: 400708,
    state: "Maharashtra",
    city: "Airoli",
    country: "India"
  }

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
         <Row>
        <Col md='12' sm='12'>
        <OrderInfo/>
        </Col>
        <Col md='12' sm='12'>
        <OrderUsers/>
        </Col>
        <Col md='12' sm='12'>
        <OrderPayment/>
        </Col>
        <Col md='12' sm='12'>
       <Items/>
          </Col>
          <Col md='12' sm='12'>
    <OrderInvoice/>
        </Col>
    </Row>
    </Col>
    <Col lg='4'>
    <Row>
    <Col md='12' sm='12'>
        <OrderBidInfo/>
        </Col>
        <Col md='12' sm='12'>
        <Address title="Shipping Address" Address={ShoopingAddre}/>
        </Col>
        <Col md='12' sm='12'>
        <Address title="Billing Address" Address={BillAddre}/>
        </Col>
        <Col md='12' sm='12'>
        <OrderDocuments/>
        </Col>
        <Col md='12' sm='12'>
        <OrderTimeline/>
        </Col>
    </Row>
    </Col>
        {/* Stats With Icons */}
      </Row>

      </Col>
    </div>
  )
}

export default EcommerceDashboard
