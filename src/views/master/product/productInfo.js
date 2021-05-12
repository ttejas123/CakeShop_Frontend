import { Card, CardTitle, CardText, CardBody, Row, Col, Media } from 'reactstrap'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import fkLogo from '@src/assets/images/slider/flipkartLogo.jpg'
import amzLogo from '@src/assets/images/slider/amazonLogo.jpg'
import {
CheckCircle
} from 'react-feather'
const ProductInfo = () => {
  const cols = { md: '3', sm: '6' }
  const data = [
    {
      title: 'Total Sales',
      subtitle: '10k'
    },
    {
      title: 'Approval Status',
      subtitle: 'Pending'
    },
    {
      img:fkLogo,
      subtitle: '10'
    },
    {
      img:amzLogo,
      subtitle: '10-11-12'
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mt-0 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Media className='my-auto' body>
            { item?.img ? (
                      <div>       
                                       
                        <img
          className='user-avatar rounded mx-auto d-block cursor-pointer '
          src={item.img}
          alt='user profile avatar'
          height='30'
          width='30'
        />
        <div>
          <h6>
            <p className='text-center my-auto'>{<CheckCircle size={24} />}</p>
          </h6>
        {/* //<Avatar icon={<CheckCircle size={24} />} size='sm' className='mx-auto ' /> */}
        </div>
        </div>
                    ) : (
                     <div>
                      <h6 className='font-weight-bolder text-center mb-0'>{item.title}</h6>
                      <CardText className='font-small-3 text-center mb-0'>{item.subtitle}</CardText>
                      </div>
                   )
                 }
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='Details-card'>
       <CardBody>
            <CardTitle className='mb-1'>Product Details</CardTitle>
            <hr/>
            <br/>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Product Id : </div>
              <h6 className='mb-1'> 123432</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>SKU : </div>
              <h6 className='mb-1'> 243456</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>BUID </div>
              <h6 className='mb-1'> 233456</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>MOG </div>
              <h6 className='mb-1'> 223456</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Approved By </div>
              <h6 className='mb-1'> John Cena</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Approved On </div>
              <h6 className='mb-1'>15-08-1947</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Branded </div>
              <h6 className='mb-1'> 223456</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>100 - 125k </div>
              <h6 className='mb-1'> 223456</h6>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Status </div>
              <h5 className='mb-1'> Available</h5>
            </div>
      </CardBody>
      <hr/>
      <CardBody className='pt-0'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default ProductInfo
