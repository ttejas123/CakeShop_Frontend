import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
import { List, MoreVertical } from 'react-feather'
import jsonImg from '@src/assets/images/icons/json.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'

const data = [
  {
    title: 'Buyer',
    content: 'Need Our Logo on the shirt',
    meta: '01-05-2021 11:30 AM',
    metaClassName: 'mr-1'
    // customContent: (
    //   <Media>
    //     <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
    //     <Media className='mb-0' body>
    //       data.json
    //     </Media>
    //   </Media>
    //)
  },
  {
    title: 'Seller',
    content: 'Ok, but that would incur additional charges',
    meta: '01-05-2021 12:30 PM',
    metaClassName: 'mr-1',
    color: 'warning'
  },
  {
    title: 'Buyer',
    content: 'How much will it cost per unit',
    color: 'info',
    meta: '01-05-2021 01:30 PM',
    metaClassName: 'mr-1'
  },
  {
    title: 'Seller',
    content: '50 more per unit',
    color: 'danger',
    meta: '01-05-2021 02:00 PM',
    metaClassName: 'mr-1'
  },
  {
    title: 'Buyer',
    content: 'Can I get it for 30 per unit',
    color: 'danger',
    meta: '01-05-2021 02:30 PM',
    metaClassName: 'mr-1'
  },
  {
    title: 'Seller',
    content: 'No',
    color: 'danger',
    meta: '01-05-2021 03:00 PM',
    metaClassName: 'mr-1'
  }
]

const UserTimeline = () => {
  return (
    <Card className='card-user-timeline'>
      <CardHeader>
        <div className='d-flex align-items-center'>
          <CardTitle tag='h4'>Customization Timeline</CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <Timeline className='ml-50 mb-0' data={data} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
