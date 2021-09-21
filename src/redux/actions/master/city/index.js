import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url
//const link = `${BaseUrl}/countries` //Link For Country Crud

//const BaseUrl = `http://159.65.156.12:1337/graphql`

export const fetchCities = (start) => {
  const query = `
query{
  citiesConnection(limit:5,start:${start}){
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
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'cities_fetched',
        payload: res.data.data.citiesConnection.values
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
      const res = await axios.post(BaseUrl, { query })
      console.log(res.data)
      return dispatch({ type: 'kasfjdhsfajhdsjfhdhfashfs' })
    } catch (error) {
      console.log(error.response)
    }
  }
}
