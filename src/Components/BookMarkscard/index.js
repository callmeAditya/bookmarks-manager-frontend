import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import React, { use, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import CustomTypography from '../CustomTypography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import PublicIcon from '@mui/icons-material/Public';
import { useDispatch, useSelector } from 'react-redux';
import { bookMarksActions } from '../../Redux/Actions/bookmarksAction';
import CustomFormSelectCheckbox from '../CustomFormSelectCheckbox';
import useStyles from './style.bookmarkscard.js';
import _ from 'lodash';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

const categoriesItems = [
 'Work',
'Personal',
'Practice'

];


const BookMarksCard = ({ onCancel, onSave, data }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const bookmarks = useSelector(state => state.bookmarks.bookmarks);
    const [addnewctg, setAddNewCtg] = React.useState(false);
    const [url, setUrl] = React.useState('');
    const [favicon, setFavicon] = React.useState('');
    const [frmObject, setFrmObject] = React.useState({Title: data?.Title || '', URL: data?.URL || '', Description: data?.Description || '', Categories: data?.Categories || []});

    useEffect(()=>{
        console.log(bookmarks);
        
    },[bookmarks])

    useEffect(()=>{
        if(data){            
            setFrmObject({
                ...data,
                Title: data?.Title || '', URL: data?.URL || '', Description: data?.Description || '', Categories: data?.Categories || []});
            setUrl(data?.URL || '');
        }
    },[data])


const handleChange=(e)=>{
    
    if(e.target.name === 'url-field'){
        setUrl(e.target.value);
        setFrmObject({
            ...frmObject,
            URL: e.target.value
        })
    }
    
    if(e.target.name === 'Title-field'){
        setFrmObject({
            ...frmObject,
            Title: e.target.value
        })
    }

    if(e.target.name === 'description-field'){
        setFrmObject({
            ...frmObject,
            Description: e.target.value
        })
    }

}



useEffect(()=>{
    if(url &&( url.startsWith('http://www.') || url.startsWith('https://www.') || url.startsWith('www.') || url.startsWith('http://') || url.startsWith('https://')) && url.includes('.com')){
        const domainval = (() => {
            try {
            const { hostname } = new URL(url.startsWith('http') ? url : `https://${url}`);
            const res = hostname.replace(/^www\./, '').replace(/\.com.*/, '.com');
            return res;
            } catch {
            return '';
            }
        })();
        // console.log(domainval);
        // const faviconUrl = `https://www.google.com/s2/favicons?domain=${domainval}&size=128`;
        const faviconUrl = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domainval}&size=128`;
        setFavicon(faviconUrl)
        console.log(faviconUrl);
    }
    else if(!url){
        setFavicon('');
    }
},[url])


const handleCancel = ()=>{
    setFrmObject({Title:'', URL:'', Description:'', Categories: []})
    setUrl('');
    setFavicon('');
    onCancel();
}

const handleSave=()=>{
    // console.log('Saved:', frmObject);
    setFrmObject({Title:'', URL:'', Description:'', Categories: []})
    setUrl('');
    setFavicon('');
    onSave(frmObject)
}

const handleMenuClose=()=>{
    setAddNewCtg(false);
}

const AddNewCategory=()=>{
    return (
        <MenuItem onClick={()=>{setAddNewCtg(true)}} disableRipple >
           {
           
           !addnewctg ? 
           <ListItemText >
           Add New Category
           </ListItemText>
           :
            <TextField 
            
             slotProps={{
                        input: {
                            endAdornment: (
                            <InputAdornment position="end">
                                <CloseIcon sx={{cursor:'pointer', color:'red', marginRight: 1}} onClick={() => {alert('Add new category')}} />
                                <CheckIcon sx={{cursor:'pointer', color:'green'}} onClick={() => {alert('Add new category')}} />
                            </InputAdornment>
                            ),
                        },
                        }}
            size="small" fullWidth id="outlined-basic" placeholder='New Category' variant="outlined" style={{ marginLeft: 8 }} />}
        </MenuItem>
    )
}       
    



return(
    <Paper className={classes.BookmarksCard} elevation={2} sx={{width:'400px', p:3, borderRadius: '10px'}} >
            <CustomTypography align="center" variant={"h5"} customsx={{fontWeight:'bold'}}>{_.isEmpty(data) ? 'Add' : 'Edit'} Bookmark </CustomTypography>
        <Box display="flex" alignItems="center" p={2} pb={0}>
            {favicon ? <Avatar src={favicon} /> : <Avatar><PublicIcon /></Avatar>}
            <TextField onChange={handleChange} value={frmObject?.Title} name='Title-field' fullWidth id="outlined-basic" label="Title" variant="outlined" style={{ marginLeft: 8 }} />
        </Box>
        <Box p={2}>
            <TextField max onChange={handleChange} value={frmObject?.URL} name='url-field' fullWidth id="outlined-basic" label="Url" variant="outlined" mb={2} style={{ marginBottom: 16 }} />
            <TextField onChange={handleChange} value={frmObject?.Description} name='description-field' multiline rows={3} id="outlined-basic" label="Description" variant="outlined" fullWidth />
        </Box>
        <Box p={2}>
        <CustomFormSelectCheckbox
        menuArr={categoriesItems}
         selectedTags={frmObject?.Categories || []}
         onChange={(newTags) => setFrmObject({...frmObject, Categories: newTags})}
         handleClose={handleMenuClose}
            beforeOptions={<AddNewCategory />}
         />
        </Box>
   
        <Box display="flex" justifyContent="flex-end" p={2}>
            <Button onClick={handleCancel} variant='outlined' sx={{mr:1}}>Cancel</Button>
            <Button onClick={handleSave} disabled={!frmObject.Title || !frmObject.URL} variant='contained'>Save</Button>
        </Box>
       
    </Paper>
)


};

export default BookMarksCard;