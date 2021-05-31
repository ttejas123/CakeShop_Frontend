import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'

export const data = [
    {
        buyerAvatar : komal,
        sellerAvatar : pravin,
        requestDate : "01-05-2020",
        bidId : "Bid1",
        buyerName : "komal kamble",
        sellerName : "Pravin Poshmani",
         status : [{value: "processed", label: "processed"}]
    },
    {
        buyerAvatar : pravin,
        sellerAvatar : komal,
        requestDate : "01-05-2020",
        bidId : "Bid1",
        buyerName : "Pravin Poshmani",
        sellerName : "komal kamble",
         status : [{value: "shipped", label: "shipped"}]
    },
    {
        buyerAvatar : reethika,
        sellerAvatar : himanshu,
        requestDate : "01-05-2020",
        bidId : "Bid1",
        buyerName : "Reethika",
        sellerName : "Himanshu Chanda",
         status : [{value: "accepted", label: "accepted"}]
    },
    {
        buyerAvatar : komal,
        sellerAvatar : himanshu,
        requestDate : "01-05-2020",
        bidId : "Bid1",
        buyerName : "Komal Kamble",
        sellerName : "Himanshu Chanda",
         status : [{value: "processed", label: "processed"}]
    }
]


export const sampleData = [
    {
        status : "Pending",
        sampleProductName : "US Polo T-shirt",
        samplePrize : 1500,
        requestedDate : "01-06-2021",
        requesterName : "Pravin Poshmani",
        requestingFrom : "Google"
    },
    {
        status : "Delivered",
        sampleProductName : "Puma Shoe",
        samplePrize : 2000,
        requestedDate : "02-06-2021",
        requesterName : "Tejas Thakare",
        requestingFrom : "Infosys"
    },
    {
        status : "Returned",
        sampleProductName : "Books",
        samplePrize : 1000,
        requestedDate : "03-06-2021",
        requesterName : "Komal Kamble",
        requestingFrom : "TCS"
    },
    {
        status : "Pending",
        sampleProductName : "US Polo T-shirt",
        samplePrize : 1500,
        requestedDate : "01-06-2021",
        requesterName : "Himanshu Chanda",
        requestingFrom : "Coense"
    }
]