import { API } from "./apiServices";

const BASEURL = process.env.REACT_APP_BOOKMARKS_BASEURL;

const getAllBookmarks = async()=>{
    return await API.get(`${BASEURL}/getAll`).then(res=>res).catch(err=>err)
}

const addBookmark = async(bookmarkData)=>{
    return await API.post(`${BASEURL}/create`,{}, bookmarkData).then(res=>res).catch(err=>err)
}

const editBookmark = async(bookmarkData)=>{
    return await API.post(`${BASEURL}/update`,{}, bookmarkData).then(res=>res).catch(err=>err)
}

const deleteBookmark = async(bookmarkData)=>{
    return await API._delete(`${BASEURL}/delete`,{}, bookmarkData).then(res=>res).catch(err=>err)
}

export const bookmarkService = {
getAllBookmarks,
addBookmark,
editBookmark,
deleteBookmark
}