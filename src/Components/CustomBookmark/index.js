import Box from "@mui/material/Box";
import './CustomBookmark.scss'
import useStyles from "./CustomBookmark.style";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import PublicIcon from '@mui/icons-material/Public';
import CustomTypography from "../CustomTypography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Divider from "@mui/material/Divider";
import { getDateFromString, getFavicon } from "../../Utils/utils";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Grid from "@mui/material/Grid";
const bookmarkUrl = {
    color: '#2b2b2b',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '146px',
    display: 'inline-block',
    }


const CustomBookmark = ({id, title, description, url, createdAt, handleEdit, handleDelete, handlePinned, pinnedBookmarks})=>{
    const classes = useStyles();

      const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleIconClick=(action)=>{
    if(action === 'edit' && handleEdit) {
      handleEdit();
    } else if(action === 'delete' && handleDelete) {
      handleDelete();
    }
    handleClose();
  }

  

    return (
      <Box height={'264px'} maxHeight={'400px'} className={classes.CustomBookmark || ""} data-testid="custom-bookmark">
        <Paper  sx={{p:2, height: '100%', borderRadius: '10px'}} >
          <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'}>

        {getFavicon(url) ? <Avatar src={getFavicon(url)} /> : <Avatar><PublicIcon /></Avatar>}          <a href={/^https?:\/\//.test(url) ? url : `https://${url}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box display={'flex'} justifyContent={'flex-start'} flexDirection={'column'}>
        <CustomTypography variant={'h5'} customsx={{fontWeight:'500', ...bookmarkUrl}}>{title}</CustomTypography>    
        <CustomTypography customsx={{color:'#2b2b2b', ...bookmarkUrl }} variant={'span'}>{url}</CustomTypography>
        </Box> 
        </a>
        <IconButton
        
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        >

      <MenuItem sx={{display:'flex', alignContent:'center'}} onClick={(e)=>{handleIconClick('edit')}}  disableRipple>
        <EditIcon fontSize="small" sx={{mr:1}} />
        Edit
      </MenuItem>
      <MenuItem sx={{display:'flex', alignContent:'center', color:'red'}} onClick={()=>{handleIconClick('delete')}} disableRipple>
        <DeleteIcon  fontSize="small" sx={{mr:1, color:'red'}} />
        Delete
      </MenuItem>
      
        </Menu>
          </Grid>
          <Divider sx={{mt:1, mb:1}} />
          <Box>
            <CustomTypography variant={'body1'} customsx={{textWrap:'wrap', scrollbarWidth: 'none', whiteSpace: 'pre-line', height: '150px', overflow: 'auto'}}>
              {description}
            </CustomTypography>
          </Box>
          <Divider sx={{mt:1, mb:1}} />
          <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} gap={2}>

          <Stack direction="row" mr={1} spacing={1} alignItems={'center'}>
          <VisibilityIcon sx={{fontSize: '16px', color: '#1976d2'}} />
          <CustomTypography variant={'body2'} customsx={{color:'#1976d2'}}>
             0
          </CustomTypography>
          </Stack> 
          <Stack direction="row" spacing={1} alignItems={'center'}>
          <AccessTimeIcon sx={{fontSize: '16px', color: '#1976d2'}} />
          <CustomTypography variant={'body2'} customsx={{color:'#1976d2'}}>
             {getDateFromString(createdAt, 'dateandmonth') || 'MMYY'}
          </CustomTypography>
          <IconButton onClick={handlePinned}>
            {
              pinnedBookmarks && pinnedBookmarks.includes(id) ? <PushPinIcon sx={{fontSize: '16px', color: '#1976d2'}} /> : <PushPinOutlinedIcon sx={{fontSize: '16px', color: '#1976d2'}} />
            }
          
          </IconButton>
          </Stack>
          </Box>
          
        </Paper>
      </Box>
    )
}


export default CustomBookmark;