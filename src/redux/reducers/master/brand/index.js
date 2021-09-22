import { BackEndUrl } from '@store/baseUrl' //Base Url
const initialState = {
  brands: [],
  count: 0
}

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'brands_fetched_list':
      const dataArray = action.payload.brands.map((brand) => {
        return {
          Name: brand.name,
          logo: `${BackEndUrl}${brand.logo.url}`,
          id: brand.id
        }
      })
      return { ...state, brands: dataArray, count: action.payload.count }
    case 'brands_reset_list':
      return initialState
    default:
      return state
  }
}
export default brandReducer
