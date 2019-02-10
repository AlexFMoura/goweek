import axios from 'axios'

const api = axios.creat({
    baseUrl = 'http://10.0.3.2:3000', //android
    // baseUrl = 'http://10.0.2.2:3000', //android studio
});

export default api;