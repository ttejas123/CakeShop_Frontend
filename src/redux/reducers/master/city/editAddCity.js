const initialState = {
  countries: [],
  states: [],
  cities: []
}

const editCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'countries_fetched_for_edit_add_city':
      return {
        ...state,
        countries: action.payload.countries
      }
    case 'states_fetched_for_edit_add_city':
      return {
        ...state,
        states: action.payload
      }
    case 'reset_edit_add_city':
      return initialState
    default:
      return state
  }
}

export default editCityReducer
