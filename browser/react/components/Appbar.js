import React from 'react';
import { AppBar, Toolbar, Typography, Divider } from '@material-ui/core';
import Login from './Login';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    colorBar: {
        backgroundColor: '#2196F3',
        color: 'white'
    }
}

export default withStyles(styles)(props => {
    const {classes} = props
    return ( 
    <div className={classes.root}>
    <AppBar className={classes.colorBar} position="static" color="inherit">
        <Toolbar>
          <Typography className={classes.flex} variant="title" color="inherit">
            TonE-Commerce
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
    )
})