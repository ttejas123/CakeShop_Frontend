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
    default:
      return state
  }
}
export default brandReducer
