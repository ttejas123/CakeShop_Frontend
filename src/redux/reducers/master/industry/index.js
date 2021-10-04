const initialState = {
  data: [],
  count: 0,
  fetchIndustriesLoading: false,
  editIndustryLoading: false,
  addIndsutryLoading: false
}
const industryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_industries_loading":
    case "industries_fetched_list":
      console.log(action.payload)
    case "edit_industry_loading":
    case "industry_edited":
    case "add_industry_loading":
    case "industry_added":
    case "industry_deleted":
    case "industries_reset_list_page":
      return initialState
    default:
      return state
  }
}
export default industryReducer
