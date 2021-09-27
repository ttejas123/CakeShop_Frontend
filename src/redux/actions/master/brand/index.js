import axios from 'axios'
import { BaseUrl, BackEndUrl } from '@store/baseUrl' //Base Url

export const fetchBrands = (start) => {
  const query = `
query {
  brands(limit:5,start:${start}) {
    name
    id
    logo {
      url
      name
    }
    description
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      dispatch({
        type: 'brands_fetched',
        payload: res.data.data.brands
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const dropdownBrand = (start) => {
  const query = `query {
  brands{
    name
    id
  }
}`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      dispatch({
        type: 'BRANDDROPDOWN',
        payload: res.data.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
