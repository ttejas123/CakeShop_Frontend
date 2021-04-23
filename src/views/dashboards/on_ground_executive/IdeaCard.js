import { Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap'



const IdeaCard = () => {
    return (
        <Card>
            {/* <CardImg top src={img1} alt='card1' /> */}
            <CardBody>


                <CardTitle tag='h4'>Idea of the day</CardTitle>
                <CardText>
                    Make sure to send daily status report before 6 PM.
                  </CardText>
            </CardBody>

        </Card>
    )
}

export default IdeaCard
