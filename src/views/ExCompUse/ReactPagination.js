import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// ** Custom Pagination
const CustomPagination = (props) => {
  const useDisplatch = useDispatch()
  const handlePagination = (page) => {
    useDisplatch(props.dispachReq(5, page.selected * 5))
    props.setCurrentPage(page.selected)
  }
  return (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={props.currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={props.followData.count / 5 || 1}
      breakLabel="..."
      paginationPerPage={5}
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
  )
}

export default CustomPagination
