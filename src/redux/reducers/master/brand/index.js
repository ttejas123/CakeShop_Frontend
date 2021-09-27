import { BackEndUrl } from '@store/baseUrl' //Base Url
const initialState = {
  brands: [],
  start: 0
}

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'brands_fetched':
      const dataArray = action.payload.map((brand) => {
        return {
          Name: brand.name,
          logo: `${BackEndUrl}/${brand.logo.url}`,
          id: brand.id
        }
      })
      return { ...state, brands: dataArray, start: state.start + 5 }
    case 'BRANDDROPDOWN':
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
