import { Card, CardBody, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownMenu, DropdownItem, Row, Col, Form, FormGroup, Label, InputGroup, Input   } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { Monitor, Coffee, Watch, Eye, ChevronDown, Trash, MoreVertical, Edit, FileText, Archive} from 'react-feather'
import { Fragment, useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import img1 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
import panCard from './PurchaseOrder.jpg'
import aadharCard from './PurchaseInvoice.jpg'
import ReactPaginate from 'react-paginate'
import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'


const CompanyTable = () => {
  const initvalue = {
    name:""
  }
  const initialvalues = {
    id:0,
    logo:'',
    Name:''
  }
  const [values, setValues] = useState(initialvalues)
  const [selectedItem, setSelectedItem] = useState(initvalue)
  const [modalstatus, setModalStatus] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [reuploadForm, setReUploadForm] = useState(false)
  const [img, setImg] = useState(null)

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

 
  const data = [
      {
        
        id : 1,
        previewMsg: "I want to add t-shirt logo with 3 different colors",
        currentMsg: "Add Company Name on t-shirt",
        user: "Tejas Thakare"
      },
      {
        id : 2,
        previewMsg: "I want to add t-shirt logo with 3 different colors",
        currentMsg: "Add Company Name on t-shirt",
        user: "Tejas Thakare"
      },
      {
        id : 3,
        previewMsg: "I want to add t-shirt logo with 3 different colors",
        currentMsg: "Add Company Name on t-shirt",
        user: "Tejas Thakare"
      },
      {
        
        id : 4,
        previewMsg: "I want to add t-shirt logo with 3 different colors",
        currentMsg: "Add Company Name on t-shirt",
        user: "Tejas Thakare"
      }

    ]

    const handleViewClick = (row) => {
      setSelectedItem(row)
      setModalStatus(!modalstatus)
      console.log(row)
    }

    const docColumns = [
      {
        name: 'Previous message',
        selector: 'previewMsg',
        sortable: false,
        minWidth: '120px'
      },
      {
        name: 'current message',
        selector: 'currentMsg',
        sortable: false,
        minWidth: '120px'
      },
      {
        name: 'who approved',
        selector: 'user',
        sortable: false,
        minWidth: '120px'
      },
      {
        name: 'Action',
        selector: 'symbol',
        minWidth: '90px',
        cell: row => {
          return (
        <div className='d-flex align-items-center cursor-p'>
        <span style={{cursor:"pointer"}}><Edit size={20}  onClick={ e => { 
                                                  e.preventDefault() 
                                                  handleViewClick(row) 
                                                  } }/></span>
        </div>
          )
       }
      }
    ]

    const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : data.length / 7 || 1}
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


  const renderData = () => {
    return data.map(col => {
      return (
        <tr key={col.name}>
          <td>
            <div className='d-flex align-items-center'>
              <div>
                <div className='font-weight-bolder'>{col.name}</div>
                { /*<div className='font-small-1 text-muted'>{col.email}</div>*/ }
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <span><Eye color="LightGreen" /></span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='font-weight-bolder mb-25'>{col.Date}</span>
            </div>
          </td>
        </tr>
      )
    })
  }

  const toggleModal = () => {
    // if (modal !== id) {
    //   setModal(id)
    // } else {
    //   setModal(null)
    // }
  }

  return (
    <>
    <Fragment key={selectedItem.name}>
    {/* <div>
      <Button.Ripple color='primary' onClick={() => toggleModal(item.id)} key={selectedItem.name} outline>
        {selectedItem.name}
      </Button.Ripple>
    </div> */}
    <Modal
      isOpen={modalstatus}
      // toggle={() => toggleModal(item.id)}
      className={`modal-dialog-centered modal-lg`}
      key={selectedItem.id}
    >
      <ModalHeader toggle={() => setModalStatus(!modalstatus)}>
        {selectedItem.name}
        
      </ModalHeader>
      <ModalBody>
       {/*<img className='d-flex mx-auto' width="500" src={selectedItem.img}/>*/}
      <Card>
                  <Row>
                    
                    <CardBody className='pl-3 pt-2'>
                    <Col sm='12'>
                      <Form onSubmit={e => e.preventDefault()}>
                        <Row>

                          <Col md='6' sm='12'>
                            <FormGroup>
                              <Label for='Name'>Previous Message</Label>
                              <InputGroup>
                                
                                <Input name="Name" onChange={(e) => {
                                  setSelectedItem({
                                    ...selectedItem,
                                    previewMsg:  e.target.value
                                  })
                                }} id='Name' type="textarea" disabled value={selectedItem.previewMsg} />
                              </InputGroup>
                            </FormGroup>
                          </Col>

                          <Col md='6' sm='12'>
                            <FormGroup>
                              <Label for='Currentmsg'>Current Message</Label>
                              <InputGroup>
                                
                                <Input name="Currentmsg" onChange={(e) => {
                                  setSelectedItem({
                                    ...selectedItem,
                                    currentMsg :  e.target.value
                                  })
                                }} id='Currentmsg' type="textarea"  value={selectedItem.currentMsg} />
                              </InputGroup>
                            </FormGroup>
                          </Col>

                          <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                            <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' onClick={() => setModalStatus(!modalstatus)}>
                                  Save Changes
                            </Button.Ripple>
                            <Button.Ripple color='secondary' outline>
                                  Reset
                            </Button.Ripple>
                          </Col> 
                        </Row>
                      </Form>
                    </Col>
                    </CardBody> 
                  </Row>
        </Card>
      </ModalBody>
      <ModalFooter>
        { !reuploadForm ? <>
        
        <Button.Ripple color='primary' type='submit' onClick={() => {
          //selectedItem.id
        }
          }>
          Aproved
        </Button.Ripple>
        </> : <> <Button.Ripple color='primary' type='submit' onClick={() => setReUploadForm(!reuploadForm)} >
        Back
      </Button.Ripple>
      <Button.Ripple color='primary' type='submit' onClick={() => {
         onDocumentUpload(selectedItem.id)
        }
        }  >
        Upload
      </Button.Ripple>
       </>
        }
        
      </ModalFooter>
    </Modal>
  </Fragment>
    <Card>
    <DataTable
      noHeader
      pagination
      data={data}
      paginationPerPage={4}
      columns={docColumns}
      className='react-dataTable'
      paginationComponent={CustomPagination}
      sortIcon={<ChevronDown size={10} />}
    />
  </Card>
  </>
  )
}

export default CompanyTable
