import axios from "axios"
import { BaseUrl, BackEndUrl } from "@store/baseUrl" //Base Url

export const fetchBrand = (id) => {
  const query = `query{
  brand(id:"${id}"){
  id
  name
  logo{
  id
  url
  }
  }
}`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_brand_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "brand_fetched", payload: res.data.data.brand })
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchBrands = (limit, start, searchQuery) => {
  const searchPro = searchQuery ? searchQuery : ""
  const query = `
query
{
 brandsConnection(sort:"createdAt:desc",limit:${limit},start:${start},where:{name_contains:"${searchPro}"}){
  values{
    name
    id
    logo{
      id
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
      dispatch({ type: "fetch_brands_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: "brands_fetched_list",
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
export const editBrand = (ID, name, IMAGEID, newDpId) => {
  return async (dispatch) => {
    try {
      let query
      if (IMAGEID) {
        query = `
mutation{
  updateBrand(input:{where:{id:"${ID}"},data:{name:"${name}",logo:"${newDpId}"}}){
    brand{
      id
    }
  }
}
  `
      } else {
        query = `
mutation{
  updateBrand(input:{where:{id:"${ID}"},data:{name:"${name}"}}){
    brand{
      id
    }
  }
}
`
      }
      await axios.post(BaseUrl, { query })
    } catch (error) {
      console.log(error)
    }
  }
}

export const addBrand = (name, newDpId) => {
  return async (dispatch) => {
    try {
      const query = `
  mutation{
  createBrand(input:{data:{name:"${name}",logo:"${newDpId}"}}){
    brand{
      id
    }
  }
}
  `
      const resTwo = await axios.post(BaseUrl, { query })
      return dispatch({ type: "brand_added" })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteBrand = (id, imageid) => {
  console.log(id)
  const query = `
mutation{
  deleteBrand(input:{where:{id:"${id}"}}){
    brand{
      name
    }
  }
}
  `
  return async (dispatch) => {
    try {
      dispatch({ type: "delete_brand_loading" })
      const res = await axios.post(BaseUrl, { query })
      dispatch({ type: "brand_deleted" })
    } catch (error) {
      console.log(error)
    }
  }
}
