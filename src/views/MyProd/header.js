import { Search } from 'react-feather'
import { Card, CardBody, CardText,  Row, Col, Button, Input, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap'
import '@styles/base/pages/page-knowledge-base.scss'
import './style.css'
import MTIMG from '@src/assets/images/banner/Tejas.png'
const Header = ({ searchTerm, setSearchTerm, handleFilter }) => {
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }

  return (
      <>
    <div id=''>
      <div
        className='heroSection px-2 px-lg-0'
      >
        
            <div className='mx-lg-5 px-lg-5'>
                  <div className='d-lg-flex align-items-center' >
                          <Col lg='7' md='6' sm='12'>
                              <CardBody className='px-0 pt-0'>
                                    <Col lg='10' className='px-0'>
                                      <h1 className='hearderFirst'>Master The Art Of Self Control</h1>
                                    </Col>
                                    <Col lg='10' className='px-0 py-1'>
                                      <CardText className='mb-2'>
                                        <p className=' h3 mt-1 normalText' style={{color:'#9db6d7', fontSize:'1.4rem', marginTop:20, textAlign:'left', fontWeight:500}}>Learn the dynamics of Self Control from the master Selflearnlist and serial podcaster Tejas Thakare.</p>
                                      </CardText>
                                    </Col>
                                    <Col lg='10' sm='12' className='px-0 pb-1'>
                                      <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1 mainButton block  border-none' >
                                         <small className=' h4 bold mx-2 w-button' style={{color: 'white'}}>COMING SOON</small> 
                                      </Button.Ripple>
                                    </Col>
                                      <p style={{ fontWeight:700, color:'White', textAlign:'left'}}>This course is taught in Hinglish</p>
                                     
                              </CardBody>
                          </Col>
                          <Col lg='5' sm='12' md='12' className='d-lg-block d-none d-md-none'  >
                              <img src={MTIMG} alt='logo' height='600' width='auto'/>
                          </Col>
                    </div>
              </div>
        
      </div>
    </div>
    </>
  )
}

export default Header
