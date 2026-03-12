import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";

const routes = [
    {
        id:101,
        parent: null,
        icon:'',
        path:'/login',
        label:'Login',
        component: LoginPage
    },
    {
        id:201,
        parent:null,
        icon:'',
        path:'/home',
        label:'HomePage',
        component: HomePage
    },{
        id:202,
        parent:null,
        icon:'',
        path:'/register',
        label:'RegisterPage',
        component: Register
    },
]

export default routes;