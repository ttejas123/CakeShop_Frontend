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

export const Add = (data) => {
    console.log(data)
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
                                  createProduct(input: {data: {
                                    name: "${data.name}"
                                    brand: "${data.brand}"
                                    image: [${productImages}]
                                    cgst: ${data.cgst}
                                    ean_upc_code: "${data.ean}"
                                    hsn_code: "${data.hsn}"
                                    gst: ${data.gst}
                                    sgst: ${data.sgst}
                                    category: "${data.category}"
                                    mrp: ${data.mrp}
                                    description: "${data.description}"
                                  }}){
                                    product{
                                      id
                                      name
                                      mrp
                                      category{
                                        category
                                        parent_category{
                                          category
                                        }
                                      }
                                      image{
                                        id
                                        url
                                      }
                                      slug
                                      ean_upc_code
                                      hsn_code
                                      sgst
                                      cgst
                                      gst
                                      description
                                    }
                                  }
                                }`

            axios.post(BaseUrl, {query: createQ}).then(res => {
                //console.log(res.data.data)
                return dispatch({
                    type: 'ADDPRODUCT',
                    payload: res.data.data
                })
            })

        })
     }
}

export const EditC = (data) => {
    //console.log(data)
    const updateQ = `mutation{
  updateProduct(input:{where: {id: "${data.id}"}, data:{
    name:"${data.name}"
    category: "6123b92b062bef634cb4dc4e"
    ean_upc_code: "${data.ean_upc_code}"
    hsn_code: "${data.hsn_code}"
    gst: ${data.gst}
    description: "${data.description}"
  }}){
    product{
      id
    }
  }
}`
    
    return dispatch => {
        //List
        axios.post(BaseUrl, {query: updateQ}).then(res => {
            //console.log(res.data.data)
            return dispatch({
                type: 'UPDATEDPRODUCT',
                payload: res.data.data
            })
        })
    }
}

export const DeleteProductSku = (id, useDisplatch, List, currentPage) => {
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
            useDisplatch(List(5, currentPage * 5))
            return dispatch({
                type: 'PRODUCTSKUDELETE',
                payload: res.data.data
            })
        })
    }
}

export const SpecificProduct = (id) => {
    // const UserData = JSON.parse(localStorage.getItem('userData'))
    // const UserName = UserData === null ? ("") : (UserData.username)
    // const searchPro = search ? search : ""
    const query = `query{
  product(id: "${id}"){
    id
              name
              mrp
              category{
                category
                parent_category{
                  category
                }
              }
              image{
                url
              }
              slug
              ean_upc_code
              hsn_code
              sgst
              cgst
              gst
              description
  }
}`

    return dispatch => {
        //List
        axios.post(BaseUrl, {query}).then(res => {
            //console.log(res.data.data)
            
            return dispatch({
                type: 'SPECIFICPRODUCT',
                payload: res.data.data
            })
        })
    }
}