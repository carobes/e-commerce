import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Grid } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  state = {
    name: "",
    lastName: "",
    age: "",
    mail: "",
    password:''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <TextField
              required
              id="name"
              label="Nombre"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />
            <TextField
              required
              id="lastName"
              label="Apellido"
              className={classes.textField}
              value={this.state.lastName}
              onChange={this.handleChange("lastName")}
              margin="normal"
            />
            <TextField
              required
              id="number"
              label="Edad"
              value={this.state.age}
              onChange={this.handleChange("age")}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="mail"
              label="E-Mail"
              className={classes.textField}
              value={this.state.mail}
              type="email"
              onChange={this.handleChange("mail")}
              margin="normal"
            />
            <TextField
              required
              id="password-input"
              label="Password"
              className={classes.textField}
              value={this.state.password}
              type="password"
              onChange={this.handleChange('password')}
              autoComplete="current-password"
              margin="normal"
            />
            <TextField
              required
              id="password-validate"
              label="Repetir Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);