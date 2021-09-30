const initData = {
     data: [],
     count: 0,
     dropdown: []
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "KYCDOCTYPELIST":
            //try {
                const kycdoctype = action.payload.kycDocumentMastersConnection.values.map((val) => {  
                    return {
                        name: val.Name,    
                        id: val.id
                    }
                })
                //console.log(DataUserKyc)
                return {
                     ...state,
                     data: kycdoctype,
                     count: action.payload.kycDocumentMastersConnection.aggregate.count
                }
            // } catch (e) {
            //     return {
            //         ...state
            //     }
            // }
        case "CREATEKYCTYPE":
            const UserAddressAdd = action.payload.createKycDocumentMaster.kycDocumentMaster
            if (UserAddressAdd !== null) {
                
                const AddData = {
                        name: UserAddressAdd.Name,    
                        id: UserAddressAdd.id
                }

                return {
                    ...state,
                    count: state.count + 1,
                    data: [...state.data, AddData]
                }
            } else {
                return {
                    ...state
                }
            }
            
        case "UPDATEKYCTYPE":
        //console.log(action.payload)
        const value = action.payload.updateKycDocumentMaster.kycDocumentMaster 
        //updateUserAddress name is already changed find somthing else

            const filteredData = state.data
                    .filter(
                      stateId => (stateId.id !== value.id)) 
            const UpdateCountry = {
                    name: value.Name,    
                    id: value.id
                }
            //console.log(filteredData)
            return {
                ...state,
                data: [...filteredData, UpdateCountry]
            }
        case "DELETEKYCTYPE":
            const deleteUser = action.payload.deleteKycDocumentMaster.kycDocumentMaster
            if (deleteUser !== null) {
                const DeleteData = state.data
                        .filter(
                          stateId =>
                            /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
                            (stateId.id !== deleteUser.id)
                        )
                //console.log(DeleteData)
                return {
                    ...state,
                    count: state.count - 1,
                    data: DeleteData
                }
            } else {
                return {
                    ...state
                }
            }
        default: return state
    } 
}

export default todoReducer