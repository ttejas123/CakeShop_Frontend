import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url
//const link = `${BaseUrl}/countries` //Link For Country Crud

//const BaseUrl = `http://159.65.156.12:1337/graphql`

export const fetchCountries = (limit, start, searchQuery) => {
  const searchPro = searchQuery ? searchQuery : ""
  const query = `
query{
  countriesConnection(limit:${limit},start:${start},where:{country_name_contains:"${searchPro}"}){
    values{
      country_name
      country_code
      country_initial
      id
      currency
    }
    aggregate{
      count
    }
  }
}
  `

  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_countries_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: "countries_fetched_list_page",
        payload: {
          countries: res.data.data.countriesConnection.values,
          count: res.data.data.countriesConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
export const fetchCurrenciesForAddEdit = () => {
  const query = `
query{
  currencies{
    id
    code
    symbol
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: "fetched_currencied_for_add_edit",
        payload: res.data.data.currencies
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const editCountry = (whereId, name, initial, code, currency) => {
  console.log(whereId, name, initial, code, currency)
  const query = `
mutation{
  updateCountry(input:
  {
  where:
  {
  id:"${whereId}"
  }
  ,data:
  {
  country_name:"${name}",
  country_initial:"${initial}",
  country_code:"${code}"
  ,currency:"${currency}"}
  }
  ){
country{
  country_name,
  country_initial
  country_code,
  id,
  currency
}
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "edit_country_loading" })
      const res = await axios.post(BaseUrl, { query })
      dispatch({ type: "country_edited", payload: res.data.data.updateCountry.country })
    } catch (error) {
      console.log(error)
    }
  }
}
export const addCountry = (name, initial, code, currency) => {
  const query = `
mutation{
  createCountry(input:{
  data:
  {
  country_name:"${name}}",
  country_initial:"${initial}",
  country_code:"${initial}",
  currency:"${currency}"
  }
  }){
    country{
      country_name
      country_initial 
      country_code
      currency
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "add_country_loading" })
      const res = await axios.post(BaseUrl, { query })
      dispatch({ type: "country_added", payload: res.data.data.createCountry.country })
    } catch (error) {
      console.log(error)
    }
  }
}
export const deleteCountry = (whereId) => {
  const query = `
mutation{
deleteCountry(input:{where:{id:"${whereId}"}}){
  country{
    id
  }
}
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_countries_loading" })
      const res = await axios.post(BaseUrl, { query })
      dispatch({ type: "country_deleted" })
    } catch (error) {
      console.log(error)
    }
  }
}
