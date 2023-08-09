import axios from "../axios";


const authenticated=async()=>{
    const token = localStorage.getItem("Authorization")
    return await axios.post('/admin/auth'
    ,{},{headers:{authorization:token}}
    )
}
export default authenticated ;