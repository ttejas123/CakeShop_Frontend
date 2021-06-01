//Provider :- Name, email , address, service

import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {

        id:1,
        vas_id:1321,
        amount_paid: 80000,
        paid_start:`${new Date().toGMTString()}`,
        start_date:`${new Date().toGMTString()}`,
        end_date:`${new Date().toGMTString()}`,
        Name: "Tejas Thakare",
        userName: 'tejas',
        service: 'Web Developer',
        email: "tthakare73@gmail.com",
        address: "Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",
        avatar: "",
        type: 'Category'
      },
      {
        id:2,
        vas_id:2341,
        amount_paid: 80000,
        paid_start:`${new Date().toGMTString()}`,
        start_date:`${new Date().toGMTString()}`,
        end_date:`${new Date().toGMTString()}`,
        Name: "Komal Kamble",
        userName: 'komal',
        service: 'Android/IOS Developer',
        email: "komal@gmail.com",
        address: "Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",
        avatar: komal,
        type: 'User'
      },
      {
        id:3,
        vas_id:1435,
        amount_paid: 80000,
        paid_start:`${new Date().toGMTString()}`,
        start_date:`${new Date().toGMTString()}`,
        end_date:`${new Date().toGMTString()}`,
        Name: "Pravin Poshmani",
        userName: 'pravin',
        service: 'Web Developer',
        email: "pravin@gmail.com",
        address: "Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",
        avatar: pravin,
        type: 'Transcation'
      }
]
