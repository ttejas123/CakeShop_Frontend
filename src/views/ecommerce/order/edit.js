import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from 'reactstrap'
import NumberInput from '@components/number-input'
import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
// import { Single } from "@src/redux/actions/cake"
import { Single } from "@src/redux/actions/orders"

const HorizontalForm = () => {
  const {id} = useParams()
  const [values, setValues] = useState({})
  const [imgA, setImgA] = useState(null)
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()
  const history = useHistory()
  const [previewArr, setPreviewArr] = useState([])
  const [fileArr, setFileArr] = useState([])

  const store = useSelector(state => {
     return state.cake.single
  })

  useEffect(() => {
    dispatch(Single(id))
  }, [dispatch, id])

    const renderPreview = () => {
     if (previewArr.length) {
      console.log(previewArr[0])
       return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mb-2 mr-1' style={{height: "20rem"}} src={src} alt='avatar' />)
     } else {
       return null
     }
    }


    const handleInputeChange = (event) => {
      const { name, value } = event.target
      setValues({
        ...values,
        [name] : value
      })
    }

    const styleCard = {
      width: "20%",
      height: "15rem",
      overflow: "hidden",
      border: '30% rounded'
    }

  return (
    <Card className="row col-md-10 offset-md-1">
      <CardHeader>
        <CardTitle tag='h4'>Add New Order for <b className='text-success'>{store.name}</b></CardTitle>
      </CardHeader>

      <CardBody>
          {/*<div className='mb-2'>
                      <div style={styleCard} className='mb-1'>
                        <img className='img-fluid w-100 h' src={`http://localhost:3001/${store.url}`} />
                      </div>
                      <div>
                        <div><b>Price</b> : {store.price}</div>
                        <div><b>Description</b> : {store.description}</div>
                      </div>
                    </div>*/}
          <hr />
          <FormGroup row>
            <Label sm='3' for='name'>
              Name
            </Label>
            <Col sm='9'>
              <Input type='text' onChange={(e) => handleInputeChange(e)} value={values.userName} name='userName' id='name' placeholder='Name' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='contact'>
              Contact
            </Label>
            <Col sm='9'>
              <Input type='text' onChange={(e) => handleInputeChange(e)} value={values.contact} name='contact' id='contact' placeholder='contact' />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm='3' for='name'>
              Quantity
            </Label>
            <Col sm='9'>
               <NumberInput id='basic-number-input' value={count} onChange={count => setCount(count)} />
            </Col>
            
          </FormGroup>  
          <hr/>
          <FormGroup row>
            <Label sm='3' for='name'>
              Total Price
            </Label>
            <Col sm='9'>
               ₹. {store.price * count}
            </Col>
            
          </FormGroup> 

          <FormGroup className='mb-0' row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => {
                e.preventDefault()
                const DataSend  = {
                  ...values,
                  quatity: count,
                  totalPrice: store.price * count,
                  cakeID: id,
                  cakeName: store.name,
                  cakeUrl: store.url
                }
                dispatch(Create(DataSend))
                history.push('/home/order/list')
              }}>
                Submit
              </Button.Ripple>
            </Col>
          </FormGroup>
        
      </CardBody>
    </Card>
  )
}
export default HorizontalForm