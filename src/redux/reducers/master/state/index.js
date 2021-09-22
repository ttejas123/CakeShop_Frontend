const initialState = {
  states: [],
  start: 0
}

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'states_fetched_page':
      const dataArray = action.payload.map((state) => {
        return {
          id: state.id,
          StateName: state.name,
          Country: state.country.country_name
        }
      })
      return { ...state, states: dataArray, start: state.start + 5 }
    case "SELECTEDSTATELIST": 
            //console.log(action.payload)
            const DataSelectArray = action.payload.statesConnection.values.map((val) => {  
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

export default stateReducer
