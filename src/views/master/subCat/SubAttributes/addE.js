
// ** React Imports
import { ReactSortable } from 'react-sortablejs'
import { useParams } from 'react-router-dom'
import Repeater from '@components/repeater'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import { useState, useEffect } from 'react'
import Flatpickr from 'react-flatpickr'
import { MoreVertical, User, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Plus  } from 'react-feather'
import { data } from './data'
import 'antd/dist/antd.css'
import { Transfer } from 'antd'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components

import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, InputGroup, InputGroupAddon, InputGroupText,  Card, CardHeader,
  CardBody, Badge, ListGroupItem,
  CardTitle, CustomInput } from 'reactstrap'

const UserAccountTab = (prop) => {
  const [targetKeysA, settargetKeysA] = useState([])
  const [mockDataA, setmockDataA] = useState([])
  const getMock = () => {
    const targetKeys = []
    const mockData = []
    let i = 0
    while (i < 20) {
      const data = {
        key: i.toString(),
        title: `Attribute${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1
      }
      // if (data.chosen) {
      //   targetKeys.push(data.key)
      // }
      mockData.push(data)
      i++
    }
   
    //settargetKeysA(targetKeys)
    setmockDataA(mockData)
   // this.setState({ mockData, targetKeys })
  }

  useEffect(() => {
      getMock()
  }, [])

  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1

  const handleChangeInTarg = targetKeys => {
    settargetKeysA(targetKeys)
  }

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value)
  }

  const { id } = useParams()

  const optionSubC = [
    {value: "Men's Ware", label: "Men's Ware"},
    {value: "T-shirt", label: "T-shirt"},
    {value: "Sport's T-shirt", label: "Sport's T-shirt"}
  ]

  const initialvalues = {
    id:0,
    Cat: "",
    subCat: [],
    subAttributes: []
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues)
  const [allDay, setAllDay] = useState(false)
  const [endPicker, setEndPicker] = useState(new Date()) 

    useEffect(() => {
    if (prop.currentId === "") {
        setValues({...initialvalues})
    } else {
        console.log(data[id - 1])
        setValues({
          ...data[id - 1]
        })
        const data1 = []
        const val = data[id - 1].subAttributes
        const proto = val.map(vale => {
            return data1.push(vale.key)
        })
        settargetKeysA(data1)
        //settargetKeysA(...subCat)
        
        
    }
  }, [prop.currentId, prop.data])
 
  // ** Custom close btn
  const increaseCount = (e, i) => {
      console.log(e.target.checked)
       if (e.target.checked) {
              const val = values.subCat
               val.length = i + 1
              setValues({
                ...values,
                subCat : [...val]
                })
       } else {
              setValues({
                ...values,
                subCat : [...values.subCat, '']
              })
        }   
  }

  //for other input
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }
  //for drop down
  const handleChange = (selectedOption) => {
    
    setValues(
      {
        ...values,
        Currency : selectedOption.value
      }
    )
  }

  const submitHandle = (event) => {
     const value = []
    targetKeysA.map((val) => {
      value.push(mockDataA[val])
    })

    console.log({
      ...values,
      subAttributes : value
    })
    //prop.editAction(values)
    
    setValues(initialvalues)
    settargetKeysA([])
    alert("Data successfully Updated")
  }

  const handleInput = (i, e) => {
    const { name, value } = event.target
    const val = [...values.subCat]
    val[i] = value
    setValues({
      ...values,
      subCat : val
    })

  }

  const deleteForm = (e, index) => {
    e.preventDefault()
    const val = values.subCat
    val.splice(index, 1)
    setValues({
      ...values,
      subCat : [...val]
    })
    
  }
  return (
    <Card>
    <Row>
      
        <Col sm='12' className="pl-5 pt-2">
          <h2 className="mb-1">Edit Your Category</h2>
        </Col>
      
      <CardBody className='pl-3 pt-2'>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>

            <Col md='6' sm='12'>
              <FormGroup>
                <Label for='Name'>Category</Label>
                <InputGroup>
                  
                  <Input name="Cat" onChange={handleInputeChange} id='Cat' placeholder='Textile' value={values.Cat} />
                </InputGroup>
              </FormGroup>
              <CustomInput
                  type='switch'
                  
                  onClick={ (e) => {
                            console.log(e.target.checked)
                            if (e.target.checked) {
                                            const val = values.subCat
                                            val.length = 0
                                            setValues({
                                              ...values,
                                              subCat : [...val]
                                            })
                            } else {
                               setValues({
                                  ...values,
                                  subCat : [...values.subCat, '']
                               })
                            }  
                            }
                          }
                  id='exampleCustomSwitch'
                  name='customSwitch'
                  label='Is This A Parent Category'
                  inline
                />
            </Col>

            <Col md='12' sm='12'>
                  { values.subCat.map((val, i) => {

                    return (
                        <Form key={i} onSubmit={ (e) => e.preventDefault() }>
                          <Row className='justify-content-between align-items-center'>
                            <Col md={6} className="mt-1">
                              <FormGroup>
                                <Label for={`item-name-${i}`}>Sub Category Name</Label>
                                
                                <Select
                                    id='BidStatus'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    options={optionSubC}
                                    theme={selectThemeColors}
                                    value={values.subCat[i]}
                                    onChange={data => {
                                                        const val = [...values.subCat]
                                                        val[i] = data
                                                        setValues({
                                                          ...values,
                                                          subCat : val
                                                        })
                                                      }
                                              }
                                  />
                              </FormGroup>
                            </Col>
                            
                            <Col md={4} className="mt-2">
                              <Button.Ripple color='danger' className='text-nowrap px-1' onClick={ (e) => deleteForm(e, i)} outline>
                                <X size={14} className='mr-50' />
                                <span>Delete</span>
                              </Button.Ripple>
                            </Col>
                            
                          </Row>
                      </Form>
                      )
                  }
                  )}
              {values.Cat === "" ? null : (
                    <div className="mt-1">Pathing: <b>{ values.Cat } </b> > { values.subCat[0] ? <b> { values.subCat[0].value } </b> : null } </div>
                  )}

              <hr />
            </Col>
            <Col>
                <h3 className="mb-2 mt-2"> Select Attributes </h3>
                
                
                <Transfer
                  dataSource={mockDataA}
                  showSearch
                  filterOption={filterOption}
                  targetKeys={targetKeysA}
                  onChange={handleChangeInTarg}
                  onSearch={handleSearch}
                  render={item => item.title}
                />
            
            </Col>

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' onClick={ e =>  {
                                                          submitHandle()
                                                        }
                                                      } color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={ () => setValues(initialvalues) } outline>
                Reset
              </Button.Ripple>
            </Col> 
          </Row>
        </Form>
      </Col>
      </CardBody> 
    </Row>
    </Card>
  )
}
export default UserAccountTab
