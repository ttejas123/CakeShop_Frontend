const initialState = {
  data: [],
  count: 0,
  fetchCountriesLoading: false,
  editAddCountryLoading: false,
  currencies: []
}

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    //** Countries are being fetched
    case "fetch_countries_loading":
      return { ...state, fetchCountriesLoading: !state.fetchCountriesLoading }

    //** Countries have been fetched
    case "countries_fetched_list_page":
      const dataArray = action.payload.countries.map((country) => {
        return {
          id: country.id,
          name: country.country_name,
          country_initial: country.country_initial,
          country_code: country.country_code,
          currency: country.currency
        }
      })
      return {
        ...state,
        data: dataArray,
        count: action.payload.count,
        fetchCountriesLoading: !state.fetchCountriesLoading
      }

    //** Country is being added
    case "add_country_loading":
      return { ...state, editAddCountryLoading: !state.editAddCountryLoading }
    //** Country has been added
    case "country_added":
      const newCountry = {
        id: action.payload.id,
        name: action.payload.country_name,
        country_initial: action.payload.country_initial,
        country_code: action.payload.country_code,
        currency: action.payload.currency
      }
      if (state.data.length === 5) state.data.pop()
      return {
        ...state,
        count: state.count + 1,
        data: [newCountry, ...state.data],
        editAddCountryLoading: !state.editAddCountryLoading
      }

    //** Country is being edited
    case "edit_country_loading":
      return { ...state, editAddCountryLoading: !state.editAddCountryLoading }
    //** Country has been edited
    case "country_edited":
      const newCountry2 = {
        id: action.payload.id,
        name: action.payload.country_name,
        country_initial: action.payload.country_initial,
        country_code: action.payload.country_code,
        currency: action.payload.currency
      }
      const dataArray3 = state.data.map((state) => {
        if (state.id === newCountry2.id) return newCountry2
        else return state
      })
      return { ...state, data: dataArray3, editAddCountryLoading: !state.editAddCountryLoading }

    //** Country has been deleted
    case "country_deleted":
      return { ...state, fetchCountriesLoading: !state.fetchCountriesLoading }
    case "fetched_currencied_for_add_edit":
      return {
        ...state,
        currencies: action.payload.map((currency) => {
          return { label: currency.code, value: currency.symbol, id: currency.id }
        })
      }
    //** Component has unmounted, so reset state
    case "countries_reset_list_page":
      return initialState
    default:
      return state
  }
}

export default countryReducer
