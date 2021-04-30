import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
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
import ProductCarousel from './productCarousel'
import RelatedProducts from './relatedProducts'
import ProductInfo from './productInfo'

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
        <Row>
        <Col lg='12'>
        <Card >
      <CardHeader className='pb-0'> 
        <CardTitle tag='h4'>
        <Media>
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={sliderImage1}
          alt='user profile avatar'
          height='50'
          width='50'
        />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>
Nike
Unisex Black LEBRON XVIII Basketball Shoes</h4>
            </Media>
          </Media>
          </CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Sample Available</CardText>
      </CardHeader>
      <div className='demo-inline-spacing ml-2'>
      <Badge color='light-success'>Primary</Badge>
      <Badge color='light-success'>Primary</Badge>
      <Badge color='light-success'>Primary</Badge>
      <Badge color='light-success'>Primary</Badge>
      </div>
      <hr/>
      <Col lg='8' md='6'>
      <CardBody className='py-1'>
        <Row>{renderData()}</Row>
      </CardBody>
        </Col>
      {/* <CardBody className='mt-0'>
        <Row>{renderData()}</Row>
      </CardBody> */}
    </Card>
        </Col>
        </Row>

      <Row >
        <Col lg='6' md='6'>
            <ProductInfo cols={{ xl: '3', sm: '6' }}/>
          {/* <StatsCard cols={{ xl: '3', sm: '6' }} /> */}
          {/* <Timeline /> */}
        </Col>
        <Col lg='6' md='6'>
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
        {/* <Col lg='2' sm='6'>
          <StatsVertical icon={<Eye size={21} />} color='info' stats='250k' statTitle='Views' />
        </Col> */}
          <Col lg='3' sm='6'>
          <StatsVertical icon={<Circle size={21} />} color='primary' stats='5+' statTitle='Variants' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsVertical icon={<ShoppingCart size={21} />} color='danger' stats='150' statTitle='Carts' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsVertical icon={<Heart size={21} />} color='danger' stats='200' statTitle='Wishlist' />
        </Col>
        <Col lg='3' sm='6'>
          <StatsVertical icon={<Circle size={21} />} color='primary' stats='20+' statTitle='Vendors' />
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
      
      <Row className='app-ecommerce-details'>
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
