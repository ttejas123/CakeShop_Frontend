// ** Logo
import logo from '@src/assets/images/logo/logo.jpg'

const SpinnerComponent = () => {
  return (
    <div className='fallback-spinner vh-100'>
<<<<<<< HEAD
      <img className='fallback-logo' style={{}}  height='50'
          width='50' src={logo} alt='logo' />
      <div className='loading'>
=======
      <div className="mr-5 ">
        <img className='fallback-logo col-md-1' src={logo} alt='logo' />
      </div>
      <div className='loading mt-5 ml-2'>
>>>>>>> Tejas
        <div className='effect-1 effects'></div>
        <div className='effect-2 effects'></div>
        <div className='effect-3 effects'></div>
      </div>
    </div>
  )
}

export default SpinnerComponent
