import { Fragment, useState } from 'react'

import { Link } from 'react-router-dom'
import Rating from 'react-rating'
import classnames from 'classnames'
import { Star, Edit, Zap, ShoppingCart, Percent, ShoppingBag, Box, Truck } from 'react-feather'
import { CardText, Card,  Row, Col, Button, CardBody  } from 'reactstrap'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import img1 from '@src/assets/images/logo/ss3.jpg'
import img2 from '@src/assets/images/logo/ss2.jpg'
import img3 from '@src/assets/images/logo/ss5.jpg'
// import img4 from '@src/assets/images/logo/p.jpg'
import img4 from '@src/assets/images/logo/ss4.jpg'

// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

const SimilarProducts = (props) => {
  SwiperCore.use([Navigation])
  const data = props.similar
  // ** Related products Slides
  // const slides = [
  //   {
  //     name: `Men's Bouncer-01 Sports,Walking,Gym,Training,Running`,
  //     brand: 'Latex',
  //     ratings: 4,
  //     price: 1399,
  //     img: img1
  //   },
  //   {
  //     name: `Men's Drogo M Running Shoes`,
  //     brand: 'Bouncy',
  //     ratings: 2,
  //     price: 2449.40,
  //     img: img2
  //   },
  //   {
  //     name: `Men's Sx0379g Walking Shoes`,
  //     brand: 'Latex',
  //     ratings: 3,
  //     price: 229.29,
  //     img: img3
  //   },
  //   {
  //     name: `Men's Sx0379g Walking Shoes`,
  //     brand: 'Bouncy',
  //     ratings: 3,
  //     price: 90.98,
  //     img: img4
  //   },
  //   {
  //     name: 'Running Shoes',
  //     brand: 'Bouncy',
  //     ratings: 4,
  //     price: 1559.99,
  //     img: img1
  //   }
  // ]

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 3,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 3,
        spaceBetween: 55
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 55
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 55
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

  return (
    <Fragment>
      <div className='mt-4 mb-2 text-center'>
        <h4>Similar Products</h4>
        {/* <CardText>People also search for this items</CardText> */}
      </div>
      <Swiper {...params}>
        {data.map(slide => {
          return (
            <SwiperSlide key={slide.name}>
               <div style={{boxShadow:'0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius:'10px'}}>
                      <CardBody>
                       <div>
                       <CardText  tag={Link} to='/product/productDetails' >
            <h4 className="Col-5 text-truncate" tag={Link} to='/product/productDetails'>{slide.name}</h4>
    </CardText>
    <Row>    
      <Col className='d-flex align-items-center m-0 p-0' md='12' xs='12'>
        
      <img src={slide.image[0].url} style={{height: '40vh', width: '100%'}} alt='swiper 1' className='img-fluid m-0 p-0' />

      </Col>
      <Col md='12' xs='12'>
        
        <div className='  mt-1'>
          <ul className='unstyled-list list-inline '>
    
                <li className='ratings-list-item pr-1'>
                   <Rating
                      emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                      fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                      initialRating={slide.rating}
                    />
                </li><br />
              ({slide.reviews} Reviews)
          </ul>
          <CardText>
            Available -<span className='text-success ml-25'>In stock</span>
          </CardText>
        </div>

        <hr />
        <div >
          <span style={{paddingLeft:"5px"}}>{`MRP : ₹ ${slide.mrp}`}</span>
        </div>
        {/* <div style={{paddingTop: '5px'}}>
          <Percent size={18} /> <span style={{paddingLeft:"5px"}}>Offer : 5% - 7%</span>
        </div>

        <div style={{paddingTop: '5px'}}>
          <Box size={18} /> <span style={{paddingLeft:"5px"}}>MOQ : 100 -150 Pcs</span>
        </div>

        <div style={{paddingTop: '5px'}}>
          <ShoppingBag size={18} /> <span style={{paddingLeft:"5px"}}>Inventory : 200 Pcs</span>
        </div>

        <div style={{paddingTop: '5px'}}>
          <Truck size={18} /> <span style={{paddingLeft:"5px"}}>Delivery : 5 - 7 days</span>
        </div>

        <hr />
        <div style={{paddingTop: '5px'}}>
          <b>SKU:</b> <span style={{paddingLeft:"5px"}}>8DJ21A</span>
        </div>

        <hr />

        <div className='d-flex justify-content-between'>
         
          <Button.Ripple tag={Link} to='/login' className='round' style={{width:"30%"}} color='primary' outline>
                                   Add To Cart
          </Button.Ripple>
          <Button.Ripple tag={Link} to='/Homes/bidCreate' className='round' style={{width:"30%"}} color='primary' outline>
                                   Create Bid
          </Button.Ripple>  
        </div>
         */}
      </Col>
      
    </Row>

                       </div>
                      </CardBody>
                      
                    </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Fragment>
  )
}

export default SimilarProducts
