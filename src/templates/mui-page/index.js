import Box from "@mui/material/Box";
import './TemplateName.scss'
import useStyles from "./TemplateName.style";

const TemplateName = ()=>{
    const classes = useStyles();

    return (
        <Box className={classes.TemplateName || ""} data-testid="template-name">
            TemplateName component
        </Box>
    )
}


export default TemplateName;