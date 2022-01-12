import Breadcrumbs from '@components/breadcrumbs'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody
} from "reactstrap"
import Avatar from '@components/avatar'
import img from '@src/assets/images/banner/banner-1.jpg'
import asvatar from '@src/assets/images/avatars/1-small.png'
const Main = () => {
  const n = [1, 2, 3, 4, 5]
  return (
      <>
      <div>
        <Breadcrumbs breadCrumbTitle='Videos' breadCrumbParent='Study Material' breadCrumbActive='Videos' />
       
        {
          n.map(val => {
            return (
              <div className='m-0 p-0 border'>
                <img src={img} className='img-fluid' />
                <div className='m-1 d-flex align-items-center' >
                  <Avatar img={asvatar} size='md' width="10" height="200" />
                  <h5 className='ml-1'><b>Imperial blue commercial</b></h5>
                </div>
              </div>
              )
          })
        }
        
      </div>
    </>
  )
}

export default Main
