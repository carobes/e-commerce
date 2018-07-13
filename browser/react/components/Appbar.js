import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LoginBtn from '../containers/LoginBtn';
import Carrito from './Carrito'
import Search from './Search'
import { withStyles } from '@material-ui/core/styles';
import SearchContainer from '../containers/SearchContainer'

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
    const { classes, setSearch, search, handleSubmit, num_elems_carro, enabled} = props
    return (
        <div>
            <AppBar className={classes.colorBar} position="static" color="inherit">
                <Toolbar className={classes.padre}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography variant="title" color="inherit">
                            TonE-Commerce
                        </Typography>
                    </Link>
                    <SearchContainer />
                    <div className={[classes.padre, classes.align].join(' ')}>
                      <Link to={'/carro'} style={{ textDecoration: 'none', color: 'white' }}>
                        <Carrito num_elems_carro={num_elems_carro} enabled={enabled}/>
                        </Link>
                        <LoginBtn />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
})
