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

export const SelectedStateList = (data) => {
    const query = `query{
  statesConnection(where: {country: {country_name: "${data}"}}){
    values{
      id
      name
    }
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
            //console.log(res.data.data.countries)
            return dispatch({
                type: 'SELECTEDSTATELIST',
                payload: res.data.data
            })
        })
    }

}