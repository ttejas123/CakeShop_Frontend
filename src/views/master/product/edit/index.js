// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components
import FromExcelSheetTab from './addSku'
import ByUserTab from './byUser'


// ** Third Party Components
import { User, Info, Share2, FileText, ShoppingCart } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const AddProduct = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1')

  const toggle = tab => setActiveTab(tab)

  return (
    <>
        <Card className='p-0'>
          <CardBody className='p-0 pt-1 pl-1'>
            <Nav pills>
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <User size={14} />
                  <span className='align-middle d-none d-sm-block'>Edit By User</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                  <FileText size={14} />
                  <span className='align-middle d-none d-sm-block'>Sku Update</span>
                </NavLink>
              </NavItem>
            </Nav>
          </CardBody>
        </Card>    
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                <ByUserTab/>
              </TabPane>
              <TabPane tabId='2'>
                <FromExcelSheetTab />
              </TabPane>
            </TabContent>
      
    </>
  )
}
export default AddProduct
