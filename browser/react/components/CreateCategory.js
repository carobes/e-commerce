import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import { Button, withStyles, TextField, IconButton } from '@material-ui/core';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        textAlign: 'center'
    },
    iconDiv: {
        textAlign: 'left'
    },
    tick: {
        color: 'green'
    },
    cross: {
        color: 'red'
    },
    bootstrapRoot: {
    padding: 0,
    'label + &': {
        marginTop: theme.spacing.unit * 3,
    },
    },
    bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    },
    bootstrapFormLabel: {
    fontSize: 18,
    },
  })

  function CreateCategory({ classes, click, input, handleClick, handleChange, handleSubmit }) {

    return (
        <div>
    {(click)
    ? <div className={classes.button}> 
    <Button mini onClick={handleClick} variant="fab" color="inherit" aria-label="add" >
    <AddIcon />
    </Button> 
    </div>
    : <div>
    <TextField
    placeholder='Agregar categoría'
    value={input}
    onChange={handleChange}
    onKeyPress={handleSubmit}
    id="bootstrap-input"
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.bootstrapRoot,
        input: classes.bootstrapInput,
      },
    }}
    InputLabelProps={{
      shrink: true,
      className: classes.bootstrapFormLabel,
    }}
    />
    <div className={classes.iconDiv}>
    <IconButton onClick={handleSubmit}>
        <Check  className={classes.tick}/>
    </IconButton>
    <IconButton onClick={handleClick}>
        <Clear  className={classes.cross}/>
    </IconButton>
    </div>
    </div>}
    </div>
    )

  }

  export default withStyles(styles)(CreateCategory);