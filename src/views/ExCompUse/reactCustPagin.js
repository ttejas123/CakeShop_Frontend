import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
    // ** Custom Pagination
const CustomPagination = (props) => { 
    const [currentPage, setCurrentPage] = useState(0)
    const useDisplatch = useDispatch()
    if (props.SearchDetails) {
      useEffect(() => {
        setCurrentPage(0)
      }, [props.SearchDetails])
    }
    const handlePagination = page => {
      
      const start = page.selected > 0 ? (page.selected * 5) : 0
      if (props.SearchDetails) {
        useDisplatch(props.dispachReq(5, start, props.SearchDetails.data))
      } else {
        useDisplatch(props.dispachReq(5, start))
      }
      setCurrentPage(page.selected)
    }
    return (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={props.followData.count / 5 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
)
}

export default CustomPagination