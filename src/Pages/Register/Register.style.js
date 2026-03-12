import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    RegisterPage: {
       
        position:'absolute',
        left:'48%',
        top:'45%',
        transform:'translate(-45%, -48%)'
    },
    RegisterGrid:{
         display:'flex',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'column',
    },
    RegsiterPaperCard:{
        width:"400px",
        padding:'32px',
    },
    InputField:{
        width:"330px",
        marginTop:'16px'
    }
}));

export default useStyles;