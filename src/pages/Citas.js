import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import {AddCircleOutline} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button, Paper, Table,Tooltip,IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import {Edit, Delete} from '@mui/icons-material';





const Citas = ()=>{

    const [travelers,setTravelers] = useState(null);

    /*

    
    useEffect(
          ()=>{
            (async ()=>{
                let result;
                try {
                    result = await axios.get('/api/travelers');
                    
                } catch (error) {
                    console.log(error)
                }
               
                setTravelers(result.status===200 ? JSON.parse(result.data) : null)
            })()
            //fetchTravelers()
        },
        []
    )

    
    const fetchTravelers = async ()=>{
        let result;
        try {
            result = await axios.get('/api/travelers');
            
        } catch (error) {
            console.log(error)
        }
       
        setTravelers(result.status===200 ? JSON.parse(result.data) : null)
    }

    const deleteTraveler = async (id)=>{
        let result;
        try {
            result = await axios.delete(`/api/deleteTraveler/${id}`);
            if (result.status === 200) {
              fetchTravelers() 
              
            }
        } catch (error) {
            console.log(error)
        }
    }
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


export {Citas};


