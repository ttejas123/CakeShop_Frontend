import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col} from 'reactstrap'
import UserProfileCard from "./profileComponets/userInfoCard.js"
import StatusCard from "./profileComponets/statusCard.js"
import KycSub from "./profileComponets/kycSub.js"
import BidStatus from "./profileComponets/bidStatus.js"
import Statistics from './profileComponets/statistics.js'
import Reviews from './profileComponets/reviews.js'
import TimeLine from './timeline'
import BidHistory from './profileComponets/bidHistory.js'
import Craditoverview from "./profileComponets/CraditOverview.js"
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
  const Address = "Shivshakti so, A-35 0/4 sector-15 airoli navi mumbai 400708" 
  const Details = "This startup Provide IT Softwares to other startup and organizations"

   const { colors } = useContext(ThemeColors),
   trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height' >
        <Col xl='5' md='6' xs='12'>
          <UserProfileCard />
        </Col>
        <Col xl='4' md='6' xs='12'>
              <StatusCard header="Your Details" Name="userName :" secName="Contact :" thrName="Address :" NameData="@komal" secNameData="7777777777" thrNameData={Address} />
        </Col>
        <Col xl='3' md='6' xs='12'>
          <StatusCard header="Organization" Name="Name :" secName="No. Members :" thrName="Details :" NameData="Coense" secNameData="12" thrNameData={Details}/>
        </Col>
      </Row>

      <Row className='match-height' >
        <Col xl='4' md='6' xs='12'>
          <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Kyc Submitted</h4></CardTitle>
           </CardHeader>  
            <CardBody>
              <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <KycSub />
                </Col>
              </Row>
            </CardBody>  
          </Card>
        </Col>
        <Col xl='4' md='6' xs='12'>
          <BidStatus colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col xl='4' md='6' xs='12'>
          <Statistics header="Organization" Name="Name :" secName="No. Members :" thrName="Details :" NameData="Coense" secNameData="12" thrNameData={Details}/>
        </Col>
      </Row>

      <Row className='match-height' >
        <Col xl='6' md='6' xs='12'>
          <Craditoverview />
        </Col>
         <Col xl='6' md='6' xs='12'>
          <Reviews />
        </Col>
      </Row>

      <Row>
        <Col xl='6' md='6' xs='12'>
          <TimeLine />
        </Col>
         <Col xl='6' md='6' xs='12'>
          <Card className='card-statistics'>
       <CardHeader>  
          <CardTitle tag='h4'><h4>Bid History</h4></CardTitle>
       </CardHeader>  
        <CardBody>
          <Row className='match-height'>
            <Col lg='12' xs='12'>
              <BidHistory />
            </Col>
          </Row>
        </CardBody>  
      </Card>
  
        </Col>
      </Row>
      
    </div>
  )
}

export default EcommerceDashboard