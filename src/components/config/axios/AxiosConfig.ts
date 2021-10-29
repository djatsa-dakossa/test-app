import axios from "axios";

const host = "http://192.168.8.101:3000"

const API = axios.create({
    baseURL: host
})


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