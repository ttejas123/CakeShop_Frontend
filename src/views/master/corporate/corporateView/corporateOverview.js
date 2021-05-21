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
import StatsVertical from '@components/widgets/stats/StatsVertical'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import TeamCard from './teamCard'
import CorporateDetails from './corporateDetails'
import Headquarter from './corporateHeadquarter'
import CorporateKyc from './corporateKyc'
import CorporateBidStats from './corporateBidStats'
import TeamActivityStats from './teamAcitivityStats'
import CorporateBidHistory from './corporateBidHistory'
import ApplicationStatus from './applicationStatus'
import CorporateTransactions from './corporateTransactions'
import CorporateOffices from './corporateOffices'
// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'

const CorporateOverview = () => {
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
        <Col lg='8'>
        <Card >
      <CardHeader className='pb-0'> 
        <CardTitle tag='h4'>
        <Media>
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer'
          src={logo}
          alt='user profile avatar'
          height='50'
          width='50'
        />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder text-center'>Coense Solutions pvt ltd</h4>
              <CardText className='card-text font-small-2 mr-25 mb-0'>abc@gmail.com</CardText>
            </Media>
          </Media>
          </CardTitle>
        
      </CardHeader>
      <hr/>
      <CardHeader className='pb-0'> 
        <CardTitle tag='h4'>
        <Media>
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder '>About</h4>
              <CardText className='card-text font-small-4 mr-25 mb-0'>COENSE SOLUTIONS PRIVATE LIMITED is a technology company based in Mumbai, Maharashtra, India. We are a tech studio and have worked with dozens of innovative startups in the last 9 years to develop various Solutions in the Domain of ECommerce, ELearning, Custom Android and iOS Apps, Fintech, EdTech and Social Networks.
              We also have our own in house CSR management platform ProjectHeena.com that helps Corporates, Non Profits and Volunteers engage with each other on a massive scale and create impact on ground</CardText>
            </Media>
          </Media>
          </CardTitle>
        
      </CardHeader>
          <hr/>

      <Col lg='12' md='6'>
      <CardBody className='py-1 my-2'>
        <Row>{renderData()}</Row>
      </CardBody>
        </Col>
      {/* <CardBody className='mt-0'>
        <Row>{renderData()}</Row>
      </CardBody> */}
    </Card>
        </Col>
        <Col lg='4' md='6'>
        <Card className='card-statistics'>
       <CardHeader>  
          <CardTitle tag='h4'><h4>Team</h4></CardTitle>
       </CardHeader>  
        <CardBody>
          <Row className='match-height'>
            <Col lg='12' xs='12'>
            <TeamCard    cols={{ xl: '3', sm: '6' }}/>
            </Col>
          </Row>
        </CardBody>  
      </Card>
        </Col>
        </Row>

        <Row className='match-height'>
          <Col lg='4' md='6'>
         <CorporateDetails/>
        </Col>
        <Col lg='4' md='6'>
         <Headquarter/>
        </Col>
        <Col lg='4' md='6'>
        <CorporateOffices/>
        </Col>
      </Row> 

      <Row className='match-height'>
          <Col lg='12' md='6'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Kyc Submitted</h4></CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' md='12'>
                <CorporateKyc/>
                </Col>
              </Row>
            </CardBody>  
          </Card>
        </Col>
      </Row> 

      </Col>
    </div>
  )
}

export default CorporateOverview
