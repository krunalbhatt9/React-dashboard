import axios from 'axios'

const url = '/api/device'

export const fetchData = async(windfarm) => {
    try{
        const response = await axios.post(url,{
            windfarm : windfarm
        });
        console.log(response)
        return response
    }catch (error){

    }
    
}
export const windfarms = async () => {
    try {
        const {data} = await axios.get('/api/farms')
        return data
    }catch (error){

    }
}