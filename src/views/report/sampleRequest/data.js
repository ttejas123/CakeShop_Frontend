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