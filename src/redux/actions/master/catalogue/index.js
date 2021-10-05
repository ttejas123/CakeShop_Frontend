import axios from 'axios'
import { BaseUrl } from '@store/baseUrl' //Base Url

export const List = (limit, start, search) => {
  const UserData = JSON.parse(localStorage.getItem('userData'))
  const UserName = UserData === null ? '' : UserData.username
  const searchPro = search ? search : ''
  const query = `query{
  cataloguesConnection(limit: ${limit}, start: ${start}, where:{
    user: {
      username: "${UserName}"
    }
    product_skus: {
      sku_title_contains: "${searchPro}"
    }
  }){
    values{
      id
      createdAt
      updatedAt
      product_skus{
        id
        sku_title
        product{
          ean_upc_code
          hsn_code
        }
        images{
          id
          url
        }
        sku_id
        mrp 
      }
      user{
        username
      }
      unit_price
      moq
      delivery_days
      sample_avail
      customization_avail
      avail_quantity
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
        type: 'CATALOGUELIST',
        payload: res.data.data
      })
    })
  }
}

export const createCat = (data, useDisplatch, List) => {
  const formdata = new FormData()
    let index = 0
    let index2 = 0
    let stringForAppend = ''
    
    formdata.append("operations", "{\n  \"query\": \"mutation($files: [Upload]!){multipleUpload(files: $files){id}}\",\n    \"variables\": {\n      \"files\": []\n   }\n}")
    while (index2 < data.img.length) {
        if (index2 === data.img.length - 1) {
            stringForAppend =  `${stringForAppend} \"${index2}\": [\"variables.files.${index2}\"]  `
        } else {
            stringForAppend =  `${stringForAppend} \"${index2}\": [\"variables.files.${index2}\"],  `
        }
        ++index2
    }
    stringForAppend = `{${stringForAppend}}`
    formdata.append("map", `${stringForAppend}`)
    
    while (index < data.img.length) {
        formdata.append(`${index}`, data.img[index])
         ++index
    }

     return dispatch => {
        axios.post(BaseUrl, formdata).then(res => {
            const productImages = res.data.data.multipleUpload.map((val) => {
                return `\"${val.id}\"`
            })
              const createQ = `mutation{
                                createCatalogue(input:{data:{
                                  product_skus: "${data.skuId}"
                                  unit_price: ${data.rate}
                                  moq: ${data.moq}
                                  delivery_days: ${data.lead}
                                  sample_avail: ${data.sampling}
                                  product_images:[${productImages}]
                                  avail_quantity: ${data.totalInventry}
                                  customization_avail: ${data.custom}
                                }}){
                                  catalogue{
                                    id
                                  }
                                }
                              }`
                                  //List
                                  axios.post(BaseUrl, { query: createQ }).then((res) => {
                                    console.log("create Catalage")
                                    useDisplatch(List(5, 0))
                                    return dispatch({
                                      type: 'CREATECATALOGUE',
                                      payload: res.data.data
                                    })
                                  })

    })
    }
}

export const EditC = (data, useDisplatch, List) => {
    if (data.img.length > 0) {
        const formdata1 = new FormData()
        let index = 0
        let index2 = 0
        let stringForAppend = ''
        
        formdata1.append("operations", "{\n  \"query\": \"mutation($files: [Upload]!){multipleUpload(files: $files){id}}\",\n    \"variables\": {\n      \"files\": []\n   }\n}")
        while (index2 < data.img.length) {
            if (index2 === data.img.length - 1) {
                stringForAppend =  `${stringForAppend} \"${index2}\": [\"variables.files.${index2}\"]  `
            } else {
                stringForAppend =  `${stringForAppend} \"${index2}\": [\"variables.files.${index2}\"],  `
            }
            ++index2
        }
        stringForAppend = `{${stringForAppend}}`
        formdata1.append("map", `${stringForAppend}`)
        
        while (index < data.img.length) {
            formdata1.append(`${index}`, data.img[index])
             ++index
        }

        return dispatch => {
            axios.post(BaseUrl, formdata1).then(res => {
                let productImagesToUpload = res.data.data.multipleUpload.map((val) => {
                    return val.id
                })
                const ImageIdNnewOne = [...data.imgIds, ...productImagesToUpload]
                productImagesToUpload = ImageIdNnewOne.map((val) => {
                    return `\"${val}\"`
                })
                    const updateQ = `mutation{
                                          updateCatalogue(input: {where: {id: "${data.id}"} data: {
                                            product_skus: "${data.skuId}"
                                            unit_price: ${data.unit_price}
                                            moq: ${data.moq}
                                            delivery_days: ${data.lead}
                                            sample_avail: ${data.sampling}
                                            product_images:[${productImagesToUpload}]
                                            avail_quantity: ${data.totalInventry}
                                            customization_avail: ${data.custom}
                                          }}){
                                            catalogue{
                                              id
                                            }
                                          }
                                        }`
                            axios.post(BaseUrl, {query: updateQ}).then(res => {
                                //console.log(res.data.data)
                                useDisplatch(List(5, 0))
                                return dispatch({
                                    type: 'UPDATECATALOGUE',
                                    payload: res.data.data
                                })
                            })

            })
        }
    } else {
                    const updateQNoImg = `mutation{
                                          updateCatalogue(input: {where: {id: "${data.id}"} data: {
                                            product_skus: "${data.skuId}"
                                            unit_price: ${data.unit_price}
                                            moq: ${data.moq}
                                            delivery_days: ${data.lead}
                                            sample_avail: ${data.sampling}
                                            avail_quantity: ${data.totalInventry}
                                            customization_avail: ${data.custom}
                                          }}){
                                            catalogue{
                                              id
                                            }
                                          }
                                        }`
                        return dispatch => {
                            axios.post(BaseUrl, {query: updateQNoImg}).then(res => {
                                //console.log(res.data.data)
                                useDisplatch(List(5, 0))
                                return dispatch({
                                    type: 'UPDATECATALOGUE',
                                    payload: res.data.data
                                })
                            })
                        }
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

export const DeleteCataloge = (id, useDisplatch, List, currentPage) => {
    const deleteQ = `mutation{
  deleteCatalogue(
    input:{where: {id: "${id}"}}
  ){
    catalogue{
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
                type: 'DELETECATALOGE',
                payload: res.data.data
            })
        })
    }
}

export const productSkuPrefetchData = (id) => {
    const reuir = `query{
  productSku(id: "${id}"){
     id
     sku_title 
     mrp
     product_sku_attributes_mappings{
      attribute{
        id
        display_name   
      }
      value
      id
    }
     product{
      gst
      brand{
        id
        name
      }
      description
      hsn_code
      ean_upc_code
    } 
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: reuir}).then(res => {
            //console.log(res.data.data)
            return dispatch({
                type: 'PRODUCTSKUPREFETCHDATA',
                payload: res.data.data
            })
        })
    }
}

export const catProductList = (id) => {
    const reuir = `query{ category(id:"${id}"){
    id
    products{
      id
      name
      image{
        id
        url
      }
    }
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: reuir}).then(res => {

            return dispatch({
                type: 'CATEGORYPRODUCTLIST',
                payload: res.data.data
            })
        })
    }
}

export const productSkuList = (id) => {
    const reuir = `query{
  productSkus(where:{
     product:{
         id: "${id}"
      }
  }){
    id
    sku_title
    images{
      id
      url
    }
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: reuir}).then(res => {

            return dispatch({
                type: 'PRODUCTSPECPRODUCTSKULIST',
                payload: res.data.data
            })
        })
    }
}

export const specificCatalogue = (id) => {
    const fetchOneCatalgueSkuId = `query{
  catalogue(id: "${id}"){
      id
      product_skus{
        id
      }
      unit_price
      moq
      product_images{
        id
        url
      }
      delivery_days
      sample_avail
      customization_avail
      avail_quantity
  }
}`
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: fetchOneCatalgueSkuId}).then(res => {

            return dispatch({
                type: 'FETCHONECATALOGUE',
                payload: res.data.data
            })
        })
    }
}