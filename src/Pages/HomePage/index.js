import Box from "@mui/material/Box";
import './HomePage.scss'
import useStyles from "./HomePage.style";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Search from '@mui/icons-material/Search';
import CustomTypography from "../../Components/CustomTypography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'

import ListItemText from "@mui/material/ListItemText";
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CustomBookmark from "../../Components/CustomBookmark";
import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import BookMarksCard from "../../Components/BookMarkscard";
import { useDispatch, useSelector } from "react-redux";
import { bookMarksActions } from "../../Redux/Actions/bookmarksAction";
import Checkbox from "@mui/material/Checkbox";
import CustomAccordion from "../../Components/CustomAccordion";
import _, { set } from "lodash";
import IconButton from "@mui/material/IconButton";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTheme } from "@mui/material/styles";

const HomePage = ()=>{
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const getAllBookmarks = useSelector(state => state.bookmarks.bookmarks);
    const getPinnedBookmarks = useSelector(state => state.bookmarks.pinnedBookmarks);
    const getTheme = useSelector(state => state.bookmarks.them);
    const [themeMode, setThemeMode] = React.useState(getTheme);

    const [openAddBookmark, setOpenAddBookmark] = React.useState(false);
    const [bookmarks, setBookmarks] = React.useState([])
    const [categories, setCategories] = React.useState([]);
    const [selectedBookmark, setSelectedBookmark] = React.useState(null);
    const [deleteBookmark, setDeleteBookmark] = React.useState(null);
    const [addEditBookmark, setAddEditBookmark] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [pinnedBookmarks, setPinnedBookmarks] = React.useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
    const [openSortMenu, setOpenSortMenu] = React.useState(false);

    useEffect(() => {
        // Fetch bookmarks here and update state
        dispatch(bookMarksActions.getBookmarks())
    }, [])

    useEffect(() => {
       
            const pinned = getAllBookmarks.filter(bookmark => getPinnedBookmarks?.includes(bookmark.id));
            const unpinned = getAllBookmarks.filter(bookmark => !getPinnedBookmarks?.includes(bookmark.id));
            const sortedBookmarks = [...pinned, ...unpinned];
            setBookmarks(sortedBookmarks);
            setPinnedBookmarks(getPinnedBookmarks || []);
       
    }, [getAllBookmarks, getPinnedBookmarks]);


    useEffect(()=>{
        
        
    const val = categories.length === 0
        ? getAllBookmarks
        : getAllBookmarks.filter(bookmark =>
            bookmark.Categories?.some(cat => categories.includes(cat))
        );

        setBookmarks(val)
           
        

    },[categories])

    const handleChangeTheme=()=>{
        setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
        dispatch(bookMarksActions.changeTheme());
    }

    const handleAddBookmark = ()=>{
        setAddEditBookmark('add')
        setOpenAddBookmark(true);
    }

    const handleClose=()=>{
        setOpenAddBookmark(false);
        setSelectedBookmark(null);
    }

    const handleSelectCategory=(category)=>{
        // Handle category selection logic here        
        setCategories(prevCategories => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter(cat => cat !== category);
            } else {
                return [...prevCategories, category];
            }
        });
        
    }

    const handleEditBookmark=(item)=>{
        // Handle edit bookmark logic here
        setAddEditBookmark('edit')
        setOpenAddBookmark(true);
        setSelectedBookmark(item);
    }
    const handleDeleteBookmark=(item)=>{
        // Handle delete bookmark logic 111here
        setDeleteBookmark(item);
        dispatch(bookMarksActions.deleteBookmark({id: item.id}));
    }

    const handleSaveBookMark=(obj)=>{
        console.log(obj);
        
        // Handle save bookmark logic here
        if(addEditBookmark === 'add'){
        dispatch(bookMarksActions.addBookmark(obj));
        }
        else{
        dispatch(bookMarksActions.updateBookmark(obj));
        }
        setOpenAddBookmark(false);
        setSelectedBookmark(null);
    }

    const handleSearchChange=(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        const filteredBookmarks = getAllBookmarks.filter(bookmark =>
           ( bookmark.Title.toLowerCase().includes(searchTerm) ||
            bookmark.URL.toLowerCase().includes(searchTerm) ) && (categories.length === 0 || bookmark.Categories?.some(cat => categories.includes(cat)))
        );        
        setBookmarks(filteredBookmarks );
        setSearchTerm(searchTerm);
    }

    const handlePinnedBookmark=(item)=>{
        // Handle pinned bookmark logic here
        let updatedPinnedBookmarks = [...pinnedBookmarks];
        if(updatedPinnedBookmarks.includes(item.id)){
            updatedPinnedBookmarks = updatedPinnedBookmarks.filter(id => id !== item.id);
        }
        else{
            updatedPinnedBookmarks.push(item.id);
        }
        setPinnedBookmarks(updatedPinnedBookmarks);
        dispatch(bookMarksActions.pinnedBookmarks(updatedPinnedBookmarks));
    }

    useEffect(()=>{
        
       if(getPinnedBookmarks){
            const pinned = getAllBookmarks.filter(bookmark => getPinnedBookmarks.includes(bookmark.id));
            const unpinned = getAllBookmarks.filter(bookmark => !getPinnedBookmarks.includes(bookmark.id));
            const sortedBookmarks = [...pinned, ...unpinned];
            setBookmarks(sortedBookmarks);
       }
        
    },[getPinnedBookmarks])

    const handleIconClick=(action)=>{
        // Handle sort by logic here
        let sortedBookmarks = [...bookmarks];
        if(action === 'alphabetical'){
            // Name A-Z
            sortedBookmarks.sort((a, b) => a.Title.localeCompare(b.Title));
        }
        else if(action === 'dateCreatedOldest'){
            // Date Created
            sortedBookmarks.sort((a, b) => new Date(a.CreatedAt) - new Date(b.CreatedAt));
        }
        else if(action === 'dateCreatedNewest'){
            // Date Created
            sortedBookmarks.sort((a, b) => new Date(b.CreatedAt) - new Date(a.CreatedAt));
        }
        setBookmarks(sortedBookmarks);
    }


    return (
        <Box className={classes.HomePage || ""} data-testid="home-page">
            <Grid height={"100vh"} container>
            <Grid className={classes.LeftBar} size={2.5}>
    
            <Box  height={64} display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>

            <BookmarkBorderOutlinedIcon   sx={{ ml:1,mr: 1, backgroundColor: '#0c5519ff', color: '#fff', borderRadius: '10px', p: '6px'}} />
            <CustomTypography color="#fff"  variant="h6" component="h1">
                Bookmarks Manager
            </CustomTypography>
            </Box>
           

    

            <CustomAccordion title="All Categories">
            <List sx={{pt:0}} className={classes.ListItem || ""}>
                <ListItem onClick={() => handleSelectCategory('Work')}>
                    <Checkbox defaultChecked={false}  checked={categories.includes('Work')} className={classes.Checkbox  || ""} size="small" />
                    <ListItemText primary="Work" />
                </ListItem>
                <ListItem onClick={() => handleSelectCategory('Personal')}>
                    <Checkbox defaultChecked={false} checked={categories.includes('Personal')} className={classes.Checkbox  || ""} size="small" />
                    <ListItemText primary="Personal" />
                </ListItem>
                <ListItem onClick={() => handleSelectCategory('Practice')}>
                    <Checkbox defaultChecked={false}  checked={categories.includes('Practice')} className={classes.Checkbox  || ""} size="small" />
                    <ListItemText primary="Practice" />
                </ListItem>
            </List>
            </CustomAccordion>
            
              
            </Grid>
            <Grid sx={{flexDirection: 'row'}} size={9.5}>
                <AppBar color="#fff" className={classes.AppBar || ""} position="static">
                    <Box>
                        <TextField className={classes.SearchField || ""} placeholder="Search bookmarks.." 
                               slotProps={{
                        input: {
                            startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                            ),
                        },
                        }}
                        onChange={handleSearchChange}
                        value={searchTerm}

                        />
                    </Box>
                    <Box  display="flex" alignItems="center">
                        <IconButton sx={{mr:2}} onClick={handleChangeTheme} >
                           {getTheme === 'light' ? <LightModeIcon sx={{ borderRadius: '10px'}} /> : <DarkModeIcon sx={{ borderRadius: '10px'}} />}
                        </IconButton>
                        <Button onClick={handleAddBookmark} className={classes.BookMarkBtn} variant="contained" size="medium">+ Add Bookmark</Button>
                        <Avatar alt="User Avatar" sx={{cursor:'pointer'}} onClick={(e)=>{setProfileAnchorEl(e.currentTarget)}}  />
                    <Menu    
                    anchorEl={profileAnchorEl}
                    open={!_.isEmpty(profileAnchorEl)}
                    onClose={()=>{ setProfileAnchorEl(null)}}
                    >
                    <MenuItem sx={{display:'flex', alignContent:'center'}} onClick={(e)=>{handleIconClick('settings')}}  disableRipple>
                    Settings
                    </MenuItem>
                    <MenuItem sx={{display:'flex', alignContent:'center'}} onClick={()=>{handleIconClick('logout')}} disableRipple>
                   Logout
                    </MenuItem>
                    </Menu>
                    </Box>

                </AppBar>
                <Grid p={4}  sx={{backgroundColor: '#e1f0ebff' , height: 'calc(100% - 64px)'}}>
                    <Box display="flex" justifyContent={"space-between"}>

                    <CustomTypography variant={'h4'}>
                       {!_.isEmpty(searchTerm) ? `Search Results for "${searchTerm}"` : "All Bookmarks"}
                    </CustomTypography>
                    <Button className={classes.SortByBtn || ""} variant="text" size="small" onClick={(e)=>{setAnchorEl(e.currentTarget); setOpenSortMenu(true)} } >
                        <ImportExportIcon />
                        <CustomTypography variant="span" customsx={{ml:1, fontSize:'16px', fontWeight:'500'}}>Sort By</CustomTypography>
                    </Button>

                     <Menu        
                    anchorEl={anchorEl}
                    open={  openSortMenu}
                    onClose={()=>{setAnchorEl(null); setOpenSortMenu(false)}}
                    >
                    <MenuItem sx={{display:'flex', alignContent:'center'}} onClick={(e)=>{handleIconClick('alphabetical')}}  disableRipple>
                    Title A-Z
                    </MenuItem>
                    <MenuItem sx={{display:'flex', alignContent:'center'}} onClick={()=>{handleIconClick('dateCreatedOldest')}} disableRipple>
                    Date created oldest
                    </MenuItem>
                    <MenuItem sx={{display:'flex', alignContent:'center'}} onClick={()=>{handleIconClick('dateCreatedNewest')}} disableRipple>
                    Date created newest
                    </MenuItem>
                    </Menu>

                    </Box>
                   
                    <Grid mt={2} container height={_.isEmpty(bookmarks) ? "100vh" : "auto"} spacing={3}>
                        {
                            bookmarks?.map((item, key)=>
                            <Grid size={4} sx={{mb:4}} key={'bookmarks-'+key}>
                        <CustomBookmark 
                        id={item.id}
                        title={item.Title}
                        description={item.Description}
                        url={item.URL}
                        createdAt={item.CreatedAt}
                        handleEdit={() => handleEditBookmark(item)}
                        handleDelete={() => handleDeleteBookmark(item)}
                        handlePinned={() => { handlePinnedBookmark(item)}}
                        pinnedBookmarks={pinnedBookmarks}
                        />
                        </Grid> 
                            )
                        }
                       

                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            <Modal
            open={openAddBookmark}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%, -50%)'
            }}>
               <BookMarksCard
                data={addEditBookmark === 'add' ? {} : selectedBookmark}
                onCancel={()=>setOpenAddBookmark(false)}
                onSave={(frmObject) => handleSaveBookMark(frmObject)}
               />
            </Box>
            </Modal>
        </Box>
    )
}


export default HomePage;