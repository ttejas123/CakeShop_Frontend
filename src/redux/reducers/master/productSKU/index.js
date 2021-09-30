import { BaseUrl, BackEndUrl } from '@store/baseUrl'
import Avatar from '@components/avatar'

const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.image) {
    return <Avatar className='mr-1' img={`${BackEndUrl}${row.image[0].url}`} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.name || 'John Doe'} initials status="online" />
  }
}

const part = (data2) => {
  return (<div key={data2.id} className='d-flex justify-content-left align-items-center'>
          {renderClient(data2)}
        <div className=''>
                                          
          <div className='user-info text-truncate d-flex flex-column'>
            <span className='font-weight-bold'>{data2.name}</span>
              <small className='text-truncate text-muted mb-0'>₹{data2.mrp}</small>
          </div>
                                         
        </div>
    </div>)
}

const initData = {
     data: [],
     attribute: [],
     specPro: {},
     recentAddedProduct: {},
     count: 0
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "PRODUCTSKULIST": 
            
            const DataArray = action.payload.productSkusConnection.values.map((val) => { 
                //console.log(val) 
                return {
                    
                    name: val.product ? val.product.name : '---',
                    no_of_seller: val.catalogues.length > 0 ? val.catalogues.length : "0",
                    customization_avail: val.catalogues.length > 0 ? val.catalogues[0].customization_avail === true ? "Yes" : "No" : '---',
                    sample_avail: val.catalogues.length > 0 ? val.catalogues[0].sample_avail === true ? "Yes" : "No" : '---',
                    moq: val.catalogues.length > 0 ? val.catalogues[0].moq : "0",
                    delivery_days: val.catalogues.length > 0 ? val.catalogues[0].delivery_days : "0",
                    G_Sdelivary: val.greater_delivary.length > 0 ? val.greater_delivary[0].delivery_days === val.smaller_delivary[0].delivery_days ? val.smaller_delivary[0].delivery_days : `${val.greater_delivary[0].delivery_days} - ${val.smaller_delivary[0].delivery_days}` : 0,
                    sku_id: val.sku_id,
                    inspection: "--",
                    mrp: val.mrp,
                    id: val.id
                }
            })
            //console.log(DataArray)
            return {
                ...state,
                count: action.payload.productSkusConnection.aggregate.count,
                data: DataArray
            }
        case "SPECIFICPRODUCT": 
            
            // const RawProductData = action.payload.productSku
                   //console.log(val.createdAt) 
            // const SpecProductSku =  {
            //         img: `${BackEndUrl}${RawProductData.image ? RawProductData.image[0].url : "/" }`.replaceAll('"', ''),
            //         images: AllUrl,
            //         imgID:  RawProductData.image ? RawProductData.image[0].id : null,
            //         imgIds: AllImgIDs,
            //         name: RawProductData.name,
            //         mrp: RawProductData.mrp,
            //         ean: RawProductData.ean_upc_code,
            //         hsn: RawProductData.hsn_code,
            //         sgst: RawProductData.sgst,
            //         cgst: RawProductData.cgst,
            //         gst: RawProductData.gst,
            //         description: RawProductData.description,
            //         category: RawProductData.category ? {label: RawProductData.category.category, value: RawProductData.category.category, id: RawProductData.category.id} : "---",
            //         brand: RawProductData.brand ? {label: RawProductData.brand.name, value: RawProductData.brand.name, id: RawProductData.brand.id} : "---",
            //         Cat_id: RawProductData.category ? RawProductData.category.id : "",
            //         product_Cat: RawProductData.category ? RawProductData.category.parent_category ? RawProductData.category.parent_category.category : "---" : "---",
            //         slug: RawProductData.slug,
                       //nosProduct: RawProductData.products.length || 0,
                       //since: RawProductData.createdAt.split('T')[0],
            //         id: RawProductData.id
            //     }
            
            //console.log(DataArray)
            return {
                ...state
                //specProSku: SpecProductSku
            }
        // case "ADDPRODUCT": 
        case "SPECIFICPRODUCTSKU":
            const specificProductSku = action.payload.productSku
            if (specificProductSku) {
                let newAttribute = ''
                newAttribute = {}
                const resultAttribute = specificProductSku.product_sku_attributes_mappings ? specificProductSku.product_sku_attributes_mappings.map((attribute) => {
                    const keyVal = attribute.attribute.display_name.split(" ")[0]
                    newAttribute = {
                         ...newAttribute,
                         [keyVal] : {label : attribute.value,  value: attribute.value, id: attribute.id, name: attribute.attribute.display_name}
                    }
                }) : []
                const AllUrl = specificProductSku.images.length !== 0 ? (specificProductSku.images.map((val) => {
                        return `${BackEndUrl}${val.url}`
                })) : ([])
                const AllImgIDs = specificProductSku.images.length !== 0 ? (specificProductSku.images.map((val) => {
                        return val.id
                })) : ([])
                //console.log(newAttribute)

                return {
                    ...state,
                    specPro: {
                        storeArray: {
                            ...newAttribute
                        },
                        mrp: specificProductSku.mrp,
                        images: AllUrl,
                        imgIds: AllImgIDs,
                        productSku: specificProductSku.sku_id,
                        sku_title: specificProductSku.sku_title,
                        productID: specificProductSku.product ? specificProductSku.product.id : '',
                        productName: specificProductSku.product ? specificProductSku.product.name : '',
                        categoryID: specificProductSku.product ? specificProductSku.product.category ? specificProductSku.product.category.id : '' : '',
                        id: specificProductSku.id
                    }
                }   
            } else {
                return {
                    ...state
                }
            }
        case "ADDPRODUCTSKU": 
            return {
                ...state
            }
        case "PRODUCTSPECIFICSKULIST":
            const produxtspecificdata = action.payload.productSkusConnection.values.map((val) => { 
                //console.log(val)
                const resultAttribute = val.product_sku_attributes_mappings ? val.product_sku_attributes_mappings.map((attribute) => {
                    return {value: attribute.value, name: attribute.attribute.display_name}
                }) : []
                return {
                    sku_id: val.sku_id,
                    name: val.sku_title,
                    mrp: val.mrp,
                    attribute: resultAttribute,
                    id: val.id
                }
            })
            //console.log(DataArray)
            return {
                ...state,
                count: action.payload.productSkusConnection.aggregate.count,
                data: produxtspecificdata
            }
        case "RECENTADDEDPRODUCT":
             const productData = action.payload
             //console.log(productData)
             return {
                ...state,
                recentAddedProduct: {
                    ...state.recentAddedProduct,
                    ...productData
                }
             }
        case "SPECIFICPRODUCTATTRIBUTE": 
            const productAttribute = action.payload.product.attribute.map((val) => {
                const attributeval = val.attribute_value_masters.map((atriVal) => {
                    return {label: atriVal.value, value: atriVal.value, id: atriVal.id}
                })
                return {
                    display_name: val.display_name,
                    type: val.attribute_type.type,
                    value: attributeval
                }
            })
            return {
                ...state,
                attribute: productAttribute
            }
        case "PRODUCTSKUDELETE":
            const deleteProduct = action.payload.deleteProductSku.productSku
            if (deleteProduct !== null) {
                const DeleteData = state.data
                        .filter(
                          stateId =>
                            /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
                            (stateId.id !== deleteProduct.id)
                        )
                //console.log(DeleteData)
                return {
                    ...state,
                    count: state.count - 1,
                    data: DeleteData
                }
            } else {
                return {
                    ...state
                }
            }
        default: return state
    } 
}

export default todoReducer