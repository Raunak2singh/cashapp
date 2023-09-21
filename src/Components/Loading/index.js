import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <Box component="div"
    sx={{minHeight:"100vh",display:"flex",justifyContent:'center',alignItems:"center",background:"#000",position:"relative"}}>
        <CircularProgress size={"70px"} sx={{position:"absolute"}} thickness={1}/>
        <Box component={"img"} sx={{position:'absolute'}} src="./assets/logo.svg" />
        <CircularProgress size={"50px"} sx={{position:"absolute"}} thickness={1}/>
    </Box>
  )
}

export default Loading