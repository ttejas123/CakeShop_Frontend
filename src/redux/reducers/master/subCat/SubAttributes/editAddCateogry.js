const initialState = {
  data: [],
  parentCategories: [],
  count: 0,
  fetchAttributesLoading: false,
  addCategoryLoading: false,
  editCategoryLoading: false,
  fetchCategoryLoading: false,
  category: {}
}
const editAddCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "attributes_loading_for_edit_add_categoy":
      return { ...state, fetchAttributesLoading: true }
    case "attributes_fetched_for_edit_add_categoy":
      return {
        ...state,
        fetchAttributesLoading: false,
        data: action.payload.map((attribute) => {
          return {
            key: attribute.id,
            title: attribute.display_name
          }
        }),
        parentCategories: action.parentCategories
      }
    case "add_category_loading":
      return { ...state, addCategoryLoading: true }
    case "add_category_success":
      return { ...state, addCategoryLoading: false }
    case "fetch_category_loading":
      return { ...state, fetchCategoryLoading: true }
    case "category_fetched_for_edit":
      return { ...state, fetchCategoryLoading: false, category: action.payload }
    case "edit_category_loading":
      return { ...state, editCategoryLoading: true }
    case "edit_category_success":
      return { ...state, editCategoryLoading: false }
    case "attributes_edit_add_reset_list":
      return initialState
    default:
      return state
  }
}

export default editAddCategoryReducer
