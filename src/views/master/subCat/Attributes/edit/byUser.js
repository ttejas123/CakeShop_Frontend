// ** React Imports
import { useState, useEffect } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import Repeater from '@components/repeater'
import { X, Plus } from 'react-feather'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { DragDrop } from '@uppy/react'
// ** Custom Components
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { requiredDropdown, specificAttribute, List, editAttribute } from '@store/actions/master/attribute'
// ** Third Party Components
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ByUserTab = () => {
  const useDisplatch = useDispatch()
  useEffect(() => {
    useDisplatch(requiredDropdown())
   
  }, [useDisplatch])
  const attributeData = useSelector(state => {
    console.log(state.attribute)
    return state.attribute
  })
  const [values, setValues] = useState({})
  const { id } = useParams()
  useEffect(() => {
    useDisplatch(specificAttribute(id))
  }, [id])
  useEffect(() => {
    if (attributeData) {
      setValues(attributeData.specificEdit)
    }
  }, [attributeData])

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('form').remove()
  }

 // console.log(selectedUser)

  const initialvalues = {
    
  }

  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }

  const optionSubC = [
    {value: "Men's Ware", label: "Men's Ware"},
    {value: "T-shirt", label: "T-shirt"},
    {value: "Sport's T-shirt", label: "Sport's T-shirt"}
  ]

  // ** Function to change user imag


  return (
    <Row>
        <Col md={4}>

                  <FormGroup>
                    <Label for={`attribute-name`}>Attribute Name</Label>
                    <Input type='text' id='attribute' name='attribute' value={values.attribute} onChange={handleInputeChange} placeholder='Attribute Name' />
                  </FormGroup>
                
        </Col>
        <Col md={4} >
                              <FormGroup>
                                <Label for={`item-name`}>Select Category</Label>
                                
                                <Select
                                    id='BidStatus'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    isMulti
                                    options={attributeData.dropdowns.catArray}
                                    theme={selectThemeColors}
                                    value={values.categories}
                                    onChange={data => { 
                                                        setValues({
                                                          ...values,
                                                          categories : data
                                                        })
                                                      }
                                              }
                                  />
                              </FormGroup>
        </Col>
        <Col md={4} >
                              <FormGroup>
                                <Label for={`item-name`}>Select Attribute Default Values</Label>
                                
                                <Select
                                    id='BidStatus'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    isMulti
                                    options={attributeData.dropdowns.attValueArray}
                                    theme={selectThemeColors}
                                    value={values.attVal}
                                    onChange={data => { 
                                                        setValues({
                                                          ...values,
                                                          attVal : data
                                                        })
                                                      }
                                              }
                                  />
                              </FormGroup>
        </Col>
        <Col md={4} >
                              <FormGroup>
                                <Label for={`item-name`}>Select Attribute Default Values</Label>
                                
                                <Select
                                    id='BidStatus'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    options={attributeData.dropdowns.attTypeArray}
                                    theme={selectThemeColors}
                                    value={values.attType}
                                    onChange={data => { 
                                                        setValues({
                                                          ...values,
                                                          attType : data
                                                        })
                                                      }
                                              }
                                  />
                              </FormGroup>
        </Col>
        <Col md={12}>
         <Button.Ripple tag={Link} to='/master/attribute' color='primary' onClick={() => {
          useDisplatch(editAttribute(values, useDisplatch, List))
          setValues("")
        }}>
           
            <span className='align-middle'>Submit</span>
          </Button.Ripple>
        </Col>
    </Row>
  )
}
export default ByUserTab
