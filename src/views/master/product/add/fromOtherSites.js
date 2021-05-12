// ** Third Party Components
import {
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText
  } from 'reactstrap'
  import { Twitter, Facebook, Instagram, GitHub, Codepen, Slack } from 'react-feather'
  
  const FromOtherSitesTab = () => {
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
         <Col sm='12'>
         <a className='d-flex mx-auto' href='https://www.amazon.in/' target='_blank' rel='noopener noreferrer'>
         https://www.amazon.in/
          </a>
         </Col>
         {/* <Col sm='6'>
         <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
              Fetch
            </Button>
           </Col>   */}
          <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
            <Button className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
              Fetch
            </Button>
            <Button color='secondary' outline>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
  export default FromOtherSitesTab
  