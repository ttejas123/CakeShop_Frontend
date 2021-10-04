const initialState = {
  data: [],
  count: 0,
  fetchAttributesLoading: false
}
const SubAttributesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetch_categories_loading":
      return { ...state, fetchAttributesLoading: true }
    case "categories_fetched_list":
      const dataArray = action.payload.categories.map((category) => {
        return {
          id: category.id,
          Cat: category.category,
          subCat: [{ value: "temp", label: "temp" }],
          subAttributes: category.category_attributes.map((attr) => {
            return { key: attr.id, title: attr.display_name, description: `temp desc` }
          })
        }
      })
      return {
        ...state,
        data: dataArray,
        count: action.payload.count,
        fetchAttributesLoading: false
      }
    case "category_deleted":
      return { ...state, fetchAttributesLoading: false }
    case "category_reset_list":
      return initialState
    default:
      return state
  }
}

export default SubAttributesReducer
