const initialState = {
  states: [],
  count: 0,
  firstTimeFetch: false
}

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'states_fetched_list_page':
      const dataArray = action.payload.states.map((state) => {
        return {
          id: state.id,
          StateName: state.name,
          Country: state.country.country_name
        }
      })
      return {
        ...state,
        states: dataArray,
        firstTimeFetch: true,
        count: action.payload.count
      }
    case 'state_added':
      const newState = {
        id: action.payload.id,
        StateName: action.payload.name,
        Country: action.payload.country.country_name
      }
      return { ...state, count: state.count + 1, states: [newState, ...state.states] }
    case 'state_edited':
      const newState2 = {
        id: action.payload.id,
        StateName: action.payload.name,
        Country: action.payload.country.country_name
      }
      const dataArray2 = state.states.map((state) => {
        if (state.id === newState2.id) return newState2
        else return state
      })
      return { ...state, states: dataArray2 }
    case 'state_deleted':
      const dataArray3 = state.states.filter((state) => {
        if (state.id !== action.payload.id) return state
      })
      return { ...state, states: dataArray3, count: state.count - 1 }
    case 'states_reset_list_page':
      return initialState
    default:
      return state
  }
}

export default stateReducer
