import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url
//const link = `${BaseUrl}/countries` //Link For Country Crud

//const BaseUrl = `http://159.65.156.12:1337/graphql`

export const userAddressDropd = (limit, start) => {
  // const UserData = JSON.parse(localStorage.getItem('userData'))
  // const UserName = UserData === null ? ("") : (UserData.username)
  const query = `query{
  userAddresses{
        id
      address_name
      area
      street_name
      pincode
      city{
        name
        state{
          name
          country{
            country_name
          }
        }
      }
  }
}`

  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query }).then((res) => {
      //console.log(res.data.data)
      return dispatch({
        type: 'USERADDRESSDROPDOWN',
        payload: res.data.data
      })
    })
  }
}

export const List = (limit, start, search) => {
  const UserData = JSON.parse(localStorage.getItem('userData'))
  const UserName = UserData === null ? '' : UserData.username
  const searchPro = search ? search : ''
  const query = `query{
  userWarehousesConnection(limit: ${limit}, start: ${start}, where:{
        name_contains: "${searchPro}"
        user:{username: "${UserName}"}
  }){
    values{
          id
          name
          address_1
          createdAt
          city{
            name
            state{
              name
              country{
                country_name
              }
            }
          }
          pincode
          is_bidoya_warehouse
          landmark
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
        type: 'WAREHOUSELIST',
        payload: res.data.data
      })
    })
  }
}

export const CreateWarehouse = (data) => {
  console.log(data)
  const createQ = `mutation{
  createUserWarehouse(input:{data: {
    name:"${data.warehouse}"
    address_1: "${data.address1}"
    city: "${data.City}"
    landmark: "${data.address1}"
    is_bidoya_warehouse: ${data.is_bidoya_wareHouse}
    pincode: ${data.pincode}
  }}){
    userWarehouse{
      name
          address_1
          createdAt
          city{
            name
            state{
              name
              country{
                country_name
              }
            }
          }
          pincode
          is_bidoya_warehouse
          landmark
    }
  }
}`
  //Create
  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query: createQ }).then((res) => {
      console.log(res.data.data)
      return dispatch({
        type: 'CREATEWAREHOUSE',
        payload: res.data.data
      })
    })
  }
}

export const EditC = (data) => {
  //console.log(data)
  const updateQ = `mutation{
  updateUserAddress(input:{where: {id: "${data.id}"}, data:{address_name: "${data.area}", street_name: "${data.street_name}", area: "${data.area}", pincode: "${data.pincode}"}}){
    userAddress{
      id
      address_name
      area
      street_name
      pincode
      city{
        name
        state{
          name
          country{
            country_name
          }
        }
      }
      
    }
  }
}`

  return (dispatch) => {
    //List
    axios.post(BaseUrl, { query: updateQ }).then((res) => {
      //console.log(res.data.data)
      return dispatch({
        type: 'USERADDRESSEDIT',
        payload: res.data.data
      })
    })
  }
}

// <<<<<<< HEAD
// export const DeleteWarehouse = (id) => {
//   const deleteQ = `mutation{
// =======
export const DeleteWarehouse = (id, useDisplatch, List, currentPage) => {
    const deleteQ = `mutation{
                        deleteUserWarehouse(input:{where: {id: "${id}"}}){
                          userWarehouse{
                            id
                          }
                        }
                      }`
// <<<<<<< HEAD
//   return (dispatch) => {
//     //List
//     axios.post(BaseUrl, { query: deleteQ }).then((res) => {
//       //console.log(res.data.data)
//       return dispatch({
//         type: 'WAREHOUSEDELETE',
//         payload: res.data.data
//       })
//     })
//   }
// }

// =======
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: deleteQ}).then(res => {
            //console.log(res.data.data)
            useDisplatch(List(5, currentPage * 5))
            return dispatch({
                type: 'WAREHOUSEDELETE',
                payload: res.data.data
            })
        })
    }
}

