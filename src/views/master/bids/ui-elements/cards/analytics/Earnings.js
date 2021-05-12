import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap'
import React, {  useState } from "react"
import { MoreVertical, CheckSquare } from 'react-feather'
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

const Earnings = () => {
  const classes = useStyles()
    const [state, setstate] = useState([])
    const [modalStyle] = useState(getModelStyle)
    const [open, setOpen] = useState(false)
  return (
    <Card className='Details-card'>
                      <Modal open = {open} onClose = {() => setOpen(false)} >
                          <div style={modalStyle} className={classes.paper}>
                            <h4>1. Red Color</h4>
                            <h4>2. Logo</h4>
                            <h4>3. Half colored</h4>
                          </div>
                      </Modal>
      <CardBody>
            <CardTitle className='mb-1'>Additional Details</CardTitle>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Prime Buyer : </div>
               <CheckSquare className='mb-1' color="lightGreen"/>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Prime Seller : </div>
               <CheckSquare className='mb-1' color="lightGreen"/>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Live Date : </div>
              <h5 className='mb-1'> 24-mar-21</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Close Date : </div>
              <h5 className='mb-1'> 23-mar-21</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Cradit Applicable :  </div>
               <CheckSquare className='mb-1' color="lightGreen"/>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>Application Date : </div>
              <h5 className='mb-1'> 22-mar-21</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'>GST : </div>
              <h5 className='mb-1'> 12% </h5>
            </div>
            
              <div className='font-small-2'>Coustomization required : </div>
              <h5 className='mb-1'> 
                <Button className='mt-1' variant="outline-Red" onClick={() => setOpen(true)}>View </Button>
              </h5>
      </CardBody>
    </Card>
  )
}

export default Earnings
