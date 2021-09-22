import { Card, CardHeader, CardBody, CardTitle, Button, Row, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector, useDispatch } from 'react-redux'
const MySwal = withReactContent(Swal)

// const handleBasicTitleAlert = (props) => {
//   //const useDisplatch = useDispatch()
//   //console.log(props)
//     return MySwal.fire({
//       title: 'Any fool can use a computer',
//       customClass: {
//         confirmButton: 'btn btn-primary'

//       },
//       buttonsStyling: false
//     })
// }

const handleConfirmText = (DeleteC, id, useDisplatch) => {
  //const useDisplatch = useDispatch()
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-outline-danger ml-1'
      },
      buttonsStyling: false
    }).then(function (result) {
      if (result.value) {
        //console.log("This is from PopUp")
        useDisplatch(DeleteC(id))
        MySwal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'This Record has been deleted.',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        })
      }
    })
  }

export default handleConfirmText