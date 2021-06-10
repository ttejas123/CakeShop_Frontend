import { Card, CardBody, CardHeader, CardTitle, Form, FormGroup, Label, Input, DropdownToggle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col} from 'reactstrap'
import DataTable from 'react-data-table-component'
import Repeater from '@components/repeater'
import { Monitor, Coffee, Watch, Eye, ChevronDown, Plus, X} from 'react-feather'
import { SlideDown } from 'react-slidedown'
import { Fragment, useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import img1 from '@src/assets/images/elements/nike-basketball-shoes.jpg'
import panCard from '@src/assets/images/slider/pan-card.jpg'
import aadharCard from '@src/assets/images/slider/aadhar-card.jpg'
import drivingLicense from '@src/assets/images/slider/driving-license.jpg'


const CorporateKyc = () => {
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    const slideDownWrapper = e.target.closest('.react-slidedown'),
      form = e.target.closest('form')
    if (slideDownWrapper) {
      slideDownWrapper.remove()
    } else {
      form.remove()
    }
  }

  const initvalue = {
    name:""
  }
  const [selectedItem, setSelectedItem] = useState(initvalue)
  const [requestModalstatus, setRequestModalStatus] = useState(false)
  const [modalstatus, setModalStatus] = useState(false)
  const [reuploadForm, setReUploadForm] = useState(false)
  const [approveComment, setApproveComment] = useState(false)
  const [rejectComment, setRejectComment] = useState(false)
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
   // setModalStatus(!modalstatus)
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
        name: 'Aadhar',
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

    const handleApprove = () => {
      const userResponse = confirm("Are you sure, do you want to approve all")
 
      if (userResponse === true) {
        console.log("All docs approved")
      } else {
      console.log("Not approved")
      }
    }

    const handleRequest = () => {
      setRequestModalStatus(!requestModalstatus)
    }

    const handleRequestSubmit = () => {
      setRequestModalStatus(!requestModalstatus)
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
      </ModalHeader>
      <ModalBody>
       <img className='d-flex mx-auto' width="700" src={selectedItem.img}/>
      {reuploadForm ?  <div>
        <h3 className='mt-4'>{`Re Ulpoad ${selectedItem.name}`}</h3>
       <DragDrop uppy={uppy} />
        {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
        </div> : null}
        <FormGroup>
          <Label for='comment'>Comment</Label>
          <Input type='textarea' id='comment' placeholder='Comments...'/>
        </FormGroup> 
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

    <Modal
      isOpen={requestModalstatus}
      // toggle={() => toggleModal(item.id)}
      className={`modal-dialog-centered modal-lg`}
      key={selectedItem.name}
    >
      <ModalHeader toggle={() => setRequestModalStatus(!requestModalstatus)}>
        Request Documents
      </ModalHeader>
      <ModalBody>
      <Repeater count={count}>
          {i => {
            const Tag = i === 0 ? 'div' : SlideDown
            return (
              <Tag key={i}>
                <Form>
                  <Row className='justify-content-between align-items-center'>
                    <Col md={8}>
                      <FormGroup>
                        <Label for={`animation-item-name-${i}`}>Document Name</Label>
                        <Input type='text' id={`animation-item-name-${i}`} placeholder='Document Name' />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <Button.Ripple color='danger' className='text-nowrap px-1 mt-1' onClick={deleteForm} outline>
                        <X size={14} className='mr-50' />
                        <span>Delete</span>
                      </Button.Ripple>
                    </Col>
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                </Form>
              </Tag>
            )
          }}
        </Repeater>
        <Button.Ripple className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ml-25'>Add New</span>
        </Button.Ripple>
      </ModalBody>
      <ModalFooter>
         <Button.Ripple color='primary' type='submit' onClick={() => {
         handleRequestSubmit()
        }
        }  >
        Submit
      </Button.Ripple>
      </ModalFooter>
    </Modal>


  </Fragment>
    <Card className='card-statistics'>
           <CardHeader>  
              <CardTitle tag='h5'><h4>Kyc Submitted</h4></CardTitle>
              <div className='d-flex mt-md-0 mt-1'>
              <Button className='ml-2' color='primary' onClick={ e => handleApprove()
                                                            }>

              <span className='align-right'>Approve All</span>
            </Button>
            <Button className='ml-2' color='primary' onClick={ e => handleRequest()
                                                            }>

              <span className='align-middle'>Request Additional Documents</span>
            </Button>
            </div>
           </CardHeader> 
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

export default CorporateKyc
