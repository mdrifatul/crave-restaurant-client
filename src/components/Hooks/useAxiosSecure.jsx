import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://crave-server.vercel.app',
  withCredentials: true
})


const useAxios = () => {
  return axiosSecure;
};

export default useAxios;