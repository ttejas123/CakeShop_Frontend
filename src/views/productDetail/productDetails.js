// ** React Imports
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Single } from "@src/redux/actions/cake"
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'

import { useDispatch, useSelector } from 'react-redux'

const Product = props => {
  // ** Props
  const {id} = useParams()
  const dispatch = useDispatch()
  const store = useSelector(state => {
     return state.cake.single
  })

  useEffect(() => {
    dispatch(Single(id))
  }, [dispatch, id])

  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')

  // ** Renders color options
  const renderColorOptions = () => {
    const colorOptions = ["primary", "secondary", "danger", "warning", "info"]
    return colorOptions.map(color => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-danger`}>
            <div className={`filloption bg-danger`}></div>
          </div>
        </li>
      )
    })
  }

  // ** Handle Wishlist item toggle
  const handleWishlist = val => {
    
  }

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    
  }

  // ** Condition btn tag
  const CartBtnTag =  'button'

  return (
    <Row className='my-2'>
      <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
        <div className='d-flex align-items-center justify-content-center'>
          <img style={{height: '35rem'}} className='img-fluid product-img' src={`http://localhost:3001/${store.url}`} alt="" />
        </div>
      </Col>
      <Col md='7' xs='12'>
        <h4>{store.name}</h4>
        <CardText tag='span' className='item-company'>
          By 
          <a className='company-name' href='/' onClick={e => e.preventDefault()}>
            khush
          </a>
        </CardText>
        <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
          <h4 className='item-price mr-1'>₹{store.price}</h4>
          <ul className='unstyled-list list-inline'>
                  <li className='ratings-list-item pr-1'>
                     <Rating
                        emptySymbol={<Star size={20} fill='#babfc7' stroke='#babfc7' />}
                        fullSymbol={<Star size={20}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                        initialRating={2}
                      />
                  </li>
          </ul>
        </div>
        <CardText>
          Available -<span className='text-success ml-25'>In stock</span>
        </CardText>
        <CardText>{store.description}</CardText>
        <ul className='product-features list-unstyled'>
         
            <li className='mb-1'>
              <ShoppingCart size={19} />
              <span> Free Shipping</span>
            </li>
          
          <li>
            <DollarSign size={19} />
            <span>EMI options available</span>
          </li>
        </ul>
        <hr />
        <div className='product-color-options'>
          <h6>Colors</h6>
          <ul className='list-unstyled mb-0'>White-Black</ul>
        </div>
        <hr />
        <div className='d-flex flex-column flex-sm-row pt-1'>
         
          <Button
            className='btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0'
            color='secondary'
            outline
            tag={Link}
              to={`/home/add_order/${store._id}`}
          >
            <Heart
              size={14}
              className={classnames('mr-50', {
                'text-danger': 5
              })}
            />
            <span>Buy</span>
          </Button>
          <UncontrolledButtonDropdown className='dropdown-icon-wrapper btn-share'>
            <DropdownToggle className='btn-icon hide-arrow' color='secondary' caret outline>
              <Share2 size={14} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Facebook size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Twitter size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Youtube size={14} />
              </DropdownItem>
              <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
                <Instagram size={14} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </Col>
    </Row>
  )
}

export default Product
