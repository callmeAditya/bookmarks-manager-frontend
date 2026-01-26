import { BookmarkTypes } from "../Types/BookMarkType";

const initialState = {
    bookmarks: [],
    pinnedBookmarks: [],
    theme: 'light'
}

const bookmarksReducer = (state = initialState, action) => {
    
    switch(action.type){
        case BookmarkTypes.ADD_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload]
            }
        case BookmarkTypes.GET_ALL_BOOKMARKS:
            return {
                ...state,
                bookmarks: action.payload.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
            }
        case BookmarkTypes.EDIT_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.map(bookmark => 
                    bookmark.id === action.payload.id ? action.payload : bookmark
                )
            }
        case BookmarkTypes.DELETE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload.id)
            }
        case BookmarkTypes.PINNED_BOOKMARKS:

            return {
                ...state,
                pinnedBookmarks: [...action.payload]
            }
        case BookmarkTypes.CHANGE_THEME:
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        default:
            return state;
    }
}

export default bookmarksReducer;