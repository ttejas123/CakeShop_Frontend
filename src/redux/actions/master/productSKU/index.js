import axios from 'axios'
import { BaseUrl, BackEndUrl } from '@store/baseUrl' //Base Url

export const productSkuList = (limit, start, search) => {
    // const UserData = JSON.parse(localStorage.getItem('userData'))
    // const UserName = UserData === null ? ("") : (UserData.username)
    // const searchPro = search ? search : ""
    const query = `query{
  productSkusConnection(limit: ${limit}, start: ${start}){ 
    values {
    id
    sku_id
    greater_moq: catalogues(limit: 1, sort: "moq:desc"){ 
      moq
    }
    smaller_moq: catalogues(limit: 1, sort: "moq:asc"){ 
      moq
    }
    greater_delivary: catalogues(limit: 1, sort: "delivery_days:desc"){ 
      delivery_days
    }
    smaller_delivary: catalogues(limit: 1, sort: "delivery_days:asc"){ 
        delivery_days
    }
    catalogues(sort: "delivery_days:desc"){
      delivery_days 
      moq
      customization_avail
      sample_avail
    }
    product{
        name
    }
    mrp
  }
  aggregate {
    count
  }
}
}`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
            //console.log(res.data.data)
            return dispatch({
                type: 'PRODUCTSKULIST',
                payload: res.data.data
            })
        })
    }
}

export const Add = (data, useDisplatch, List) => {
    const attributesReturn = Object.keys(data.storeArray).map((val, index) => {
          const attri = data.storeArray[val]
          return (`{
                    attribute: \"${attri.attributeID}\",
                    value: \"${attri.label}\",
                    attribute_value: \"${attri.id}\"
                  }`)
    })
    //console.log(attributesReturn)
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
            
            const createQ = `mutation {
                                      AddSKU(
                                        product: "${data.productID}"
                                        sku_id: "${data.skuid}"
                                        sku_title: "${data.sku_title}"
                                        mrp: ${data.mrp}
                                        images: [${productImages}]
                                        product_attribute: [${attributesReturn}] 
                                      ) 
                                      {
                                        id
                                      }
                                    }`

            axios.post(BaseUrl, {query: createQ}).then(res => {
                //console.log(res.data.data)
                useDisplatch(List(5, 0, data.productID))
                return dispatch({
                    type: 'ADDPRODUCTSKU',
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
                // const attribute = data.attribute.map((val) => {
                //     return `\"${val.id}\"`
                // })
                // console.log(productImagesToUpload)
                // console.log(data.imgIds)
                    const updateQ = `mutation{
                                          UpdateSKU(
                                            id: "${data.id}"
                                            sku_id: "${data.productSku}"
                                            sku_title: "${data.sku_title}"
                                            images: [${productImagesToUpload}]
                                            mrp: ${data.mrp}      
                                            ){
                                                id
                                            }
                                        }`
                            axios.post(BaseUrl, {query: updateQ}).then(res => {
                                //console.log(res.data.data)
                                useDisplatch(List(5, 0, data.productID))
                                return dispatch({
                                    type: 'UPDATEDPRODUCT',
                                    payload: res.data.data
                                })
                            })

            })
        }
    } else {
            // const attributeQNoImg = data.attribute.map((val) => {
            //         return `\"${val.id}\"`
            // })
                    const updateQNoImg = `mutation{
                                          UpdateSKU(
                                            id: "${data.id}"
                                            sku_id: "${data.productSku}"
                                            sku_title: "${data.sku_title}"
                                            mrp: ${data.mrp}      
                                            ){
                                                id
                                            }
                                        }`
                        return dispatch => {
                            axios.post(BaseUrl, {query: updateQNoImg}).then(res => {
                                //console.log(res.data.data)
                                useDisplatch(List(5, 0, data.productID))
                                return dispatch({
                                    type: 'UPDATEDPRODUCTSKU',
                                    payload: res.data.data
                                })
                            })
                        }
    }
}

export const DeleteProductSku = (id, useDisplatch, List, currentPage, productID) => {
    const deleteQ = `mutation{
  deleteProductSku(input:{where: {id: "${id}"}}){
    productSku{
      id
    }
  }
}`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query: deleteQ}).then(res => {
            //console.log(res.data.data)
            if (productID) {
                useDisplatch(List(5, currentPage * 5, productID))
            } else {
                useDisplatch(List(5, currentPage * 5))
            }
            return dispatch({
                type: 'PRODUCTSKUDELETE',
                payload: res.data.data
            })
        })
    }
}

export const SpecificProductSku = (id) => {
    // const UserData = JSON.parse(localStorage.getItem('userData'))
    // const UserName = UserData === null ? ("") : (UserData.username)
    // const searchPro = search ? search : ""
    //console.log(id)
    const query = `query{
  productSku(id: "${id}"){
    id
    sku_id
    mrp
    sku_title
    images{
      id
      url
    }
    product_sku_attributes_mappings{
      attribute{
        id
        display_name   
      }
      value
      id
    }
    product{
      id
      name
      category{
        id
      }
    }
  }
}`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
           // console.log(res.data.data)
            
            return dispatch({
                type: 'SPECIFICPRODUCTSKU',
                payload: res.data.data
            })
        })
    }
}

export const SpecificProductAttribute = (id) => {
    // const UserData = JSON.parse(localStorage.getItem('userData'))
    // const UserName = UserData === null ? ("") : (UserData.username)
    // const searchPro = search ? search : ""
    const query = `query{
  product(id: "${id}"){
    attribute{
      attribute_value_masters{
        id
        value
      }
      display_name
      attribute_type{
        type
      } 
    }
  }
}`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
            //console.log(res.data.data)
            
            return dispatch({
                type: 'SPECIFICPRODUCTATTRIBUTE',
                payload: res.data.data
            })
        })
    }
}

export const recentAddedProduct = (productID, category, name) => {
    return {
        type: "RECENTADDEDPRODUCT",
        payload: {
            productID,
            category,
            name
        }
    }
}

export const productSpecificSkuList = (limit, start, id) => {
    // const UserData = JSON.parse(localStorage.getItem('userData'))
    // const UserName = UserData === null ? ("") : (UserData.username)
    // const searchPro = search ? search : ""
    const query = `query{
   productSkusConnection(limit: ${limit}, start: ${start}, where:{
    product: {
      id: "${id}"
    }
  }){
     values{
      id
      mrp
      sku_title
      sku_id
      product_sku_attributes_mappings{
        value
        attribute{
          display_name
        }
      }
    }
    aggregate{
       count
    }
  }
}`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
            //console.log(res.data.data)
            return dispatch({
                type: 'PRODUCTSPECIFICSKULIST',
                payload: res.data.data
            })
        })
    }
}