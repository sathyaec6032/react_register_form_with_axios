import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3500'
})

//The above URL is backend server URL.