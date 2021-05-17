import { useContext } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import CardMedal from './Components/HiUser'
import CorporateEmpM from './Components/corporateEmpMap'
import COPcradit from './Components/copoCradit'
import CCExecutiveDashboardStatistic from './Components/SatisticsCard'
import Customization from './Components/customizations'
import CCDashboardState from '@src/views/ui-elements/cards/advance/CCDashboardState'
import Bid from './Components/Bid'
import User from './Components/userChart'
import Reven from './Components/revenue'
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
                    < Col lg='12' md='6' xs='12'>
                        <Bid info={colors.info.main} />
                    </ Col >
                    < Col lg='12' md='6' xs='12'>
                        <User warning={colors.warning.main} />
                    </ Col >
                </Col>
                
                <Col lg='8' md='6' xs='12'>
                   <Reven primary={colors.primary.main} warning={colors.warning.main} />
                </Col>
            </Row>

            <Row className='match-height'>
                <Col xl='12' md='6' xs='12'>
                    <Customization cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row>

            <Row className='match-height'>
                <Col xl='8' md='8' xs='12'>
                  <Card className='card-statistics'>
                     <CardHeader>  
                        <CardTitle tag='h4'><h4>Corporate Employee Mapping</h4></CardTitle>
                     </CardHeader>  
                      <CardBody>
                        <Row className='match-height'>
                          <Col lg='12' xs='12'>
                            <CorporateEmpM />
                          </Col>
                        </Row>
                      </CardBody>  
                  </Card>
                </Col>
                <Col xl='4' md='4' xs='12'>
                  <Card className='card-statistics'>
                     <CardHeader>  
                        <CardTitle tag='h4'><h4>Corporate Cradit</h4></CardTitle>
                     </CardHeader>  
                      <CardBody>
                        <Row className='match-height'>
                          <Col lg='12' xs='12'>
                            <COPcradit />
                          </Col>
                        </Row>
                      </CardBody>  
                  </Card>
                </Col>
            </Row>

        </div>  

    )
    
}
export default Dashboard
