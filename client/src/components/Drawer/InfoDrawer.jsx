
import React, { useState } from 'react';
import { makeStyles, Drawer, Box, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Profile from './Profile';



const useStyles = makeStyles({
    header: {
      background: '#00bfa5',
      height: 97,
      color: '#FFFFFF',
      display: 'flex',
      '& > *': {
        marginTop: 'auto',
        padding: 15,
        fontWeight: 600
      }
    },
    component: {
      background: '#ededed',
      height: '85%'
    } 
  });

function InfoDrawer({open, setOpen}) {

    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
      };
    

  return (
    <>
    <Drawer open={open} onClose={handleClose} >
    <Box className={classes.header}>
        <ArrowBack onClick={() => setOpen(false)}/>
        <Typography>Profile</Typography>
      </Box>
      <Box className={classes.component}>
        <Profile/>
      </Box>
    </Drawer>
      
    </>
  )
}

export default InfoDrawer
