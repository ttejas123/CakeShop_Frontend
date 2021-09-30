import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const List = (limit, start, search) => {
  // const UserData = JSON.parse(localStorage.getItem('userData'))
  // const UserName = UserData === null ? '' : UserData.username
  // const searchPro = search ? search : ''
  const query = `query{
  attributeMastersConnection(limit: ${limit}, start: ${start}){
    values{
      id
      unit
      display_name
      attribute_type{
        type
      }
      attribute_value_masters{
        value
      }
      categories{
        category
      }
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
        type: 'ATTRIBUTELIST',
        payload: res.data.data
      })
    })
  }
}

export const CreateAttribute = (data, useDisplatch, List) => {
  const attVal = data.attVal.map((val) => {
                return `\"${val.id}\"`
  })
  const cat = data.cat.map((val) => {
                return `\"${val.id}\"`
  })
  const createQ = `mutation{
  createAttributeMaster(input:{data:{
    display_name: "${data.attribute}"
    attribute_value_masters: [${attVal}]
    attribute_type: "${data.attType.id}"
    categories: [${cat}]
  }}){
    attributeMaster{
      id
    }
  }
}`
  //Create
  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query: createQ }).then((res) => {
      //console.log(res.data.data)
      useDisplatch(List(5, 0))
      return dispatch({
        type: 'CREATEATTRIBUTE',
        payload: res.data.data
      })
    })
  }
}

export const editAttribute = (data, useDisplatch, List) => {
  console.log(data)
  const attVal = data.attVal.map((val) => {
                return `\"${val.id}\"`
  })
  const cat = data.categories.map((val) => {
                return `\"${val.id}\"`
  })
  const updateQ = `mutation{
  updateAttributeMaster(input:{
  where:{id: "${data.id}"}
  data:{
    display_name: "${data.attribute}"
    attribute_value_masters: [${attVal}]
    attribute_type: "${data.attType.id}"
    categories: [${cat}]
  }}){
    attributeMaster{
      id
    }
  }
}`

  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query: updateQ }).then((res) => {
      //console.log(res.data.data)
      useDisplatch(List(5, 0))
      return dispatch({
        type: 'UPDATEATTRIBUTE',
        payload: res.data.data
      })
    })
  }
}

export const DeleteAttribute = (id, useDisplatch, List, currentPage) => {
    const deleteQ = `mutation{
  deleteAttributeMaster(input: {where: {
    id:"${id}"
  }}){
    attributeMaster{
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
                type: 'DELETEATTRIBUTE',
                payload: res.data.data
            })
        })
    }
}

export const requiredDropdown = () => {
    const reuir = `query{
  cat: categories{
    id
    category
  }
  attType: attributeTypeMasters{
    id
    type
  }
  attValue: attributeValueMasters{
    id
    value
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: reuir}).then(res => {
            return dispatch({
                type: 'REQUIREDFROPDOWN',
                payload: res.data.data
            })
        })
    }
}

export const specificAttribute = (id) => {
    const reuir = `query{
  attributeMaster(id: "${id}"){
    id
    display_name
    attribute_type{
      id
      type
    }
    categories{
      id
      category
    }
    attribute_value_masters{
      id
      value
    }
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: reuir}).then(res => {

            return dispatch({
                type: 'SPECIFICATTRIBUTE',
                payload: res.data.data
            })
        })
    }
}
