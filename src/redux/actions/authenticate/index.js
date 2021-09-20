import axios from 'axios'
import { BackEndUrl } from '@store/baseUrl' //Base Url
export const authenticate = (data) => {
  console.log(data)
  return (dispatch) => {
    axios
      .post(`${BackEndUrl}/auth/local`, data)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('Authenticaton', JSON.stringify(response.data.jwt))
        localStorage.setItem('userData', JSON.stringify(response.data.user))
        return dispatch({
          type: 'JWTTOKEN',
          payload: response.data
        })
      })
      .catch((error) => {
        const code = { jwt: 400 }
        console.log(error)
        return dispatch({
          type: 'JWTTOKEN',
          payload: code
        })
      })
  }
}

export const removeauth = (data) => {
  //console.log(data)
  return {
    type: 'REMOVEJWTTOKEN',
    payload: data
  }
}
