const initialState = {
  states: [],
  countries: [],
  cities: []
}
const editAddCity = (state = initialState, action) => {
  switch (action.type) {
    case "countries_fetched_for_edit":
      return {
        ...state,
        countries: action.payload.map((country) => {
          return { value: country.country_name, label: country.country_name, id: country.id }
        })
      }
    case "states_fetched_for_edit":
      return {
        ...state,
        states: action.payload.map((state) => {
          return { value: state.name, label: state.name, id: state.id }
        })
      }
    case "cities_fetched_for_edit":
      return {
        ...state,
        cities: action.payload.map((city) => {
          return { value: city.name, label: city.name, id: city.id }
        })
      }
    case "reset_edit_add_city":
      return initialState
    default:
      return state
  }
}
export default editAddCity
