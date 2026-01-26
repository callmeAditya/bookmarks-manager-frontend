import Box from "@mui/material/Box";
import './CustomTypography.scss'
import useStyles from "./CustomTypography.style";
import Typography from "@mui/material/Typography";

const CustomTypography = ({variant, children, customsx, ...props})=>{
    const classes = useStyles();

    return (
        <Box className={classes.CustomTypography || ""} data-testid="custom-typography">
            <Typography  variant={variant || "body1"} sx={customsx} {...props}>{children}</Typography>
        </Box>
    )
}


export default CustomTypography;