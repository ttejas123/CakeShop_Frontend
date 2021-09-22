import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const fetchAttributes = (start) => {
  const query = `
query{
 categoriesConnection(limit:5,start:${start}){
    values{
      category
      id
      category_attributes{
        display_name
        id
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
      return dispatch({
        type: 'SubAttributes_fetched_list',
        payload: {
          categories: res.data.data.categoriesConnection.values,
          count: res.data.data.categoriesConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
