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
const HorizontalForm = (props) => {
  const [code, setCode] = useState("")
  const [symbol, setSymbol] = useState("")
  const loading = useSelector((state) => state.currency.addCurrencyLoading)
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
    props.handleSubmit({ code, symbol })
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
                    placeholder="Currency Code"
                    value={code}
                    onChange={handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup className="ml-2" row>
                <Label sm="4" size="lg" for="Email">
                  Symbol
                </Label>
                <Col sm="8">
                  <Input
                    type="text"
                    name="symbol"
                    id="symbol"
                    placeholder="Symbol"
                    value={symbol}
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
export default HorizontalForm

