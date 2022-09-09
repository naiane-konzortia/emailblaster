import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.defaults.headers.post["Content-Type"] = "application/json";

class APIClient{
    get = (url: string, params?: {}) => {
        return axios.get(url, params)
    }
    
    create = (url: string, params?: {}) => {
        return axios.post(url, params );
    }

    update = (url: string, params?: {}) => {
        return axios.put(url, params);
    }
    delete = (url: string) => {
        return axios.delete(url)
    }
}

export default APIClient;

