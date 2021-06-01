import Table from './Table'

// ** Styles
import '@styles/react/apps/app-users.scss'
const UsersList = () => {
    console.log("the user list")
    return (
      <div className='app-user-list'>
        <Table />
      </div>
    )
  }
  
  export default UsersList