import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'
import Avatar from '@components/avatar'

const renderUser = row => {
    const stateNum = Math.floor(Math.random() * 6),
      states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
      color = states[stateNum]
  
    if (row.img.length) {
      return <Avatar className='mr-1' img={row.img} width='32' height='32'  />
    } else {
      return <Avatar color={color || 'primary'} className='mr-1' content={row.userName || 'John Doe'} initials />
    }
  }

export const columns = [
    {
        name: 'User Name',
        minWidth: '250px',
        selector: 'userName',
        sortable: true,
        cell: row => (
          <div className='d-flex justify-content-left align-items-center'>
            {renderUser(row)}
            <div className=''>
              {/* <Link to={`/bidDetails/${row.id}`}> */}
                <div className='user-info text-truncate d-flex flex-column'>
                   <span className='font-weight-bold'>{row.userName}</span>
                   {/* <small className='text-truncate text-muted mb-0'>@{row.corporateName}</small> */}
                </div>
              {/* </Link>   */}
            </div>
          </div>
        )
    },
    {
      name: 'Order Id',
      selector: 'orderId',
      sortable: true,
      minWidth: '250px'
    },
    {
        name: 'Inspection Done BY',
        selector: 'inspectionDoneBy',
        sortable: true,
        minWidth: '250px'
    },
    {
        name: 'Inspection Date',
        selector: 'inspectionDate',
        sortable: true,
        minWidth: '250px'
    },
    {
        name: 'Comment',
        selector: 'comment',
        sortable: true,
        minWidth: '250px'
    },
    {
        name: 'File',
        selector: 'file',
        sortable: true,
        minWidth: '250px'
    },
    {
        name: 'Status',
        selector: 'status',
        sortable: true,
        minWidth: '250px'
    }
    // ,
    // {
    //   name: 'Actions',
    //   allowOverflow: true,
    //   cell: row => {
    //     return (
    //       <div className='d-flex'>
    //         <UncontrolledDropdown>
    //           <DropdownToggle className='pr-1' tag='span'>
    //             <Trash size={15} onClick={e => { handleDelete(row) }} />
    //           </DropdownToggle>
    //         </UncontrolledDropdown>
    //         <Link  to={`/report/add-GstReport`}><Edit  
    //               size={15} 
    //               onClick={ () => { 
    //                                 //setCurrentId(row.id)
    //                                 //setModal(true)
    //                                  } }>
    //                                    <Link to='/report/add-GstReport'/>
    //                                  </Edit></Link>
    //       </div>
    //     )
    //   }
  ]

export const data = [
    {
     userName : "Pravin Poshmani",
     img : pravin,
     orderId : "Order1",
     inspectionDoneBy : "Tejas Thakare",
     inspectionDate : "01-05-2021",
     comment : "logo missing",
     file : "img1",
     status : "Resolved"
    },
    {
        userName : "Komal Kamble",
        img : komal,
        orderId : "Order2",
        inspectionDoneBy : "Pravin Poshmani",
        inspectionDate : "02-05-2021",
        comment : "logo missing",
        file : "img2",
        status : "Resolved"
    },
    {
        userName : "Himanshu Chanda",
        img : himanshu,
        orderId : "Order3",
        inspectionDoneBy : "Pravin Poshmani",
        inspectionDate : "03-05-2021",
        comment : "logo missing",
        file : "img3",
        status : "Resolved"
    },
    {
        userName : "Reethika",
        img : reethika,
        orderId : "Order4",
        inspectionDoneBy : "Pravin Poshmani",
        inspectionDate : "04-05-2021",
        comment : "logo missing",
        file : "img4",
        status : "Resolved"
    },
    {
        userName : "Allu Arjun",
        img : pravin,
        orderId : "Order5",
        inspectionDoneBy : "Tejas Thakare",
        inspectionDate : "01-05-2021",
        comment : "logo missing",
        file : "img1",
        status : "Resolved"
       },
       {
           userName : "Stephen Sagaya",
           img : komal,
           orderId : "Order6",
           inspectionDoneBy : "Pravin Poshmani",
           inspectionDate : "02-05-2021",
           comment : "logo missing",
           file : "img2",
           status : "Resolved"
       },
       {
           userName : "Mahesh Reddy",
           img : himanshu,
           orderId : "Order7",
           inspectionDoneBy : "Pravin Poshmani",
           inspectionDate : "03-05-2021",
           comment : "logo missing",
           file : "img3",
           status : "Resolved"
       },
       {
           userName : "Arjun Reddy",
           img : reethika,
           orderId : "Order4",
           inspectionDoneBy : "Pravin Poshmani",
           inspectionDate : "04-05-2021",
           comment : "logo missing",
           file : "img4",
           status : "Resolved"
       },
       {
        userName : "Pravin Poshmani",
        img : pravin,
        orderId : "Order1",
        inspectionDoneBy : "Tejas Thakare",
        inspectionDate : "01-05-2021",
        comment : "logo missing",
        file : "img1",
        status : "Resolved"
       },
       {
           userName : "Komal Kamble",
           img : komal,
           orderId : "Order2",
           inspectionDoneBy : "Pravin Poshmani",
           inspectionDate : "02-05-2021",
           comment : "logo missing",
           file : "img2",
           status : "Resolved"
       },
       {
           userName : "Himanshu Chanda",
           img : himanshu,
           orderId : "Order3",
           inspectionDoneBy : "Pravin Poshmani",
           inspectionDate : "03-05-2021",
           comment : "logo missing",
           file : "img3",
           status : "Resolved"
       },
       {
           userName : "Reethika",
           img : reethika,
           orderId : "Order4",
           inspectionDoneBy : "Pravin Poshmani",
           inspectionDate : "04-05-2021",
           comment : "logo missing",
           file : "img4",
           status : "Resolved"
       },
       {
           userName : "Allu Arjun",
           img : pravin,
           orderId : "Order5",
           inspectionDoneBy : "Tejas Thakare",
           inspectionDate : "01-05-2021",
           comment : "logo missing",
           file : "img1",
           status : "Resolved"
          },
          {
              userName : "Stephen Sagaya",
              img : komal,
              orderId : "Order6",
              inspectionDoneBy : "Pravin Poshmani",
              inspectionDate : "02-05-2021",
              comment : "logo missing",
              file : "img2",
              status : "Resolved"
          },
          {
              userName : "Mahesh Reddy",
              img : himanshu,
              orderId : "Order7",
              inspectionDoneBy : "Pravin Poshmani",
              inspectionDate : "03-05-2021",
              comment : "logo missing",
              file : "img3",
              status : "Resolved"
          },
          {
              userName : "Arjun Reddy",
              img : reethika,
              orderId : "Order4",
              inspectionDoneBy : "Pravin Poshmani",
              inspectionDate : "04-05-2021",
              comment : "logo missing",
              file : "img4",
              status : "Resolved"
          },
          {
            userName : "Pravin Poshmani",
            img : pravin,
            orderId : "Order1",
            inspectionDoneBy : "Tejas Thakare",
            inspectionDate : "01-05-2021",
            comment : "logo missing",
            file : "img1",
            status : "Resolved"
           },
           {
               userName : "Komal Kamble",
               img : komal,
               orderId : "Order2",
               inspectionDoneBy : "Pravin Poshmani",
               inspectionDate : "02-05-2021",
               comment : "logo missing",
               file : "img2",
               status : "Resolved"
           },
           {
               userName : "Himanshu Chanda",
               img : himanshu,
               orderId : "Order3",
               inspectionDoneBy : "Pravin Poshmani",
               inspectionDate : "03-05-2021",
               comment : "logo missing",
               file : "img3",
               status : "Resolved"
           },
           {
               userName : "Reethika",
               img : reethika,
               orderId : "Order4",
               inspectionDoneBy : "Pravin Poshmani",
               inspectionDate : "04-05-2021",
               comment : "logo missing",
               file : "img4",
               status : "Resolved"
           },
           {
               userName : "Allu Arjun",
               img : pravin,
               orderId : "Order5",
               inspectionDoneBy : "Tejas Thakare",
               inspectionDate : "01-05-2021",
               comment : "logo missing",
               file : "img1",
               status : "Resolved"
              },
              {
                  userName : "Stephen Sagaya",
                  img : komal,
                  orderId : "Order6",
                  inspectionDoneBy : "Pravin Poshmani",
                  inspectionDate : "02-05-2021",
                  comment : "logo missing",
                  file : "img2",
                  status : "Resolved"
              },
              {
                  userName : "Mahesh Reddy",
                  img : himanshu,
                  orderId : "Order7",
                  inspectionDoneBy : "Pravin Poshmani",
                  inspectionDate : "03-05-2021",
                  comment : "logo missing",
                  file : "img3",
                  status : "Resolved"
              },
              {
                  userName : "Arjun Reddy",
                  img : reethika,
                  orderId : "Order4",
                  inspectionDoneBy : "Pravin Poshmani",
                  inspectionDate : "04-05-2021",
                  comment : "logo missing",
                  file : "img4",
                  status : "Resolved"
              },
              {
                userName : "Pravin Poshmani",
                img : pravin,
                orderId : "Order1",
                inspectionDoneBy : "Tejas Thakare",
                inspectionDate : "01-05-2021",
                comment : "logo missing",
                file : "img1",
                status : "Resolved"
               },
               {
                   userName : "Komal Kamble",
                   img : komal,
                   orderId : "Order2",
                   inspectionDoneBy : "Pravin Poshmani",
                   inspectionDate : "02-05-2021",
                   comment : "logo missing",
                   file : "img2",
                   status : "Resolved"
               },
               {
                   userName : "Himanshu Chanda",
                   img : himanshu,
                   orderId : "Order3",
                   inspectionDoneBy : "Pravin Poshmani",
                   inspectionDate : "03-05-2021",
                   comment : "logo missing",
                   file : "img3",
                   status : "Resolved"
               },
               {
                   userName : "Reethika",
                   img : reethika,
                   orderId : "Order4",
                   inspectionDoneBy : "Pravin Poshmani",
                   inspectionDate : "04-05-2021",
                   comment : "logo missing",
                   file : "img4",
                   status : "Resolved"
               },
               {
                   userName : "Allu Arjun",
                   img : pravin,
                   orderId : "Order5",
                   inspectionDoneBy : "Tejas Thakare",
                   inspectionDate : "01-05-2021",
                   comment : "logo missing",
                   file : "img1",
                   status : "Resolved"
                  },
                  {
                      userName : "Stephen Sagaya",
                      img : komal,
                      orderId : "Order6",
                      inspectionDoneBy : "Pravin Poshmani",
                      inspectionDate : "02-05-2021",
                      comment : "logo missing",
                      file : "img2",
                      status : "Resolved"
                  },
                  {
                      userName : "Mahesh Reddy",
                      img : himanshu,
                      orderId : "Order7",
                      inspectionDoneBy : "Pravin Poshmani",
                      inspectionDate : "03-05-2021",
                      comment : "logo missing",
                      file : "img3",
                      status : "Resolved"
                  },
                  {
                      userName : "Arjun Reddy",
                      img : reethika,
                      orderId : "Order4",
                      inspectionDoneBy : "Pravin Poshmani",
                      inspectionDate : "04-05-2021",
                      comment : "logo missing",
                      file : "img4",
                      status : "Resolved"
                  },
                  {
                    userName : "Pravin Poshmani",
                    img : pravin,
                    orderId : "Order1",
                    inspectionDoneBy : "Tejas Thakare",
                    inspectionDate : "01-05-2021",
                    comment : "logo missing",
                    file : "img1",
                    status : "Resolved"
                   },
                   {
                       userName : "Komal Kamble",
                       img : komal,
                       orderId : "Order2",
                       inspectionDoneBy : "Pravin Poshmani",
                       inspectionDate : "02-05-2021",
                       comment : "logo missing",
                       file : "img2",
                       status : "Resolved"
                   },
                   {
                       userName : "Himanshu Chanda",
                       img : himanshu,
                       orderId : "Order3",
                       inspectionDoneBy : "Pravin Poshmani",
                       inspectionDate : "03-05-2021",
                       comment : "logo missing",
                       file : "img3",
                       status : "Resolved"
                   },
                   {
                       userName : "Reethika",
                       img : reethika,
                       orderId : "Order4",
                       inspectionDoneBy : "Pravin Poshmani",
                       inspectionDate : "04-05-2021",
                       comment : "logo missing",
                       file : "img4",
                       status : "Resolved"
                   },
                   {
                       userName : "Allu Arjun",
                       img : pravin,
                       orderId : "Order5",
                       inspectionDoneBy : "Tejas Thakare",
                       inspectionDate : "01-05-2021",
                       comment : "logo missing",
                       file : "img1",
                       status : "Resolved"
                      },
                      {
                          userName : "Stephen Sagaya",
                          img : komal,
                          orderId : "Order6",
                          inspectionDoneBy : "Pravin Poshmani",
                          inspectionDate : "02-05-2021",
                          comment : "logo missing",
                          file : "img2",
                          status : "Resolved"
                      },
                      {
                          userName : "Mahesh Reddy",
                          img : himanshu,
                          orderId : "Order7",
                          inspectionDoneBy : "Pravin Poshmani",
                          inspectionDate : "03-05-2021",
                          comment : "logo missing",
                          file : "img3",
                          status : "Resolved"
                      },
                      {
                          userName : "Arjun Reddy",
                          img : reethika,
                          orderId : "Order4",
                          inspectionDoneBy : "Pravin Poshmani",
                          inspectionDate : "04-05-2021",
                          comment : "logo missing",
                          file : "img4",
                          status : "Resolved"
                      }
]
