import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import BasicTimeline from './BasicTimeline'
const Timeline = () => {
  return (
    <Fragment>
      <Row>
        <Col lg='6'>
          <BasicTimeline />
        </Col>
      </Row>

    </Fragment>
  )
}

export default Timeline
