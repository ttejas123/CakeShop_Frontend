// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components

// ** Third Party Components
import { User, Info, Share2, FileText, ShoppingCart } from 'react-feather'
import { Card, CardHeader, CardTitle, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'
import CorporateView from './corporateView'
import CorporateBidHistory from './corporateBidHistory'
import CorporateBidStats from './corporateBidStats'
import CorporateOverview from './corporateOverview'
import CorporateBids from './corporateBid'
import CorporateActivity from './corporateActivity'
import WarehouseList from '../../warehouse/warehouseList'
import CorporateWarehouse from './corporateWarehouse'
import CorporateBranch from './corporateBranch'
import CorporateTeam from './corporateTeam'
import CorporateGallery from './corporateGallery'
import '@styles/react/libs/swiper/swiper.scss'
import { useRTL } from '@hooks/useRTL'
import CorporateKyc from './corporateKyc'
const AddProduct = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1')

    // store = useSelector(state => state.users),
    // dispatch = useDispatch(),
    // { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)
  const [isRtl, setIsRtl] = useRTL()

  // ** Function to get user on mount
//   useEffect(() => {
//     dispatch(getUser(parseInt(id)))
//   }, [dispatch])

  return (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card className='mx-1'>
            <Nav pills className='mb-0'>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '1'} onClick={() => toggle('1')}>
                  <span className='align-middle d-none d-sm-block'>OverView</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '2'} onClick={() => toggle('2')}>
                  <span className='align-middle d-none d-sm-block'>Branch</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '3'} onClick={() => toggle('3')}>
                  <span className='align-middle d-none d-sm-block'>Warehouse</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '4'} onClick={() => toggle('4')}>
                  <span className='align-middle d-none d-sm-block'>Bid</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '5'} onClick={() => toggle('5')}>
                  <span className='align-middle d-none d-sm-block'>Activity</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '6'} onClick={() => toggle('6')}>
                  <span className='align-middle d-none d-sm-block'>Team</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '7'} onClick={() => toggle('7')}>
                  <span className='align-middle d-none d-sm-block'>Gallery</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='ml-2 my-2' active={activeTab === '8'} onClick={() => toggle('8')}>
                  <span className='align-middle d-none d-sm-block'>KYC</span>
                </NavLink>
              </NavItem>
            </Nav>
        </Card>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <CorporateOverview toggle={toggle} />
              </TabPane>
              <TabPane tabId='2'>
              <CorporateBranch/>
              </TabPane>
              <TabPane tabId='3'>
                <CorporateWarehouse/>
              </TabPane>
              <TabPane tabId='4'>
              <CorporateBids/>
              </TabPane>
              <TabPane tabId='5'>
                <CorporateActivity/>
              </TabPane>
              <TabPane tabId='6'>
                <CorporateTeam/>
              </TabPane>
              <TabPane tabId='7'>
                <CorporateGallery isRtl={isRtl}/>
              </TabPane>
              <TabPane tabId='8'>
                <CorporateKyc/>
              </TabPane>
            </TabContent>
         
      </Col>
    </Row>
  )
}
export default AddProduct
