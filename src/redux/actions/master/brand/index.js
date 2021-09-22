import axios from 'axios'
import { BaseUrl, BackEndUrl } from '@store/baseUrl' //Base Url

export const fetchBrands = (start) => {
  const query = `
query
{
 brandsConnection(limit:5,start:${start}){
  values{
    name
    id
    logo{
      url
    }
  }
  aggregate{
    count
  }
}
  
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      dispatch({
        type: 'brands_fetched_list',
        payload: {
          brands: res.data.data.brandsConnection.values,
          count: res.data.data.brandsConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
