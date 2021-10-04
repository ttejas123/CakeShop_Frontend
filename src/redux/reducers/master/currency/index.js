const initialState = {
  data: [],
  count: 0,
  fetchCurrencyLoading: false,
  editCurrencyLoading: false,
  addCurrencyLoading: false
}
const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_currency_loading":
      return { ...state, fetchCurrencyLoading: true }
    case "currency_fetched_list":
      const dataArray = action.payload.values.map((currency) => {
        return {
          code: currency.code,
          symbol: currency.symbol,
          id: currency.id
        }
      })
      return {
        ...state,
        fetchCurrencyLoading: false,
        data: dataArray,
        count: action.payload.aggregate.count
      }
    case "edit_currency_loading":
      return { ...state, editCurrencyLoading: true }
    case "currency_edited":
      console.log(action.payload)
      const dataArray2 = state.data.map((currency) => {
        if (currency.id === action.payload.id) return action.payload
        else return currency
      })
      return {
        ...state,
        editCurrencyLoading: false,
        data: dataArray2
      }
    case "add_currency_loading":
      return { ...state, addCurrencyLoading: true }
    case "currency_added":
      return {
        ...state,
        addCurrencyLoading: false
      }
    case "currency_deleted":
      return {
        ...state,
        fetchCurrencyLoading: false
      }
    case "currency_reset_list":
      return initialState
    default:
      return state
  }
}
export default currencyReducer
