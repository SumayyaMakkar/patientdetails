import { serverUrl } from "./serverURL";
import { commonApi } from "./commonAPI";

export const getDetailsAPI=async()=>{
    return await commonApi('GET',`${serverUrl}/patientdetails`,"")
}

//to get medication
export const getDataAPI=async(data)=>{
    return await commonApi('GET',`${serverUrl}/${data}`,"")
}