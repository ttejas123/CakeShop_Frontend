// ** Logo
import logo from '@src/assets/images/logo/logo.jpg'

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner vh-100'>
      <div className="mr-5">
        <img className='fallback-logo mr-5 col-md-1' src={logo} alt='logo' />
      </div>
      <div className='loading mt-5'>
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div>
  )
}

export default SpinnerComponent
