import React from 'react'
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { createContext } from 'react';


 export const TemplateContext = createContext(null);



function TemplateProvider({children}) {


    const theme = createTheme({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    height: '95%',
                    top: '13px',
                    left: 62,
                    width: '25%',
                    boxShadow: 'none'
                }
            },
            MuiBackdrop:{
                root:{
                    backgroundColor:'unset'
                }
            }
        }
    });
  return (
      
    <TemplateContext.Provider>
    <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        {children}
    </ThemeProvider>
</TemplateContext.Provider>

  )
}

export default TemplateProvider
