import React from 'react'
import logo from '../logo.png'
import logoMobile from '../logo.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#d10000",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "5%", 
        ['@media (max-width:1080px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})


function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(182, 1, 1, 0.8)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
            </Toolbar>
    )
}

export default NavBar

