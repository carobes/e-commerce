import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Login from './Login';
import Carrito from './Carrito'
import Search from './Search'
import Button from '@material-ui/core/Button';
import CarroContainer from '../containers/CarroContainer';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    colorBar: {
        backgroundColor: '#2196F3',
        color: 'white'
    },
    button: {
      margin: theme.spacing.unit,
      color: 'primary'
    }
});

function Appbar(props){
    const { classes, setSearch, search, handleSubmit } = props
    return (
        <div className={classes.root}>
            <AppBar className={classes.colorBar} position="static" color="inherit">
                <Toolbar>
                  <div>
                      <Button className={classes.button} aria-label="home">
                        <Link to='/'>
                            TonE-Commerce
                        </Link>
                      </Button>
                  </div>
                  <Search setSearch={setSearch} search={search} handleSubmit={handleSubmit} />
                  <Carrito />
                  <Login />
                </Toolbar>
            </AppBar>
        </div>
    )
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Appbar);
