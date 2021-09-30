const initialState = {
  data: [],
  categorys: {},
  attribute: [],
  subcategorys: {},
  count: 0
}
const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LISTOFCATEGORIES": 
            //console.log(action.payload)
            const DataSelectArray = action.payload.categories.map((val) => {  
                return {value: val.category, label: val.category, id: val.id}
            })
            //console.log(DataArray)
            return {
                ...state,
                data: DataSelectArray
            }
    case "LISTOFPARENTCATEGORIES": 
            //console.log(action.payload)
            const ParentDataSelectArray = action.payload.categories.map((val) => {  
                return {value: val.category, label: val.category, id: val.id}
            })
            //console.log(DataArray)
            return {
                ...state,
                categorys: {
                  parent: ParentDataSelectArray
                }
            }
    case "SPECIFICCATEGORY": 
            const attributeOF = action.payload.category.category_attributes
            if (attributeOF) {
                const AttributeMap = attributeOF.map((val) => {
                    const attributeval = val.attribute_value_masters.map((atriVal) => {
                        return {label: atriVal.value, value: atriVal.value, id: atriVal.id}
                    })
                    return {
                        display_name: val.display_name,
                        type: val.attribute_type.type,
                        value: attributeval,
                        id: val.id
                    }
                })
                return {
                    ...state,
                    attribute: AttributeMap
                }
            } else {
                return {
                    ...state
                }
            }
    case "LISTOFCHILDCATEGORIES": 
            const ChildDataSelectArray = action.payload.data.categories.map((val) => {  
                return {value: val.category, label: val.category, id: val.id}
            })
            const child = `Child${action.payload.index}`
      
              Object.keys(state.subcategorys).map((val, index) => {
                  if (action.payload.index < index) {
                    console.log(index)

                    delete state.subcategorys[`Child${index}`]
                  }
              })
            
            if (action.payload.data.categories && action.payload.data.categories.length === 0) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    subcategorys: {
                      ...state.subcategorys,
                      [child]: ChildDataSelectArray
                    }
                }
            }
    default:
      return state
  }
}
export default cityReducer
