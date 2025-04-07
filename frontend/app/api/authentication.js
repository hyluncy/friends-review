import axiosInstance from './axoisConfig';

const signUp = async (userData) => {
    try {
        const res = await axiosInstance.post('/api/users/signup', userData); 
        debugger;
        console.log(res);
    } catch (err) {
        console.log('Sign-Up Fail', err.message); 
    }
}

export default signUp;