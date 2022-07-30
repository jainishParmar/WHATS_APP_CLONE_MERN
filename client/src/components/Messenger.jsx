import React,{useContext} from 'react';
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import LoginDialog from './account/Login';
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
    loginHeader: 
    {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    },
    header: {
      background: "#128C7E",
      height: 115,
      boxShadow: "none",
    },
    component: {
        height: "100vh",
        background: "#DCDCDC",
      },

})



function Messenger()   {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
        <AppBar className={ account ? classes.header : classes.loginHeader}>
          <Toolbar>
          </Toolbar>
        </AppBar>
        {account ? <ChatBox/> : <LoginDialog />}
      
    </Box>
  )
}

export default Messenger
