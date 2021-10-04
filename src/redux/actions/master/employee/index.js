import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url
import { fileUpload, fileDelete } from "../../file/index"

export const fetchEmployee = (id) => {
  const query = `
query{
  bidoyaEmployee(id:"${id}"){
    first_name
    last_name
    id
    last_login
    profile_pic{
      id
      url
    }
    email
    mobile
    is_onground_staff
    is_active
    emplyee_addresses{
      id
      address_name
      area
      street_name
      pincode
      city{
        id
        name
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
    
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "fetch_employee_loading" })
      const res = await axios.post(BaseUrl, { query })
      return {
        payload: res.data.data.bidoyaEmployee
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const fetchEmployees = (limit, start, searchQuery) => {
  const searchPro = searchQuery ? searchQuery : ""
  const query = `
query{
  bidoyaEmployeesConnection(sort:"createdAt:desc",limit:${limit},start:${start},where:{first_name_contains:"${searchPro}"}){
    values{
      first_name
      last_name
      id
      email
      mobile
      last_login
      profile_pic{
      id
      }
      emplyee_addresses{
      id
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
      dispatch({ type: "fetch_employees_loading" })
      const res = await axios.post(BaseUrl, { query })
      return dispatch({
        type: "employees_fetched_list",
        payload: {
          data: res.data.data.bidoyaEmployeesConnection.values,
          count: res.data.data.bidoyaEmployeesConnection.aggregate.count
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const removeEmployeeAddress = (id) => {
  const query = `
mutation{
  deleteEmplyeeAddress(input:{where:{id:"${id}"}}){
    emplyeeAddress{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      await axios.post(BaseUrl, { query })
      return { payload: "employe_deleted" }
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateEmployeeAddress = (whereId, name, area, street, pincode, city, empId) => {
  const query = `
mutation {
  updateEmplyeeAddress(
    input: {
      where: { id: "${whereId}" }
      data: {
        address_name: "${name}"
        area: "${area}"
        street_name: "${street}"
        pincode: ${pincode}
        city: "${city}"
        bidoya_employee: "${empId}"
      }
    }
  ){
    emplyeeAddress{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      await axios.post(BaseUrl, { query })
    } catch (error) {
      console.log(error)
    }
  }
}
export const addEmployeeAddress = (name, area, street, pincode, city, empId) => {
  const query = `
mutation {
  createEmplyeeAddress(
    input: {
      data: {
        address_name: "${name}"
        area: "${area}"
        street_name: "${street}"
        pincode: ${pincode}
        city: "${city}"
        bidoya_employee: "${empId}"
      }
    }
  ) {
    emplyeeAddress {
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      await axios.post(BaseUrl, { query })
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateEmployee = (
  empId,
  fname,
  lname,
  email,
  mobile,
  is_onground_staff,
  is_active,
  newDpId
) => {
  return async (dispatch) => {
    try {
      if (newDpId) {
        const query = `
mutation {
  updateBidoyaEmployee(
    input: {
      where: { id: "${empId}" }
      data: {
        email: "${email}"
        first_name: "${fname}"
        last_name: "${lname}"
        mobile: "${mobile}"
        profile_pic: "${newDpId}"
        is_onground_staff: ${is_onground_staff}
        is_active: ${is_active}
      }
    }
  ) {
    bidoyaEmployee {
      id
    }
  }
}
`
        await axios.post(BaseUrl, { query })
      } else {
        const query = `
mutation {
  updateBidoyaEmployee(
    input: {
      where: { id: "${empId}" }
      data: {
        email: "${email}"
        first_name: "${fname}"
        last_name: "${lname}"
        mobile: "${mobile}"
        is_onground_staff: ${is_onground_staff}
        is_active: ${is_active}
      }
    }
  ) {
    bidoyaEmployee {
      id
    }
  }
}
`
        await axios.post(BaseUrl, { query })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const createEmplyee = (
  fname,
  lname,
  email,
  mobile,
  password,
  is_onground_staff,
  is_active,
  newDpId
) => {
  return async (dispatch) => {
    try {
      let res
      if (newDpId) {
        const query = `
mutation {
  createBidoyaEmployee(
    input: {
      data: {
        email: "${email}"
        first_name: "${fname}"
        last_name: "${lname}"
        mobile: "${mobile}"
        password: "${password}"
        profile_pic: "${newDpId}"
        is_onground_staff: ${is_onground_staff}
        is_active: ${is_active}
      }
    }
  ){
    bidoyaEmployee{
      id
    }
  }
}
  `
        res = await axios.post(BaseUrl, { query })
      } else {
        const query = `
mutation {
  createBidoyaEmployee(
    input: {
      data: {
        email: "${email}"
        first_name: "${fname}"
        last_name: "${lname}"
        mobile: "${mobile}"
        password: "${password}"
        is_onground_staff: ${is_onground_staff}
        is_active: ${is_active}
      }
    }
  ){
    bidoyaEmployee{
      id
    }
  }
}
  `
        res = await axios.post(BaseUrl, { query })
      }
      return { payload: res.data.data.createBidoyaEmployee.bidoyaEmployee.id }
    } catch (error) {
      console.log(error)
    }
  }
}
export const deleteBidoyaEmployee = (id) => {
  const query = `
mutation{
  deleteBidoyaEmployee(input:{where:{id:"${id}"}}){
    bidoyaEmployee{
      id
    }
  }
}
`
  return async (dispatch) => {
    try {
      dispatch({ type: "delete_employee_loading" })
      await axios.post(BaseUrl, { query })
    } catch (error) {
      console.log(error)
    }
  }
}
