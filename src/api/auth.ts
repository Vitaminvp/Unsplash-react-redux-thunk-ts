import axios from "axios";
import {config} from "../configs";
import {FetchTokenResponse} from "../types/API";



export const  fetchToken = async (code:string): Promise<FetchTokenResponse> => {
    const axiosConfig = {
        params: {
            client_id: config.clientId,
            client_secret: config.secretKey,
            redirect_uri: config.localAuth,
            code,
            grant_type: 'authorization_code'
        }
    };
    const request = axios.create(axiosConfig);
    const response =  await request.post<any>(config.oAuthToken);

    return  response.data;

};
export const  fetchCode = (code:string) => {
    const axiosConfig = {
        params: {
            client_id: config.clientId,
            redirect_uri: config.localAuth,
            response_type: 'code',
            scope: 'public+read_user'
        }
    };
    const response =  axios.get(config.oAuth, axiosConfig);
    return  response;

};
