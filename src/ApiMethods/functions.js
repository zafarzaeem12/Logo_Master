import {BaseUrl} from './BaseUrl'

// Get Api for Fetching Data

export const getDataApi = async (url) => {
    const address = await fetch(`${BaseUrl}${url}`)
    const data = await address.json();
    return data;
}

// Post Api for Creating Data

// export const postDataApi = async ( url, method = "POST",body,headers) => {
  
   
//         method: "POST",
//         headers: { "Content-type": "application/json; charset=UTF-8" },
//         body:JSON.stringify(payload)

//     const address = await fetch(`${BaseUrl}${url} ,${method},${body},${headers}`)
//     const response = await address.json();
//     return response;
// }