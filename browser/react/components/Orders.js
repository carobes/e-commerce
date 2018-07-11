import React from "react";
import PropTypes from "prop-types";
import { Typography, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IdUserCard from './IdUserCard';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#75b8eb",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#4286f4",
    color: "white",
    '&:hover': {
      color: 'black'
    },
    fontSize: 10,
    // display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 900,
    marginTop: 25  
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  card: {
    minWidth: 275,
    height: 100,
    maxWidth: 275,
  },
  card2: {
    minWidth: 255,
    height: 155,
    Width: 375,
    float: 'right',
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
    color: "#808080"
  },
  pos: {
    marginTop: 18
  },
  pos2: {
    textAlign: 'right',
    fontSize: 18
  },  
  avatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#6eb4ea",
    float: "left",
    width: "50px",
    height: "50px"
  },
  rowAvatar: {
    display: "flex",
    float: "right"
  },
});

function CustomizedTable({ classes, orders }) {
  const { productosOrdens, status, usuario } = orders; 
  // const pO = !productosOrdens ? [] : productosOrdens;
  // const usu = !usuario ? {} : usuario;
 
  return (
    
    <div>
      <br />
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.pos} variant="headline" component="h1">
            Todas las órdenes
          </Typography>
        </CardContent>
      </Card>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell></CustomTableCell>
              <CustomTableCell>Usuario</CustomTableCell>
              <CustomTableCell>Fecha de la Orden</CustomTableCell>
              <CustomTableCell>Número de Orden</CustomTableCell>
              <CustomTableCell numeric> Total (en AR$)</CustomTableCell>
              <CustomTableCell numeric>Status</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {orders.map(data => (
                <TableRow className={classes.row} key={data.id}>
                  <CustomTableCell>  <div className={classes.rowAvatar}><Avatar className={classes.avatar}>
{data.usuario.nombre[0] + data.usuario.apellido[0]}</Avatar></div></CustomTableCell>
                  <CustomTableCell>{data.usuario.nombreApellido}</CustomTableCell>
                  <CustomTableCell>{data.fecha}</CustomTableCell>
                  <CustomTableCell numeric>{data.id}</CustomTableCell>
                  <CustomTableCell numeric> {data.total} </CustomTableCell>
                  <CustomTableCell>      
                    <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Estado</InputLabel>
          <Select
            // open={this.state.open}
            // onClose={this.handleClose}
            // onOpen={this.handleOpen}
            value={orders.status}
            // onChange={this.handleChange}
            // inputProps={{
            //   name: 'status',
            //   id: 'demo-controlled-open-select',
            // }}
          >
            <MenuItem value="Creado">Creado</MenuItem>
            <MenuItem value={10}>Procesando</MenuItem>
            <MenuItem value={20}>Cancelado</MenuItem>
            <MenuItem value={30}>Completado</MenuItem>
          </Select>
        </FormControl>
      </form></CustomTableCell>
                </TableRow>
                    ))}
          </TableBody>
        </Table>
      </Paper>
      <br/>
      <Button variant="extendedFab" aria-label="delete" className={classes.button}>
        Creado
      </Button>
      <Button variant="extendedFab" aria-label="delete" className={classes.button}>
        Procesando
      </Button>
      <Button variant="extendedFab" aria-label="delete" className={classes.button}>
        Cancelado
      </Button>
      <Button variant="extendedFab" aria-label="delete" className={classes.button}>
        Completado
      </Button>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(CustomizedTable);
