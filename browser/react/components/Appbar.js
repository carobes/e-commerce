import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Login from './Login';
import Carrito from './Carrito'
import Search from './Search'
import { withStyles } from '@material-ui/core/styles';

const styles = {
    padre: {
        display: 'flex',
        justifyContent: 'space-between'

    },
    colorBar: {
        backgroundColor: '#2196F3',
        color: 'white'
    },
    align: {
        alignItems: 'center'
    }
}

export default withStyles(styles)(props => {
    const { classes, setSearch, search, handleSubmit } = props
    return (
        <div>
            <AppBar className={classes.colorBar} position="static" color="inherit">
                <Toolbar className={classes.padre}>
                    <Link to={'/'} style={{ textDecoration: 'none',color: 'white' }}>
                        <Typography variant="title" color="inherit">
                            TonE-Commerce
                        </Typography>
                    </Link>
                    <Search setSearch={setSearch} search={search} handleSubmit={handleSubmit} />
                    <div className={[classes.padre, classes.align].join(' ')}>
                        <Carrito />
                            <Login />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
})