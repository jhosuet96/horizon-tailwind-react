import axios, {InternalAxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const useToken = () => {
    return cookies.get("user") || ''
}

const sleep = (delay : number) => 
{
  return new Promise
  (
    (resolve) => 
    {
      const timer = setTimeout(resolve, delay);
      return () => clearTimeout(timer);
    }
  )
}

const axiosIntance = axios.create({
    baseURL: 'https://localhost:7164/api'
});

axiosIntance.interceptors.request.use(

    async (config: InternalAxiosRequestConfig) => {
        config.headers = config.headers;

        const token = useToken();
        const auth = token ? `Bearer ${token}` : '';
        // Now config.headers can be safely used
        config.headers.Authorization = auth
        return config;
      },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use
  (
    async (response) => 
    {
      await sleep(1000);
      return response;
    }
  )
  export default axiosIntance;