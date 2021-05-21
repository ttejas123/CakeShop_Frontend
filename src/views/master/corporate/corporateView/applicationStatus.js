import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const ApplicationStatus = () => {
  const data = [
      {
        id : 1,
        name : "Backgroung",
        status : "pending"
      },
      {
        id : 2,
        name : "NDA",
        status : "Verified"
      },
      {
        id : 3,
        name : "Employement Agreement",
        status : "pending"
      },
      {
        id : 4,
        name : "Operating Agreement",
        status : "Verified"
      },
      {
        id : 5,
        name : "Financial Agreement",
        status : "pending"
      },
      {
        id : 6,
        name : "Bylaws",
        status : "pending"
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.id}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <div className={col.status === 'Admin' ? "font-weight-bolder" : "font-weight-none"}>{col.name}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='text-truncate d-flex align-items-center'>
              
              <span>{col.status}</span>
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Card className='card-company-table'>
      <Table responsive>
        <thead>
          <tr>
            <th style={{minWidth:100}}>Name</th>
            <th style={{minWidth:100}}>Status</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default ApplicationStatus
