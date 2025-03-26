import axios from 'axios'; 

const axiosNext = axios.create({
    baseURL: 'http://localhost:4000/api', 
}); 

export default axiosNext;