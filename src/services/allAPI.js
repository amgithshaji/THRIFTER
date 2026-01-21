import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

// register api : called but auth component when register btn is clicked
export const registerAPI = async(userDetails)=>{
return await commonAPI("POST",`${serverURL}/register`,userDetails)

}

// login api : called but auth component when login btn is clicked
export const loginAPI = async(userDetails)=>{
return await commonAPI("POST",`${serverURL}/login`,userDetails)

}

// google/sign-in : 
export const googleLoginAPI = async(userDetails)=>{
return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)

}

// add cloth: user add cloth
export const addClothAPI = async(reqBody,reqHeader)=>{
return await commonAPI("POST",`${serverURL}/user/clothes/add`,reqBody,reqHeader)

}

// get cloth: user getcloth
export const getClothAPI = async(reqHeader,searchKey)=>{
return await commonAPI("GET",`${serverURL}/clothes/all?search=${searchKey}`,{},reqHeader)

}

// view cloth: user add cloth
export const viewClothAPI = async(reqHeader,id)=>{
return await commonAPI("GET",`${serverURL}/cloth/${id}/view`,{},reqHeader)

}
// add store
export const addStoreAPI = async(reqBody,reqHeader)=>{
return await commonAPI("POST",`${serverURL}/user/store/add`,reqBody,reqHeader)

}

// view store
export const viewStoreAPI = async(reqHeader,sellermail)=>{
return await commonAPI("GET",`${serverURL}/seller/${sellermail}/details`,{},reqHeader)

}
// get store clothes
export const viewStoreClothesAPI = async(reqHeader,sellermail)=>{
return await commonAPI("GET",`${serverURL}/seller/${sellermail}/clothes`,{},reqHeader)

}

// get cloth: user getcloth
export const getClothDetailsAPI = async(reqHeader,id)=>{
return await commonAPI("GET",`${serverURL}/clothdetails/${id}/view`,{},reqHeader)

}
// get wishlist
export const getWishlistAPI  = async(reqHeader)=>{
return await commonAPI("GET",`${serverURL}/wishlist`,{},reqHeader)

}
// add wishlist
export const addWishlistAPI  = async(reqHeader,clothId)=>{
return await commonAPI("POST",`${serverURL}/wishlist/add`,{clothId},reqHeader)

}
// delete wishlist
export const removeWishlistAPI  = async(reqHeader,clothId)=>{
return await commonAPI("DELETE",`${serverURL}/wishlist/${clothId}/delete`,{},reqHeader)

}
// get cart
export const getCartAPI  = async(reqHeader)=>{
return await commonAPI("GET",`${serverURL}/cart`,{},reqHeader)

}
// add cart
export const addToCartAPI  = async(reqHeader,clothId)=>{
return await commonAPI("POST",`${serverURL}/cart/add`,{clothId},reqHeader)

}
// delete cart
export const removeCartAPI = async(reqHeader,clothId)=>{
return await commonAPI("DELETE",`${serverURL}/cart/${clothId}/delete`,{},reqHeader)

}
// decrease cart
export const decreaseCartAPI = async(reqHeader,clothId)=>{
return await commonAPI("PUT",`${serverURL}/cart/decrease/${clothId}`,{},reqHeader)

}
// edit user profile
export const editUserAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}
// get user cloth
export const getAllUserClothAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-cloth/all`,{},reqHeader)
}

// remove cloth 
export const removeClothAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/cloth/${id}`,{},reqHeader)
}

// get my order clothes
export const getMyOrderClothAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/my-order/cloth'`,{},reqHeader)
}