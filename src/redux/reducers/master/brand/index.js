import { BackEndUrl } from "@store/baseUrl" //Base Url
const initialState = {
  data: [],
  count: 0,
  fetchBrandsLoading: false,
  fetchBrandLoading: false,
  editBrandsLoading: false,
  addBrandLoading: false
}

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_brands_loading":
      return { ...state, fetchBrandsLoading: true }
    case "brands_fetched_list":
      const dataArray = action.payload.brands.map((brand) => {
        return {
          Name: brand.name,
          logo: `${BackEndUrl}${brand.logo.url}`,
          id: brand.id,
          logoID: brand.logo.id
        }
      })
      return {
        ...state,
        data: dataArray,
        count: action.payload.count,
        fetchBrandsLoading: false
      }
    case "fetch_brand_loading":
      return { ...state, fetchBrandLoading: true }
    case "brand_fetched":
      return {
        ...state,
        fetchBrandLoading: false,
        data: [
          {
            Name: action.payload.name,
            logo: `${BackEndUrl}${action.payload.logo.url}`,
            id: action.payload.id
          }
        ]
      }
    case "edit_brands_loading":
      return { ...state, editBrandsLoading: true }
    case "add_brand_loading":
      return { ...state, addBrandLoading: true }
    case "brand_added":
      return {
        ...state,
        addBrandLoading: false
      }
    case "delete_brand_loading":
      return { ...state, fetchBrandsLoading: true }
    case "brand_deleted":
      return { ...state, fetchBrandsLoading: !state.fetchBrandsLoading }
    case "brand_reset_edit_add":
      return initialState
    case "brands_reset_list":
      return initialState
    case "BRANDDROPDOWN":
      const dataArrayDropdown = action.payload.brands.map((brand) => {
        return {
          label: brand.name,
          value: brand.name,
          id: brand.id
        }
      })
      return {
        ...state,
        brands: dataArrayDropdown
      }
    default:
      return state
  }
}
export default brandReducer
