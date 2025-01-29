import axios from 'axios'; 

const axoisInstance = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 30000,
  });

  export default axoisInstance;
