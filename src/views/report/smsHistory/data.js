export const data = [
    {
      receiver : "Pravin Poshmani",
      receiverNumber : "Rec1",
      smsContent : "Content1",
      smsStatus : "Delivered",
      smsTransactionId : "Transaction1",
      errorId : "err1",
      sentTime : "11-02-2021"
    },
    {
      receiver : "Tejas Thakare",
      receiverNumber : "Rec2",
      smsContent : "Content2",
      smsStatus : "Pending",
      smsTransactionId : "Transaction2",
      errorId : "err2",
      sentTime : "22-02-2021"
    },
    {
      receiver : "Komal Kamble",
      receiverNumber : "Rec3",
      smsContent : "Content3",
      smsStatus : "Delivered",
      smsTransactionId : "Transaction3",
      errorId : "err3",
      sentTime : "30-03-2021"
    },
    {
        receiver : "Himanshu Chanda",
        receiverNumber : "Rec4",
        smsContent : "Content4",
        smsStatus : "Delivered",
        smsTransactionId : "Transaction4",
        errorId : "err4",
        sentTime : "10-04-2021"
    }
]

export const columns = [
  {
    name: 'Receiver',
    selector: 'receiver',
    sortable: true,
    minWidth: '80px'
  },
  {
      name: 'Receiver Number',
      selector: 'receiverNumber',
      sortable: true,
      minWidth: '80px'
  },
  {
      name: 'SMS Content',
      selector: 'smsContent',
      sortable: true,
      minWidth: '80px'
  },
  {
      name: 'SMS Status',
      selector: 'smsStatus',
      sortable: true,
      minWidth: '80px'
  },
  {
      name: 'SMS Transaction ID',
      selector: 'smsTransactionId',
      sortable: true,
      minWidth: '80px'
  },
  {
      name: 'Error Id',
      selector: 'errorId',
      sortable: true,
      minWidth: '80px'
  },
  {
      name: 'Sent Time',
      selector: 'sentTime',
      sortable: true,
      minWidth: '80px'
  }
 ]