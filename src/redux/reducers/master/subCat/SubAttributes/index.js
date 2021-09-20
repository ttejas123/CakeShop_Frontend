const initialState = {
  data: [],
  start: 0
}
const SubAttributesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SubAttributes_fetched':
      console.log(action.payload)
      const dataArray = action.payload.map((category) => {
        return {
          id: category.id,
          Cat: category.category,
          subCat: [{ value: 'temp', label: 'temp' }],
          subAttributes: category.category_attributes.map((attr) => {
            return { key: attr.id, title: attr.display_name, description: `temp desc` }
          })
        }
      })
      return { ...state, data: dataArray, start: state.start + 5 }
    default:
      return state
  }
}

export default SubAttributesReducer
