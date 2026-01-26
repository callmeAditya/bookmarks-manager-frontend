import Box from "@mui/material/Box";
import './CustomFormSelectCheckbox.scss'
import useStyles from "./CustomFormSelectCheckbox.style";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { after } from "lodash";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 164,
      width: 250,
    },
  },
};



const CustomFormSelectCheckbox = ({ menuArr, onChange, beforeOptions, afterOptions, handleClose })=>{
    const classes = useStyles();

     const [categories, setCategories] = React.useState([]);

  const handleChange = (event) => {
    onChange(event.target.value);
    setCategories(event.target.value);
    
    
  };

    return (
        <Box className={classes.CustomFormSelectCheckbox || ""} data-testid="custom-form-select-checkbox">
        <FormControl sx={{ width: 350 }}>
        <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={categories}
          onChange={handleChange}
          input={<OutlinedInput label="Categories" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          onClose={handleClose}
        >

          {beforeOptions}
          {menuArr.map((name) => (
            <MenuItem  key={name} value={name}>
              <Checkbox checked={categories.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
          {afterOptions}
        </Select>
      </FormControl>        
      </Box>
    )
}


export default CustomFormSelectCheckbox;