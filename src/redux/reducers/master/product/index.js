import { BaseUrl, BackEndUrl } from '@store/baseUrl'

const initData = {
     data: [],
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
        case "SPECIFICPRODUCT": 
            
            const RawProductData = action.payload.product
            const AllUrl = RawProductData.image.length !== 0 ? (RawProductData.image.map((val) => {
                    return `${BackEndUrl}${val.url}`
            })) : ([])
                //console.log(val.createdAt) 
            const SpecProduct =  {
                    img: `${BackEndUrl}${RawProductData.image ? RawProductData.image[0].url : "/" }`.replaceAll('"', ''),
                    images: AllUrl,
                    imgID:  RawProductData.image ? RawProductData.image[0].id : null,
                    name: RawProductData.name,
                    mrp: RawProductData.mrp,
                    ean_upc_code: RawProductData.ean_upc_code,
                    hsn_code: RawProductData.hsn_code,
                    sgst: RawProductData.sgst,
                    cgst: RawProductData.cgst,
                    gst: RawProductData.gst,
                    description: RawProductData.description,
                    category: RawProductData.category ? RawProductData.category.category : "---",
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
        case "ADDPRODUCT": 
            console.log(action.payload)
            return {
                ...state
            }
            // const AddBrandData = action.payload.createBrand.brand
            // const AddBrand = {
            //     Logo: `${BackEndUrl}${AddBrandData.logo ? AddBrandData.logo.url : "/" }`.replaceAll('"', ''), 
            //     Name: AddBrandData.name, 
            //     nosProduct: AddBrandData.products ? AddBrandData.products.length : 0,
            //     since: AddBrandData.createdAt.split('T')[0],
            //     id: AddBrandData.id
            // }
            // console.log(AddBrand)
            // return {
            //     data: [...state.data, AddBrand]
            // }
        // // case "COUNTRYDD": 
        // //     const filteredData = state.data
        // //             .filter(
        // //               stateId =>
        // //                  eslint-disable operator-linebreak, implicit-arrow-linebreak 
        // //                 (stateId.id !== action.payload.id)
        // //             )
        // //     //console.log(filteredData)
        // //     return {
        // //         data: [...filteredData]
        // //     }
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