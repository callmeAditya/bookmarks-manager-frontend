import { UserService } from "../../Services/userService"

const loginUser=(payload)=>{
    return dispatch=>{
    UserService.loginUser(payload)
    .then(res=>{        
        sessionStorage.setItem("user", res)
        setTimeout(()=>{
            sessionStorage.removeItem("user")
        },1000*60*5);
    })
    .catch(err=>{

    })
    }

}

export const userAction={
    loginUser
}