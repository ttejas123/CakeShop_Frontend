import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import logo from '@src/assets/images/slider/coenseLogo.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
    Eye,
    ShoppingCart,
    Heart,
    Circle,
    TrendingUp, User, Box, DollarSign
  } from 'react-feather'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import UserInfoCard from './userInfoCard'
import CorporateAssignedCard from './corporateAssignedCard'
// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'

const CorporateView = () => {
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
      title: 'Admin',
      subtitle: 'Himanshu Chanda'
    },
    {
      title: '#Employees',
      subtitle: '12'
    },
    {
      title: '#Warehouse',
      subtitle: '10'
    },
    {
      title: 'Has Subscription',
      subtitle: 'yes'
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
              <h5 className='font-weight-bolder text-center mb-0'>{item.title}</h5>
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
        <Row >
        <Col lg='6' md='6'>
        <UserInfoCard userId = {1}/>
        </Col>
        </Row>

        <Row className='match-height'>
          <Col lg='12' md='12'>
         <CorporateAssignedCard/>
        </Col>
      </Row> 

      </Col>
    </div>
  )
}

export default CorporateView
