import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url

export const fetchAttributes = (limit, start, searchQuery) => {
  const searchPro = searchQuery ? searchQuery : ""
  const query = `
query{
 categoriesConnection(sort:"createdAt:desc",limit:${limit},start:${start},where:{category_contains:"${searchPro}"}){
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
      dispatch({ type: "fetch_categories_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: "categories_fetched_list",
        payload: {
          categories: res.data.data.categoriesConnection.values,
          count: res.data.data.categoriesConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteCategory = (id) => {
  const query = `
mutation{
  deleteCategory(input:{where:{id:"${id}"}}){
    category{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_categories_loading" })
      const res = await axios.post(BaseUrl, { query })
      dispatch({ type: "category_deleted" })
    } catch (error) {
      console.log(error)
    }
  }
}
