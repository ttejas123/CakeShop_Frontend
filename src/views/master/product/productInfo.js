import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const ProductInfo = () => {
  return (
    <Card className='Details-card'>
       <CardBody>
            <CardTitle className='mb-1'>Product Details</CardTitle>
            <hr/>
            <br/>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Product Id : </div>
              <h5 className='mb-1'> 123432</h5>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>SKU : </div>
              <h5 className='mb-1'> 243456</h5>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>BUID </div>
              <h5 className='mb-1'> 233456</h5>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>MOG </div>
              <h5 className='mb-1'> 223456</h5>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Branded </div>
              <h5 className='mb-1'> 223456</h5>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>100 - 125k </div>
              <h5 className='mb-1'> 223456</h5>
            </div>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Status </div>
              <h5 className='mb-1'> Available</h5>
            </div>
            <br/>
      </CardBody>
    </Card>
  )
}

export default ProductInfo
