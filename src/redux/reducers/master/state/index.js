const initialState = {
  data: [],
  count: 0,
  fetchStatesLoading: false,
  addStateLoading: false,
  editStateLoading: false
}

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    //** States are being fetched
    case "fetch_states_loading":
      return { ...state, fetchStatesLoading: !state.fetchStatesLoading }

    //** States have been fetched
    case "states_fetched_list_page":
      const dataArray = action.payload.states.map((state) => {
        return {
          id: state.id,
          StateName: state.name,
          Country: state.country.country_name,
          countryId:state.country.id
        }
      })
      return {
        ...state,
        data: dataArray,
        count: action.payload.count,
        fetchStatesLoading: !state.fetchStatesLoading
      }

    //** State is being added
    case "add_state_loading":
      return { ...state, addStateLoading: !state.addStateLoading }
    //** State has been added
    case "state_added":
      const newState = {
        id: action.payload.id,
        StateName: action.payload.name,
        Country: action.payload.country.country_name
      }
      if (state.data.length === 5) state.data.pop()
      return {
        ...state,
        count: state.count + 1,
        data: [newState, ...state.data],
        addStateLoading: !state.addStateLoading
      }

    //** State is being edited
    case "edit_state_loading":
      return { ...state, editStateLoading: !state.editStateLoading }
    //** State has been edited
    case "state_edited":
      const newState2 = {
        id: action.payload.id,
        StateName: action.payload.name,
        Country: action.payload.country.country_name
      }
      const dataArray3 = state.data.map((state) => {
        if (state.id === newState2.id) return newState2
        else return state
      })
      return { ...state, data: dataArray3, editStateLoading: !state.editStateLoading }

    //** State has been deleted
    case "state_deleted":
      return { ...state, fetchStatesLoading: !state.fetchStatesLoading }

    //** Component has unmounted, so reset state
    case "states_reset_list_page":
      return initialState
    default:
      return state
  }
}

export default stateReducer
