import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

let emailtheme = createMuiTheme({
  palette: {
    primary: green,
  },
});

let addresstheme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function data_for_gen_order(props) {
  const { classes, handleChange, emailFlag } = props;
  // console.log(props);
  if (emailFlag){
    emailtheme = createMuiTheme({
      palette: {
        primary: green,
      },
    });
  }else{
    emailtheme = createMuiTheme({
      palette: {
        primary: red,
      },
    });
  }
  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={emailtheme}>
        <TextField onChange={handleChange}
          className={classes.margin}
          label="e-mail"
          id="input-email"
        />
      </MuiThemeProvider>
      <MuiThemeProvider theme={addresstheme}>
        <TextField onChange={handleChange}
          className={classes.margin}
          label="Ship Address"
          id="input-address"
        />
      </MuiThemeProvider>
    </div>
  );
}

data_for_gen_order.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(data_for_gen_order);
