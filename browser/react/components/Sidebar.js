import React from 'react';
import { withStyles } from '@material-ui/core/styles';
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

function Sidebar({ classes, categories, catCheckBox, handleChange, admin }) {
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
       {(admin)?<CreateCategoryContainer/>:null}
      </FormGroup>
    </FormControl>
  )
}

export default withStyles(styles)(Sidebar);

