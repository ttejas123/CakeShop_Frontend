// ** React Imports
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import { Star, Download, Heart, Trash2 } from 'react-feather'
import { Card, CardBody, CardText, Button, Badge } from 'reactstrap'
import { List, deleteD } from "@src/redux/actions/cake"
import { useDispatch, useSelector } from 'react-redux'
const ProductCards = props => {
  // ** Props
  const {
    store,
    products,
    activeView,
    addToCart,
    dispatch,
    getProducts,
    getCartItems,
    addToWishlist,
    deleteWishlistItem
  } = props

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id))
    }
    dispatch(getCartItems())
    dispatch(getProducts(store.params))
  }

  const styleCard = {
    width: "100%",
    height: "18rem",
    overflow: "hidden"
  }

  const styleImg = {
     width: "100%",
     minHeight: "100%"
  }

  // ** Handle Wishlist item toggle
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getProducts(store.params))
  }

  // ** Renders products
  const renderProducts = () => {

    const dispatch = useDispatch()
    if (store) {
      return store.data.map(item => {
        const CartBtnTag = item.isInCart ? Link : 'button'

        return (
          <Card className='ecommerce-card'  key={item.name}>
            <div style={styleCard} className='item-img text-center mx-auto'>
              
              <Link className='w-100' to={`/home/cake_details/${item._id}`}>
                <img className='img-fluid card-img-top'  src={`http://localhost:3001/${item.url}`} alt={item.name} />
              </Link>
            </div>
            <CardBody>
              <div className='item-wrapper'>
                <div className='item-rating'>
                  <ul className='unstyled-list list-inline'>
                    <li className='ratings-list-item pr-1'>
                     <Rating
                        emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                        fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                        initialRating={2}
                      />
                  </li>
                  </ul>
                </div>
                <div className='item-cost'>
                  <h6 className='item-price'>${item.price}</h6>
                </div>
              </div>
              <h6 className='item-name'>
                <Link className='text-body' to={`/apps/ecommerce/product-detail/${item.slug}`}>
                  {item.name}
                </Link>
                <CardText tag='span' className='item-company'>
                  By{' '}
                  <a className='company-name' href='/' onClick={e => e.preventDefault()}>
                    {item.brand}
                  </a>
                </CardText>
              </h6>
              <CardText className='item-description'>{item.description}</CardText>
            </CardBody>
            <div className='item-options text-center'>
              <div className='item-wrapper'>
                <div className='item-cost'>
                  <h4 className='item-price'>${item.price}</h4>
                  {item.hasFreeShipping ? (
                    <CardText className='shipping'>
                      <Badge color='light-success'>Free Shipping</Badge>
                    </CardText>
                  ) : null}
                </div>
              </div>
              <Button
                color='danger'
                tag={CartBtnTag}
                className='btn-cart move-cart'
                onClick={() => {
                  dispatch(deleteD(item._id, dispatch, List))
                }
              }
              >
                <Trash2 className='mr-50' size={14} />
                </Button>
              <Button
                className='btn-wishlist'
                color='light'
                tag={Link}
                to={`/home/cake_details/${item._id}`}
              >
              {/*<Heart
                                className={classnames('mr-50', {
                                  'text-danger': item.isInWishlist
                                })}
                                size={14}
                              />*/}
                <span>view</span>
              </Button>
              <Button
                color='primary'
                tag={CartBtnTag}
                tag={Link}
                to={`/home/add_order/${item._id}`}
                className='btn-cart move-cart'
                >
                <Download className='mr-50' size={14} />
                <span>Buy</span>
              </Button>
            </div>
          </Card>
        )
      })
    }
  }

  return (
    <div
      className={classnames({
        'grid-view': activeView === 'grid',
        'list-view': activeView === 'list'
      })}
    >
      {renderProducts()}
    </div>
  )
}

export default ProductCards
