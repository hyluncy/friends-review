import axios from 'axios'; 
import axiosInstance from './axoisConfig';

const axiosNext = axios.create({
    baseURL: 'http://localhost:4000/api', 
}); 

const addNewExperience = async() => {
    try { 
        const res = await axiosInstance.post('/api/experience/addNew', {
            image: 'https://dummyimage.com/400x300/9c90e8/f7f7f7.png&text=No+Image+Available',
            name: 'testName',
            category: 'testCategory',
        })
    } catch (err) {
        console.log('New Experience (Frontend) Failed - axiosExpConfig')
    }
}

export default axiosNext;