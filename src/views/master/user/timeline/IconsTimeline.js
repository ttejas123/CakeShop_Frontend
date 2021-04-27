import Timeline from '@components/timeline'
import { basicData } from './data'
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap'

const IconsTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={basicData} />
      </CardBody>
    </Card>
  )
}

export default IconsTimeline
