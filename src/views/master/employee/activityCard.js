import { Table, Card } from "reactstrap"
import { Fragment, useState, forwardRef } from "react"
import { selectThemeColors } from "@utils"
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import { ChevronDown } from "react-feather"

import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"

const ActivityStats = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const data = [
    {
      id: 1,
      userName: "Komal Kamble",
      activity: "Created bid B00123",
      date: "12-04-2021"
    },
    {
      id: 2,
      userName: "Tejas Thakre",
      activity: "Created bid B0013",
      date: "12-04-2021"
    },
    {
      id: 3,
      userName: "Pravin Poshmani",
      activity: "Created bid B0014",
      date: "12-04-2021"
    },
    {
      id: 4,
      userName: "Salman Khan",
      activity: "Created bid B0015",
      date: "12-04-2021"
    },
    {
      id: 5,
      userName: "Ranveer Singh",
      activity: "Created bid B0015",
      date: "12-04-2021"
    },
    {
      id: 6,
      userName: "Allu Arjun",
      activity: "Created bid B0016",
      date: "12-04-2021"
    },
    {
      id: 1,
      userName: "Alia Bhatt",
      activity: "Created bid B0017",
      date: "12-04-2021"
    }
  ]

  const columns = [
    {
      name: "Activity",
      selector: "activity",
      sortable: true,
      minWidth: "50px"
    },
    {
      name: "Date",
      selector: "date",
      sortable: true,
      minWidth: "150px"
    }
  ]
  const renderData = () => {
    return data.map((col) => {
      return (
        <tr key={col.id}>
          <td>
            <div className="d-flex align-items-center">
              <div>
                <div className="font-weight-bolder">{col.userName}</div>
                {/*<div className='font-small-1 text-muted'>{col.email}</div>*/}
              </div>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <span>{col.activity}</span>
            </div>
          </td>
          <td className="text-nowrap">
            <div className="d-flex flex-column">
              <span className="font-weight-bolder mb-25">{col.date}</span>
            </div>
          </td>
        </tr>
      )
    })
  }

  const handlePagination = (page) => {
    setCurrentPage(page.selected)
  }

  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={data.length / 4 || 1}
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
  )

  return (
    <Card className="card-company-table">
      <DataTable
        noHeader
        pagination
        columns={columns}
        paginationPerPage={4}
        className="react-dataTable"
        sortIcon={<ChevronDown size={10} />}
        paginationDefaultPage={currentPage + 1}
        paginationComponent={CustomPagination}
        data={data}
      />
    </Card>
  )
}

export default ActivityStats
