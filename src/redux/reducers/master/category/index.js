const initialState = {
  data: [],
  count: 0
}
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LISTOFCATEGORIES": 
            //console.log(action.payload)
            const DataSelectArray = action.payload.categories.map((val) => {  
                return {value: val.category, label: val.category, id: val.id}
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
