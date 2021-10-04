// ** React Imports
import { Fragment, useEffect, useState } from "react"
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"
// ** Table Columns
import { data1 } from "./data"
import {
  fetchCurrencies,
  updateCurrency,
  addCurrency,
  deleteCurrency
} from "@src/redux/actions/master/currency/index"
import Loader from "../../ExCompUse/loader"
import CustomPagination from "@src/views/ExCompUse/ReactPagination"

// ** Third Party Components
import ReactPaginate from "react-paginate"
import { FormattedMessage } from "react-intl"
import DataTable from "react-data-table-component"
import { MoreVertical, Edit, FileText, Archive, Trash, ChevronDown, Plus } from "react-feather"
import {
  Card,
  CardHeader,
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Row,
  Col,
  Label,
  Input
} from "reactstrap"
//import InputBasic from './AddCurrency'
import HorizontalForm from "./AddCurrency"
import EditForm from "./EditCurrency"
import { useDispatch, useSelector } from "react-redux"

const CurrencyList = () => {
  const usedispatch = useDispatch()
  useEffect(() => {
    usedispatch(fetchCurrencies(5, 0))
    return () => usedispatch({ type: "currency_reset_list" })
  }, [usedispatch])

  //** Pagination state
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageForSearch, setCurrentPageForSearch] = useState(0)
  useEffect(() => {
    setCurrentPageForSearch(currentPage)
  }, [currentPage])

  const currencies = useSelector((state) => state.currency)
  const [addClicked, setAddClicked] = useState(0)
  const [editClicked, setEditClicked] = useState(0)
  const [editData, setEditData] = useState({})

  const handleEditClick = (item) => {
    if (!addClicked) {
      setEditClicked(!editClicked)
      setEditData(item)
    }
    //console.log(item)
  }

  const handleAddClick = () => {
    if (!editClicked) {
      setAddClicked(!addClicked)
    }
  }

  const handleCancelOfEdit = () => {
    console.log("in Cancel")
    setEditClicked(!editClicked)
  }
  const handleCancelOfAdd = () => {
    console.log("in Cancel")
    setAddClicked(!addClicked)
  }
  const handleSubmitOfAdd = ({ code, symbol }) => {
    if (code === "" || symbol === "") return
    usedispatch(addCurrency(code, symbol)).then((action) => {
      while (!action) {}
      setAddClicked(!addClicked)
    })
  }

  const handleSubmitOfEdit = ({ id, symbol, code }) => {
    if (code === "" || symbol === "") return
    usedispatch(updateCurrency(id, symbol, code)).then((action) => {
      while (!action) {}
      setEditClicked(!editClicked)
    })
  }

  const handleDelete = ({ id }) => {
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      usedispatch(deleteCurrency(id)).then(() => {
        if (currencies.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchCurrencies(5, num)).then((action) => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchCurrencies(5, currentPage * 5))
        }
      })
      console.log(" your record is deleted")
    } else {
      console.log("not deleted ")
    }
  }

  const currencyColumns = [
    {
      name: "Currency Code",
      selector: "code",
      sortable: true,
      minWidth: "250px"
    },
    {
      name: "Symbol",
      selector: "symbol",
      sortable: false,
      minWidth: "250px",
      cell: (row) => <div style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>{row.symbol}</div>
    },
    {
      name: "Actions",
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className="d-flex">
            <UncontrolledDropdown>
              <DropdownToggle className="pr-1" tag="span">
                <Trash
                  size={15}
                  onClick={(e) => {
                    handleDelete(row)
                  }}
                />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Edit
              size={15}
              onClick={(e) => {
                e.preventDefault()
                handleEditClick(row)
              }}
            />
          </div>
        )
      }
    }
  ]

  // ** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className="align-middle d-none d-md-inline-block">
          {/* <FormattedMessage id='Prev' /> */}
        </span>
      </Fragment>
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className="align-middle d-none d-md-inline-block">
          {/* <FormattedMessage id='Next' /> */}
        </span>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Currency List</CardTitle>
          <Button className="ml-2" color="primary" onClick={handleAddClick}>
            <Plus size={15} />
            <span className="align-middle ml-50">Add Currency</span>
          </Button>
        </CardHeader>
        {addClicked ? (
          <HorizontalForm handleCancel={handleCancelOfAdd} handleSubmit={handleSubmitOfAdd} />
        ) : null}
        {editClicked ? (
          <EditForm
            data={editData}
            handleCancel={handleCancelOfEdit}
            handleSubmit={handleSubmitOfEdit}
          />
        ) : null}
        <Row className="justify-content-end mx-0">
          <Col className="d-flex align-items-center justify-content-end mt-1" md="6" sm="12">
            <Label className="mr-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              id="search-input"
              placeHolder="Currency code"
              onChange={(e) => {
                usedispatch(fetchCurrencies(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchCurrencies(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>
        {currencies.fetchCurrencyLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              selectableRowsNoSelectAll
              columns={currencyColumns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={currencies.data}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={currencies}
          dispachReq={fetchCurrencies}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {/* <CardFooter>
        <CardText className='mb-0'>
          <span className='font-weight-bold'>Note:</span>{' '}
          <span>Use Intl Dropdown in Navbar to change table language</span>
        </CardText>
      </CardFooter> */}
      </Card>
    </Fragment>
  )
}

export default CurrencyList
