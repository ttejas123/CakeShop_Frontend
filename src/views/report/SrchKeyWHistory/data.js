//Keyword, Result found, User name

import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {
        avatar: "",
        name:"Tejas Thakare",
        userName:"Pravin",
        bids:[{value: "T-Shirt", label: "T-Shirt"}, {value: "Back-Cover", label: "Back-Cover"}, {value: "Glasses", label: "Glasses"}],
        Sample_MRP: 20000,
        Keyword: "TShirt",
        Result_found: "Yes",


        Status : [{value: "created", label: "created"}],
        id: 1
      },
      {
        avatar: pravin,
        name:"Pravin",
        userName:"Tejas",
        Order_Id:23432,
        bids:[{value: "Back-Cover", label: "Back-Cover"}, {value: "T-Shirt", label: "T-Shirt"}],
        Sample_MRP: 20000,
        Keyword: "Glasses 1000",
        Result_found: "No",

          //Single multiple
        Status : [{value: "live", label: "live"}],
        id: 2
      },
      {
        avatar: komal,
        name:"Komal Kamble",
        userName:"Mehul",
        Order_Id:23432,
        bids:[{value: "Glasses", label: "Glasses"}],
        Sample_MRP: 20000,
        Keyword: "100000rs TapDoor",
        Result_found: "No",

        Status : [{value: "Closed", label: "Closed"}],
        id: 3
      },
      {
        avatar: "",
        name:"Mehul",
        userName:"Komal",
        Order_Id:23432,
        bids:[{value: "T-Shirt", label: "T-Shirt"}],
        Sample_MRP: 20000,
        Keyword: "Glass Frame",
        Result_found: "Yes",
        Status : [{value: "created", label: "created"}],
        id: 4
      },
      {
        avatar: "",
        name:"Harpriya",
        userName:"Mehul",
        Order_Id:23432,
        bids:[{value: "Shoes", label: "Shoes"}],
        Sample_MRP: 20000,
        Keyword: "Shoes",
        Result_found: "Yes",

          //Single multiple
        Status : [{value: "rejected", label: "rejected"}],
        id: 5
      },
      {
        avatar: reethika,
        name:"Reethika",
        userName:"Harpriya",
        Order_Id:23432,
        bids:[{value: "T-Shirt", label: "T-Shirt"}, {value: "T-Shirt", label: "T-Shirt"}],
        Sample_MRP: 20000,
        Keyword: "TShirt",
        Result_found: "Yes",

          //Single multiple
        Status : [{value: "Closed", label: "Closed"}],
        id: 6
      },
      {
        avatar: himanshu,
        name:"Himanshu",
        userName:"Tejas",
        Order_Id:23432,
        bids:[{value: "T-Shirt", label: "T-Shirt"}],
        Sample_MRP: 20000,
        Keyword: "TShirt",
        Result_found: "Yes",


        Status : [{value: "live", label: "live"}],
        id: 7
      },
      {
        avatar: "",
        name:"Surya Das",
        userName:"Avinash",
        Order_Id:23432,
        bids:[{value: "T-Shirt", label: "T-Shirt"}],
        Sample_MRP: 20000,
        Keyword: "TShirt",
        Result_found: "Yes",


        Status : [{value: "Closed", label: "Closed"}],
        id: 8
      },
      {
        avatar: "",
        name:"Avinash",
        userName:"Surya Das",
        Order_Id:23432,
        bids:[{value: "T-Shirt", label: "T-Shirt"}],
        Sample_MRP: 20000,
        Keyword: "TShirt",
        Result_found: "Yes",

          //Single multiple
        Status : [{value: "extended", label: "extended"}],
        id: 9
      }
]
