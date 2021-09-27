const initData = {
     data: [],
     count: 0,
     dropdown: []
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "WAREHOUSELIST":
            //try {
                const DataUserAddress = action.payload.userWarehousesConnection.values.map((val) => {  
                    const CityName = val.city === null ? "" : val.city.name
                    const StateName = val.city === null ? "" : val.city.state.name
                    const CountryName = val.city === null ? "" : val.city.state.country.country_name
                    return {
                        address_1: val.address_1, 
                        createdAt: val.createdAt,
                        warehouse_name: val.name, 
                        pincode: val.pincode, 
                        city: CityName, 
                        state: StateName,
                        country: CountryName,
                        landmark: val.landmark,
                        is_bidoya_warehouse: val.is_bidoya_warehouse,  
                        id: val.id
                    }
                })
                //console.log(DataUserKyc)
                return {
                     ...state,
                     count: action.payload.userWarehousesConnection.aggregate.count,
                     data: DataUserAddress
                }
            // } catch (e) {
            //     return {
            //         ...state
            //     }
            // }
        case "CREATEWAREHOUSE":
            const UserAddressAdd = action.payload.createUserWarehouse.userWarehouse
            if (UserAddressAdd !== null) {
                const CityName = UserAddressAdd.city === null ? "" : UserAddressAdd.city.name
                const StateName = UserAddressAdd.city === null ? "" : UserAddressAdd.city.state.name
                const CountryName = UserAddressAdd.city === null ? "" : UserAddressAdd.city.state.country.country_name
                
                const AddData = {
                        address_1: UserAddressAdd.address_1, 
                        createdAt: UserAddressAdd.createdAt,
                        warehouse_name: UserAddressAdd.name, 
                        pincode: UserAddressAdd.pincode, 
                        city: CityName, 
                        state: StateName,
                        country: CountryName,
                        landmark: UserAddressAdd.landmark,
                        is_bidoya_warehouse: UserAddressAdd.is_bidoya_warehouse,  
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
            
        case "USERADDRESSEDIT":
        //console.log(action.payload)
        const value = action.payload.updateUserAddress.userAddress 
        //updateUserAddress name is already changed find somthing else

            const filteredData = state.data
                    .filter(
                      stateId => (stateId.id !== value.id))
            const CityName = value.city === null ? "" : value.city.name
            const StateName = value.city === null ? "" : value.city.state.name
            const CountryName = value.city === null ? "" : value.city.state.country.country_name
                
            const UpdateCountry = {
                    area: value.address_name, 
                    address_name: value.address_name, 
                    pincode: value.pincode, 
                    city: CityName, 
                    state: StateName,
                    street_name: value.street_name, 
                    country: CountryName, 
                    id: value.id
                }
            //console.log(filteredData)
            return {
                ...state,
                data: [...filteredData, UpdateCountry]
            }
        case "WAREHOUSEDELETE":
            const deleteUser = action.payload.deleteUserWarehouse.userWarehouse
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
        // case "WAREHOUSEDELETE":
        //     try {
        //         const DataDropDown = action.payload.userAddresses.map((val) => {  
        //             const CityName = val.city === null ? "" : val.city.name
        //             const StateName = val.city === null ? "" : val.city.state.name
        //             const CountryName = val.city === null ? "" : val.city.state.country.country_name
        //             return {
        //                 label: `${val.address_name}, ${val.street_name}, ${CountryName}, ${StateName}, ${CityName}, ${val.pincode}`,
        //                 value: `${val.address_name}, ${val.street_name}, ${CountryName}, ${StateName}, ${CityName}, ${val.pincode}`,  
        //                 id: val.id
        //             }
        //         })
        //         //console.log(DataUserKyc)
        //         return {
        //              ...state,
        //              dropdown: DataDropDown
        //         }
        //     } catch (e) {
        //         return {
        //             ...state
        //         }
        //     }
        default: return state
    } 
}

export default todoReducer