import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url
//const link = `${BaseUrl}/countries` //Link For Country Crud

//const BaseUrl = `http://159.65.156.12:1337/graphql`

export const List = () => {
    const query = `query{
                     countries{
                  country_name
                            id
                  country_code
    country_initial
    currency
  }                    }`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
            //console.log(res.data.data.countries)
            return dispatch({
                type: 'COUNTRYLIST',
                payload: res.data.data.countries
            })
        })
    }
}


export const Create = () => {
  
    const createQ = `mutation($country_name: String!, $country_initial: String!, $country_code: String!){
  createCountry(input:{data:{country_name: $country_name, country_code:$country_code,country_initial:$country_initial}}){
    country{
      id,
      country_name
    }
  }
}`
    //Create
  return dispatch => {
        //List
        axios.post(BaseUrl, {query: createQ, variables: { country_name: "Nepal", country_code: "977", country_initial: "NP"}}).then(res => {
            console.log(res.data.data)
            return dispatch({
                type: 'COUNTRYADD',
                payload: res.data.data
            })
        })
  }
}

export const EditC = () => {
    const updateQ = `mutation($id: ID!, $country_name: String!){
                        updateCountry(input:{where:{id: $id},data:{country_name: $country_name}}){
                          country{
                            id,
                            country_name
                          }
                        }
                      }`
    
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: updateQ, variables: { id: "612c9cbf58550a7f14f4f69d", country_name: "Nepal"}}).then(res => {
            //console.log(res.data.data)
            return dispatch({
                type: 'COUNTRYEDIT',
                payload: res.data.data
            })
        })
    }
}

export const DeleteC = () => {
    const deleteQ = `mutation($id: ID!){
                      deleteCountry(input:{where:{id: $id}}){
                        country{
                          id,
                          country_name
                        }
                      }
                    }`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: deleteQ, variables: { id: "612cbe0b58550a7f14f4f6a1"}}).then(res => {
            return dispatch({
                type: 'COUNTRYDELETE',
                payload: res.data.data
            })
        })
    }
}
