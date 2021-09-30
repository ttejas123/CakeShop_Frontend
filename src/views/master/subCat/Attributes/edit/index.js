// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components
// import FromOtherSitesTab from './fromOtherSites'
import ByUserTab from './byUser'
//import FromExcelSheetTab from './fromExcelSheet'

// ** Third Party Components
import { User, Info, Share2, FileText, ShoppingCart } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const AddProduct = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1')

    // store = useSelector(state => state.users),
    // dispatch = useDispatch(),
    // { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  // ** Function to get user on mount
//   useEffect(() => {
//     dispatch(getUser(parseInt(id)))
//   }, [dispatch])

  return (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <Nav pills>
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <User size={14} />
                  <span className='align-middle d-none d-sm-block'>By User</span>
                </NavLink>
              </NavItem>
              
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <ByUserTab/>
              </TabPane>
              
              {/* <TabPane tabId='3'>
                <FromOtherSitesTab />
              </TabPane> */}
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
export default AddProduct
