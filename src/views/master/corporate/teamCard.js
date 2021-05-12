import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const TeamCard = () => {
  const data = [
      {
        id : 1,
        userName : "Himanshu Chanda",
        role : "Admin"
      },
      {
        id : 2,
        userName : "Pravin Poshmani",
        role : "Intern"
      },
      {
        id : 3,
        userName : "Tejas Thakare",
        role : "Intern"
      },
      {
        id : 4,
        userName : "Reethika",
        role : "Intern"
      },
      {
        id : 5,
        userName : "Daksh",
        role : "Intern"
      },
      {
        id : 6,
        userName : "Mehul Bhadra",
        role : "Full Stack Developer"
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.id}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <div className={col.role === 'Admin' ? "font-weight-bolder text-truncate text-center" : "font-weight-none text-truncate text-center"}>{col.userName}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='text-truncate d-flex align-items-center text-center'>
              
              <span  className='text-center'>{col.role}</span>
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
            <th style={{minWidth:100}}>Role</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default TeamCard
