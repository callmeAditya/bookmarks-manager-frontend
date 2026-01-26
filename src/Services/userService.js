import { API } from "./apiServices";

const BASEURL = process.env.REACT_APP_BOOKMARKS_APPURL;

const loginUser = async (payload)=>{
    return await API.post(`${BASEURL}/login`,{},payload).then(res=>res).catch(err=>err)
}

export const UserService ={
    loginUser
}