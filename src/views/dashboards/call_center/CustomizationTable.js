import Avatar from '@components/avatar'
import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import DataTable from 'react-data-table-component'

import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomizationTable = () => {
  const transactionsArr = [
   
    {
        id: 'Bid001',
        cust: 'Company Logo',
        date: '12 April 2021'

    },
    {
        id: 'Bid002',
        cust: 'Company Logo',
        date: '14 April 2021'

    },
    {
        id: 'Bid007',
        cust: 'Company Logo',
        date: '16 April 2021'

    },
    {
        id: 'Bid009',
        cust: 'Company Logo',
        date: '18 April 2021'

    }
  ]
   const basicColumns = [
    {
      name: 'Bid',
      selector: 'id',
      sortable: false
    //   maxWidth: '100px'
    },
    {
      name: 'Customization',
      selector: 'cust',
      sortable: false
    //   minWidth: '225px'
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: false
    //   minWidth: '310px'
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <Media>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <Media body>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </Media>
          </Media>
          <div className={`font-weight-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Customization</CardTitle>
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
          {/* {renderTransactions()} */}
              <DataTable
                  noHeader
                //   pagination
                  data={transactionsArr}
                  columns={basicColumns}
                  className='react-dataTable'
                //   sortIcon={<ChevronDown size={10} />}
                //   paginationRowsPerPageOptions={[10, 25, 50, 100]}
              />
      </CardBody>
    </Card>
  )
}

export default CustomizationTable
