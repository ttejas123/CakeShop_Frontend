// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components

import { useRTL } from '@hooks/useRTL'
import virus from '@src/assets/images/logo/vi.svg'

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
  const {data, selectedSku} = props
  const attributes = selectedSku.product_sku_attributes_mappings || []
  return (
    <>
    <div>
        <CardTitle><h2><b>{data.name}</b></h2></CardTitle>
        <CardText>
            {data.detail}
        </CardText>
        {selectedSku.description && <CardText style={{backgroundColor:" #f2f2f2"}} >
            {selectedSku.description}
        </CardText>}
    </div>
    <div>
        <Row>
          {selectedSku && selectedSku.product_usp && selectedSku.product_usp.map((usp) => {
            return (
              <Col md='3' xs='12'><div className="d-flex pt-2"><img className='mr-1' src="https://img.icons8.com/fluent-systems-regular/25/000000/bacteria.png"/><div><b>{usp}</b></div></div></Col>)
          })}
        </Row>
    </div>
    <div className="pt-2">
      <Col md='10' xs='12'>
        <table class="table table-striped ps-table ps-table--oriented m-0 ">
          <tbody>
            {attributes.map((at) => {
              return (<tr><th class="ps-table__th">{at.attribute.display_name}</th><td>{at.value}</td></tr>)
            })}
          </tbody>
        </table>
      </Col>
    </div>
    </>
  )
}

export default Product
