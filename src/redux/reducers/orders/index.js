const initData = {
     data: [],
     count: 0,
     single:{},
     urls: [],
     dropdowns: {}
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "ORDERSLIST":
            //try {
                return {
                     ...state,
                     data: action.payload
                }
            
        case "SINGLEORDER":
                return {
                    ...state,
                    single: action.payload
                }
        case "CREATEORDER":
               return {
                 ...state
               }
        case "REQUIREDFROPDOWN":
            
            return {
                ...state,
                dropdowns: {
                  attTypeArray,
                  attValueArray,
                  catArray
                }
            }    
        case "UPDATEORDER":
            return {
                ...state
            }
        case "DELETEORDER":
                return {
                    ...state
                }
        default: return state
    } 
}

export default todoReducer