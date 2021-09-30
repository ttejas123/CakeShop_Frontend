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
     allProductDataList: [],
     attributes:[],
     specPro: {},
     count: 0
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "PRODUCTLIST": 
            
            const DataArray = action.payload.productsConnection.values.map((val) => { 
                //console.log(val.createdAt) 
                return {
                    img: `${BackEndUrl}${val.image ? val.image[0].url : "/" }`.replaceAll('"', ''), 
                    name: val.name,
                    mrp: val.mrp,
                    ean_upc_code: val.ean_upc_code,
                    hsn_code: val.hsn_code,
                    sgst: val.sgst,
                    cgst: val.cgst,
                    gst: val.gst,
                    description: val.description,
                    category: val.category ? val.category.category : "---",
                    Cat_id: val.category ? val.category.id : "",
                    product_Cat: val.category ? val.category.parent_category ? val.category.parent_category.category : "---" : "---",
                    slug: val.slug,
                    // nosProduct: val.products.length || 0,
                    // since: val.createdAt.split('T')[0],
                    id: val.id
                }
            })
            //console.log(DataArray)
            return {
                ...state,
                count: action.payload.productsConnection.aggregate.count,
                data: DataArray
            }
        case "SPECIFICPRODUCTATTRIBUTEFORPRODUCTEDIT": 
            const productAttribute = action.payload.attributeMasters.map((val) => {
                return {
                    label: val.display_name,
                    value: val.display_name,
                    id: val.id
                }
            })
            //console.log(productAttribute)
            return {
                ...state,
                attribute: productAttribute
            }
        case "SPECIFICPRODUCT": 
            
            const RawProductData = action.payload.product
            if (RawProductData) {
                const AllUrl = RawProductData.image.length !== 0 ? (RawProductData.image.map((val) => {
                        return `${BackEndUrl}${val.url}`
                })) : ([])
                const AllImgIDs = RawProductData.image.length !== 0 ? (RawProductData.image.map((val) => {
                        return val.id
                })) : ([])
                // const Allattributes = RawProductData.attribute.length !== 0 ? (RawProductData.attribute.map((val) => {
                //         return {label: val.display_name, value: val.display_name, id: val.id}
                // })) : ([])
                    //console.log(val.createdAt) 
                const SpecProduct =  {
                        img: `${BackEndUrl}${RawProductData.image ? RawProductData.image[0].url : "/" }`.replaceAll('"', ''),
                        images: AllUrl,
                        imgID:  RawProductData.image ? RawProductData.image[0].id : null,
                        imgIds: AllImgIDs,
                        name: RawProductData.name,
                        mrp: RawProductData.mrp,
                        ean: RawProductData.ean_upc_code,
                        hsn: RawProductData.hsn_code,
                        sgst: RawProductData.sgst,
                        cgst: RawProductData.cgst,
                        gst: RawProductData.gst,
                        description: RawProductData.description,
                        category: RawProductData.category ? {label: RawProductData.category.category, value: RawProductData.category.category, id: RawProductData.category.id} : "---",
                        brand: RawProductData.brand ? {label: RawProductData.brand.name, value: RawProductData.brand.name, id: RawProductData.brand.id} : "---",
                        //attribute: RawProductData.attribute ? Allattributes : [],
                        Cat_id: RawProductData.category ? RawProductData.category.id : "",
                        product_Cat: RawProductData.category ? RawProductData.category.parent_category ? RawProductData.category.parent_category.category : "---" : "---",
                        slug: RawProductData.slug,
                        // nosProduct: RawProductData.products.length || 0,
                        // since: RawProductData.createdAt.split('T')[0],
                        id: RawProductData.id
                    }
                
                //console.log(DataArray)
                return {
                    ...state,
                    specPro: SpecProduct
                }
            } else {
                return {
                    ...state
                }
            }
        case "ADDPRODUCT": 
            return {
                ...state
            }
        case "UPDATEDPRODUCT": 
            return {
                ...state
            }
        case "ALLPRODUCTLIST" :
            const allProductDataList = action.payload.products.map((val) => {
                return {value: val.id, label: part(val), id: val.id}                
            }) 
            return {
                ...state,
                allProductDataList
            }
        case "PRODUCTDELETE":
            const deleteProduct = action.payload.deleteProduct.product
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