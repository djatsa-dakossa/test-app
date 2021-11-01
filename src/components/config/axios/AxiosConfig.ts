import axios from "axios";
import { getData } from "../../utils/storage";

const host = "http://192.168.100.25:3003"

const API = axios.create({
    baseURL: host
})


const fetchToken = async () => {
    const tokenData = await getData('token');
    console.log("tokenData ==>", tokenData)
    

    API.defaults.headers.common['Authorization'] = `JWT ${JSON.parse(tokenData)}` 
} 

fetchToken()

 

API.interceptors.response.use(
    res => {
        return res;
    },
    async error => {
        if (error.response) {  
            
            throw error.response; 
        } 
        throw error;
    }
);



export default API 