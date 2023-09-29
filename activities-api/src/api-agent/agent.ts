import axios, { AxiosResponse } from "axios";
import { Activity } from "../App";

axios.defaults.baseURL="http://localhost:5100/api";

const responseData = <T>(response: AxiosResponse <T>) => response.data;


const requests = {
    get: <T>(url:string)=> axios.get <T>(url).then(responseData),
    put:<T>(url:string, body:{})=> axios.put<T>(url, body).then(responseData),
    post:<T>(url:string, body:{})=> axios.post<T>(url, body).then(responseData),
    delete:<T>(url:string)=> axios.delete<T>(url).then(responseData)
}

const activitiesCrud={
    list: ()=> requests.get<Activity[]>("/activities")
}

const agent = {
    activitiesCrud
}


export default agent