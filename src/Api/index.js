//API SERVICE IS HERE

import axios from "axios";

const baseUrl = 'https://run.mocky.io/v3'

export const getCategoryApi = async () =>{
    const get = await axios.get(`${baseUrl}/e05f5d45-37b9-45ab-8611-8a9f2ffa6ee2`)
    return get
}

export const getNewFashionApi = async () =>{
    const get = await axios.get(`${baseUrl}/f7b172cf-eb64-471b-b2d3-2876e00805a8`)
    return get
}

export const getHotSalesApi = async () =>{
    const get = await axios.get(`${baseUrl}/244dc8ee-0dde-4e42-91c3-bc6f36995959`)
    return get
}

export const Api = {
    getCategoryApi,
    getNewFashionApi,
    getHotSalesApi
}