//** API imports
import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url

//* FUNC for fetching countries
export const findCountries = () => {
  const query = `
query {
 countries{
  country_name
  id
}
}
`
  return async (dispatch) => {
    const res = await axios.post(BaseUrl, { query })
    return dispatch({ type: "countries_fetched_for_edit", payload: res.data.data.countries })
  }
}

//* FUNC for fetching states
export const findStates = (country_name) => {
  const query = `
query{
  statesConnection(where: {country: {country_name: "${country_name}"}}){
    values{
      id
      name
    }
  }
}
`
  return async (dispatch) => {
    const res = await axios.post(BaseUrl, { query })
    return dispatch({
      type: "states_fetched_for_edit",
      payload: res.data.data.statesConnection.values
    })
  }
}
export const findCities = (state) => {
  const query = `
query{
  citiesConnection(where: {state: {name: "${state}"}}){
    values{
      id
      name
    }
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
    return dispatch({
      type: "cities_fetched_for_edit",
      payload: res.data.data.citiesConnection.values
    })
    } catch (error) {
      console.log(error)
    }
  }
}
