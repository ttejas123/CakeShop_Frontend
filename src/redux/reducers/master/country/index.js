const initData = {
     data: []
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "COUNTRYLIST": 
            const DataArray = action.payload.map((val) => {  
                console.log(val)
                return {name: val.country_name, country_code: val.country_code, id: val.id, country_initial:val.country_initial, currency:val.currency}
            })
            //console.log(DataArray)
            return {
                ...state,
                data: DataArray
            }
        case "COUNTRYADD":
            if (action.payload.createCountry === null) {
                return {
                    data: [...state.data]
                }
            } else {
                const AddData = {value: action.payload.createCountry.country.country_name, label: action.payload.createCountry.country.country_name, id: action.payload.createCountry.country.id}
                return {
                    data: [...state.data, AddData]
                }
            }
            
        case "COUNTRYEDIT":
        console.log(action.payload) 
        //updateCountry name is already changed find somthing else
            const filteredData = state.data
                    .filter(
                      stateId =>
                        /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
                        (stateId.id !== action.payload.updateCountry.country.id)
                    )
            const UpdateCountry = {value: action.payload.updateCountry.country.country_name, label: action.payload.updateCountry.country.country_name, id: action.payload.updateCountry.country.id}
            //console.log(filteredData)
            return {
                data: [...filteredData, UpdateCountry]
            }
        case "COUNTRYDELETE":
            if (action.payload.deleteCountry.country !== null) {
                const DeleteData = state.data
                        .filter(
                          stateId =>
                            /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
                            (stateId.id !== action.payload.deleteCountry.country.id)
                        )
                return {
                    data: [...DeleteData]
                }
            } else {
                return {
                    data: [...state.data]
                }
            }
        case "DROPDCOUNTRYLIST": 
            const DropDDataArray = action.payload.map((val) => {  
                return {value: val.country_name, label: val.country_name, id: val.id}
            })
            //console.log(DataArray)
            return {
                ...state,
                data: DropDDataArray
            }
        default: return state
    } 
}

export default todoReducer
