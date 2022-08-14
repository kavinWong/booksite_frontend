import axios from 'axios';
import Qs from 'qs';
import config from '/config/config';

const Axios = axios.create({
    baseURL: config.host,
    timeout: 3000,
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept':'*/*'
    },
    withCredentials: true
});

Axios.interceptors.request.use(req => {
    let token = localStorage.getItem('token');
    if (token) {
        req.headers['Authorization'] = token;
    }

    req.data = Qs.stringify(req.data)
    return req; 
}, err => {
    return Promise.reject(err);
})

Axios.interceptors.response.use(res => {
    return res.data;
}, error => {
    const err = error.toString();
    switch (true) {
        case err.indexOf('Network') !== -1:
            console.log('Network Err', err);
            break;
        case err.indexOf('timeout') !== -1:
            console.log('timeout', err);
            break;
    }
    return Promise.reject(error);
})

export default Axios;
