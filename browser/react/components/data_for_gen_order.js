import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function data_for_gen_order(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <TextField onChange={() => console.log('HOLA')}
          className={classes.margin}
          label="e-mail"
          id="input-email"
        />
      </MuiThemeProvider>
      <MuiThemeProvider theme={theme}>
        <TextField onChange={() => console.log('HOLA')}
          className={classes.margin}
          label="Ship Address"
          id="input-shipaddress"
        />
      </MuiThemeProvider>
    </div>
  );
}

data_for_gen_order.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(data_for_gen_order);
