import { Card, CardBody, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownMenu, DropdownItem} from 'reactstrap'
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

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    console.log(file)
    setImg(preview)
  })
  const onDocumentApprove = (id) => {
    setModalStatus(!modalstatus)
  }
  const onDocumentReject = (id) => {
    setModalStatus(!modalstatus)
  }
  const onDocumentReupload = (id) => {
    setReUploadForm(!reuploadForm)
  }
  const onDocumentUpload = (id) => {
    setReUploadForm(!reuploadForm)
    setModalStatus(!modalstatus)
  }
  const data = [
      {
        img: panCard,
        name: 'Purchase Order',
        email: 'meguc@ruj.io',
        approvedBy : "Pravin",
        status : "Aproved",
        icon: <Monitor size={18} />,
        nav: 'Technology',
        Date: '12-feb-21',
        time: '24 hours',
        revenue: '891.2',
        sales: '68',
        id : 1
      },
      {
        img: aadharCard,
        name: 'Invoice121',
        email: 'vecav@hodzi.co.uk',
        approvedBy : "Tejas",
        status : "Rejected",
        icon: <Coffee size={18} />,
        nav: 'Grocery',
        Date: '23-feb-21',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true,
        id : 2
      },
      {
        img: aadharCard,
        name: 'Invoice231',
        email: 'vecav@hodzi.co.uk',
        approvedBy : "Tejas",
        status : "Rejected",
        icon: <Coffee size={18} />,
        nav: 'Grocery',
        Date: '23-feb-21',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true,
        id : 3
      },
      {
        img: aadharCard,
        name: 'Invoice321',
        email: 'vecav@hodzi.co.uk',
        approvedBy : "Tejas",
        status : "Rejected",
        icon: <Coffee size={18} />,
        nav: 'Grocery',
        Date: '23-feb-21',
        time: '2 days',
        revenue: '668.51',
        sales: '97',
        salesUp: true,
        id : 4
      }

    ]

    const handleViewClick = (row) => {
      setSelectedItem(row)
      setModalStatus(!modalstatus)
      console.log(row)
    }

    const docColumns = [
      {
        name: 'Document Name',
        selector: 'name',
        sortable: false,
        minWidth: '200px'
      },
      {
        name: 'View',
        selector: 'symbol',
        cell: row => {
          return (
        <div className='d-flex align-items-center cursor-p'>
        <span style={{cursor:"pointer"}}><Eye color="LightGreen"  onClick={ e => { 
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
      key={selectedItem.name}
    >
      <ModalHeader toggle={() => setModalStatus(!modalstatus)}>
        {selectedItem.name}
        
      </ModalHeader>
      <ModalBody>
       <img className='d-flex mx-auto' width="500" src={selectedItem.img}/>
      {reuploadForm ?  <div>
        <h3 className='mt-4'>{`Re Upload ${selectedItem.name}`}</h3>
       <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
        </div> : null}
      </ModalBody>
      <ModalFooter>
        { !reuploadForm ? <>
        
        <Button.Ripple color='primary' type='submit' onClick={() => {
          onDocumentReupload(selectedItem.id)
        }
          }>
          Re Upload
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
