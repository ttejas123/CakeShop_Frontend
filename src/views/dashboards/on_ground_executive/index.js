import { useContext } from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import GreetingCard from './greetingcard'
import StateCard from './statestic'
import CardMeetup from './corporate_meet'
import CompanyTable from './CompanyTable'
import ProfileState from './Profile_Stat'
import QuickHelp from './Quickhelp'
import IdeaCard from './IdeaCard'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
const ExecutiveDashboard = () => {
    const { colors } = useContext(ThemeColors),
      trackBgColor = '#e9ecef'
      return (
          <div id='dashboard-ecommerce'>
          <Row className='match-height'>
            <Col xl='4' md='6' xs='12'>
              <GreetingCard />
            </Col>
            <Col xl='8' md='6' xs='12'>
              <StateCard cols={{ xl: '3', sm: '6' }} />
            </Col>
          </Row>
          <Row className='match-height'>
            <Col lg='8' xs='12'>
              <CompanyTable />
            </Col>
            <Col lg='4' md='6' xs='12'>
              <CardMeetup />
            </Col>
          </Row>
          <Row className='match-height'>
            <Col lg='4' md='6' xs='12'>
              <ProfileState colors={colors} trackBgColor={trackBgColor} />
            </Col>
            <Col lg='4' md='6' xs='12'>
            <IdeaCard/>
            </Col>
            <Col lg='4' md='6' xs='12'>
              <QuickHelp />
            </Col>
          </Row>
          </div>
            )
}

export default ExecutiveDashboard
