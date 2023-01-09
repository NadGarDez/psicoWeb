import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import {AddCircleOutline} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import {Edit, Delete} from '@mui/icons-material';



export const Books = ()=>{
   
    const [reservations,setReservations] = useState(null);

    /*
    useEffect(
        async ()=>{
            const fetchReservations = async ()=>{
                let result;
                try {
                    result = await axios.get('/api/reservations');
                } catch (error) {
                    console.log(error);
                }
             
                setReservations(result.status===200 ? JSON.parse(result.data) : null);
            }
            fetchReservations()
        },
        []
    )
*/




    return (
        <>
            <Box sx={{ display:'flex',flexDirection:'column', flexWrap:'wrap', width:'100%'}} >
                <NavBar />
                <Toolbar/>
                <Box sx={{backgroundColor:'white', flexDirection:'row',display:'flex',width:'100%',height:'70vh' }}>
                    <Box p={3} sx={{width:'100%', height:'100%', display:'flex', justifyContent:'center'}}>
                        
                    </Box>

                
                </Box>
                <Footer/>
            </Box>
        </>
        
    )
}

