import Box from "@mui/material/Box";
import './CustomAccordion.scss'
import useStyles from "./CustomAccordion.style";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomTypography from "../CustomTypography";

const CustomAccordion = ({title, children})=>{
    const classes = useStyles();

    return (
        <Box data-testid="custom-accordion">
         <Accordion className={classes.CustomAccordion || ""}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <CustomTypography component="span">{title}</CustomTypography>
        </AccordionSummary>
        <AccordionDetails>
         {children}
        </AccordionDetails>
      </Accordion>        
      </Box>
    )
}


export default CustomAccordion;