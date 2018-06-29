import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Sidebar({ categorias, classes, handleChange, handleSubmit }){
  return(
    <FormControl component="fieldset">
      <FormLabel component="legend">Selecciona Categorías</FormLabel>
      <FormGroup>
        {Object.keys(categorias).map(etiqueta => (
          <FormControlLabel key={etiqueta}
            control={
              <Checkbox
                checked={categorias[etiqueta]}
                onChange={handleChange(etiqueta)}
                value={etiqueta}
              />
            }
            label={etiqueta}
          />
        ))}
        <Button variant="extendedFab" aria-label="delete" className={classes.button} onClick={handleSubmit} >
          Filtrar
        </Button>
      </FormGroup>
      <FormHelperText>Se cuidadoso...</FormHelperText>
    </FormControl>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
