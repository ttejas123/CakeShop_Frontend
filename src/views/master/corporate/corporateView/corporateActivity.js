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

const CorporateActivity = () => {
 
  return (
    <div id='dashboard-ecommerce'>

        <Col>
      <Row className='match-height'>
          <Col lg='6' md='6'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Team Acitivty Stats</h4></CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' md='12'>
                <TeamActivityStats/>
                </Col>
              </Row>
            </CardBody>  
          </Card>
        </Col>
        <Col lg='6' md='6'>
         <CorporateTransactions/>
        </Col>
        <Col lg='6' md='6'>
        <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Application Status</h4></CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' md='12'>
                <ApplicationStatus/>
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

export default CorporateActivity
