import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    CustomAccordion: {
        // Add your styles here
        '&.css-1808mag-MuiPaper-root-MuiAccordion-root':{
            backgroundColor:'#363636',
            boxShadow :'none !important',
        },
        '& .MuiButtonBase-root.MuiAccordionSummary-root':{
            minHeight: '28px !important',
        },
        '& .MuiAccordionSummary-content.Mui-expanded':{
            margin: '0 !important',
            marginLeft: '16px !important',
        },
        '& .MuiAccordionSummary-content':{
            margin: '0 !important',
            marginLeft: '16px !important',
            color: '#ffffff'
        }
    },
}));

export default useStyles;