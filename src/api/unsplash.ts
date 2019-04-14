import axios from "axios";
import { config } from "../configs/"
export default axios.create({
    baseURL: config.baseURL,
    headers: {
        'Authorization': `Client-ID ${config.clientId}`
    }
})