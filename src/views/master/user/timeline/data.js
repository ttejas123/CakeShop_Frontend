import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
export const basicData = [
  {
    title: 'Last Login',
    customContent: (
      <div className='justify-content-between '>
        <div>
          <p className='text-muted mb-50'>03:00 am</p>
           
        </div>
      </div>
    ),
    meta: '03:00PM'
  },
  {
    title: 'Updated User Name',
    color: 'secondary',
    meta: '03:00PM'
  },
  {
    title: 'New Bid Added',
    color: 'success',
    meta: '03:00PM',
    customContent: (
      <div className='justify-content-between '>
        <div>
          <p className='text-muted mb-50'>Bid name : T - shirt </p>
          <p className='text-muted mb-50'>Quantity : 1000 </p>
        </div>
      </div>
    )
  },
  {
    title: 'KYC Submitted',
    color: 'warning',
    meta: '----',
     customContent: (
      <div className='justify-content-between '>
        <div>
          <p className='text-muted mb-50'>Pan Card submitted successfully</p>
        </div>
      </div>
    )
  },
  {
    title: 'Logout at',
    color: 'info',
    meta: '----'
  }
]
