import axios from "axios";
import {Message} from "view-ui-plus";

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 30 * 1000
});

service.interceptors.request.use(
    config => {
        // 发送请求之前做什么操作
        config.headers["Authorization"] = '';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        const {status, data} = response;
        if (status === 200) {
            return Promise.resolve(data);
        }
        return Promise.reject(new Error(data.message || "Error"));

    },
    error => {
        Message.error({
            content: error.message
        });
        return Promise.reject(error);
    }
);

export default service;
