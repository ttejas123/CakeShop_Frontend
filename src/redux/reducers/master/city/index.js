const initialState = {
  data: [],
  count: 0,
  fetchCitiesLoading: false,
  editCitiesLoading: false,
  addCitiesLoading: false
}
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_cities_loading":
      return { ...state, fetchCitiesLoading: true }
    case "cities_fetched_city_list":
      const dataArray = action.payload.cities.map((city) => {
        return {
          name: city.name,
          state: city.state.name,
          country: city.state.country.country_name,
          id: city.id
        }
      })
      return {
        ...state,
        data: dataArray,
        start: state.start + 5,
        count: action.payload.count,
        fetchCitiesLoading: false
      }
    case "edit_cities_loading":
      return { ...state, editCitiesLoading: true }
    case "city_edited":
      return { ...state, editCitiesLoading: false }
    case "add_cities_loading":
      return { ...state, addCitiesLoading: true }
    case "city_added":
      return { ...state, addCitiesLoading: false }
    case "city_deleted":
      return { ...state, fetchCitiesLoading: false }
    case "cities_reset_city_list":
      return initialState
    default:
      return state
  }
}
export default cityReducer
