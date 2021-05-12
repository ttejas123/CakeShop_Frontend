//Redressal
// id
// To
// From
//adminRes:"",// 
//Order_Id
// Issue_Type
// Bid_Id
// Message
// Status
// Created_Time
// Action(Response)
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {
        avatar: "",
        To:"Tejas Thakare",
        From:"Pravin",
        adminRes:"Plese don't false rate",
        Order_Id:23432,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        Bid_Id:16521,
        Message:"This is msg from message box",
        Created_Time : "04-10-2021",
        Status : [{value: "created", label: "created"}],
        id: 1
      },
      {
        avatar: pravin,
        To:"Pravin",
        From:"Tejas",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        Bid_Id:19321,
        Message:"This is msg from message box",  //Single multiple
        Created_Time : "07-10-2021",
        Status : [{value: "live", label: "live"}],
        id: 2
      },
      {
        avatar: komal,
        To:"Komal Kamble",
        From:"Mehul",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        Bid_Id:19841,
        Message:"This is msg from message box",
        Created_Time : "04-10-2021",
        Status : [{value: "Closed", label: "Closed"}],
        id: 3
      },
      {
        avatar: "",
        To:"Mehul",
        From:"Komal",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        Bid_Id:13431,
        Message:"This is msg from message box",
        Created_Time : "11-10-2021",
        Status : [{value: "created", label: "created"}],
        id: 4
      },
      {
        avatar: "",
        To:"Harpriya",
        From:"Mehul",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        Bid_Id:12421,
        Message:"This is msg from message box",  //Single multiple
        Created_Time : "31-10-2021",
        Status : [{value: "rejected", label: "rejected"}],
        id: 5
      },
      {
        avatar: reethika,
        To:"Reethika",
        From:"Harpriya",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        Bid_Id:10321,
        Message:"This is msg from message box",  //Single multiple
        Created_Time : "30-10-2021",
        Status : [{value: "Closed", label: "Closed"}],
        id: 6
      },
      {
        avatar: himanshu,
        To:"Himanshu",
        From:"Tejas",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "Transcation", label: "Transcation"}],
        Bid_Id:12821,
        Message:"This is msg from message box",
        Created_Time : "12-10-2021",
        Status : [{value: "live", label: "live"}],
        id: 7
      },
      {
        avatar: "",
        To:"Surya Das",
        From:"Avinash",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "Transcation", label: "Transcation"}],
        Bid_Id:11321,
        Message:"This is msg from message box",
        Created_Time : "22-10-2021",
        Status : [{value: "Closed", label: "Closed"}],
        id: 8
      },
      {
        avatar: "",
        To:"Avinash",
        From:"Surya Das",
        adminRes:"",
        Order_Id:23432,
        Issue_Type:[{value: "Transcation", label: "Transcation"}],
        Bid_Id:13321,
        Message:"This is msg from message box",  //Single multiple
        Created_Time : "04-10-2021",
        Status : [{value: "extended", label: "extended"}],
        id: 9
      }
]
