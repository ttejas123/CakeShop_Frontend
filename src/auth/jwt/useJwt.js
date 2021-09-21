// ** Core JWT Import
import useJwt from '@src/@core/auth/jwt/useJwt'
const Override =  {
  loginEndpoint: 'http://159.65.156.12:1337/auth/local',
  registerEndpoint: '/jwt/register',
  refreshEndpoint: '/jwt/refresh-token',
  logoutEndpoint: '/jwt/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
}
const { jwt } = useJwt(Override)

export default jwt
