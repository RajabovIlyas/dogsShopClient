import axios from 'axios';

const mainUrl='http://80.78.247.63:5001/api';
const mainLocalUrl='http://localhost:5001/api';


const apiFetch = (url, options = {}) => {
    const apiUrl = mainUrl + url;
    return axios(apiUrl, {
        ...options,
    }).then(result=>result.data);
};

export default apiFetch;
