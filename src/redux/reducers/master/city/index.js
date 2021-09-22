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
    case "SELECTEDCITYLIST": 
            //console.log(action.payload)
            const DataSelectArray = action.payload.citiesConnection.values.map((val) => {  
                return {value: val.name, label: val.name, id: val.id}
            })
            //console.log(DataArray)
            return {
                ...state,
                data: DataSelectArray
            }
    default:
      return state
  }
}
export default cityReducer
