import React from 'react'
import { useState, useEffect, useContext } from 'react';

import { Dialog } from '@material-ui/core';
import { makeStyles, Typography, List, Link, ListItem, Box, withStyles } from '@material-ui/core';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../constants/data';
import { addUser } from '../../service/api';




const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: 264,
        width: 264
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    },
    link: {
        margin: '50px 0 0 50px',
        fontSize: 18,
        fontWeight: 200
    },
    image:
    {
        width: '40px',
        height: '30px'
    }


})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};

function Login({ classes }) {
    const classname = useStyle();
    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

    const { account, setAccount } = useContext(AccountContext);



    const onLoginSuccess = async (res) => {
        console.log("Login Success:", res.profileObj);
        setAccount(res.profileObj);
        await addUser(res.profileObj);

        // setShowloginButton(false);
        // setShowlogoutButton(true);
    };

    const onLoginFailure = () => {
        console.log("Login Failed:");
    };


    return (

        <Dialog /*onClose={handleClose}*/
            open={true}
            classes={{ paper: classes.dialogPaper }}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
        >

            <Box className={classname.component}>
                <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap <pre> <strong>Menu</strong></pre>  <img className={classname.image} src="https://scontent.whatsapp.net/v/t39.8562-34/118117430_995065920932265_1336446442210986426_n.jpg?stp=cp0_dst-webp_p50x50&ccb=1-5&_nc_sid=8a74b9&_nc_ohc=XxF48QsziWMAX8xllQN&_nc_ht=scontent.whatsapp.net&oh=01_AVzgBhzSrWzJOq5SEJBwq0lyg2NA9I_j-U0kqvJAJZdtfQ&oe=62235EDF" alt="" srcset="" />Or <pre> <strong>Settings</strong> </pre> and select <pre> <strong>Linked devices</strong></pre></ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{ position: "relative" }}>
                    <img src={url} alt="QR" className={classname.qr} />
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translateX(0%) translateY(-25%)",
                        }}
                    >


                        <GoogleLogin
                            clientId={clientId}
                            buttonText=""
                            onSuccess={onLoginSuccess}
                            onFailure={onLoginFailure}
                            cookiePolicy={"single_host_origin"}
                            isSignedIn={true}
                        />

                    </div>


                </Box>
            </Box>
            <Link className={classname.link} href="https://faq.whatsapp.com/web/download-and-installation/how-to-log-in-or-out?lang=">Need Help To Get Start?</Link>

        </Dialog>


    )
}

export default withStyles(style)(Login);
