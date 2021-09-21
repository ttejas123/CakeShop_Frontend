import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const fetchStates = (start) => {
  const query = `
query{
  states(limit:5,start:${start}){
    name
    id
    country{
    id
      country_name
    }
  }
}
`
  return async (dispatch) => {
    try {
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: 'states_fetched_page',
        payload: res.data.data.states
      })
    } catch (error) {
      console.log(error.response)
    }
  }
}
