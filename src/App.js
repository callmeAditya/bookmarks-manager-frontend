import HomePage from "./Pages/HomePage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyle } from "./GlobalStyle/global.style";
import { useSelector } from "react-redux";
import LoginPage from "./Pages/LoginPage";
import { Component, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import routes from "./Router/routes";


const App = () => {

  const location = useLocation();
  const history = useNavigate();
  const gettheme = useSelector(state => state.bookmarks.theme);

  const appTheme = createTheme({
  palette: {
    primary: GlobalStyle.theme.palette.primary,
    mode: gettheme,
  },
});


useEffect(()=>{
  if(location.pathname === '/'){
    history('/login')
  }

},[location.pathname])

  return (
        <ThemeProvider theme={appTheme}>
      {/* // <CssBaseline /> */}
    <div className="App">
        {/* <HomePage/> */}

        <Routes>
          {
            routes.map(({ component: Component, path})=>(
              <Route path={path} element={<Component />} />

            ))
          }
        </Routes>

        {/* <LoginPage/> */}
    </div>
        </ThemeProvider>
  );
}

export default App;
