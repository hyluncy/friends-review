import axiosInstance from './axoisConfig';

const signUp = async () => {
    // if (!checkPassword()) {
    //     return;     // Prevent submission of form
    // }
    try {
        const res = await axiosInstance.post('/api/users/signup', { // TODO: Update url with full backend url ".../api/users/signup"
            email: "hello@hello.com", 
            username: "helloworld", 
            password: "password", 
            confirmPassword: "password",
        }); 
        debugger;
        console.log(res);
    } catch (err) {
        console.log('Sign-Up Fail', err.message); 
    }
}

export default signUp;