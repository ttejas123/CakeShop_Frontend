import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url

export const fetchAttributes = () => {
  const query = `
query{
  attributeMasters{
    id
    display_name
  }
}
`
  const query2 = `
  query{
  categories(where:{is_parent:true}){
    id
    category
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "attributes_loading_for_edit_add_categoy" })
      const res = await axios.post(BaseUrl, { query })
      const resTwo = await axios.post(BaseUrl, { query: query2 })
      return dispatch({
        type: "attributes_fetched_for_edit_add_categoy",
        payload: res.data.data.attributeMasters,
        parentCategories: resTwo.data.data.categories
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addCategory = (name, isParent, attrIds, parentCategory) => {
  const ids = attrIds.map((val) => {
    return `\"${val}\"`
  })
  let query
  if (isParent) {
    query = `
mutation {
  createCategory(
    input: {
      data: {
        category: "${name}"
        is_parent: true
        category_attributes:[${ids}]
        }
    }
  ) {
    category {
      id
    }
  }
}
  `
  } else {
    query = `
mutation {
  createCategory(
    input: {
      data: {
        category: "${name}"
        is_parent: false
        parent_category: "${parentCategory}"
        category_attributes:[${ids}]
      }
    }
  ) {
    category {
      id
    }
  }
}
  `
  }
  return async (dispatch) => {
    try {
      dispatch({ type: "add_category_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "add_category_success", payload: res.data.data.createCategory })
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchCategory = (id) => {
  const query = `
query {
  category(id: "${id}") {
    id
    category
    category_attributes{
      id
      display_name
    }
    parent_category{
      id
      category
    }
    is_parent
  }
}

`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "category_fetched_for_edit", payload: res.data.data.category })
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateCategory = (whereId, name, isParent, attributes, parent_category) => {
  const ids = attributes.map((val) => {
    return `\"${val}\"`
  })
  console.log(ids)
  let query
  if (isParent) {
    query = `
mutation {
  updateCategory(
    input: {
      where: { id: "${whereId}" }
      data: {
        category: "${name}"
        is_parent: true
        category_attributes:[${ids}]
      }
    }
  ) {
    category {
      id
    }
  }
}
`
  } else {
    query = `
mutation {
  updateCategory(
    input: {
      where: { id: "${whereId}" }
      data: {
        category: "${name}"
        is_parent: false
        parent_category: "${parent_category}"
        category_attributes:[${ids}]
      }
    }
  ) {
    category {
      id
    }
  }
}
`
    }
    return async (dispatch) => {
      try {
        dispatch({ type: "edit_category_loading" })
        const res = await axios.post(BaseUrl, { query })
        return dispatch({ type: "edit_category_success" })
      } catch (error) {
        console.log(error)
      }
    }
  }
