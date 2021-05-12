import Timeline from '@components/timeline'
import { basicData } from './data'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'

const BasicTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Bid Timeline</CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={basicData} />
      </CardBody>
    </Card>
  )
}

export default BasicTimeline
