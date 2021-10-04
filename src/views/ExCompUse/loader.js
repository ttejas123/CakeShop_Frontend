import { Spinner } from 'reactstrap'

const Loader = ({ color, divHeight, spinnerHeight, spinnerWidth }) => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: divHeight }}>
      <Spinner color={color} style={{ width: spinnerHeight, height: spinnerWidth }} />
    </div>
  )
}
export default Loader
