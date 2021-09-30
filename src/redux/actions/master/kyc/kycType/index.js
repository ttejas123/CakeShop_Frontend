import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const List = (limit, start, search) => {
  // const UserData = JSON.parse(localStorage.getItem('userData'))
  // const UserName = UserData === null ? '' : UserData.username
  // const searchPro = search ? search : ''
  const query = `query{
  kycDocumentMastersConnection(limit: ${limit}, start: ${start}){
    values{
      id
      Name
    }
    aggregate{
      count
    }
  } 
}`

  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query }).then((res) => {
      //console.log(res.data.data)
      return dispatch({
        type: 'KYCDOCTYPELIST',
        payload: res.data.data
      })
    })
  }
}

export const CreateKycType = (data) => {
  const createQ = `mutation{
  createKycDocumentMaster(input:{data:{
    Name: "${data.name}"
  }}){
    kycDocumentMaster{
      id
      Name
    }
  }
}`
  //Create
  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query: createQ }).then((res) => {
      //console.log(res.data.data)
      return dispatch({
        type: 'CREATEKYCTYPE',
        payload: res.data.data
      })
    })
  }
}

export const EditKycType = (data) => {
  //console.log(data)
  const updateQ = `mutation{
  updateKycDocumentMaster(input:{where: {id: "${data.id}"}, data: {
    Name: "${data.name}"
  }}){
    kycDocumentMaster{
      id
      Name
    }
  }
}`

  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query: updateQ }).then((res) => {
      //console.log(res.data.data)
      return dispatch({
        type: 'UPDATEKYCTYPE',
        payload: res.data.data
      })
    })
  }
}

export const DeleteKycType = (id, useDisplatch, List, currentPage) => {
    const deleteQ = `mutation{
  deleteKycDocumentMaster(input:{where:{
    id: "${id}"
  }}){
    kycDocumentMaster{
      id
    }
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: deleteQ}).then(res => {
            //console.log(res.data.data)
            useDisplatch(List(5, currentPage * 5))
            return dispatch({
                type: 'DELETEKYCTYPE',
                payload: res.data.data
            })
        })
    }
}

