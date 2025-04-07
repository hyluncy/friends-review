import axiosInstance from './axoisConfig';

export const addNewExperience = async (expData) => {
    try { 
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

export const fetchExperienceById  = async (expID) => {
    try {
        console.log(expID) 
        const res = await axiosInstance.get(`/api/experiences/${expID}`)
        return res.data
    } catch (err) {
        console.log('Fetch Experience By ID failed (Frontend) 0 axiosExpConfig')
    }
}
