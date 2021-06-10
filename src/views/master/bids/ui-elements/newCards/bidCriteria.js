import classnames from 'classnames'
import Avatar from '@components/avatar'
import { Card, CardTitle, CardBody, CardText, Badge, Button, CardHeader } from 'reactstrap'
import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'
const CardAppDesign = () => {
  const avatarArr = [
    {
      img: require('@src/assets/images/logo/komal.jpg').default,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      content: 'PI',
      color: 'light-danger'
    },
    {
      img: require('@src/assets/images/logo/pravin.jpg').default,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      img: require('@src/assets/images/logo/himanshu.jpg').default,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      content: 'AL',
      color: 'light-secondary'
    }
  ]

  const designPlanningArr = [
    {
      title: 'Date',
      subtitle: '12 Apr, 21'
    },
    {
      title: 'Budget',
      subtitle: '₹49251.91'
    }
  ]

  return (
    <Card className='match-height card-app-design'>
      <CardHeader>  
              <CardTitle tag='h4'>Bid Criateria</CardTitle>
      </CardHeader>
      <CardBody>
        <Badge color='light-primary'>03 Sep, 20</Badge>
        <CardTitle className='mt-1 mb-75'>Details</CardTitle>
        <CardText className='font-small-2 mb-2'>
            This Bid Include T-shirt with your required Customization
        </CardText>
        <div className='design-group mb-2 pt-50'>
          <h6 className='section-label'>Product</h6>
          <Badge className='mr-1' color='light-warning'>
            Sport T-shirt
          </Badge>
          <Badge color='light-primary'>Shirt</Badge>
        </div>
        <div className='design-group pt-25'>
          <h6 className='section-label'>Members</h6>
          {avatarArr.map((obj, index) => {
            return (
              <Avatar
                className={classnames({
                  'mr-75': index !== avatarArr.length - 1
                })}
                key={index}
                {...obj}
              />
            )
          })}
        </div>
        <div className='design-planning-wrapper py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}

export default CardAppDesign
