import { useSkin } from '@hooks/useSkin'
import { useState, useEffect, useContext } from 'react'
import { handleLogin } from '@store/actions/auth'
import { Link, Redirect, useHistory } from 'react-router-dom'
import useJwt from '@src/auth/jwt/useJwt'
import Avatar from '@components/avatar'
import bgImaes from '@src/assets/images/logo/banner.png' 
import { toast, Slide } from 'react-toastify'
import { AbilityContext } from '@src/utility/context/Can'
import { Facebook, Twitter, Mail, GitHub, Coffee } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button, Card, CardBody } from 'reactstrap'
import { authenticate } from '@src/redux/actions/authenticate/index.js'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
//import { SignIn, SignOut } from '@src/redux/actions/loginOut/index.js'

// =======
// import {editStatus} from './isLoggedIn'
// >>>>>>> 3d2af2d69a22b8c7b24db8c5ac7659b354ff02d4
import '@styles/base/pages/page-auth.scss'
import './logcss.css'
import '@styles/base/pages/page-knowledge-base.scss'
import logo from '@src/assets/images/logo/bidoyaLogo.png'
//import { editStatus } from './isLoggedIn'
import { StatusBS } from '@src/redux/actions/statusBS/index'

const Login = () => {
  const historyLocation = useHistory()
  const usDispatch = useDispatch()
  const ability = useContext(AbilityContext)
  const SellerData = JSON.parse(localStorage.getItem('StatsBS'))
  const userData = JSON.parse(localStorage.getItem('userData'))
  const LoginWithJWT = JSON.parse(localStorage.getItem('Authenticaton'))
  //console.log(LoginWithJWT)
  const newData = useSelector(state => {
   //console.log(state.Authentication)
    return (state.Authentication)
  })
  const [AllUserInfo, setUserInfo] = useState({
    identifier: '',
    password: ''
  })

  // useEffect(() => {
  //  if (userData !== null) {

  //       historyLocation.push('/Homes/Dashboards')
  //  }

  // }, [userData])

  const [values, setValues] = useState({
    identifier: '',
    password: ''
  })
  const [skin, setSkin] = useSkin()
  const [checked, setchecked] = useState(false)

  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const ToastContent = ({ name, role }) => (
  <>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in. Now you can start to explore. Enjoy!</span>
    </div>
  </>
)

  const onSubmitData = data => {
    const identifier = values.identifier
    const password = values.password
    //console.log(values)
    usDispatch(authenticate(values))
    //editStatus('true')
    usDispatch(StatusBS(checked))
      useJwt
        .login({ identifier, password })
        .then(res => {
          //console.log(res)
          const data = { ...res.data.user, accessToken: res.data.jwt, refreshToken: res.data.jwt }
          console.log(data)
          usDispatch(handleLogin(data))
          window.location.assign("/")
          // window.location.reload(false)
          //ability.update(res.data.userData.ability)
          //historyLocation.push(getHomeRouteForLoggedInUser(data.role))
          toast.success(
            <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch(err => console.log(err))

  }

  return (
    <div
    className='w-100 h-auto align-items-center'
    style={{
          backgroundImage: `url(${require('@src/assets/images/logo/banner.png').default})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
        }}
  >
 
         <div className='d-lg-flex align-items-center justify-content-center '>

            <div className='mx-lg-5 px-lg-5 mx-1 py-5 py-lg-0'>
                  <div className="">
                    <h3 className="pb-1">First time here ?</h3>
                    <h2 className="pb-1">Join now and get<br /> <span >20% OFF</span> for all <br /> products</h2>
                    <ul className="list-unstyled mb-0 pb-1">
                        <li><img src="https://img.icons8.com/material-sharp/16/000000/checkmark--v1.png" /> Premium Access to all Products</li>
                        <li><img src="https://img.icons8.com/material-sharp/16/000000/checkmark--v1.png" /> Free Testing Tools</li>
                        <li><img src="https://img.icons8.com/material-sharp/16/000000/checkmark--v1.png" /> Unlimited User Accounts</li>
                    </ul>
                    <Button.Ripple tag={Link} to='/register' color='primary'>
                      Sign Up
                    </Button.Ripple>
                  </div>
            </div>

            <div style={{height: '100vh'}} className='px-lg-5 mx-1 mx-lg-0 align-items-center d-flex'>
            <Card className='mx-lg-5 '>
              <CardBody>
                <CardTitle tag='h2' className='font-weight-bold mb-1'>
                  Welcome to Bidoya!
                </CardTitle>

                {/* form to Add Data*/}

                <Form  onSubmit={e => e.preventDefault()}>
                    <FormGroup>
                      <Label className='form-label' for='login-email'>
                        UserName
                      </Label>
                      <Input type='text' onChange={(e) => setValues({
                        ...values,
                        identifier: e.target.value
                      })} id='login-email' placeholder='john121' autoFocus />
                    </FormGroup>

                    <FormGroup>
                      <div className='d-flex justify-content-between'>
                        <Label className='form-label' for='login-password'>
                          Password
                        </Label>
                        <Link to='/forgot'>
                          <small>Forgot Password?</small>
                        </Link>
                      </div>
                      <InputPasswordToggle onChange={(e) => setValues({
                        ...values,
                        password: e.target.value
                      })} className='input-group-merge' id='login-password' />
                    </FormGroup>

                    <FormGroup className='d-flex justify-content-between'>
                      <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
                      <CustomInput type='checkbox' onChange={(e) => setchecked(e.target.checked) } className='custom-control-Primar1' id='Seller' label='As Seller' />
                    </FormGroup>

                    <div className='d-flex justify-content-center'>
                      <p className='text-center col-10'>Default Will be Buyer, To Login As Seller Please Check " As Seller".</p>
                    </div>

                    <Button.Ripple onClick={() => {
                      onSubmitData()
                    } } color='primary' block>

                      Sign in
                    </Button.Ripple>

                </Form>

                <p className='text-center mt-2'>
                  <span>New on our Bidoya?</span>
                  <Link to='/register'>
                    <span>Create your account</span>
                  </Link>
                </p>

                <div className='divider '>
                  <div className='divider-text'>Social Profiles</div>
                </div>

                <div className='auth-footer-btn d-flex justify-content-center '>
                  <Button.Ripple className="mr-1 p-1"  color='facebook'>
                    <Facebook size={14} />
                  </Button.Ripple>
                  <Button.Ripple className="mr-1 p-1" color='twitter'>
                    <Twitter size={14} />
                  </Button.Ripple>
                  <Button.Ripple className=" p-1" color='google'>
                    <Mail size={14} />
                  </Button.Ripple>
                </div>
              </CardBody>
            </Card>
            </div>
          
         </div>
        
    </div>
  )
}

export default Login
