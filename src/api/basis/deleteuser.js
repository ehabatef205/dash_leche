import axios from "../axios";

const deleteuser=async(userid)=>{
    const token=localStorage.getItem("Authorization")
    return await axios.delete('/user/delete_user', {
        data: { id: userid },
        headers: { authorization: token }
      });
}
export default deleteuser;