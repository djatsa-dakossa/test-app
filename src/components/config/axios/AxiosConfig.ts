import axios from "axios";

const host = "http://192.168.8.100:8080"

const API = axios.create({
    baseURL: host
})


export default API 