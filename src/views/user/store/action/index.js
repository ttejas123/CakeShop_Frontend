// ** Get all Data
export const getAllData = () => {
    return async dispatch => {
    //   await axios.get('/api/users/list/all-data').then(response => {
    //     dispatch({
    //       type: 'GET_ALL_DATA',
    //       data: response.data
    //     })
    //   })
    dispatch({
        type: 'GET_ALL_DATA',
        data: [{"a":"v"}]
      })
    }
  }