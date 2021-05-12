// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import { X, Heart, Star, Trash } from 'react-feather'
import { Card, CardBody, CardText, CardHeader, Button, Badge, InputGroup, InputGroupAddon, Input, InputGroupText, Row, Col } from 'reactstrap'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
// ** Custom Components
import NumberInput from '@components/number-input'

const Cart = props => {
  // ** Props
  const { products, stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Funciton Function to toggle wishlist item
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getCartItems())
  }

  // ** Render cart items
  const renderCart = () => {
    return products.map(item => {
      return (
        <Card>
          <div>
             <Row >
                <Col lg='2' xs='6' className="m-0 pl-3 mt-1 mb-1">
                  <b>USB Cable</b>
                </Col>
                <Col lg='3' xs='6' className="m-0 mt-1 mb-1">
                    mr.pankaj khurana 
                </Col>
                <Col lg='4' xs='6' className="m-0 pl-3 mt-1 mb-1">
                    <b> RFQ: </b> S1236223AD    <b> Closing </b> 15-11-2017
                </Col>
                <Col lg='1' xs='6' className="m-0 mt-1 mb-1">
                  <Trash size={14} /> Delete
                </Col>
             </Row>   
          </div>
          <Card  key={item.name} className='ecommerce-card'>
            <div className='item-img'>
              <Link to={`/apps/ecommerce/product/${item.slug}`}>
                <img className='img-fluid' src={item.image} alt={item.name} />
              </Link>
            </div>

            <CardBody >
              <Row >
                <Col md='6' xs='6'>
                  <div className='item-name m-0'>
                    <h6 className='mb-5 pb-2 m-0'>
                      <span >Quentity: </span>
                      <Link to={`/apps/ecommerce/product/${item.slug}`} className='pt-1'>300-400 unites</Link>
                    </h6>
                    <h6 className='m-0'>
                      <span>Budget: </span>
                      <Link  className='pt-1' to={`/apps/ecommerce/product/${item.slug}`}>$ 3000-4000</Link>
                    </h6>
                  </div>
                </Col>
                <Col md='6' xs='6'>  
                  <div className='item-name'>
                    <h6 className='mb-5 pb-2'>
                      <span >Delivary Location: </span>
                      <Link to={`/apps/ecommerce/product/${item.slug}`} className='pt-1'> Multiple </Link>
                    </h6>
                    <h6 className='mt-0'>
                      <span>Delivary Time: </span>
                      <Link  className='pt-1' to={`/apps/ecommerce/product/${item.slug}`}>10-30 Days</Link>
                    </h6>
                  </div>
                </Col>
            </Row>  
            </CardBody>

            <div className='item-options'>
              <Row >
                <Col md='7' xs='12' >
                  <div className='item-name '>
                    <h6 className='mb-5 pb-2'>
                      <span >Seller Quote: </span>
                      <Link to={`/apps/ecommerce/product/${item.slug}`} className='pt-1'>$ 8000.00 - 8500.00</Link>
                    </h6>
                    <h6 >
                      <span>No of Quote: </span>
                      <Link  className='pt-1' to={`/apps/ecommerce/product/${item.slug}`}>3 of 5 Nos.</Link>
                    </h6>
                  </div>
                </Col>
                <Col md='5' xs='12'>
                  <div className='item-options'>
                        <Button className='mb-2 remove-wishlist' color='light' onClick={() => dispatch(deleteCartItem(item.id))}>
                          
                          <span>Sample</span>
                        </Button>
                        <Button className='mb-1 remove-wishlist' color='light' onClick={() => dispatch(deleteCartItem(item.id))}>
                          
                          <span>Bid</span>
                        </Button>
                        <Button
                          className='btn-cart'
                          color='primary'
                          onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
                        >
                          
                          <span className='text-truncate'>Revise</span>
                        </Button>
                  </div>
                </Col>

              </Row>
              </div>
          </Card>


          <Card  key={item.name} className='d-none'>
              <hr />
              <Row>

                  <Col md='4' xs='12'>
                    <div className='item-name pl-2 mb-1'><b>Buyers(Base Rate + GST = Budget)</b></div>
                    <div className='item-name pl-2 mb-1'><b>$ 5357.14 + 12% = $6000.00</b></div>
                    <div className='item-name pl-2'>
                      <h6 className='mb-2 pb-2 m-0'>
                        <span >Quentity: </span>
                        <Link to={`/apps/ecommerce/product/`} className='pt-1'>300-400 unites</Link>
                      </h6>
                      <h6 className='mb-2 pb-2 m-0'>
                        <span>Delivary: </span>
                        <Link  className='pt-1' to={`/apps/ecommerce/product/`}>10-30 Days</Link>
                      </h6>
                      <h6 className='mb-2 pb-2 m-0'>
                        <span>Delivary: </span>
                        <Link  className='pt-1' to={`/apps/ecommerce/product/`}>10-30 Days</Link>
                      </h6>
                    </div>
                    <div className='item-name pl-2 mb-1'>Buyers(Base Rate + GST = Budget)</div>
                    <div className='item-name pl-2 mb-1'>$ 5357.14 + 12% = $6000.00</div>
                  </Col>

                 <Col md='3' xs='12'>
                    <div className='item-name  mb-1'><b>Seller(Base Rate + GST = Quote)</b></div>
                    <div className='item-name mb-1'><b>$ 5357.14 + 12% = $6000.00</b></div>
                    <div className='item-name '>
                      <h6 className='mb-2 pb-2 m-0'>
                        <span >Quentity: </span>
                        <Link to={`/apps/ecommerce/product/`} className='pt-1'>300-400 unites</Link>
                      </h6>
                      <h6 className='mb-2 pb-2 m-0'>
                        <span>Delivary: </span>
                        <Link  className='pt-1' to={`/apps/ecommerce/product/`}>10-30 Days</Link>
                      </h6>
                      <h6 className='mb-2 pb-2 m-0'>
                        <span>Delivary: </span>
                        <Link  className='pt-1' to={`/apps/ecommerce/product/`}>10-30 Days</Link>
                      </h6>
                    </div>
                    <div className='item-name  mb-1'>Seller(Base Rate + GST = Quote)</div>
                    <div className='item-name mb-1'>$ 5357.14 + 12% = $6000.00</div>
                  </Col>
                  <Col  md='5' xs='12'>
                      <div style={{height: "280px"}}>
                        <div className="card " >
                          <h5 className="card-title">Artist Painting</h5>
                         <div className="d-flex" >
                            <img className="card-img-top" style={{height: "150px", width:"250px"}} src={item.image} alt="Card image cap"/>
                            <div className="ml-2">
                                <div className="mb-1">
                                  <b>MRP. $ 9000/-</b>
                                </div>
                                <div className="mb-1" >
                                   <b>Offer. $ 2000/-</b> 
                                </div>
                                <div className="mb-1">
                                    <b>MOQ. 2000pcs/-</b> 
                                </div>
                                <div className="mb-1">
                                    <b>Delivary. 30Days</b> 
                                </div>
                                <div >
                                    <b>Inventory 100 pcs</b> 
                                </div>
                            </div>
                         </div>
                          <div className="card-body">
                            <p >Close Nagotiation  bid History</p>
                            <div >
                              <a href="#" className="btn btn-primary mr-2">Submit</a>
                              <a href="#" className="btn btn-primary">Order</a>
                            </div>
                          </div>
                        </div>
                    </div>
                  </Col>
            </Row>  
          </Card>
        </Card>  
      )
    })
  }

  return (
    <div className='ecommerce-application'>
      <div className='checkout-items list-view' >{products.length ? renderCart() : <h4>Your cart is empty</h4>}</div>
      
    </div>
  )
}

export default Cart
