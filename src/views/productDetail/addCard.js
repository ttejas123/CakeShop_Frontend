import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import NumberInput from '@components/number-input'
import { Card, Row, Col, CardHeader, CardTitle, CardBody, CardText, Label, Alert, Badge, Button } from 'reactstrap'

import { CreateCartItem } from '@src/redux/actions/Cart/index.js'

const NumberInputBasic = (props) => {
  const dispatch = useDispatch()
  const UserData = JSON.parse(localStorage.getItem('userData'))

  const data = props.data
  const selectedSku = props.selectedSku
  const attributes = data?.category?.category_attributes || []
  const skuAttributes = []
  
  selectedSku?.product_sku_attributes_mappings?.map((at) => {
    skuAttributes.push(at.value)
  })
  const [count, setCount] = useState(0)

  const colorsData = ["primary", "success", "warning", "danger", "info"]
  const [size, setSize] = useState('small')
  // ** Renders color options
  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')
 
  // ** Renders color options
  const renderColorOptions = () => {
    
    return colorsData.map(color => {
    
      return (
        <li
          key={color}
          className={ color === selectedColor ? (`d-inline-block rounded-circle border-${color}`) : ('d-inline-block')}
          onClick={() => setSelectedColor(color)}
        >
          <div style={{ borderRadius: "50%", position: "relative", cursor: "pointer", padding: "3px"}} className={`b-${color}`}>
            <div style={{ height: "18px", width: "18px", borderRadius: "50%"}} className={`bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }

  return (
    <Card className='m-0' style={{backgroundColor:" #f2f2f2"}}>
      <CardHeader>
        {/*<Badge color='light-danger'>
          OUT OF STOCK
        </Badge>*/}
      </CardHeader>

      <div className="p-0 m-0 pl-2 d-flex mb-1">
        <>
          <h1 className="p-0 m-0">₹{selectedSku.mrp ? selectedSku.mrp : data.mrp}</h1>
          {/*<div className='text-decoration-underline'>₹600.24 Save</div>*/}
        </>
      </div>
      {/*<div className="p-0 m-0 pl-2 pb-1 ">
        <h4 className="pb-1"><b>Color</b></h4>
        <div className="d-flex">
          {renderColorOptions()}
        </div>
      </div>*/}
      {attributes.map((at) => {
        return (
          <div className="p-0 m-0 pl-2">
            <h4 className="pb-1"><b>{at.display_name}</b></h4>
            <div className="d-flex flex-wrap">
              {at.attribute_value_masters.map((a) => {
                return (
                  <h4 onClick={() => setSize("small")} style={{cursor: "pointer"}} className={ skuAttributes.includes(a.value) === true ? ('mr-2 border border-dark') : ('mr-2 border-none')}>
                    <Badge className="pl-1 pr-1" style={{backgroundColor:"white", color:"black"}}>
                      {a.value}
                    </Badge>
                  </h4>)
              })}
            </div>
          </div>)
      })}
      <div className="p-0 m-0 pl-1 pr-1">
        <Row>
          <Col md='12' xs='12'>
              <h4 className="mt-2 mb-2"><b>Quantity</b></h4>
          </Col>
          <Col md='12' xs='12'>  
            <NumberInput id='basic-number-input' value={count} onChange={count => setCount(count)} />
          </Col>
          <Col md='12' xs='12' >
              <div className=" mb-0 mt-2 d-flex justify-content-between ">
                <Button.Ripple tag={Link} onClick={() => {
                  if (UserData) {
                    dispatch(CreateCartItem(selectedSku.id, count))
                  } else {
                    historyLocation.push('/login')
                  }
                }} className='round' style={{width:"50%", marginRight: "10px"}} color='primary' outline>
                   Add To Cart
                </Button.Ripple>
                <Button.Ripple tag={Link} to='/login' className='round' style={{width:"50%"}} color='primary' outline>
                   Create RFQ
                </Button.Ripple>
              </div> 
          </Col>
          
        </Row>
      </div>

      <CardBody className="d-flex justify-content-between">
        <a style={{fontSize: "12px"}}>Add to wishlist</a>
        <a style={{fontSize: "12px"}}>Add to Compare</a>
      </CardBody>
    </Card>
  )
}
export default NumberInputBasic
