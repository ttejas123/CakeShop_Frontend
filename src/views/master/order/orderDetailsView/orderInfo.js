import { useContext, useState } from 'react'
import Avatar from '@components/avatar'
import { Row, Col, Card, CardTitle, CardBody, CardText, CardHeader, Badge, Media } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import logo  from '../../../../assets/images/logo/logo.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import classnames from 'classnames'
//import Comments from './productUiElements/cards/advance/Comments.js'
// import ApprovedCostom from './productUiElements/cards/advance/ApprovedCostom.js'
//import Timeline from './timeline'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/base/pages/app-ecommerce-details.scss'


const OrderInfo = () => {
  const cols = { md: '3', sm: '6' }
    const [selectedColor, setSelectedColor] = useState('primary')
    // ** Renders color options
       const colorOptions = ["primary", "success", "waring", "danger", "info"]
  const renderColorOptions = () => {
      console.log("colors", colorOptions)
    return colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  } 

  return (
        <Card >
            <Row>
                <Col lg='6' md='6' sm='6'>
                   
        <CardBody>
        <div>
        <Media>
        <img
          className='user-avatar rounded mr-2 my-25 cursor-pointer b-block my-auto'
          src={logo}
          alt='user profile avatar'
          height='50'
          width='50'
        />
            <Media className='my-auto' body>
            </Media>
          </Media>
          
          </div>
                
                            <div className='d-block mt-1'>
                            <div>
                            <span className=' h6 mb-2'>Order Id : </span>
                            <span className='font-weight-bold h6 mb-2'>O11</span>
                        </div>
                        <div className='d-block mt-1'>
                        <span className=' h6 mb-2'>Status : </span>
                            <small className='font-weight-bold mb-2'>Delivered</small>
                        </div>
                            </div>
                            </CardBody>
                            {/* <hr/>
                            <CardBody>
                            <div className='d-block mb-1'>
                            <div>
                            <span className=' h4 mb-2'>Seller Name : </span>
                            <span className='font-weight-bold h4 mb-2'>Reatilsnet</span>
                        </div>
                        </div>
                            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Area : </div>
              <h5 className='mb-1'>Dattani Centre</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Street Name : </div>
              <h5 className='mb-1'> Akurli Rd</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>City : </div>
              <h5 className='mb-1'> Kandivali East, Mumbai</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>State :  </div>
               <h5 className='mb-1'> Maharashtra</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>PinCode : </div>
              <h5 className='mb-1'> 400101</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Country : </div>
              <h5 className='mb-1'> India</h5>
            </div>  
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Contact Number : </div>
              <h5 className='mb-1'> 9876543244</h5>
            </div>   
                            </CardBody> */}
                </Col>
                <Col lg='6' md='6' sm='6'>
                    <CardBody>
                        <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Issue Date : </div>
                    <h5 className='mb-2'>01-05-2021</h5> 
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Delivery Before : </div>
                    <h5 className='mb-2'> 05-05-2021</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                    <div className='font-small-2'>Update Date : </div>
                    <h5 className='mb-2'> 05-05-2021</h5>
                    </div>
                    </CardBody>
                    {/* <hr/>
                    <CardBody>
                            <div className='d-block mb-1'>
                            <div>
                            <span className=' h4 mb-2'>Buyer Name : </span>
                            <span className='font-weight-bold h4 mb-2'>Reatilsnet</span>
                        </div>
                        </div>
                            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Area : </div>
              <h5 className='mb-1'>Dattani Centre</h5> 
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Street Name : </div>
              <h5 className='mb-1'> Akurli Rd</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>City : </div>
              <h5 className='mb-1'> Kandivali East, Mumbai</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>State :  </div>
               <h5 className='mb-1'> Maharashtra</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>PinCode : </div>
              <h5 className='mb-1'> 400101</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Country : </div>
              <h5 className='mb-1'> India</h5>
            </div>  
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Contact Number : </div>
              <h5 className='mb-1'> 9876543244</h5>
            </div>   
                            </CardBody> */}
                 </Col>
            </Row>
    </Card>
  )
}

export default OrderInfo
