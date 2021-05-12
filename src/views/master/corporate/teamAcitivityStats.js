import { Table, Card } from 'reactstrap'
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

const TeamActivityStats = () => {
  const data = [
      {
        id: 1,
        userName: "Komal Kamble",
        activity: "Created bid B00123",
        date: "12-04-2021"
      },
      {
        id: 2,
        userName: "Tejas Thakre",
        activity: "Created bid B0013",
        date: "12-04-2021"
      },
      {
        id: 3,
        userName: "Pravin Poshmani",
        activity: "Created bid B0014",
        date: "12-04-2021"
      },
      {
        id: 4,
        userName: "Salman Khan",
        activity: "Created bid B0015",
        date: "12-04-2021"
      },
      {
        id: 5,
        userName: "Ranveer Singh",
        activity: "Created bid B0015",
        date: "12-04-2021"
      },
      {
        id: 6,
        userName: "Allu Arjun",
        activity: "Created bid B0016",
        date: "12-04-2021"
      },
      {
        id: 1,
        userName: "Alia Bhatt",
        activity: "Created bid B0017",
        date: "12-04-2021"
      }
    ]

  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.id}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <div className='font-weight-bolder'>{col.userName}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              
              <span>{col.activity}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.date}</span>
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
            <th>User</th>
            <th>Activity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </Table>
    </Card>
  )
}

export default TeamActivityStats
