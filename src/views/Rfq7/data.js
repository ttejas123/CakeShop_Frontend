//Redressal
// id
// name
// From
//slug:"",// 
//rating
// Issue_Type
// qty
// offers
// Status
// shippingDate
// Action(Response)
import komal  from '../../assets/images/logo/komal.jpg'
import pravin  from '../../assets/images/logo/pravin.jpg'
import himanshu  from '../../assets/images/logo/himanshu.jpg'
import reethika  from '../../assets/images/logo/reethika.jpg'
import useC from '../../assets/images/logo/useC.jpg'

//expot data
export const products = [
      {
        image: useC,
        name:"Tejas Thakare",
       brand:"Pravin",
       price:2000,
        slug:"Plese don't false rate",
        rating:2,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        qty:16521,
        offers:"This is msg from offers box",
        shippingDate : "04 / 10 /2021",
       
        id: 1
      },
      {
        image: pravin,
        name:"Pravin",
    brand:"Tejas",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        qty:19321,
        offers:"This is msg from offers box",  //Single multiple
        shippingDate : 7 / 10 / 2021,
        
        id: 2
      },
      {
        image: komal,
        name:"Komal Kamble",
    brand:"Mehul",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidCreated", label: "BidCreated"}],
        qty:19841,
        offers:"This is msg from offers box",
        shippingDate : 4 / 10 / 2021,
        
        id: 3
      },
      {
        image: komal,
        name:"Mehul",
    brand:"Komal",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        qty:13431,
        offers:"This is msg from offers box",
        shippingDate : 1 / 10 / 2021,
       
        id: 4
      },
      {
        image: himanshu,
        name:"Harpriya",
    brand:"Mehul",
    price:2000,
        slug:"",
        rating:2,
        Issue_Type:[{value: "BidUpdate", label: "BidUpdate"}],
        qty:12421,
        offers:"This is msg from offers box",  //Single multiple
        shippingDate : 1 / 10 / 2021,
       
        id: 5
      }
]
