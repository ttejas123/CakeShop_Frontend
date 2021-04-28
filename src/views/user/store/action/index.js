// ** Get all Data
export const getAllData = () => {
  console.log("getting thet data")

    return async dispatch => {
    //   await axios.get('/api/users/list/all-data').then(response => {
    //     dispatch({
    //       type: 'GET_ALL_DATA',
    //       data: response.data
    //     })
    //   })
     object = {
      1e2: 1,
      100: 2
      
  }
    dispatch({
        type: 'GET_ALL_DATA',
        data: object
      })
    }
  }