import { Search } from 'react-feather'
import { Card, CardBody, CardText,  Row, Col, Button, Input, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap'
import '@styles/base/pages/page-knowledge-base.scss'
import './style.css'
import MTIMG from '@src/assets/images/banner/Tejas.png'
const Header = ({ searchTerm, setSearchTerm, handleFilter }) => {
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }

  return (
      <>
    <div id='' >
      <div>
       
          <CardText className='d-flex justify-content-center'>
              <p className=' h3 mt-1 normalText' style={{color:'#9db6d7', fontSize:'1.2rem', fontWeight:805}}>TRUSTED BY INDUSTRY EXPERTS AND LEADERS IN</p>
          </CardText>

      </div>
    </div>
    </>
  )
}

export default Header
