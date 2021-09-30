const initData = {
     data: [],
     count: 0,
     specificEdit: {},
     dropdowns: {}
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "ATTRIBUTELIST":
            //try {
                const kycdoctype = action.payload.attributeMastersConnection.values.map((val) => {
                    const Attvalues = val.attribute_value_masters ? val.attribute_value_masters.map((attVal) => {
                        return attVal.value
                    }) : []
                    const categories = val.categories ? val.categories.map((cat) => {
                        return cat.category
                    }) : []
                    return {
                        name: val.display_name,
                        unit: val.unit ? val.unit : '---',
                        type: val.attribute_type ? val.attribute_type.type : '---',
                        Attvalues,
                        categories,     
                        id: val.id
                    }
                })
                //console.log(DataUserKyc)
                return {
                     ...state,
                     data: kycdoctype,
                     count: action.payload.attributeMastersConnection.aggregate.count
                }
            // } catch (e) {
            //     return {
            //         ...state
            //     }
            // }
        case "CREATEATTRIBUTE":
                return {
                    ...state
                }
        case "SPECIFICATTRIBUTE":
                const RawAttributeData = action.payload.attributeMaster
                const categories = RawAttributeData.categories.length !== 0 ? (RawAttributeData.categories.map((val) => {
                    return {label: val.category, value: val.category, id: val.id}
                })) : ([])
                const attVal = RawAttributeData.attribute_value_masters.length !== 0 ? (RawAttributeData.attribute_value_masters.map((val) => {
                    return {label: val.value, value: val.value, id: val.id}
                })) : ([])
                return {
                    ...state,
                    specificEdit: {
                       categories,
                       attVal,
                       attribute: RawAttributeData.display_name,
                       attType: RawAttributeData.attribute_type ? {label: RawAttributeData.attribute_type.type, value: RawAttributeData.attribute_type.type, id: RawAttributeData.attribute_type.id} : {},
                       id: RawAttributeData.id
                    }
                }
        case "REQUIREDFROPDOWN":
            const attType = action.payload.attType
            const attValue = action.payload.attValue
            const cat = action.payload.cat

            const attTypeArray = attType ? attType.map((val) => {
                return {label: val.type, value: val.type, id: val.id}
            }) : []
            const attValueArray = attValue ? attValue.map((val) => {
                return {label: val.value, value: val.value, id: val.id}
            }) : []
            const catArray = cat ? cat.map((val) => {
                return {label: val.category, value: val.category, id: val.id}
            }) : []
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
        case "DELETEATTRIBUTE":
            const deleteUser = action.payload.deleteAttributeMaster.attributeMaster
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