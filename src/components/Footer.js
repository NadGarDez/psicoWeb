import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { shadows } from '@mui/system';
import { LinkedIn, GitHub, Email, DoubleArrow } from '@mui/icons-material';
import React from "react";

const Footer = ()=>{
    return (
        <>
        <Box boxShadow={15} sx={{boxShadow: 3,display:'flex',flexDirection:'column',zIndex:2,background: "#e3e5f4",flexWrap:'wrap', minHeight:'40vh'}}>
           <Box sx={{background: "#dc7b8e", display:'flex', flexDirection:'row'}}>
                <Box pl={3} sx={{width:3/4, display:{xl:'flex',md:'flex', xs:'none', sm:'none'} , alignItems:'center'}}>
                <Typography variant="ContrastTittle2" textAlign="justify">El bienestar verdadero, está en el equilibrio.</Typography>
                </Box>

                <Box pt={1} pb={1} sx={{width:4/4, display:{xl:'none',md:'none', xs:'flex', sm:'flex'},justifyContent:'center', alignItems:'center'}}>
                <Typography variant="ContrastSubtitle2" textAlign="center">El bienestar verdadero, está en el equilibrio.</Typography>
                </Box>
           </Box>
           
           

            <Box p={3} mt={1} sx={{zIndex:2, display:{md:'flex', xl:'flex', sm:'none', xs:'none'}, flexDirection:'row'}}>
                <Box p={1} sx={{flexGrow:1, display:'flex',flexDirection:'column', width:'50%'}}>
                    <Typography  variant="ContrastSubtitle">
                        ¿Quienes Somos?
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>

                </Box>
                <Box p={1} sx={{flexGrow:1, width:'25%', display:'flex',flexDirection:'column'}}>
                            <Typography ml={2} variant="ContrastSubtitle" >
                                Mas contenido
                            </Typography>
                    <Link ml={2} mt={2} variant="ContrastContent" href="/blog">
                        Blog
                    </Link>
                    <Link  ml={2} variant="ContrastContent" href="/libros">
                        Libros
                    </Link>
                    <Link  ml={2} variant="ContrastContent" href="/citas">
                        Citas
                    </Link>

                </Box>
                <Box sx={{flexGrow:1, width:'25%', display:'flex',flexDirection:'column'}}>
                        <Typography variant="ContrastSubtitle" align="right">
                            Desarrollador
                        </Typography>
                        <Typography mt={2} variant="ContrastContent" align="right">
                            @NadGarDez , Desarrollador Fullstack web y movil
                        </Typography>
                        <Typography mt={1} variant="ContrastContent" align="right">
                            16/04/2022. Calabozo Edo Guarico Venezuela
                        </Typography>
                        <Box mt={1} sx={{display:'flex',flexDirection:'row-reverse'}}>
                            <GitHub sx={{margin:0.5}} color="primary" />
                            <LinkedIn sx={{margin:0.5}} color="primary" />
                            <Email sx={{margin:0.5}} color="primary" />
                        </Box>                        
                </Box>
            </Box>
            <Box p={3} mt={1} sx={{zIndex:2,  display:{md:'none', xl:'none', sm:'flex', xs:'flex'}, flexDirection:'column'}}>
                <Box  sx={{ display:'flex',flexDirection:'column', width:'100%', justifyContent:"center"}}>
                    <Typography  variant="ContrastSubtitle" textAlign="center">
                        About Us
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent" textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent" textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>
                    <Typography mt={2}  variant="ContrastContent" textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                    </Typography>

                </Box>
                <Box mt={5} sx={{ width:'100%', display:'flex',flexDirection:'column', justifyContent:"center"}}>
                            <Typography ml={2} variant="ContrastSubtitle" textAlign="center">
                                Mas contenido
                            </Typography>


                    <Link ml={2} mt={2} variant="ContrastContent" textAlign="center" href="/blog">
                        Blog
                    </Link>
                    <Link  ml={2} variant="ContrastContent" textAlign="center"  href="/libros">
                        Libros
                    </Link>
                    <Link  ml={2} variant="ContrastContent" textAlign="center" href="/citas">
                        Citas
                    </Link>

                </Box>
                <Box sx={{flexGrow:1, width:'100%', display:'flex',flexDirection:'column', justifyContent:"center"}} mt={5}>
                        <Typography variant="ContrastSubtitle" textAlign="center">
                            Desarrollador
                        </Typography>
                        <Typography mt={2} variant="ContrastContent" textAlign="center">
                            @NadGarDez , Desarrollador Fullstack web y movil
                        </Typography>
                        <Typography mt={1} variant="ContrastContent" textAlign="center">
                            14/04/2022. Calabozo Edo Guarico Venezuela
                        </Typography>
                        <Box mt={1} sx={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
                            <GitHub sx={{margin:0.5}} color="primary" />
                            <LinkedIn sx={{margin:0.5}} color="primary" />
                            <Email sx={{margin:0.5}} color="primary" />
                        </Box>
                        
                
                </Box>
            </Box>
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column-reverse', backgroundColor:'#82bbc2',height:'10vh'}}>
            <Typography variant="footerText">©2022 Todos los derechos reservados</Typography>
        </Box>
        
        </>
    )
}


export {Footer};