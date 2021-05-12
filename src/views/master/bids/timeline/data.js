import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
export const basicData = [
  {
    title: 'Bid Created',
    meta: '03:00PM'
  },
  {
    title: 'Live',
    color: 'secondary',
    meta: '03:00PM',
    customContent: (
      <div className='justify-content-between '>
        <div>
          <p className='text-muted mb-50'>We Got your bid</p>
           <p className='mb-0'>Your bid contain 100 T-Shirt in blue color</p>
        </div>
        <div className='mt-sm-0 mt-1'>
          <p className='text-muted mb-50'>started </p>
          <p className='mb-0'>20 Dec 2077</p>
        </div>
      </div>
    )
  },
  {
    title: 'Closed',
    color: 'success',
    meta: '03:00PM',
    customContent: (
      <div className='justify-content-between '>
        <div>
          <p className='text-muted mb-50'>We Got your bid</p>
           <p className='mb-0'>Your bid contain 100 T-Shirt in blue color</p>
        </div>
      </div>
    )
  },
  {
    title: 'Shipped',
    color: 'warning',
    meta: '----'
  },
  {
    title: 'Delived',
    color: 'info',
    meta: '----'
  }
]
