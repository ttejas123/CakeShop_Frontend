//expot data
// Bid id
// User Name
//username:"",// Bid S
//tatus - created,live,extended,closed,rejected,auto closed
// Requested Customization
// Customization Status : pending, approval, approved, 
// catalogue id
// Req Quantity
// created time
// Go Live date
// Bid Close Date
// Bid Application Date
// Nos of bidder
// Delivery date
// Buyer Budget
// Delivery Location : Multiple Or Single location
// finalize seller id
//expot data
import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'

export const corporateCreditData = [
    {
     corporateName : "Corporate1",
     requestTime : "01-05-2021",
     amountRequested : 1000
    },
    {
        corporateName : "Corporate2",
        requestTime : "02-05-2021",
        amountRequested : 2000
    },
    {
        corporateName : "Corporate3",
        requestTime : "03-05-2021",
        amountRequested : 3000
    },
    {
        corporateName : "Corporate4",
        requestTime : "04-05-2021",
        amountRequested : 4000
    }
]

export const creditLimitData = [
    {
     corporateName : "Corporate1",
     financialPartner : "FI1",
     creditLimit : 1000,
     currency : "INR",
     rateOfInterest : "21%",
     approvedTime : "01-05-2021"
    },
    {
        corporateName : "Corporate2",
     financialPartner : "FI2",
     creditLimit : 2000,
     currency : "INR",
     rateOfInterest : "22%",
     approvedTime : "02-05-2021"
    },
    {
        corporateName : "Corporate3",
     financialPartner : "FI3",
     creditLimit : 3000,
     currency : "INR",
     rateOfInterest : "23%",
     approvedTime : "03-05-2021"
    },
    {
        corporateName : "Corporate4",
        financialPartner : "FI4",
        creditLimit : 4000,
        currency : "INR",
        rateOfInterest : "24%",
        approvedTime : "04-05-2021"
    }
]

export const creditTransactionsData = [
    {
     userName : "Pravin Poshmani",
     img : pravin,
     amountUsed : 50000,
     balance : 50000,
     createdTime : "01-05-2021"
    },
    {
        userName : "Komal Kamble",
     img : komal,
     amountUsed : 40000,
     balance : 60000,
     createdTime : "02-05-2021"
    },
    {
        userName : "Himanshu Chanda",
        img : himanshu,
        amountUsed : 50000,
        balance : 50000,
        createdTime : "03-05-2021"
    },
    {
        userName : "Reethika",
        img : reethika,
        amountUsed : 70000,
        balance : 30000,
        createdTime : "04-05-2021"
    }
]
