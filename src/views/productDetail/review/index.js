// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './card'
// import {data} from './data'
// ** Third Party Components
// ** Add New Modal Component
import Form from './form'
import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'


import image from '@src/assets/images/avatars/1-small.png'

const Product = props => {
  const data = props.review
  const [modal, setModal] = useState(false)
  const view = () => {
    setModal(true)
  }

  const handleModal = () => {
    setModal(!modal)
  }
  
  return (
    <>
      <div>
        <CardTitle><h2><b>Latest reviews</b></h2></CardTitle>
        <a class="ps-section__toggle" onClick={() => view()}><u>Write Your Review</u></a>
      </div>
        
      <div className="pt-2">
         <Row>
            {
              data.map((val, index) => {
                  return (
                      <Col md='4' xs='12'>
                          <Card key = {val.id} name = {val.name} review = {val.review} rating = {val.rating} />
                      </Col>
                  )
              })
            }
         </Row>
      </div>
      <Form open={modal} handleModal={handleModal} className="d-none" />
    </>
  )
}

export default Product
