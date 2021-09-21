const initialState = {
  countries: [],
  states: [],
  cities: []
}

const editCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'countries_fetched':
      return {
        ...state,
        countries: action.payload.countries
      }
    case 'states_fetched':
      return {
        ...state,
        states: action.payload
      }
    case 'cities_fetched_for_edit':
      return {
        ...state,
        cities: action.payload
      }
    case 'reset_edit_states':
      return initialState
    default:
      return state
  }
}

export default editCityReducer
