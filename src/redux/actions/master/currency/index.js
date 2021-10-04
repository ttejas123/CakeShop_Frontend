import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url

export const fetchCurrencies = (limit, start, searchQuery) => {
  const searchPro = searchQuery ? searchQuery : ""
  const query = `
query{
 currenciesConnection(limit:${limit},start:${start},where:{code_contains:"${searchPro}"}){
  values{
    code
    symbol
    id
  }
  aggregate{
count
  }
}
  
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_currency_loading" })
      const res = await axios.post(BaseUrl, { query })
      console.log(res.data)
      return dispatch({
        type: "currency_fetched_list",
        payload: res.data.data.currenciesConnection
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateCurrency = (whereId, symbol, code) => {
  const query = `
mutation{
  updateCurrency(input:{where:{id:"${whereId}"},data:{symbol:"${symbol}",code:"${code}"}}){
    currency{
      code
      symbol
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "edit_currency_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "currency_edited", payload: res.data.data.updateCurrency.currency })
    } catch (error) {
      console.log(error)
    }
  }
}
export const addCurrency = (code, symbol) => {
  const query = `
mutation{
 createCurrency(input:{data:{code:"${code}",symbol:"${symbol}"}}){
  currency{
    id
    code
    symbol
  }
}
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "add_currency_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "currency_added", payload: res.data.data.createCurrency.currency })
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteCurrency = (id) => {
  const query = `
mutation{
  deleteCurrency(input:{where:{id:"${id}"}}){
    currency{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_currency_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "currency_deleted", payload: res.data.data.deleteCurrency.currency })
    } catch (error) {
      console.log(error)
    }
  }
}
