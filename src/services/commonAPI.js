import axios from "axios"
export const commonApi = async (httpMethod, url, body) => {
    let reqConfig = {
        method: httpMethod,
        url: url,
        data: body,
        headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}