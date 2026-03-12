import Box from "@mui/material/Box";
import './Register.scss'
import useStyles from "./Register.style";
import CustomTypography from "../../Components/CustomTypography";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";
import { useState } from "react";
import _ from "lodash";
import { userAction } from "../../Redux/Actions/userAction";
import Grid from "@mui/material/Grid";

const frmObj={
    email:"",
    password:'',
    confirmPassword:""
}

const Register = ()=>{
    const classes = useStyles();
     const history = useNavigate();
    const dispatch = useDispatch();
    const userAuthenticated = sessionStorage.getItem("user");

    const [frm, setFrm] = useState({...frmObj})


    const handleSubmit=()=>{
        if(frm.email && frm.password && frm.confirmPassword)
        dispatch(userAction.registerUser({email: frm.email, password: frm.password}))
    }

    const handleChange = (e)=>{
        if(e.target.name === "email"){
            setFrm({...frm, email:e.target.value})
        }

         if(e.target.name === "password"){
            setFrm({...frm, password:e.target.value})
        } 
        
        if(e.target.name === "confirm-password"){
            setFrm({...frm, confirmPassword:e.target.value})
        }
    }

    return (
        <Box className={classes.RegisterPage || ""} data-testid="register">

            <Grid className={classes.RegisterGrid}>

             <CustomTypography
            textAlign={"center"}
            
            >
                Register to your bookmarks Manager!
                </CustomTypography>            


            <Paper className={classes.RegsiterPaperCard}>
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
            style={{marginTop:"16px"}}
            className={classes.InputField}
            name="password"
            onChange={handleChange}
            type="password"

            />
            
            <TextField
            label={"Confirm Password"}
            style={{marginTop:"16px", marginBottom:'16px'}}
            className={classes.InputField}
            name="confirm-password"
            onChange={handleChange}
            type="password"

            />

            <Button onClick={handleSubmit} variant="contained" sx={{width:'200px', marginTop:'16px'}}>
                Register
            </Button>                

            <Box mt={3} display={"flex"} justifyContent={"center"} width={"100%"}>
                <Link href="/login" underline="hover">
                {"Already User? Login"}
                </Link>

            </Box>
            </FormControl>
            </Paper>



            </Grid>
        </Box>
    )
}


export default Register;