import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'


export const data = [
    {

          id:1,
          charg: "200K",
          extra:"",
          Task : "Boxes",
          DateAdded : "12-11-2020",
          Partner : "Tejas Thakare",
          avatar: "",
          Name: "Tejas",
          username:"tejas"
    
    },
    {
        id:2,
        charg: "200K",
        extra:"",
        Task : "Provide Raw Material",
        DateAdded : "05-05-2021",
        Partner : "Pravin Poshmani",
        avatar: pravin,
        Name: "Pravin",
        username:"pravinn2"
    },
    {
        id:3,
        charg: "200K",
        extra:"",
        Task : "Transport",
        DateAdded : "12-10-2020",
        Partner : "Himanshu Chanda",
        avatar: komal,
        Name: "Komal",
        username:"komal12"
    },
    {
        id:4,
        charg: "200K",
        extra:"",
        Task : "Checking Samples",
        DateAdded : "10-11-2020",
        Partner : "Daksh",
        avatar: "",
        Name: "Mehul",
        username:"mehulq1"
    },
    {
        id:5,
        charg: "200K",
        extra:"",
        Task : "Taking Logs",
        DateAdded : "12-11-2020",
        Partner : "Umang Shah",
        avatar: "",
        Name: "Harpriya",
        username:"harpriya23"
    }
  ]

const part = (data2) => {
  return (<div className='d-flex justify-content-left align-items-center'>
          {renderClient(data2)}
        <div className=''>
                                          
          <div className='user-info text-truncate d-flex flex-column'>
            <span className='font-weight-bold'>{data2.Name}</span>
              <small className='text-truncate text-muted mb-0'>@{data2.username}</small>
          </div>
                                         
        </div>
    </div>)
}