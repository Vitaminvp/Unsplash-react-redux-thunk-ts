import axios from "axios";
import {config} from "../configs";

export interface FetchtokenResponse {

    access_token: string,
    token_type: string,
    scope: string,
    created_at: number

}

export const  fetchToken = async (code:string): Promise<FetchtokenResponse> => {
    const axiosConfig = {
        params: {
            client_id: config.clientId,
            client_secret: config.secretKey,
            redirect_uri: config.localAuth,
            code,
            grant_type: 'authorization_code'
        }
    };
    const response =  await axios.post<any>(config.oAuthToken, axiosConfig);
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