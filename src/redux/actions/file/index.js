import axios from "axios"
import { BaseUrl } from "@store/baseUrl" //Base Url

export const fileUpload = (data) => {
  return async (dispatch) => {
    try {
      const formdata = new FormData()
      formdata.append(
        "operations",
        `{\n  "query": "mutation($file: Upload!) { upload(file: $file) {id}}",\n  "variables": {\n      "file": null\n    }\n}`
      )
      formdata.append("map", '{ "0": ["variables.file"] }')
      const name = data.data ? data.data.name : data.name
      const dt = data.data ? data.data : data
      formdata.append("0", dt, name)
      const res = await axios.post(BaseUrl, formdata)
      return res.data.data.upload.id
    } catch (error) {
      console.log(error)
    }
  }
}
export const fileDelete = (id) => {
  return async (dispatch) => {
    try {
      const query = `
mutation{
  deleteFile(input:{where:{id:"${id}"}}){
    file{
      id
    }
  }
}
`
      await axios.post(BaseUrl, { query })
    } catch (error) {
      console.log(error)
    }
  }
}
