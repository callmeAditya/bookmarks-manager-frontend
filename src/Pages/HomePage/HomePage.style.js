import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import { GlobalStyle } from "../../GlobalStyle/global.style";
// Remove useTheme import; theme will be provided by makeStyles automatically
const useStyles = makeStyles((theme) => ({
    HomePage: {
        // Add your styles here
    },
    ParentGrid:{
        height: '100vh'
    },
    LeftBar:{
        backgroundColor:'#363636'
    },
    AppBar:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row !important',
        height: '64px',
        padding: '16px 32px',
    },
    BookMarkBtn:{
        borderRadius: '10px !important',
        marginRight: '10px !important',
        // backgroundColor: '#0c5519ff !important',
        // color: '#fff !important',
        textTransform: 'none !important',
        padding: '8px 16px !important',
        '&:hover': {
            backgroundColor: GlobalStyle.theme.palette.primary.light + ' !important',
            color: '#fff !important',
        },
        marginRight: '16px !important',
    },
    SearchField:{
        borderRadius: '10px',
        padding: '0px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#999',
            },
            '&:hover fieldset': {
                border:'2px solid #216a0bff'
            },
            '&.Mui-focused fieldset': {
                border:'2px solid #216a0bff'
            },
        },
        '& .MuiInputBase-input': {
            padding: '10px',
            width: '300px'
        },
    },
    Checkbox:{

        '&.MuiCheckbox-root': {
            padding: '4px',
            marginRight: '8px',
            color: '#fff !important'
        },
        
        '&.MuiCheckbox-root:hover': {
            padding: '4px',
            marginRight: '8px',
            color: '#0c5519ff !important'
        },

        '&.Mui-checked': {
            color: '#0c5519ff !important'
        }
    },
    ListItem:{
        '& .MuiListItem-root:hover': {
            backgroundColor: '#f5f5f5',
            color:'#0c5519ff',
            transition: 'all 0.2s ease-in-out',
        },
        '& .MuiListItem-root':{
            borderRadius: '8px',
            marginBottom: '4px',
            padding: '0 8px',
            cursor: 'context-menu',
            color: '#ffffff'
        },
        '&.MuiCheckbox-root:hover': {
            padding: '4px',
            marginRight: '8px',
            color: '#0c5519ff !important'
        },
        // Change SVG icon color on ListItem hover
        '& .MuiListItem-root:hover svg': {
            color: '#0c5519ff',
            fill: '#0c5519ff',
        },
    },
    SortByBtn:{
        textTransform: 'none !important',
        color: '#2b2b2b !important',
        borderRadius: '8px !important',
        padding: '4px 8px !important',
        fontWeight: '500 !important',
        backgroundColor: '#fff !important',
       
    }
}));

export default useStyles;