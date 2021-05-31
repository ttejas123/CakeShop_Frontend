import { useContext, useState } from 'react'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'
import CorporateBidStats from './corporateBidStats'
import CorporateBidHistory from './corporateBidHistory'
import BidCash from './BidcashUti'
import BidCoin from './BidcoinUti'
// import ProductCarousel from './productCarousel'
// import RelatedProducts from './relatedProducts'
// import ProductInfo from './productInfo'

const CorporateBids = () => {
  const cols = { md: '3', sm: '6' }
    const [selectedColor, setSelectedColor] = useState('primary')

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>

        <Col>
            
             
      <Row className='match-height'>
        <Col lg='6' md='12'>
          <Card className='card-statistics'>
             <CardHeader>  
                <CardTitle tag='h5'><h4>Bid History</h4></CardTitle>
             </CardHeader>  
              <CardBody>
                <Row className='match-height'>
                  <Col lg='12' md='12'>
                  <CorporateBidHistory/>
                  </Col>
                </Row>
              </CardBody>  
          </Card>
        </Col>
        <Col lg='6' md='12'>
          <CorporateBidStats colors={colors} trackBgColor={trackBgColor}/>
        </Col>
        <Col lg='12' md='12'>
          <BidCoin />
        </Col>
        <Col lg='12' md='12'>
          <BidCash />
        </Col>
      </Row> 

      </Col>
    </div>
  )
}

export default CorporateBids
