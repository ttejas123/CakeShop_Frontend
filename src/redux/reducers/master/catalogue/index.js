import { BaseUrl, BackEndUrl } from '@store/baseUrl'
import Avatar from '@components/avatar'

const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.image.length) {
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
          </div>
                                         
        </div>
    </div>)
}

const initData = {
     data: [],
     count: 0,
     productList: [],
     skuList: [],
     specificcalalogue: {},
     selectedskuProductData: {},
     dropdowns: {}
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "CATALOGUELIST":
            //try {
                const kycdoctype = action.payload.cataloguesConnection.values.map((val) => {
                    // const Attvalues = val.attribute_value_masters ? val.attribute_value_masters.map((attVal) => {
                    //     return attVal.value
                    // }) : []
                    // const categories = val.categories ? val.categories.map((cat) => {
                    //     return cat.category
                    // }) : []
                    //console.log(val.product_skus ? val.product_skus.images[0] ? `${BackEndUrl}/${val.product_skus.images[0].url}` : "" : "")
                    return {
                        customization_avail: val.customization_avail,
                        sample_avail: val.sample_avail,
                        mrp: val.product_skus ? val.product_skus.mrp : "",
                        sku_title: val.product_skus ? val.product_skus.sku_title : '',
                        sku_id: val.product_skus ? val.product_skus.id : '',
                        ean_upc_code: val.product_skus ? val.product_skus.product ? val.product_skus.product.ean_upc_code : "" : "",
                        hsn_code: val.product_skus ? val.product_skus.product ? val.product_skus.product.hsn_code : "" : "",
                        delivery_days: val.delivery_days,
                        avail_quantity: val.avail_quantity,
                        image: val.product_skus ? val.product_skus.images[0] ? `${BackEndUrl}${val.product_skus.images[0].url}` : "" : "",
                        moq: val.moq,
                        unit_price: val.unit_price,     
                        id: val.id
                    }
                })
                //console.log(DataUserKyc)
                return {
                     ...state,
                     data: kycdoctype,
                     count: action.payload.cataloguesConnection.aggregate.count
                }
            // } catch (e) {
            //     return {
            //         ...state
            //     }
            // }
        case "CREATECATALOGUE":
                return {
                    ...state
                }
        case "PRODUCTSKUPREFETCHDATA":
                const skuData = action.payload.productSku
                if (skuData) {
                    const resultAttribute = skuData.product_sku_attributes_mappings ? skuData.product_sku_attributes_mappings.map((attribute) => {
                        // return {value: attribute.value, name: attribute.attribute.display_name}
                        return {
                            display_name: attribute.attribute.display_name,
                            // type: val.attribute_type.type,
                            value: {value: attribute.value, label: attribute.value, id: attribute.id},
                            id: attribute.id
                        }
                    }) : []

                    const selectedskuProductData = {
                        sku_title: skuData.sku_title,
                        mrp: skuData.mrp,
                        attribute: resultAttribute,
                        gst: skuData.product.gst,
                        brand: skuData.product.brand ? ({label: skuData.product.brand.name, value: skuData.product.brand.name, id: skuData.product.brand.id}) : '',
                        description: skuData.product.description,
                        hsn_code: skuData.product.hsn_code,
                        ean_upc_code: skuData.product.ean_upc_code,
                        id: skuData.id
                    }
                    return {
                        ...state,
                        selectedskuProductData
                    }
                } else {
                    return {
                        ...state
                    }
                }
        case "PRODUCTSPECPRODUCTSKULIST":
            const skuList = action.payload.productSkus.map((val) => {
                const dataToMake = {
                    name: val.sku_title,
                    image: val.images
                }
                return {value: val.id, label: part(dataToMake), id: val.id}
            })
            return {
                ...state,
                skuList
            }
        case "CATEGORYPRODUCTLIST":
            const productList = action.payload.category.products.map((val) => {
                return {value: val.id, label: part(val), id: val.id}
            })
            return {
                ...state,
                productList
            }    
        case "UPDATECALALOGUE":
                    return {
                        ...state
                    }
        case "FETCHONECATALOGUE": 
                const specificCalalogue = action.payload.catalogue
                // const AllUrl = specificCalalogue.product_images.length !== 0 ? (specificCalalogue.product_images.map((val) => {
                //         return `${BackEndUrl}${val.url}`
                // })) : ([])
                // const AllImgIDs = specificCalalogue.product_images.length !== 0 ? (specificCalalogue.product_images.map((val) => {
                //         return val.id
                // })) : ([])

                if (specificCalalogue) {
                    const AllUrl = specificCalalogue.product_images.length !== 0 ? (specificCalalogue.product_images.map((val) => {
                        return `${BackEndUrl}${val.url}`
                    })) : ([])
                    const AllImgIDs = specificCalalogue.product_images.length !== 0 ? (specificCalalogue.product_images.map((val) => {
                            return val.id
                    })) : ([])
                    const specificcalalogue = {
                        sku_id: specificCalalogue.product_skus ? specificCalalogue.product_skus.id : "",
                        images: AllUrl,
                        imgIds: AllImgIDs,
                        custom: specificCalalogue.customization_avail,
                        sampling: specificCalalogue.sample_avail,
                        unit_price: specificCalalogue.unit_price,
                        moq: specificCalalogue.moq,
                        lead: specificCalalogue.delivery_days,
                        totalInventry: specificCalalogue.avail_quantity,
                        id: specificCalalogue.id
                    }
                    //console.log(specificcalalogue)
                    return {
                        ...state,
                        specificcalalogue
                    }
                } else {
                    return {
                        ...state
                    }
                }
        case "DELETECATALOGE":
            const deleteUser = action.payload.deleteCatalogue.catalogue
            return {
                ...state
            }
          
        default: return state
    } 
}

export default todoReducer