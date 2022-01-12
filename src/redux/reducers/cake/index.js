const initData = {
     data: [],
     count: 0,
     single:{},
     urls: [],
     dropdowns: {}
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "CAKELIST":
            //try {
                return {
                     ...state,
                     data: action.payload.data,
                     urls: action.payload.urls
                }
            
        case "SINGLECAKE":
                return {
                    ...state,
                    single: action.payload
                }
        case "CREATECAKE":
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
        case "UPDATEATTRIBUTE":
            return {
                ...state
            }
        case "DELETECAKE":
                return {
                    ...state
                }
        default: return state
    } 
}

export default todoReducer