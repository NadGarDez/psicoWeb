import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Blogs } from "../pages/Blogs";
import { Citas } from "../pages/Citas";
import { Books } from "../pages/Books";
import { Welcome } from "../pages/Welcome";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";


const theme = createTheme(
  {
    typography: {
      ContrastTittle: {
        color: '#458890',
        fontSize:55,
        fontFamily:'Square Peg'
      },
      ContrastTittle2: {
        color: 'white',
        fontSize:55,
        fontFamily:'Square Peg'
      },
      ContrastSubtitle: {
        color: '#458890',
        fontSize:40,
        fontFamily:'Square peg'
      },
      ContrastSubtitle2: {
        color: 'white',
        fontSize:40,
        fontFamily:'Square peg'
      },
      ContrastContent: {
        color: '#458890',
        fontSize:15,
        fontFamily:'Montserrat'
      },
      h1:{
        color: '#458890',
        fontWeight:'bold',
        fontSize:100,
        fontFamily:'roboto'
      },
      h1Mobile:{
        color: '#458890',
        fontWeight:'bold',
        fontSize:60,
        fontFamily:'roboto'
      },
      ContrastLittle: {
        color: '#458890',
        fontSize:12,
        fontFamily:'Montserrat'
      },
      footerText:{
        color: 'white',
        fontSize:15,
        fontFamily:'Montserrat'
      }
      
    },
    palette: {
      type: 'light',
      primary: {
        main: '#458890',
      },

      darkPrimary:{
        main:"#29669c"
      },
      secondary: {
        main: '#97d9cd',
      },
      light: {
        main:"#b9dcf0"
      },
      white:{
        main: "#b9dcf0"
      }, 
      clearBlue:{
        main: "#b9dcf0"
      },
      pink:{
        main:"#dc7b8e"
      }
    
    
     
    }
  }
)

const Router =()=>{
 return (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome />}/>
            <Route path="/blog" element={<Blogs />}/>
            <Route path="/citas" element={<Citas/>} />
            <Route path="/libros" element={<Books/>} />
        </Routes>
    </BrowserRouter>
  </ThemeProvider>
 )
}

export {Router};