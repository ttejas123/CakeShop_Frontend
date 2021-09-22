const initialState = {
  data: [],
  count: 0
}
const SubAttributesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SubAttributes_fetched_list':
      const dataArray = action.payload.categories.map((category) => {
        return {
          id: category.id,
          Cat: category.category,
          subCat: [{ value: 'temp', label: 'temp' }],
          subAttributes: category.category_attributes.map((attr) => {
            return { key: attr.id, title: attr.display_name, description: `temp desc` }
          })
        }
      })
      return { ...state, data: dataArray, count: action.payload.count }
    case 'SubAttributes_reset_list':
      return initialState
    default:
      return state
  }
}

export default SubAttributesReducer
