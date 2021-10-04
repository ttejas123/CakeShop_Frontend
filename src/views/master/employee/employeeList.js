// ** Custom Components
import Avatar from "@components/avatar"
import { Link } from "react-router-dom"
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import "@styles/react/libs/react-select/_react-select.scss"
import "@styles/react/libs/tables/react-dataTable-component.scss"
import {
  fetchEmployees,
  deleteBidoyaEmployee,
  removeEmployeeAddress
} from "@src/redux/actions/master/employee/index"
import { fileDelete } from "../../../redux/actions/file"
import CustomPagination from "@src/views/ExCompUse/ReactPagination"
import Loader from "../../ExCompUse/loader"

// ** React Imports
import { Fragment, useState, forwardRef, useEffect } from "react"
import { selectThemeColors } from "@utils"
// ** Table Data & Columns
import { data } from "./data"
import Select from "react-select"

// ** Add New Modal Component
//import FormModel from './formModel'

// ** Third Party Components
import ReactPaginate from "react-paginate"
import DataTable from "react-data-table-component"
import {
  ChevronDown,
  Share,
  Printer,
  File,
  Grid,
  Copy,
  Plus,
  MoreVertical,
  Edit,
  FileText,
  Archive,
  Trash
} from "react-feather"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col,
  Badge,
  UncontrolledDropdown
} from "reactstrap"
import { useDispatch, useSelector } from "react-redux"

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" ref={ref} {...rest} />
    <label className="custom-control-label" onClick={onClick} />
  </div>
))

// ** Renders Client Columns
const renderClient = (row) => {
  const stateNum = Math.floor(Math.random() * 6),
    states = [
      "light-success",
      "light-danger",
      "light-warning",
      "light-info",
      "light-primary",
      "light-secondary"
    ],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className="mr-1" img={row.avatar} width="32" height="32" />
  } else {
    return (
      <Avatar
        color={color || "primary"}
        className="mr-1"
        content={row.Name || "John Doe"}
        initials
        status="online"
      />
    )
  }
}

const optionBidStatus = [
  { value: "", label: "Filter Status" },
  { value: "intern", label: "Intern" },
  { value: "fullTimeEmployee", label: "Full Time Employee" },
  { value: "admin", label: "Admin" }
]

const EmployeeList = () => {
  const employees = useSelector((state) => state.employee)
  const usedispatch = useDispatch()
  useEffect(() => {
    usedispatch(fetchEmployees(5, 0))
    return () => usedispatch({ type: "employees_reset_list" })
  }, [usedispatch])
  const statusObj = {
    pending: "light-secondary",
    approved: "light-success",
    approval: "light-warning"
  }

  //** Pagination state
  const [currentPage, setCurrentPage] = useState(0)
  const [currentPageForSearch, setCurrentPageForSearch] = useState(0)
  useEffect(() => {
    setCurrentPageForSearch(currentPage)
  }, [currentPage])

  // ** States
  const [modal, setModal] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState("")
  const [Filter, setFilter] = useState("")

  //deleteCountry
  const handleDelete = (data) => {
    const userselection = confirm("Are you sure you want to delete")
    if (userselection === true) {
      console.log(data)
      if (data.profile_pic_id !== null) {
        usedispatch(fileDelete(data.profile_pic_id))
      }
      data.emplyee_addresses.forEach((e) => {
        usedispatch(removeEmployeeAddress(e.id))
      })
      usedispatch(deleteBidoyaEmployee(data.id)).then(() => {
        if (employees.data.length === 1) {
          let num = currentPage - 1
          if (num < 1) num = 0
          num *= 5
          usedispatch(fetchEmployees(5, num)).then(() => {
            setCurrentPage(currentPage - 1)
          })
        } else {
          usedispatch(fetchEmployees(5, currentPage * 5))
        }
      })
    } else {
      console.log("not deleted ")
    }
  }
  //edit action
  const AddeditEvent = (val) => {
    //here we hande event which comming from addNewModel.js (Form for add and edit)
    setCurrentId("")
  }

  //columns
  const columns = [
    {
      name: "Employee Number",
      selector: "employeeNumber",
      sortable: true,
      minWidth: "50px",
      cell: (row) => (
        <div key={row.employeeNumber} className="d-flex align-items-center">
          <Link to={`/employee-view`}>
            <div className="user-info text-truncate">
              <span className="d-block font-weight-bold text-truncate">{row.employeeNumber}</span>
            </div>
          </Link>
        </div>
      )
    },
    {
      name: "First Name",
      selector: "firstName",
      sortable: true,
      minWidth: "150px",
      cell: (row) => (
        <div key={row.employeeNumber} className="d-flex align-items-center">
          <Link to={`/employee-view/${row.id}`}>
            <div className="user-info text-truncate">
              <span className="d-block font-weight-bold text-truncate">{row.firstName}</span>
            </div>
          </Link>
        </div>
      )
    },
    {
      name: "Last Name",
      selector: "lastName",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Mobile",
      selector: "mobile",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Role",
      selector: "role",
      sortable: true,
      minWidth: "150px"
    },
    {
      name: "Last Login Date",
      selector: "lastLoginDate",
      sortable: true,
      minWidth: "150px"
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
                    e.preventDefault()
                    handleDelete(row)
                  }}
                />
              </DropdownToggle>
            </UncontrolledDropdown>
            <Link to={`/edit-employee/${row.id}`}>
              <Edit
                size={15}
                onClick={() => {
                  setCurrentId(row.id)
                  setModal(true)
                }}
              >
                <Link to="/edit-employee" />
              </Edit>
            </Link>
          </div>
        )
      }
    }
  ]

  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="4">
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className="react-select"
                classNamePrefix="select"
                options={optionBidStatus}
                value={Filter}
                onChange={(data) => {}}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader className="flex-md-row flex-column align-md-items-center align-items-start border-bottom">
          <CardTitle tag="h4">Employees</CardTitle>
          <div className="d-flex mt-md-0 mt-1"></div>
        </CardHeader>

        <Row className="justify-content-end mx-0">
          <Col className="d-flex align-items-center justify-content-end mt-1" md="6" sm="12">
            <Label className="mr-1" for="search-input">
              Search
            </Label>
            <Input
              className="dataTable-filter mb-50"
              type="text"
              bsSize="sm"
              placeHolder="Enter Name"
              id="search-input"
              onChange={(e) => {
                usedispatch(fetchEmployees(5, 0, e.target.value)).then(() => {
                  if (e.target.value === "") {
                    setCurrentPage(currentPageForSearch)
                    usedispatch(fetchEmployees(5, currentPage * 5)).then(() => {
                      setCurrentPageForSearch(currentPage)
                    })
                  }
                })
              }}
            />
          </Col>
        </Row>

        {employees.fetchEmployeesLoading ? (
          <Loader color="primary" divHeight="40vh" spinnerHeight="5rem" spinnerWidth="5rem" />
        ) : (
          <Fragment>
            <DataTable
              noHeader
              selectableRows
              columns={columns}
              className="react-dataTable"
              sortIcon={<ChevronDown size={10} />}
              data={employees.data}
              selectableRowsComponent={BootstrapCheckbox}
            />
          </Fragment>
        )}
        <CustomPagination
          followData={employees}
          dispachReq={fetchEmployees}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Card>
    </Fragment>
  )
}

export default EmployeeList
