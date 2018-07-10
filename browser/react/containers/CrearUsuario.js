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
      passValidate: '',
      emailCheck: true,
      errormsg: '',
      gralCheck: false
    };
    this.handleSubmit = this.handleSubmit.bind(this) 
  }
  
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  handleChange = name => event => {
    const aux = this.state
    aux[name] = event.target.value
    var echeck = aux.emailCheck
    if (name === 'mail') {
      echeck = this.validateEmail(event.target.value)
    }
    var check = (aux.nombre.length && aux.apellido.length && aux.edad.length && aux.mail.length && aux.password.length && echeck && aux.password === aux.passValidate) ? true : false
    this.setState({
      [name]: event.target.value,
      gralCheck: check,
      errormsg:'',
      emailCheck: echeck
    });
  };

  handleSubmit(evt){
    evt.preventDefault();
    const usuario = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      edad: this.state.edad,
      mail: this.state.mail.toLowerCase(),
      password: this.state.password
    }
    axios.post('/api/users/new',usuario)
    .then(res => res.data)
    .then(user => {
      if(user[1]) {
        this.props.history.goBack(-2)
        return this.props.history.push('/login')
      }
      this.setState({
        emailCheck: user[1],
        errormsg: 'Usuario ya registrado'
      })
    })
  }
  

  render() {
    const { classes } = this.props;
    const {nombre,apellido,edad,mail,password,passValidate,emailCheck,gralCheck,errormsg} = this.state

    return (
      <div> <h1 className={classes.title}>Crear Usuario</h1>
        <form className={classes.container} autoComplete="off">
          <Grid container spacing={16} justify='center'>
            <Grid item md={6} xs={8}>
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
                error={!emailCheck}
                required
                id="mail"
                label="E-Mail"
                className={classes.textField}
                helperText={!emailCheck ? errormsg : ''}
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
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              onClick={this.handleSubmit}
              disabled={!gralCheck}>Crear</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}
// averiguar que hace esto para mañana porque el hijo de puta de toni me pidió
// que se lo explique a toda la clase.
TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(TextFields));