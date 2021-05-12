import Chart from 'react-apexcharts'
import { Card, CardTitle, CardText, CardBody, Row, Col, Button } from 'reactstrap'
import React, {  useState } from "react"
//import {Button, Form} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
//const Data = createContext();

const Earnings = (props) => {
  return (
    <Card className='Details-card'>
      <CardBody>
            <CardTitle className='mb-1'> {props.header} </CardTitle>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'> {props.Name}</div>
              <h5 className='mb-1'>{props.NameData}</h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'> {props.secName}</div>
              <h5 className='mb-1'> {props.secNameData} </h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'> {props.three}</div>
              <h5 className='mb-1'> {props.threeData} </h5>
            </div>
            <div className="d-flex justify-content-between">
              <div className='font-small-2'> {props.created}</div>
              <h5 className='mb-1'> {props.date} </h5>
            </div>
            { props.thrName === "Headquarters :" ? (
                <div className="d-flex justify-content-between">
                  <div className='font-small-2'> {props.thrName}</div>
                  <h5 className='mb-1'> {props.thrNameData} </h5>
                </div>
            ) : (
                <div>
                  <div className='font-small-2'> {props.thrName}</div><br />
                  <div>
                  <h5 className='mb-1'>{props.thrNameData}</h5>
                  </div>
                </div>
            ) }
      </CardBody>
    </Card>
  )
}

export default Earnings
