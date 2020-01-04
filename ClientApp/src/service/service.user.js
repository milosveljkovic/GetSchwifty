import axios from 'axios';
import { POST } from '../constants/methods'
import { URL } from '../constants/url'

export function generateAuthRequest(method, url, options={}, headers={}) {
    return {
        method: method,
        url: `${URL}/${url}`,
        headers: {
            'Content-Type':'application/json',
            ...headers
        },
        ...options
    }
}

export function registerNewUser (auth) {
    var options = {
        data: auth
    };

    var config = generateAuthRequest(POST, 'api/User/RegisterUser' , options, {});
    return axios(config)
    .then( response => response)
    .catch((errorMessage) => {
        return errorMessage
    });
}  

export function loginUser (credentials) {
    var options = {
        data: credentials
    };

    var config = generateAuthRequest(POST, 'api/User/LoginUser' , options, {});
    return axios(config)
    .then( response => response)
    .catch((errorMessage) => {
        return errorMessage
    });
}  