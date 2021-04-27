import { useContext, useState } from 'react'
import { Row, Col, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {
    Eye,
    ShoppingCart,
    Heart,
    Circle
  } from 'react-feather'
import StatsVertical from '@components/widgets/stats/StatsVertical'
import classnames from 'classnames'
import StatsCard from './productUiElements/cards/statistics/StatsCard'
import CardBrowserStates from './productUiElements/cards/advance/CardBrowserState'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import ProductCarousel from './productUiElements/cards/advance/productCarousel'
import RelatedProducts from './relatedProducts'

const EcommerceDashboard = () => {
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
  
  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
        <Col>
      <Row >
        <Col xl='6' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
          {/* <Timeline /> */}
        </Col>
        <Col xl='6' md='6' xs='6'>
        <Card >
        <CardBody>
            <CardTitle tag='h4'>Images</CardTitle>
            <ProductCarousel cols={{ xl: '3', sm: '6' }}/>
            <div className='product-color-options'>
          <h6>Colors</h6>
          <ul className='list-unstyled mb-0'>{renderColorOptions()}</ul>
        </div>
          </CardBody>
          </Card>
          {/* <Timeline /> */}
        </Col>
      </Row>
      <Row>
        {/* Stats With Icons */}
        <Col lg='3' sm='6'>
          <StatsVertical icon={<Eye size={21} />} color='info' stats='350k' statTitle='Views' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsVertical icon={<ShoppingCart size={21} />} color='danger' stats='150' statTitle='Carts' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsVertical icon={<Heart size={21} />} color='danger' stats='200' statTitle='Wishlist' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsVertical icon={<Circle size={21} />} color='primary' stats='30+' statTitle='Vendors' />
        </Col>
        {/* Stats With Icons */}
      </Row>
      <Row>
      <Card className='position-static '>
        <CardBody>
          <CardTitle tag='h4'>Description</CardTitle>
          <hr/>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
      </Card>
      </Row>
      <Row>
      <Card className='position-static'>
        <CardBody>
          <CardTitle tag='h4'>Specifications</CardTitle>
          <hr/>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has
            even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
      </Card>
      </Row>
      <Row>
          <Card>
              <CardBody>
              <RelatedProducts/>
              </CardBody>
          </Card>
      </Row>
      </Col>
    </div>
  )
}

export default EcommerceDashboard
