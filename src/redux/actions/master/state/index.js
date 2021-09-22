import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const fetchStates = (start) => {
  const query = `
query {
  statesConnection(limit: 5, start: ${start}) {
    values {
      name
      id
      country {
        country_name
        id
      }
    }
    aggregate {
      count
    }
  }
}

`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'states_fetched_list_page',
        payload: {
          states: res.data.data.statesConnection.values,
          count: res.data.data.statesConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
export const addState = (name, country) => {
  const query = `
mutation{
  createState(input:{data:{name:"${name}",country:"${country}"}}){
    state{
      id
      name
      country{
        id
        country_name
      }
    }
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      console.log(res.data.data)
      return dispatch({
        type: 'state_added',
        payload: res.data.data.createState.state
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const editState = (whereId, state, country) => {
  const query = `
mutation{
  updateState(input:{where:{id:"${whereId}"},data:{name:"${state}",country:"${country}"}}){
    state{
      name
      id
      country{
        country_name
        id
      }
    }
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'state_edited',
        payload: res.data.data.updateState.state
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
export const delete__State = (whereId) => {
  console.log(whereId)
  const queryToFetchCities = `
  query{
  citiesConnection(where:{state:{id:"${whereId}"}})
  {
    values{
    name
      id
    }
  }
}
  `
  const query = `
mutation{
  deleteState(input:{where:{id:"${whereId}"}}){
    state{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      const cityRes = await axios.post(BaseUrl, { query: queryToFetchCities })
      cityRes.data.data.citiesConnection.values.forEach(async (city) => {
        const queryToDeleteCities = `
mutation{
  deleteCity(input:{where:{id:"${city.id}"}}){
    city{
      id
    }
  }
}
`
        await axios.post(BaseUrl, { query: queryToDeleteCities })
      })

      const res = await axios.post(BaseUrl, { query })
      return dispatch({ type: 'state_deleted', payload: res.data.data.deleteState.state })
    } catch (error) {
      console.log(error)
    }
  }
}
