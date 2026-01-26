import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    LoginPage: {
       
        position:'absolute',
        left:'48%',
        top:'45%',
        transform:'translate(-45%, -48%)'
    },
    LoginGrid:{
         display:'flex',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'column',
    },
    LoginCard:{
        width:"400px",
        padding:'32px'
    },
    InputField:{
        width:"330px",
        marginTop:'16px'
    }
}));

export default useStyles;