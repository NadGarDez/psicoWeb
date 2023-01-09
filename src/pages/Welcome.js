import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { Background1 } from '../components/Background1';
import { BrainIcon } from '../components/BrainIcon';

const Welcome = ()=>{


    return (
        <>
       <Background1 />
        
        <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
             <NavBar/>
            
             <Box  sx={{ backgroundColor:'transparent', flexDirection:'row',display:{xs:'none',sm:'none', md:'flex', lg:'flex', xl:'flex'}, flexWrap:'wrap', alignItems:'center',zIndex:25,  width:'100%',minHeight:'100vh' }}>
                <BrainIcon width="200px" height="200px"/>
                <Box pl={3} sx={{display:'flex', flexDirection:'column'}}>
                <Typography variant='h1' textAlign="left">Pensamiento, <br/> emocion y{" "}cuerpo.</Typography>
                <br/>
                <Box sx={{width:1, height:"20px" , backgroundColor:"#82BBC2"}}>

                </Box>
                </Box>
               
            </Box>
            <Box  sx={{ backgroundColor:'transparent',flexDirection:'row',display:{xs:'flex',sm:'flex', md:'none', lg:'none', xl:'none'}, flexWrap:'wrap',zIndex:25,  width:'100%',minHeight:'100vh' }}>
                <Box pl={3} pr={3} sx={{display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center", width:1}}>
                    <BrainIcon width="200px" height="200px"/>
                    <Typography variant='h1Mobile' textAlign="center">Pensamiento, <br/> emocion ycuerpo</Typography>
                    <Box sx={{width:1, height:"20px" , backgroundColor:"#82BBC2", marginTop:1}}>

                    </Box>
                <br/>
                </Box>
               
            </Box>
            <Footer/>
        </Box>
       </>
    )
}

export {Welcome};