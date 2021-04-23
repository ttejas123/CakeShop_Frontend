import Avatar from '@components/avatar'
// import * as Icon from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, Media, Row, Col, CardText} from 'reactstrap'
import '@styles/base/pages/app-invoice.scss'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone, Pocket} from 'react-feather'

const Quickhelp = () => {
  const transactionsArr = [
    {
      title: 'Wallet',
      color: 'light-primary',
      subtitle: 'Starbucks',
      amount: '- $74',
      Icon: Pocket,
      down: true
    }
    
  ]

//   const renderTransactions = () => {
//     return transactionsArr.map(item => {
//       return (
//         <div key={item.title} >
//             <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
//             <div className='user-info-wrapper'>
//               <div className='d-flex flex-wrap align-items-center'>
//                 <div className='user-info-title'>
//                   <User className='mr-1' size={14} />
//                   <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
//                     Username
//                   </CardText>
//                 </div>
//                 <CardText className='mb-0'>
//                 eleanor.aguilar
//                 </CardText>
//               </div>
//               </div>
//               </Col>
//             </div>
//       )
//     })
//   }

  return (
      <div className='app-user-view'>
          <Row>
              <Col xl='12' lg='12' md='12'>
                  {/* <UserInfoCard selectedUser={store.selectedUser} /> */}
                  <Card>
                      <CardHeader>
                          <CardTitle tag='h4'>Quick Help</CardTitle>
                      </CardHeader>
                      <CardBody>
                          <Row>
                              <Col xl='12' lg='12' className='mt-2 mt-xl-0'>
                                  <div className='user-info-wrapper'>
                                      <div className='d-flex flex-wrap align-items-center'>
                                          <div className='user-info-title'>
                                              <User className='mr-1' size={14} />
                                              <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                                  Admin </CardText>
                                          </div>
                                          <CardText className='mb-0'>
                                              9800989098
                                          </CardText>
                                      </div>
                                  </div>
                              </Col>
                              <Col xl='12' lg='12' className='mt-2 mt-xl-0'>
                                  <div className='user-info-wrapper'>
                                      <div className='d-flex flex-wrap align-items-center'>
                                          <div className='user-info-title'>
                                              <User className='mr-1' size={14} />
                                              <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                                                  Call Center </CardText>
                                          </div>
                                          <CardText className='mb-0'>
                                              8909899891
                                          </CardText>
                                      </div>
                                  </div>
                              </Col>

                          </Row>
                      </CardBody>
                  </Card>


              </Col>
              <Col xl='3' lg='4' md='5'>
                  {/* <PlanCard selectedUser={store.selectedUser} /> */}
              </Col>
          </Row>
      </div>
    // <Card className='card-transaction'>
    //   <CardHeader>
    //     <CardTitle tag='h4'>Quick Help</CardTitle>
    //   </CardHeader>
    //   {/* <CardBody>{renderTransactions()}</CardBody> */}
    //       <CardBody>
    //           <Row>
    //               <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
    //                   <div className='user-info-wrapper'>
    //                       <div className='d-flex flex-wrap align-items-center'>
    //                           <div className='user-info-title'>
    //                               <User className='mr-1' size={14} />
    //                               <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
    //                                   Username
    //               </CardText>
    //                           </div>
    //                           <CardText className='mb-0'>
    //                               kom
    //                               {/* {selectedUser !== null ? selectedUser.username : 'eleanor.aguilar'} */}
    //                           </CardText>
    //                       </div>
    //                   </div>
    //               </Col>
    //           </Row>

    //       </CardBody>
    // </Card>
 
 
 )
}

export default Quickhelp
