import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  CustomInput,
  Label
} from "reactstrap"
import Loader from "../../ExCompUse/loader"
import { useSelector } from "react-redux"
const EditForm = (props) => {
  const [code, setCode] = useState(props.data.code)
  const [symbol, setSymbol] = useState(props.data.symbol)
  const loading = useSelector((state) => state.currency.editCurrencyLoading)
  const handleInputChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case "code":
        setCode(value)
        break
      case "symbol":
        setSymbol(value)
    }
  }

  const handleSubmit = () => {
    props.handleSubmit({ code, symbol, id: props.data.id })
  }
  return (
    <Card>
      <CardBody>
        <Form>
          <Row>
            <Col className="d-flex" md={{ size: 9, offset: 3 }}>
              <FormGroup row md={{ size: 9, offset: 3 }}>
                <Label sm="4" size="lg" for="name">
                  Code
                </Label>
                <Col sm="8">
                  <Input
                    type="text"
                    name="code"
                    id="code"
                    value={code}
                    placeholder="Code"
                    onChange={handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="ml-2" row>
                <Label sm="4" size="lg" for="symbol">
                  Symbol
                </Label>
                <Col sm="8">
                  <Input
                    type="text"
                    name="symbol"
                    value={symbol}
                    id="symbol"
                    placeholder="Symbol"
                    onChange={handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="mb-0 mx-auto" row>
            <Col className="d-flex" md={{ size: 8, offset: 5 }}>
              <Button.Ripple
                className="mr-1"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                {loading ? <Loader color="light" /> : "Submit"}
              </Button.Ripple>
              <Button.Ripple outline color="secondary" type="reset" onClick={props.handleCancel}>
                Cancel
              </Button.Ripple>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}
export default EditForm
