import { BookmarkTypes } from "../Types/BookMarkType"
import {bookmarkService} from '../../Services/bookmarkService'

export const addBookmark = (payload) => {

    return dispatch=>{
        bookmarkService.addBookmark(payload)
    .then(res=>{
            dispatch(getBookmarks());
        
        }).catch(err=>{
            // handle error if needed
        }
        )
    }

}

export const getBookmarks = (payload) => {

    return dispatch=>{
      bookmarkService.getAllBookmarks()
      .then(res=>{
          dispatch({
              type: BookmarkTypes.GET_ALL_BOOKMARKS,
              payload: res
          })
      }).catch(err=>{
          // handle error if needed
      })
    }

}

export const updateBookmark = (payload) => {
    
    return dispatch=>{
        bookmarkService.editBookmark(payload)
    .then(res=>{
            dispatch(getBookmarks());
            dispatch({
                type: BookmarkTypes.EDIT_BOOKMARK,
                payload: res
            })
        }).catch(err=>{
            // handle error if needed
        }
        )
    }
}

export const deleteBookmark = (payload) => {

    return dispatch=>{
        bookmarkService.deleteBookmark(payload)
    .then(res=>{
            dispatch(getBookmarks());
          
        }).catch(err=>{
            // handle error if needed
        }
        )
    }
}

export const pinnedBookmarks = (payload) => {

    return dispatch=>{
        dispatch({
            type: BookmarkTypes.PINNED_BOOKMARKS,
            payload: payload
        })
    }
}

export const changeTheme = () => {
    return dispatch => {
        dispatch({
            type: BookmarkTypes.CHANGE_THEME
        })
    }
}

export const bookMarksActions ={
    addBookmark,
    getBookmarks, 
    updateBookmark,
    deleteBookmark,
    pinnedBookmarks,
    changeTheme
}