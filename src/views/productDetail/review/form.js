// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import Rating from 'react-rating'
// ** Third Party Components
import axios from 'axios'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Star  } from 'react-feather'
//import Flatpickr from 'react-flatpickr'
// ** React Imports
import { useState, useEffect } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'
// ** Third Party Components
import Flatpickr from 'react-flatpickr'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col  } from 'reactstrap'
// ** Styles
import './style.css'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const AddNewModal = (prop) => {

  const [values, setValues] = useState('')
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />

  const view = (val) => {
    //here we passing id to delete this specific record
   setModal(true)
  }

  return (
    <Modal
      isOpen={prop.open}
      toggle={prop.handleModal}
      className='sidebar-sm col-lg-4 col-12'
     
      contentClassName='pt-0'
    >
      <ModalHeader className='mb-1' toggle={prop.handleModal} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>Review</h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1'>
            <div className="ps-form--review">
                <form >
                            <div className="row">
                                <div className="col-lg-4 col-12 ">
                                        <label className="ps-form__label">Rating *</label>
                                        <Rating
                                          emptySymbol={<Star size={18} fill='#babfc7' stroke='#babfc7' />}
                                          fullSymbol={<Star size={18}  fill='orange' stroke='orange'/>} /*fill=2 stroke=2*/
                                          initialRating={2}
                                        />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <label className="ps-form__label">Name *</label>
                                    <input className="form-control ps-form__input" />
                                </div>
                                <div className="col-6 col-lg-4">
                                    <label className="ps-form__label">Email *</label>
                                    <input className="form-control ps-form__input" />
                                </div>
                                <div className="col-12">
                                    <div className="ps-form__block">
                                        <label className="ps-form__label">Your review *</label>
                                        <textarea className="form-control ps-form__textarea"></textarea>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button onClick={ prop.handleModal } className="btn ps-btn ps-btn--warning">Add Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
      </ModalBody>
    </Modal>
  )
}

export default AddNewModal

{
/*<div class="ps-form--review" style="display: block;">
                        <div class="ps-form__title">Write a review</div>
                        <div class="ps-form__desc">Your email address will not be published. Required fields are marked *</div>
                        <form action="do_action" method="post">
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <label class="ps-form__label">Your rating *</label>
                                    <div class="br-wrapper br-theme-fontawesome-stars"><select class="ps-rating--form" data-value="0" style="display: none;">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select><div class="br-widget"><a href="#" data-rating-value="1" data-rating-text="1"></a><a href="#" data-rating-value="2" data-rating-text="2"></a><a href="#" data-rating-value="3" data-rating-text="3"></a><a href="#" data-rating-value="4" data-rating-text="4"></a><a href="#" data-rating-value="5" data-rating-text="5"></a><div class="br-current-rating"></div></div></div>
                                </div>
                                <div class="col-6 col-lg-4">
                                    <label class="ps-form__label">Name *</label>
                                    <input class="form-control ps-form__input">
                                </div>
                                <div class="col-6 col-lg-4">
                                    <label class="ps-form__label">Email *</label>
                                    <input class="form-control ps-form__input">
                                </div>
                                <div class="col-12">
                                    <div class="ps-form__block">
                                        <label class="ps-form__label">Your review *</label>
                                        <textarea class="form-control ps-form__textarea"></textarea>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <button class="btn ps-btn ps-btn--warning">Add Review</button>
                                </div>
                            </div>
                        </form>
                    </div>*/
                }