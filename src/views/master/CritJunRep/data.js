//Provider :- Activity , by, Bid_id, date

import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {

        id:1,
        Bid_id: "#Bid231",
        Name: "Tejas Thakare",
        userName: 'tejas',
        service: 'Web Developer',
        email: "tthakare73@gmail.com",
        Activity:'No Action On Customization',
        date:`${new Date().toGMTString()}`,
        avatar: "",
        type: 'Category'
      },
      {
        id:2,
        Bid_id: "#Bid211",
        Name: "Komal Kamble",
        userName: 'komal',
        service: 'Android/IOS Developer',
        email: "komal@gmail.com",
        Activity:' PO Not fulfeel',
        date:`${new Date().toGMTString()}`,
        avatar: komal,
        type: 'User'
      },
      {
        id:3,
        Bid_id: "#Bid451",
        Name: "Pravin Poshmani",
        userName: 'pravin',
        service: 'Web Developer',
        email: "pravin@gmail.com",
        Activity:'Raised PI 24 hrs Past',
        date:`${new Date().toGMTString()}`,
        avatar: pravin,
        type: 'Transcation'
      }
]
