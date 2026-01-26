import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";

const routes = [
    {
        id:101,
        parent: null,
        icon:'',
        path:'/login',
        label:'Login',
        component: LoginPage
    },{
        id:201,
        parent:null,
        icon:'',
        path:'/home',
        label:'HomePage',
        component: HomePage
    }
]

export default routes;