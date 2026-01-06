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
export const getClothAPI = async(reqHeader)=>{
return await commonAPI("GET",`${serverURL}/clothes/all`,{},reqHeader)

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