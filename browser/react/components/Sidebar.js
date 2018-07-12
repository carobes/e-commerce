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
import CreateCategoryContainer from '../containers/CreateCategoryContainer';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,

  },
  button2: {
    backgroundColor: '#6eb4ea',
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});



function Sidebar({ classes, categories, catCheckBox, handleChange }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Selecciona Categorías</FormLabel>
      <FormGroup>
        {!Object.keys(catCheckBox).length ? null : categories.map(etiqueta => (
          <FormControlLabel key={etiqueta.id}
            control={
              <Checkbox
                checked={catCheckBox[etiqueta.categoria]}
                onChange={handleChange(etiqueta.categoria)}
                value={etiqueta.categoria}
              />
            }
            label={etiqueta.categoria}
          />
        ))}
        {/* <Button variant="contained" size="small" className={classes.button2} >
          Filtrar
       </Button> */}
       <CreateCategoryContainer/>
      </FormGroup>
    </FormControl>
  )
}

export default withStyles(styles)(Sidebar);

//handleChange, handleSubmit 
//onClick={handleSubmit}