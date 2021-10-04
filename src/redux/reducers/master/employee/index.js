const initialState = {
  data: [],
  count: 0,
  fetchEmployeesLoading: false,
  editEmployeesLoading: false,
  addEmployeesLoading: false
}
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_employees_loading":
      return { ...state, fetchEmployeesLoading: !state.fetchEmployeesLoading }
    case "employees_fetched_list":
      const dataArray = action.payload.data.map((employee, index) => {
        return {
          employeeNumber: index + 1,
          firstName: employee.first_name,
          lastName: employee.last_name,
          id: employee.id,
          email: employee.email,
          mobile: employee.mobile,
          role: "temp",
          lastLoginDate: employee.last_login || `Hasn't logged in yet`,
          profile_pic_id: employee.profile_pic && employee.profile_pic.id,
          emplyee_addresses: employee.emplyee_addresses.map((id) => id)
        }
      })
      return {
        ...state,
        fetchEmployeesLoading: !state.fetchEmployeesLoading,
        data: dataArray,
        count: action.payload.count
      }
    case "edit_employees_loading":
    case "add_employees_loading":
    case "employees_reset_list":
      return initialState
    default:
      return state
  }
}
export default cityReducer
