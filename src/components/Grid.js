import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {IconButton} from '@material-ui/core'


const styles = makeStyles({
    wrapper: {
       display: "flex",
       flexDirection: "column", 
       alignItems: "center", 
       padding: "0 5rem 0 5rem"
    }, 
    item: {
       paddingTop: "1rem"
    }
})


function Grid(props) {
    const {icon, title, link} = props;
    const classes = styles(); 
    return (
        <div className={classes.wrapper}>
              <div className={classes.item}>
            <IconButton className={classes.item}>{icon}</IconButton></div>
            <Typography className={classes.item} variant="h5">{title}</Typography>
            <div className={classes.item}>
            </div>
        </div>
    )
}

export default Grid
