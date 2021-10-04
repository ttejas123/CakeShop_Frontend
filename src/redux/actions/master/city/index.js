import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url
//const link = `${BaseUrl}/countries` //Link For Country Crud

//const BaseUrl = `http://159.65.156.12:1337/graphql`

export const fetchCities = (limit, start, searchQuery) => {
  const searchPro = searchQuery ? searchQuery : ""
  const query = `
query{
  citiesConnection(sort:"createdAt:desc",limit:${limit},start:${start},where:{name_contains:"${searchPro}"}){
    values{
       name
       id
     state{
     id
      name
      country{
        country_name
        id
      }
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
      dispatch({ type: "fetch_cities_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: "cities_fetched_city_list",
        payload: {
          cities: res.data.data.citiesConnection.values,
          count: res.data.data.citiesConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}

//** FUNC for updating city
export const updateCity = (city, stateId, whereId) => {
  //** whereId represents the id of the city to be updated
  const query = `
mutation {
  updateCity(
    input: {
      where: { id: "${whereId}" }
      data: { name: "${city}", state: "${stateId}" }
    }
  ) {
    city {
      name
      id
      state {
        name
        id
        country {
          country_name
          id
        }
      }
    }
  }
}

`
  return async (dispatch) => {
    try {
      dispatch({ type: "edit_cities_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "city_edited", payload: res.data.data.updateCity.city })
    } catch (error) {
      console.log(error)
    }
  }
}
export const addCity = (name, state) => {
  const query = `
mutation {
  createCity(input:{data:{name:"${name}",state:"${state}"}}) {
    city {
      name
      id
      state {
        id
        name
        country {
          id
          country_name
        }
      }
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "add_cities_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: "city_added", payload: res.data.data.createCity.city })
    } catch (error) {
      console.log(error)
    }
  }
}
export const deleteCity = (id) => {
  const query = `
mutation{
  deleteCity(input:{where:{id:"${id}"}}){
    city{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_cities_loading" })
      const res = await axios.post(BaseUrl, { query })
      dispatch({ type: "city_deleted", payload: res.data.data.deleteCity.city.id })
    } catch (error) {
      console.log(error)
    }
  }
}
