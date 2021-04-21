import { Fragment, useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button }  from 'reactstrap'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'

import {data} from './data'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
const UsersList = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.users)
  
    // ** States
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [currentRole, setCurrentRole] = useState({ value: '', label: 'Select Role' })
    const [currentPlan, setCurrentPlan] = useState({ value: '', label: 'Select Plan' })
    const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })
  
    const basicColumns = [
        {
          name: 'State Name',
          selector: 'StateName',
          sortable: true
        //   maxWidth: '100px'
        }
    ]
    // ** User filter options
  const roleOptions = [
    { value: '', label: 'Select Role' },
    { value: 'USA', label: 'USA' },
    { value: 'India', label: 'India' }
  ]
  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
   
  }, [dispatch, store.data.length])
    return (
        <Card>
               <CardBody>
          <Row>
            <Col md='4'>
              <Select
                isClearable={false}
                // theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={roleOptions}
                value={currentRole}
                onChange={data => {
                  setCurrentRole(data)
                //   dispatch(
                //     getData({
                //       page: currentPage,
                //       perPage: rowsPerPage,
                //       role: data.value,
                //       currentPlan: currentPlan.value,
                //       status: currentStatus.value,
                //       q: searchTerm
                //     })
                //   )
                }}
              />
              </Col>
              </Row>
              </CardBody>

         <DataTable
        noHeader
        pagination
        data={data}
        columns={basicColumns}
        className='react-dataTable'
        // sortIcon={<ChevronDown size={10} />}
        paginationRowsPerPageOptions={[10, 25, 50, 100]}
      />
      </Card>
    )

}
export default UsersList
