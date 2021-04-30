import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import StatsCard from './ui-elements/cards/statistics/StatsCard'
import CardBrowserStates from './ui-elements/cards/advance/CardBrowserState'
import Comments from './ui-elements/cards/advance/Comments.js'
import ApprovedCostom from './ui-elements/cards/advance/ApprovedCostom.js'
import Address from './ui-elements/cards/analytics/Address'
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
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

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row >
        <Col xl='8' md='6' xs='12'>
          <StatsCard cols={{ xl: '3', sm: '6' }} />
          {/* <Timeline /> */}
        </Col>
        <Col xl='4' md='2' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
          <ApprovedCostom colors={colors} trackBgColor={trackBgColor} />
          <Address title="Shipping Address" Address={ShoopingAddre}/>
          <Address title="Billing Address" Address={BillAddre}/>
        </Col>
      </Row>
      
    </div>
  )
}

export default EcommerceDashboard
