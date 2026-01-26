import Box from "@mui/material/Box";
import './LoginPage.scss'
import useStyles from "./LoginPage.style";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { useLocation, useNavigate } from "react-router-dom";
import CustomTypography from "../../Components/CustomTypography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../../Redux/Actions/userAction";
import _ from "lodash";

const frmObj ={
    email:"",
    password:""
}

const LoginPage = ()=>{
    const classes = useStyles();
    const history = useNavigate();
    const dispatch = useDispatch();
    const userAuthenticated = sessionStorage.getItem("user");

    const [frm, setFrm] = useState({...frmObj})


    useEffect(()=>{
        console.log(sessionStorage.getItem("user"));
        
        if(!_.isEmpty(sessionStorage.getItem("user"))){
            history("/home");
        }else{
            history("/login")
        }
    },[sessionStorage.getItem("user")])


    const handleSubmit=()=>{
        if(frm.email && frm.password)
        dispatch(userAction.loginUser(frm))
    }

    const handleChange = (e)=>{
        if(e.target.name === "email"){
            setFrm({...frm, email:e.target.value})
        }

         if(e.target.name === "password"){
            setFrm({...frm, password:e.target.value})
        }
    }

    return (
        <Box className={classes.LoginPage || ""} data-testid="login-page">
            <Grid
            className={classes.LoginGrid}
            >

            <CustomTypography
            textAlign={"center"}
            
            >
                Login to your bookmarks Manager!
                </CustomTypography>
                <Paper className={classes.LoginCard}>

            <FormControl
            style={{display:'flex', justifyContent:'center',alignItems:'center'}}
            >
            <TextField
            label={"Email"}
            style={{marginTop:"16px"}}
            className={classes.InputField}
            name="email"
            onChange={handleChange}
            />
            <TextField
            label={"Password"}
            style={{marginTop:"16px", marginBottom:'16px'}}
            className={classes.InputField}
            name="password"
            onChange={handleChange}
            type="password"

            />

            <Button onClick={handleSubmit} variant="contained" sx={{width:'200px', marginTop:'16px'}}>
                Login
            </Button>                

            <Box mt={3} display={"flex"} justifyContent={"space-between"} width={"100%"}>
                <Link  href="/signup" underline="hover">
                {"New User? Sign up"}
                </Link>

                 <Link href="/forgotPassword" underline="hover">
                {"Forgot Password"}
                </Link>
            </Box>

            </FormControl>
            </Paper>
            </Grid>
        </Box>
    )
}


export default LoginPage;