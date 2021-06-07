// Type : Category, User, Transcation
// default Commission %
 
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'


//expot data
export const data = [
    {   id:1,
        name: {value: "Platinum", label: "Platinum"},
        membershipFor: "Himanshu Chanda",
        benefit : [
                    {value: "No Commission on transactions", label: "No Commission on transactions"},
                    {value: "Get Third party VAS", label: "Get Third party VAS"},
                    {value: "Reveal names of all bidders", label: "Reveal names of all bidders"},
                    {value: "Reveal Contact Details of all bidders", label: "Reveal Contact Details of all bidders"}
                  ],
        aveil: 10,
        cost : 8000,
        active : {value: "Yes", label: "Yes"}
    },
    {   id:2,
        name: {value: "Premium", label: "Premium"},
        membershipFor: "Tejas Thakare",
        benefit : [
                    {value: "No Commission on transactions", label: "No Commission on transactions"},
                    {value: "Get Third party VAS", label: "Get Third party VAS"},
                    {value: "Reveal names of all bidders", label: "Reveal names of all bidders"}
                  ],
        aveil: 10,
        cost : 5000,
        active : {value: "Yes", label: "Yes"}
    },
    {   id:3,
        name: {value: "Gold", label: "Gold"},
        membershipFor: "Pravin Poshmani",
        benefit : [
                    {value: "No Commission on transactions", label: "No Commission on transactions"},
                    {value: "Get Third party VAS", label: "Get Third party VAS"}
                  ],
        aveil: 10,
        cost : 4500,
        active : {value: "Yes", label: "Yes"}
    },
    {   id:4,
        name: {value: "Silver", label: "Silver"},
        membershipFor: "Komal Kamble",
        benefit : [{value: "No Commission on transactions", label: "No Commission on transactions"}],
        aveil: 10,
        cost : 2500,
        active : {value: "Yes", label: "Yes"}
    }
]

export const data1 = [
      {

        id:1,
        avatar:'',
        rating: 1,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Logo of team",
        username:"tejas",
        Name:"Tejas",
        date: '04-09-2021',
        active : "Yes"

      },
      {
        id:2,
        avatar:pravin,
        rating: 7.85,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"differnt Color",
        username:"pravinn2",
        Name:"Pravin",
        date: '04-09-2021',
        active : "Yes"
      },
      {
        id:3,
        avatar:komal,
        rating: 6.75,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Company WaterMark",
        username:"komal12",
        Name:"Komal",
        date: '04-09-2021',
        active : "Yes"
      },
      {
        id:4,
        avatar:'',
        rating: 6.5,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Logo of team",
         username:"mehulq1",
       Name:"Mehul",
       date: '04-09-2021',
       active : "No"
      },
      {
        id:5,
        avatar:"",
        rating: 2,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"differnt Color",
        username:"harpriya23",
        Name:"Harpriya",
        date: '04-09-2021',
        active : "Yes"
      },
      {
        id:6,
        avatar:reethika,
        rating: 9,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Company WaterMark",
        username:"Reethika45",
        Name:"Reethika",
        date: '04-09-2021',
        active : "Yes"
      },
      {
        id:7,
        avatar:"",
        rating: 10,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Company WaterMark",
        username:"himanshu23",
        Name:"Himanshu",
        date: '04-09-2021',
        active : "Yes"
      },
      {
        id:8,
        avatar:"",
        rating: 2,
        transaction: 200000,
        balance: 30000,
        review:"Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Logo of team",
        username:"suryadas",
        Name:"Surya_Das",
        date: '04-09-2021',
        active : "No"
      },
      {
        id:9,
        avatar:"",
        rating: 2.0,
        transaction: 200000,
        balance: 30000,
        review: "Your product is really good but still it's out of price range and also we can't add much customizations",
        customizations :"Company WaterMark",
        username:"avinash",
        Name:"Avinash",
        date: '04-09-2021',
        active : "No"
      }
]

