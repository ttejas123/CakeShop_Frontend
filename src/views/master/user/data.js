// Bid id
// User
//tatus - created,Japan,USA,closed,rejected,India
// Requested Customization
// Customization Status : pending, approval, approved, 
// catalogue id
// Req Quantity
// created time
// Go Japan date
// Bid Close Date
// Bid Application Date
// Nos of bidder
// DeJapanry date
// Buyer Budget
// DeJapanry Location : Seller Or Buyer location
// finalize seller id
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {
        id:1,
        CreatedDate :"30-10-2021",
        email: "tthakare73@gmail.com",
        designation:"job",
        DeliveryLocation:[{value:""}],
        mobile : 321342,
        
        userType: [{value: "Seller", label: "Seller"}],  //Buyer Seller
       
        isVerified : [{value: "approval", label: "approval"}],
        profileScore: 1,

        created : "04-10-2021",
        country : [{value: "USA", label: "USA"}],
        state : [{value: "Jorgi", label: "Jorgi"}],
        city : [{value: "New York", label: "New York"}],
        last_name: "Thakare",
        first_name: "Tejas"
      },
      {
        id:2,
        CreatedDate :"23-10-2021",
        email: "pravinP@gmail.com",
        designation:"job",
        
        mobile : 321342,
        
        userType: [{value: "Buyer", label: "Buyer"}],  //Buyer Seller
        
        isVerified : [{value: "pending", label: "pending"}],
        profileScore: 2,
        ReqCustomization :"differnt Color",
        created : "07-10-2021",
        country : [{value: "Japan", label: "Japan"}],
        state : [{value: "Osaka", label: "Osaka"}],
        city : [{value: "kimoye", label: "kimoye"}],
        last_name: "Poshmani",
        first_name: "Pravin"
      },

      {
        id:3,
        CreatedDate :"13-10-2021",
        designation:"job",
        email: "komal@gmail.com",
        mobile : 541342,
        
        userType: [{value: "Both", label: "Both"}], //Buyer Seller
       
        isVerified : [{value: "approved", label: "approved"}],
        profileScore: 1,
        ReqCustomization :"Company WaterMark",
        created : "04-10-2021",
        country : [{value: "India", label: "India"}],
        state : [{value: "kerla", label: "kerla"}],
        city : [{value: "sharana", label: "sharana"}],
        last_name: "Kamble",
        first_name: "komal"
      },
      {
        id:4,
        CreatedDate :"21-10-2021",
        email: "mehul@gmail.com",
        designation:"job",
        
        mobile : 721342,
        
        userType: [{value: "Seller", label: "Seller"}],  //Buyer Seller
        
        isVerified : [{value: "approval", label: "approval"}],
        profileScore: 3,

        created : "11-10-2021",
        country : [{value: "Viatnam", label: "Viatnam"}],
        state : [{value: "nakoi", label: "nakoi"}],
        city : [{value: "noki", label: "noki"}],
        last_name: "B",
        first_name: "Mehul"
      },
      {
        id:5,
        CreatedDate :"30-10-2021",
        email: "harpriya@gmail.com",
        designation:"job",
        
        mobile : 2331342,
        
        userType: [{value: "Both", label: "Both"}],  //Buyer Seller
        
        isVerified : [{value: "pending", label: "pending"}],
        profileScore: 1,

        created : "31-10-2021",
        country : [{value: "Sweedan", label: "Sweedan"}],
        state : [{value: "seedon", label: "seedon"}],
        city : [{value: "nipu", label: "nipu"}],
        last_name: "H",
        first_name: "Harpriya"
      },
      {
        id:6,
        CreatedDate :"22-10-2021",
        email: "reethika@gmail.com",
        designation:"job",
        
        mobile : 771356,
        
        userType: [{value: "Buyer", label: "Buyer"}],  //Buyer Seller
        
        isVerified : [{value: "approved", label: "approved"}],
       profileScore: 4,

        created : "30-10-2021",
        country : [{value: "India", label: "India"}],
        state : [{value: "UtterPradesh", label: "UtterPradesh"}],
        city : [{value: "lihipur", label: "lihipur"}],
        last_name: "R",
        first_name: "Reethika"
      },
      {
        id:7,
        CreatedDate :"29-10-2021",
        email: "himanshu@gmail.com",
        designation:"job",
        
        mobile : 671356,
        
        userType: [{value: "Seller", label: "Seller"}],  //Buyer Seller
        
        isVerified : [{value: "pending", label: "pending"}],
        profileScore: 1,

        created : "12-10-2021",
        country : [{value: "Japan", label: "Japan"}],
        state : [{value: "Osaka", label: "Osaka"}],
        city : [{value: "lipi", label: "lipi"}],
        last_name: "H",
        first_name: "Himanshu"
      },
      {
        id:8,
        CreatedDate :"13-10-2021",
        email: "suryaDas@gmail.com",
        designation:"job",
        
        mobile : 921345,
        
        userType: [{value: "Seller", label: "Seller"}],  //Buyer Seller
        
        isVerified : [{value: "approved", label: "approved"}],
        profileScore: 5,

        created : "22-10-2021",
        country : [{value: "India", label: "India"}],
        state : [{value: "Maharashtra", label: "Maharashtra"}],
        city : [{value: "Navi Mumbai", label: "Navi Mumbai"}],
        last_name: "Das",
        first_name: "Surya"
      },
      {
        id:9,
        CreatedDate :"03-10-2021",
        email: "avinash@gmail.com",
        designation:"job",
        
        mobile : 3421332,
       
        userType: [{value: "Buyer", label: "Buyer"}],  //Buyer Seller
        
        isVerified : [{value: "approval", label: "approval"}],
        profileScore: 1,

        created : "04-10-2021",
        country : [{value: "USA", label: "USA"}],
        state : [{value: "pencilVenia", label: "pencilVenia"}],
        city : [{value: "created", label: "created"}],
        last_name: "A",
        first_name: "Avinash"
      }
]
