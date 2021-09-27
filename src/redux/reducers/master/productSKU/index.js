import { BaseUrl, BackEndUrl } from '@store/baseUrl'

const initData = {
     data: [],
     specPro: {},
     count: 0
}

const todoReducer = (state = initData, action) => {

    switch (action.type) {
        case "PRODUCTSKULIST": 
            
            const DataArray = action.payload.productSkusConnection.values.map((val) => { 
                console.log(val) 
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
                    id: val.id
                }
            })
            //console.log(DataArray)
            return {
                ...state,
                count: action.payload.productSkusConnection.aggregate.count,
                data: DataArray
            }
        // case "SPECIFICPRODUCT": 
            
        //     const RawProductData = action.payload.product
        //         //console.log(val.createdAt) 
        //     const SpecProduct =  {
        //             img: `${BackEndUrl}${RawProductData.image ? RawProductData.image[0].url : "/" }`.replaceAll('"', ''),
        //             imgID:  RawProductData.image ? RawProductData.image[0].id : null,
        //             name: RawProductData.name,
        //             mrp: RawProductData.mrp,
        //             ean_upc_code: RawProductData.ean_upc_code,
        //             hsn_code: RawProductData.hsn_code,
        //             sgst: RawProductData.sgst,
        //             cgst: RawProductData.cgst,
        //             gst: RawProductData.gst,
        //             description: RawProductData.description,
        //             category: RawProductData.category ? RawProductData.category.category : "---",
        //             product_Cat: RawProductData.category ? RawProductData.category.parent_category ? RawProductData.category.parent_category.category : "---" : "---",
        //             slug: RawProductData.slug,
        //             // nosProduct: RawProductData.products.length || 0,
        //             // since: RawProductData.createdAt.split('T')[0],
        //             id: RawProductData.id
        //         }
            
        //     //console.log(DataArray)
        //     return {
        //         ...state,
        //         specPro: SpecProduct
        //     }
        // case "ADDPRODUCT": 
            
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