import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const fetchAttributes = (start) => {
  const query = `
query{
  categories(limit:5,start:${start}){
    category
    id
    category_attributes{
      display_name
      id
      
    }
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'SubAttributes_fetched',
        payload: res.data.data.categories
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
