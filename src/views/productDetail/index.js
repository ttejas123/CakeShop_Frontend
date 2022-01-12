import { useEffect, useState, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import Review from './review'

import ItemFeatures from './ItemFeatures'
import ProductDetails from './productDetails'

import '@styles/react/libs/swiper/swiper.scss'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
// import ProductInfo from './productInfo'
// ** Third Party Components
import { Card, CardBody } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
// import SimilarProducts from './similarProducts'

// import { SpecificProduct } from '@store/actions/SearchPageApis/searchPage/product'
// import { ReviewList } from '@store/actions/Product/Products/review'
// import { SimilarProductList } from '@store/actions/Product/Products/similar'

const Product = (props) => {
  
  const dispatch = useDispatch()
  const { id, sku } = props.match.params
  // useEffect(() => {
  //   if (id) {
  //     dispatch(SpecificProduct(id))
  //     // dispatch(ReviewList())
  //     dispatch(SimilarProductList())
  //   }
  // }, [id])

  // const Product = useSelector(state => {
  //   return state.ProductDetail.data
  // })

  // const ReviewData = useSelector(state => {
  //   return state.ProductDetail.data.product_reviews || []
  // })

  // const SimilarData = useSelector(state => {
  //   return state.SimilarProducts.data
  // })
  // const skus = Product.product_skus || []
  // const [selectedSku, setSelectedSku] = useState([])
  // if (sku && (selectedSku.length === 0 || sku !== selectedSku.sku_id)) {
  //   skus.map((sku_data) => {
  //     if (sku_data.sku_id === sku) {
  //       setSelectedSku(sku_data)
  //     }
  //   })
  // } <SimilarProducts similar={SimilarData} />  <Review review={ReviewData} /> <ProductInfo data={Product} selectedSku={selectedSku} />

  return (
    <Fragment >
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
        <BreadCrumbs breadCrumbTitle='Cake Details' breadCrumbParent='Egg' breadCrumbChild='Digital' breadCrumbActive='Back-white' />
      </div>
      <div className="ml-lg-4 mr-lg-5 pl-lg-3 pr-lg-3" >
          <Card>
            <CardBody>
              <ProductDetails />
            </CardBody>
          </Card>
      </div>
    </Fragment>
  )
}

export default Product
