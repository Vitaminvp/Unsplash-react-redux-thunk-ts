import axios from "axios";
import { config } from "../configs/"
import {SearchResponse} from "../types/API";
const apiUrl = '/search/photos';
const apiUrlId = '/photos';

const options =  axios.create({
    baseURL: config.baseURL,
    headers: {
        'Authorization': `Client-ID ${config.clientId}`
    }
});

export const  getImages = async (searchInput:string, currentPage: number) => {
    const axiosConfig = {
        params: {
            query: searchInput,
            page: currentPage
        }
    };
    const response =  await options.get<SearchResponse>(apiUrl, axiosConfig);
    const { total, total_pages: totalPages, results: items} =  response.data;
    return { total, totalPages, items};

};

export  const  getImage = async (imageId:string) => {

    const response =  await axios.get<SearchResponse>(`https://api.unsplash.com/photos/?id=${imageId}
&client_id=995142b5e2f546f4eac828d832606dfba0beaef27d62d77a1ff8cce9ba2bacac`);
    console.log("response.data13", response);
    return response;

};

