import { AxiosResponse } from "axios";
import axiosInstance from "./apiBase";

const responseBody = <T>(response:AxiosResponse<T>) => (response.data);

const request = 
{
    get :<T>(url : string) => axiosInstance.get<T>(url).then(responseBody),
    post :<T>(url : string, body:{}) => axiosInstance.post<T>(url,body).then(responseBody),
    put :<T>(url : string , body:{}) => axiosInstance.put<T>(url,body).then(responseBody),
    delete :<T>(url : string) => axiosInstance.delete<T>(url).then(responseBody),
};

export default request;