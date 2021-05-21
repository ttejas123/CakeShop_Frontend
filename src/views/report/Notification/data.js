// Id
// Notification To
// notification type = "normal" 'sms' 'email'
// description
// notification for = "bid created", "order"
// Status

import komal  from '../../../assets/images/logo/komal.jpg'
import pravin  from '../../../assets/images/logo/pravin.jpg'
import himanshu  from '../../../assets/images/logo/himanshu.jpg'
import reethika  from '../../../assets/images/logo/reethika.jpg'


//expot data
export const data = [
      {
        id:1,
        Notification_To: "Tejas",
        notification_type: "normal",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "pending", label: "pending"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:2,
        Notification_To: "Tejas",
        notification_type: "sms",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "send", label: "send"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:3,
        Notification_To: "Tejas",
        notification_type: "email",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status:[{value: "send", label: "send"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:4,
        Notification_To: "Tejas",
        notification_type: "email",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "failed", label: "failed"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:5,
        Notification_To: "Tejas",
        notification_type: "sms",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "pending", label: "pending"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:6,
        Notification_To: "Tejas",
        notification_type: "email",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "failed", label: "failed"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:7,
        Notification_To: "Tejas",
        notification_type: "sms",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "send", label: "send"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:8,
        Notification_To: "Tejas",
        notification_type: "email",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "send", label: "send"}],
        Notification_time: `${new Date().toGMTString()}` 
      },
      {
        id:9,
        Notification_To: "Tejas",
        notification_type: "sms",
        description: "Your Bid432 is created",
        notification_for : "bid created",
        Status: [{value: "send", label: "send"}],
        Notification_time: `${new Date().toGMTString()}` 
      }
]
