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

export const ParentCategories = () => {
  const query = `query {
  categories(where: {
    is_parent: true
    parent_category_null: true
  }) {
    id
    category
    is_parent
  }
}`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'LISTOFPARENTCATEGORIES',
        payload: res.data.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const ChildCategories = (id, index) => {
  const query = `query{
  categories(where:{   
    parent_category: {
      id: "${id}"
    }
  }){
    id
    category
    is_parent
  }
}`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'LISTOFCHILDCATEGORIES',
        payload: {
          data: res.data.data,
          index
        }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

export const PerticularCategory = (id) => {
  const query = `query {
  category(id: "${id}") {
    category_attributes{
      id
      display_name
      attribute_type{
        id
        type
      }
      attribute_value_masters{
        id
        value
      }
    }
  }
}`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'SPECIFICCATEGORY',
        payload: res.data.data
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}