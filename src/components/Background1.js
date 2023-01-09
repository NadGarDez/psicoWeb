import React from 'react';
import { Box ,useMediaQuery} from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from '../assets/sunTrips.jpg'
import ImageMobile from "../assets/brain.svg";
import ImageXS from "../assets/sunTripsXS.jpg";
import { BrainIcon } from './BrainIcon';

const Background1 = ()=>{


    const theme = useTheme();
    const isSmallOrLess = useMediaQuery(theme.breakpoints.down('md'));
    const medium = useMediaQuery(theme.breakpoints.only('md'));
    const big = useMediaQuery(theme.breakpoints.between('lg','xl'));
    const biger = useMediaQuery(theme.breakpoints.up('xl'));
    const setImage = ()=>{
        if (isSmallOrLess) {
            return ImageXS;
        }
        if(medium){
            return ImageMobile;
        }

        if(big || biger ){
            return Image;
        }
    }

    return (
        <>
        <Box sx={{height:'100vh', position: 'absolute', top:20 ,display:'flex', alignItems:'center', overflow:'hidden',width:'100%', backgroundColor:"#e2e8f6"}}>
        </Box>
       
        </>
    )
}

export {Background1};


