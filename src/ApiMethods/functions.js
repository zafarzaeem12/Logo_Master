import {BaseUrl} from './BaseUrl'

// Get Api for Fetching Data

export const getDataApi = async (url) => {
    const address = await fetch(`${BaseUrl}${url}`)
    const data = await address.json();
    return data;
}