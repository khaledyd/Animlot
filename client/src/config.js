import axios from "axios";



export const axiosInstance = axios.create({
  baseURL:"https://saanyo-api.cyclic.app/api/"
}); 