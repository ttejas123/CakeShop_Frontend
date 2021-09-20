const initialState = {
  data: [],
  start: 0,
  firstTimeFetch: false
}
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cities_fetched':
      const dataArray = action.payload.map((city) => {
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
        firstTimeFetch: true
      }
    default:
      return state
  }
}
export default cityReducer
