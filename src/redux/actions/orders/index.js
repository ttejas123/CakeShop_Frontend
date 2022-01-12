import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const List = (limit, start, search) => {
  return (dispatch) => {
    //List
    axios.get("http://localhost:3001/read").then((result) => {
      
      return dispatch({
        type: 'ORDERSLIST',
        payload: result.data
      })
    })
  }
}

export const Single = (id) => {
  return (dispatch) => {
    //List
    axios.get(`http://localhost:3001/readData/${id}`).then((result) => {
      return dispatch({
        type: 'SINGLEORDERS',
        payload: result.data
      })
    })
  }
}


export const Create = (data) => {

  return (dispatch) => {
    //List
    axios.post("http://localhost:3001/insert", data).then((res) => {
      
      return dispatch({
        type: 'CREATEORDER',
        payload: res.data
      })
    })
  }
}

export const deleteD = (id, useDisplatch, listOrder) => {
 
  const deleteById = {
      deleteManyById:[id]
  }
    return (dispatch) => {
    //List
    axios.post(`http://localhost:3001/deleteManyById`, deleteById).then((result) => {
      useDisplatch(listOrder(0, 5, ""))
      return dispatch({
        type: 'DELETEORDER',
        payload: result.data
      })
    })
  }
}