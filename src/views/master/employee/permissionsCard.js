import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col, Table, CustomInput } from 'reactstrap'
import { Lock} from 'react-feather'
const Permissions = () => {
  return (
    <Card className='Details-card'>
      <CardBody>
        <Row>
          <Col xs='12'>
            <CardTitle className='mb-1'>
                <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                  <Lock size={18} className='mr-25' />
                  <span className='align-middle'>Permissions</span>
                </h6>
                </CardTitle>
            <div className='permissions border mt-1' style={{cursor:'pointer', pointerEvents:'none'}}>
                <Table borderless striped responsive >
                  <thead className='thead-light'>
                    <tr>
                      <th>Rights</th>
                      <th>Create</th>
                      <th>Delete</th>
                      <th>Update</th>
                      <th>View</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Master</td>
                      <td>
                        <CustomInput type='checkbox' id='master-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='master-4' label='' />
                      </td>
                    </tr>
                    <tr>
                      <td>Reports</td>
                      <td>
                        <CustomInput type='checkbox' id='reports-1' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-2' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-3' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='reports-4' label='' />
                      </td>
                      </tr>
                    <tr>
                      <td>USer</td>
                      <td>
                        <CustomInput type='checkbox' id='user-1' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-2' label='' />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-3' label='' defaultChecked />
                      </td>
                      <td>
                        <CustomInput type='checkbox' id='user-4' label='' />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Permissions