// ** Initial State
const initialState = {
    allData: [],
    data: [],
    total: 1,
    params: {},
    selectedUser: null
  }
  const users = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_DATA':
            return { ...state, allData: action.data }
            default:
              return { ...state }
    }
}
export default users
