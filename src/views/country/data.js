// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}
//expot data
export const data = [
    {
      id:1,
      Name: "Afghanistan",
      Initial: "AF",
      code: "004",
      currencies: [
            {
              code: "AFN",
              name: "Afghan afghani",
              symbol: "؋"
            }
      ]
    },
    {
      id:2,
      Name: "Åland Islands",
      Initial: "AX",
      code: "248",
      currencies: [
        {
        code: "EUR",
        name: "Euro",
        symbol: "€"
        }
      ]
    },
    {
      id:3,
      Name: "Albania",
      Initial: "AL",
      code: "008",
      currencies: [
          {
          code: "ALL",
          name: "Albanian lek",
          symbol: "L"
          }
      ]
    }
]


// ** Get initial Data
// axios.get('http://restcountries.eu/rest/v2/all').then(response => {
//   console.log(response.data)
// })
