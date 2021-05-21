import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap'
import React, {  useState } from "react"
//import {Button, Form} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
//const Data = createContext();

const getModelStyle = () => {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    color: 'black',
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper:{
    position: `absolute`,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: `2px slide #000`,
    color: 'black',
    boxShadow: theme.shadows[5],
    padding:theme.spacing(2, 4, 3)
  }
}))

const CorporateDetails = () => {
  const classes = useStyles()
    const [state, setstate] = useState([])
    const [modalStyle] = useState(getModelStyle)
    const [open, setOpen] = useState(false)
  return (
    <Card className='Details-card ' >
                      <Modal open = {open} onClose = {() => setOpen(false)} >
              
                          <div style={modalStyle} className={classes.paper}>
                            <h4>1. Red Color</h4>
                            <h4>2. Logo</h4>
                            <h4>3. Half colored</h4>
                          </div>

                      </Modal>
      <CardBody>
            <CardTitle className='mb-1'> Details</CardTitle>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Corporate ID : </div>
              <h5 className='mb-1'> 123432</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Industry : </div>
              <h5 className='mb-1'>Chemical</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Company Type : </div>
              <h5 className='mb-1'> Pvt Limited</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Created Date : </div>
              <h5 className='mb-1'> 22-04-2020</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Created By : </div>
              <h5 className='mb-1'> Pravin</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Verified Date : </div>
              <h5 className='mb-1'> 22-04-2020</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Verified By : </div>
              <h5 className='mb-1'> Tejas</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Country : </div>
              <h5 className='mb-1'> India</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>PAN : </div>
              <h5 className='mb-1'> BJJ34JE</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>No. Of Products : </div>
              <h5 className='mb-1'> 22</h5>
            </div>
      </CardBody>
    </Card>
  )
}

export default CorporateDetails
