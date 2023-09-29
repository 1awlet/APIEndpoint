import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL="http://localhost:5100/api";

const responseData = (response: AxiosResponse) => response.data;


const requests = {
    get: (url:string)=> axios.get(url).then(responseData),
    put: (url:string, body:{})=> axios.put(url, body).then(responseData),
    post: (url:string, body:{})=> axios.post(url, body).then(responseData),
    delete:(url:string)=> axios.delete(url).then(responseData)
}

const activitiesCrud={
    list: ()=> requests.get("/activities")
}

const agent = {
    activitiesCrud
}


export default agent