import axios from "axios";
const fetchCrab = ()=>{
    return axios.get("/fetch-crab")
}
export {fetchCrab}