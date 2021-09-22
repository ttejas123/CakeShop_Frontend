const initialState = {
  data: [],
  count: 0,
  firstTimeFetch: false
}
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cities_fetched_city_list':
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
        firstTimeFetch: true,
        count: action.payload.count
      }
    case 'city_edited':
      const dataArray2 = state.data.map((city) => {
        if (city.id !== action.payload.id) return city
        else {
          return {
            name: action.payload.name,
            state: action.payload.state.name,
            country: action.payload.state.country.country_name,
            id: action.payload.id
          }
        }
      })
      return { ...state, data: dataArray2 }
    case 'city_added':
      const newCity = {
        name: action.payload.name,
        state: action.payload.state.name,
        country: action.payload.state.country.country_name,
        id: action.payload.id
      }
      return { ...state, data: [newCity, ...state.data], count: state.count + 1 }
    case 'city_deleted':
      return {
        ...state,
        data: state.data.filter((city) => city.id !== action.payload && city),
        count: state.count - 1
      }
    case 'cities_reset_city_list':
      return initialState
    default:
      return state
  }
}
export default cityReducer
