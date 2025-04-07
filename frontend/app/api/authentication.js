import axiosInstance from './axoisConfig';

const signUp = async (userData) => {
    try {
        console.log(userData)
        const res = await axiosInstance.post('/api/users/signup', {
            email: userData.email, 
            username: userData.email, 
            password: userData.password,
        }); 
        debugger;
        console.log(res);
    } catch (err) {
        console.log('Sign-Up Fail', err.message); 
    }
}

export default signUp;