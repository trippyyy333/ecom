import { useState } from 'react'

import './App.css'
import Typography from "@mui/material/Typography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";


import Navbar from './components/Header/Navbar'
import Search from './components/Header/Search'
import Category from './components/Header/Category'

function App() {
  const [count, setCount] = useState(0)




    const [theme, colorMode] = useMode();
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

<Navbar />
<Search />
<Category />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }




  


export default App
