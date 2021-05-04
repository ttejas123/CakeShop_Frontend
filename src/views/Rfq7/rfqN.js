import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col,
  Badge, UncontrolledDropdown
} from 'reactstrap'

import Select from 'react-select'
// ** React Imports
import { Fragment, useEffect, useRef, useState, forwardRef  } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'
import BreadCrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
// ** Steps
import Cards from './Card'

// ** Third Party Components
import { ShoppingCart, Home, CreditCard } from 'react-feather'
import { selectThemeColors } from '@utils'
// ** Store & Actions


const optionStatus = [
    {value: "", label: "Filter Status"},
    {value: "created", label: "created"},
    {value: "live", label: "live"},
    {value: "extended", label: "extended"},
    {value: "closed", label: "closed"},
    {value: "rejected", label: "rejected"}
  ]

import { products } from './data.js'
const Checkout = () => {
  // ** Ref & State
  const ref = useRef(null)
  const [stepper, setStepper] = useState(null)

  // ** Store Vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.ecommerce)

  // // ** Get Cart Items on mount
  // useEffect(() => {
  //   dispatch(getCartItems())
  // }, [])

  return (
     <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search product</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
              <label>Search Parent Products</label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionStatus}
                
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
            <Col md='4'>
              <label>Search Product Category</label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionStatus}
                
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
            <Col md='4'>
              <label>Search Product Sub Category</label>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionStatus}
                
                onChange={data => {
                  handleFilterByDropDown(data)
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      
      <Cards
            stepper={stepper}
            products={products}
          />
  </Fragment>
  )
}
export default Checkout
