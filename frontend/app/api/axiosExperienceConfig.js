import axiosInstance from './axoisConfig';

const addNewExperience = async (expData) => {
    try { 
        debugger
        console.log(expData)
        const res = await axiosInstance.post('/api/experiences/addNew', {
            image: expData.image,
            name: expData.name,
            category: expData.category,
        })
    } catch (err) {
        console.log('New Experience (Frontend) Failed - axiosExpConfig')
    }
}

export default addNewExperience;