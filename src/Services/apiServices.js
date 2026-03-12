import axios from "axios";

const makeRequest = async(path, obj={}, options={}) => {
        
    const accessToken = sessionStorage.getItem("user");
    if(accessToken && accessToken!==undefined) {                
        obj['headers']['Authorization'] = `Bearer ${accessToken}`
    }
    console.log(obj);
    
    return await axios({
        url: path,
        method: obj?.method,
        ...obj,
        timeout:30000

    })
    .then(res=>res?.data)
    .catch(err=>err?.response)

};


const get = async(path, queryParams={}, body={}, header={}) => {    

    const getData = {
        method:'GET',
        params: queryParams,
        data:{...body},
        headers:{
            "Accept": "application/json",
            ...header
        }
    }

    return await makeRequest(path, getData)

}


const post = async(path, queryParams={}, body={}, headers={}) => {    

    const getData = {
        method:'POST',
        params: queryParams,
        data:{...body},
        headers:{
            "Accept": "application/json",
            ...headers
        }
    }

    return await makeRequest(path, getData)

}


const _delete = async(path, queryParams={}, body={}, headers={}) => {    

    const getData = {
        method:'DELETE',
        params: queryParams,
        data:{...body},
        headers:{
            "Accept": "application/json",
            ...headers
        }
    }

    return await makeRequest(path, getData)

}

export const API = {
get,
post,
_delete
}