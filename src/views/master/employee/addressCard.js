import Chart from "react-apexcharts"
import { Fragment, useState } from "react"
import { Card, CardTitle, CardText, CardBody, Row, Col } from "reactstrap"
import ReactPaginate from "react-paginate"

const Address = ({ data }) => {
  console.log(data)
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <Fragment>
      <Card className="Details-card">
        <CardBody>
          <Row>
            <Col xs="12">
              <CardTitle className="mb-1">Address</CardTitle>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="font-small-2">Area : </div>
                <h5 className="mb-1">{data[currentPage].area}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <div className="font-small-2">Street Name : </div>
                <h5 className="mb-1">{data[currentPage].street_name}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <div className="font-small-2">City : </div>
                <h5 className="mb-1">{data[currentPage].city.name}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <div className="font-small-2">State : </div>
                <h5 className="mb-1">{data[currentPage].city.state.name}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <div className="font-small-2">PinCode : </div>
                <h5 className="mb-1">{data[currentPage].pincode}</h5>
              </div>
              <div className="d-flex justify-content-between">
                <div className="font-small-2">Country : </div>
                <h5 className="mb-1"> {data[currentPage].city.state.country.country_name}</h5>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <ReactPaginate
                  className="mx-auto"
                  previousLabel=""
                  nextLabel=""
                  forcePage={currentPage}
                  onPageChange={(page) => {
                    setCurrentPage(page.selected)
                  }}
                  pageCount={data.length}
                  breakLabel="..."
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={2}
                  activeClassName="active"
                  pageClassName="page-item"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  nextClassName="page-item next"
                  previousClassName="page-item prev"
                  previousLinkClassName="page-link"
                  pageLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default Address
