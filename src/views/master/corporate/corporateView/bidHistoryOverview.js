import { Table, Card } from 'reactstrap'
import { Fragment, useState, forwardRef } from 'react'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { Monitor, Coffee, Watch, TrendingUp, ChevronDown } from 'react-feather'

const BidHistoryOverview = () => {
  const data = [
      {
        img: require('@src/assets/images/icons/toolbox.svg').default,
        id: '12421',
        email: 'meguc@ruj.io',
        icon: <Monitor size={18} />,
        date: '12-feb-21',
        participatedAs: 'Buyer',
        time: '24 hours',
        status: 'Live',
        sales: '68'
      },
      {
        img: require('@src/assets/images/icons/parachute.svg').default,
        id: '12421ls',
        email: 'vecav@hodzi.co.uk',
        icon: <Coffee size={18} />,
        date: '12-feb-21',
        participatedAs: 'Buyer',
        time: '2 days',
        status: 'Closed',
        sales: '97',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/brush.svg').default,
        id: '12421ar',
        email: 'davcilse@is.gov',
        icon: <Watch size={18} />,
        date: '12-feb-21',
        participatedAs: 'Buyer',
        time: '5 days',
        status: 'Live',
        sales: '62',
        salesUp: true
      },
      {
        img: require('@src/assets/images/icons/star.svg').default,
        id: '12421ng',
        email: 'us@cuhil.gov',
        icon: <Monitor size={18} />,
        date: '12-feb-21',
        participatedAs: 'Seller',
        time: '24 hour',
        status: 'Closed',
        sales: '88',
        salesUp: true
      }
    ]

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: false,
      minWidth: '50px'
    },
    {
      name: 'Date',
      selector: 'date',
      sortable: false,
      minWidth: '150px'
    },
    {
      name: 'Participated As',
      selector: 'participatedAs',
      sortable: true,
      minWidth: '150px'
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: true,
      minWidth: '150px'
    }
]
  return (
      <Fragment>
        <DataTable
          noHeader
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          data={data}
        />
    </Fragment>
  )
}

export default BidHistoryOverview
