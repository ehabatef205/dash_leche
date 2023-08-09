import axios from "../axios";

const createimage=async(img,id)=>{
    axios.post('/images',{image:img,category_id:id}).then(res=>{
        if(res.status===200){
            return(true)
        }
    })
}
export default createimage