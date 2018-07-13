import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import Input from './Input'
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme =>({
    button: {
        margin: theme.spacing.unit,
      },
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
function UsrMngmt(props){
    const { classes } = props
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div >
            <form onSubmit={props.handleSubmit}>
                <Input type="text" value={props.search} placeholder="Search" onChange={props.setSearch} />
                <IconButton type="submit"  >
                    <SearchIcon />
                </IconButton>
            </form>
            {!Object.keys(props.selectedUser).length ? null :
            <div>
                <Card className={classes.card}>
                    <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Usuario
                    </Typography>
                    <Typography variant="headline" component="h2">
                        {props.selectedUser.nombre}{bull}{props.selectedUser.apellido}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.selectedUser.mail}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <FormControlLabel
                            control={
                                <Switch
                                checked={props.admin}
                                onChange={props.handleChange('admin')}
                                value="props.id"
                                color="primary"
                                />
                            }
                            label="Admin"
                        />
                        <IconButton className={classes.button} aria-label="Delete" onClick={props.handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>}
        </div>
    );
}

UsrMngmt.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsrMngmt)