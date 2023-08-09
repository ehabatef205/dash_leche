import axios from "../axios";

const getAll=async()=>{
    return  axios.get('/user/all')
}
export default getAll