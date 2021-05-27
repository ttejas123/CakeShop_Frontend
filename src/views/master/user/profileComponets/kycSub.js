import { Card, CardBody, CardHeader, CardTitle, UncontrolledDropdown, DropdownToggle, Button, Modal, ModalHeader, ModalBody, ModalFooter, DropdownMenu, DropdownItem} from 'reactstrap'
import DataTable from 'react-data-table-component'
import { Monitor, Coffee, Watch, Eye, ChevronDown, Trash, MoreVertical, Edit, FileText, Archive} from 'react-feather'
import { Fragment, useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import img1 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
import panCard from '@src/assets/images/slider/pan-card.jpg'
import aadharCard from '@src/assets/images/slider/aadhar-card.jpg'
import drivingLicense from '@src/assets/images/slider/driving-license.jpg'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'

const CompanyTable = () => {
  const initvalue = {
    name:""
  }
  const [selectedItem, setSelectedItem] = useState(initvalue)
  const [modalstatus, setModalStatus] = useState(false)
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
        name: 'PAN',
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
        name: 'Adhar',
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
        img: drivingLicense,
        name: 'Driving Licence',
        email: 'davcilse@is.gov',
        approvedBy : "Komal",
        status : "Re Upload",
        icon: <Watch size={18} />,
        nav: 'Fashion',
        Date: '02-feb-21',
        time: '5 days',
        revenue: '522.29',
        sales: '62',
        salesUp: true,
        id : 3
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
        minWidth: '250px'
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
      },
      {
        name: 'Approved By',
        selector: 'approvedBy',
        sortable: false,
        minWidth: '250px'
      },
      {
        name: 'Status',
        selector: 'status',
        sortable: false,
        minWidth: '250px'
      }
      // {
      //   name: 'Actions',
      //   allowOverflow: false,
      //   cell: row => {
      //     return (
      //       <div className='d-flex'>
      //           <UncontrolledDropdown>
      //       <DropdownToggle className='pr-1' tag='span'>
      //         <MoreVertical size={15} />
      //       </DropdownToggle>
      //       <DropdownMenu right>
      //         <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
      //           <FileText size={15} />
      //           <span className='align-middle ml-50'>Aprove</span>
      //         </DropdownItem>
      //         <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
      //           <Archive size={15} />
      //           <span className='align-middle ml-50'>Reject</span>
      //         </DropdownItem>
      //         <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
      //           <Trash size={15} />
      //           <span className='align-middle ml-50'>Re - Upload</span>
      //         </DropdownItem>
      //       </DropdownMenu>
      //     </UncontrolledDropdown>
      //     </div>
      //     )
      //   }
      // }
    ]

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
        {selectedItem.name}
      </ModalHeader>
      <ModalBody>
       <img className='d-flex mx-auto' width="700" src={selectedItem.img}/>
      {reuploadForm ?  <div>
        <h3 className='mt-4'>{`Re Ulpoad ${selectedItem.name}`}</h3>
       <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
        </div> : null}
      </ModalBody>
      <ModalFooter>
        { !reuploadForm ? <><Button.Ripple color='primary' type='submit' onClick={() => onDocumentApprove(selectedItem.id)} >
          Approve
        </Button.Ripple>
        <Button.Ripple color='primary' type='submit' onClick={() => onDocumentReject(selectedItem.id)} >
          Reject
        </Button.Ripple>
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
      data={data}
      columns={docColumns}
      className='react-dataTable'
      sortIcon={<ChevronDown size={10} />}
    />
  </Card>
  </>
  )
}

export default CompanyTable
