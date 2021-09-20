// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'

const config = useJwt.jwtConfig

const initialState = {
  authenticaton: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'JWTTOKEN':
    console.log(action.payload)
      
      //localStorage.setItem('accessToken', JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWY1Y2NhYmE1OGE1MmIxZWIyZGZiNiIsImlhdCI6MTYyOTQ0NTQzMywiZXhwIjoxNjMyMDM3NDMzfQ.zgQJwobGXO-xYjjabZY68DmgdrUp4jKQhn3wWVb7xu0'))
      state = {
        ...state,
        authenticaton: action.payload
      }
      return state
    case 'REMOVEJWTTOKEN':
      //console.log(action.payload)
      localStorage.setItem('Authenticaton', JSON.stringify(action.payload))
      state = {
        ...state,
        authenticaton: action.payload
      }
      return state
    default:
      return state
  }
}

export default authReducer
