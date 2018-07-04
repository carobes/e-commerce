import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {withRouter} from 'react-router'
import TextField from "@material-ui/core/TextField";
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios'


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
  },
  button: {
    backgroundColor: '#6eb4ea',
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  },
  title:{
    textAlign: 'center',
    typography:{
      fontFamily: 'Roboto'
    }
  }
});

class TextFields extends React.Component {
  constructor(){
    super();
    this.state = {
      nombre: '',
      apellido: '',
      edad: '',
      mail: '',
      password:'',
      passValidate: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit(evt){
    evt.preventDefault();
    console.log(this.props)
    const usuario = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      edad: this.state.edad,
      mail: this.state.mail.toLowerCase(),
      password: this.state.password
    }
    axios.post('/api/users/new',usuario)
    .then(res => {console.log(res.data);return res.data})
    .then(user => {this.props.history.push(`/accounts/user/${user.id}`)})
  }

  render() {  
    const { classes } = this.props;
    const {nombre,apellido,edad,mail,password,passValidate} = this.state
    var check = (nombre.length && apellido.length && edad.length && mail.length && mail.length && password.length && password === passValidate) ? true : false

    return (
      <div> <h1 className={classes.title}>Crear Usuario</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={16}>
            <Grid item md={3} xs={1}>
            </Grid>
            <Grid item md={6} xs={10}>
              <TextField
                required
                id="nombre"
                label="Nombre"
                className={classes.textField}
                value={nombre}
                onChange={this.handleChange("nombre")}
                margin="normal"
              />
              <TextField
                required
                id="apellido"
                label="Apellido"
                className={classes.textField}
                value={apellido}
                onChange={this.handleChange("apellido")}
                margin="normal"
              />
              <TextField
                required
                id="edad"
                label="Edad"
                value={edad}
                onChange={this.handleChange("edad")}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
              />
              <TextField
                required
                id="mail"
                label="E-Mail"
                className={classes.textField}
                value={mail}
                type="email"
                onChange={this.handleChange("mail")}
                margin="normal"
              />
              <TextField
                required
                id="password-input"
                label="Password"
                className={classes.textField}
                value={password}
                type="password"
                onChange={this.handleChange('password')}
                autoComplete="current-password"
                margin="normal"
              />
              <TextField
                error={this.state.password === this.state.passValidate ? false : true}
                required
                id="password-validate"
                label="Repetir Password"
                className={classes.textField}
                value={passValidate}
                type="password"
                onChange={this.handleChange('passValidate')}
                autoComplete="current-password"
                margin="normal"
              />
            <Button variant="contained" size="small" className={classes.button} onClick={this.handleSubmit} disabled={!check}>Crear</Button>
            </Grid>
            <Grid item md={3} xs={1}>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(TextFields));