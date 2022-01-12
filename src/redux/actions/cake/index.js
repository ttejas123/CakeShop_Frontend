import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const List = (limit, start, search) => {
  return (dispatch) => {
    //List
    axios.get("http://localhost:3001/cake").then((result) => {
      console.log(result.data.data)
      return dispatch({
        type: 'CAKELIST',
        payload: result.data
      })
    })
  }
}

export const Single = (id) => {
  return (dispatch) => {
    //List
    axios.get(`http://localhost:3001/cake/${id}`).then((result) => {
      return dispatch({
        type: 'SINGLECAKE',
        payload: result.data
      })
    })
  }
}


export const Create = (values, fileArr) => {
  //Create
  const data = new FormData() 
  data.append('photoimg', fileArr[0])
  data.append('name', values.name)
  data.append('price', values.price)
  data.append('description', values.description)
  return (dispatch) => {
    //List
    axios.post("http://localhost:3001/cake/insert", data).then((res) => {
      
      return dispatch({
        type: 'CREATECAKE',
        payload: res.data.data
      })
    })
  }
}

export const deleteD = (id, useDisplatch, cakeList) => {
 
  const deleteById = {
    deleteManyById:[id]
}
    return (dispatch) => {
    //List
    axios.post(`http://localhost:3001/cake/deleteManyById`, deleteById).then((result) => {
      useDisplatch(cakeList(0, 5, ""))
      return dispatch({
        type: 'DELETECAKE',
        payload: result.data
      })
    })
  }
}