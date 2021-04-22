import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import CardMedal from '@src/views/ui-elements/cards/advance/CCExecutiveTicketCard'

import CCExecutiveDashboardStatistic from '@src/views/ui-elements/cards/statistics/CCExecutiveDashboardStatistic'
import CCDashboardState from '@src/views/ui-elements/cards/advance/CCDashboardState'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'


const Dashboard = () => {
    const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'
    return (
        <div id='dashboard-ecommerce'>
            <Row className='match-height'>
                <Col xl='4' md='6' xs='12'>
                    <CardMedal />
                </Col>
                <Col xl='8' md='6' xs='12'>
                    <CCExecutiveDashboardStatistic cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row>
            <Row className='match-height'>
                
                <Col lg='4' md='6' xs='12'>
                <CCDashboardState colors={colors} trackBgColor={trackBgColor} />
                </Col>
                <Col lg='4' md='6' xs='12'>
                    {/* <CardMedal/> */}
                </Col>
                <Col lg='4' md='6' xs='12'>
                    {/* <CardMedal /> */}
                </Col>
            </Row>
        </div>  

    )

}
export default Dashboard
