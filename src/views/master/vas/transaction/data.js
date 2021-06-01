// Amout paid, date, Provider Info, Provided to, Service
//                      Status - (a.receive service), (b.service pending), (c.completed...)
import komal  from '@src/assets/images/logo/komal.jpg'
import pravin  from '@src/assets/images/logo/pravin.jpg'
import himanshu  from '@src/assets/images/logo/himanshu.jpg'
import reethika  from '@src/assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {

        id:1,
        P_Name: "Tejas Thakare",
        P_userName: 'tejas',
        T_Name: "Tejas Thakare",
        Service: "Web Developer",
        T_userName: 'tejas',
        service: 'Web Developer',
        P_email: "tthakare73@gmail.com",
        amount_paid: 80000,
        Date : `${new Date().toGMTString()}`,
        T_email: "tthakare73@gmail.com",
        address: "Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",
        avatar_P: "",
        avatar_T: "",
        Status: "Receive Service"
        
      },
      {
        id:2,
        P_Name: "Komal Kamble",
        P_userName: 'komal',
        T_Name: "Tejas Thakare",
        Service: "Web Developer",
        T_userName: 'tejas',
        T_email: "tthakare73@gmail.com",
        avatar_T: "",
        Date : `${new Date().toGMTString()}`,
        amount_paid: 80000,
        service: 'Android/IOS Developer',
        email: "komal@gmail.com",
        address: "Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",
        avatar_P: komal,
        Status: "Completed"
        
      },
      {
        id:3,
        P_Name: "Pravin Poshmani",
        P_userName: 'pravin',
        T_Name: "Tejas Thakare",
        Service: "Web Developer",
        T_userName: 'tejas',
        T_email: "tthakare73@gmail.com",
        avatar_T: "",
        Date : `${new Date().toGMTString()}`,
        amount_paid: 80000,
        service: 'Web Developer',
        email: "pravin@gmail.com",
        address: "Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",
        avatar_P: pravin,
        Status: "Service Pending"
        
      }
]
