import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url
//const link = `${BaseUrl}/countries` //Link For Country Crud

//const BaseUrl = `http://159.65.156.12:1337/graphql`

export const fetchCategories = (start) => {
  const query = `query{
  categories{
    id
    category
    parent_category{
      id
      category
    }
  }
}`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'LISTOFCATEGORIES',
        payload: res.data.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}