const initialState = {
    Seller: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STATUSBS':

      state = {
        ...state,
        Seller: action.payload
      }

      return state
    default:
      return state
  }
}

export default authReducer
