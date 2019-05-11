import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api'


export const call = async function (method, path, data) {
    const response = await axios[method](path, data)
    return response.data
}