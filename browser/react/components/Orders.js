import React from "react";
import PropTypes from "prop-types";
import { Typography, Card, CardContent, IconButton, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Check from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withRouter } from 'react-router';


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
    tick: {
      color: 'green'
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
  container: {
    display: "flex"
  }
  
});

function CustomizedTable({ classes, orders, estados, handleChange, orderMap, handleClose, handleOpen, open, handleSubmit, handleFilter, filter }) {
  const { productosOrdens, status, usuario } = orders;
  // const pO = !productosOrdens ? [] : productosOrdens;
  // const usu = !usuario ? {} : usuario;
  return (
    <div>
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
                // open={open[orders.id]}
                // onClose={handleClose}
                // onOpen={handleOpen}
                value={filter}
                onChange={handleFilter}
                inputProps={{
                  name: `filter`,
                  id: 'demo-controlled-open-select',
                }}
              >
            <MenuItem key={0} value={0}>Todos los Estados</MenuItem>              

              {estados.map(estado => 
              <MenuItem key={estado.id} value={estado.id}>{estado.estado}</MenuItem>
            )}
          </Select> 
        </FormControl>
      </form>
  {!orders.length ? <div>No se encontraron resultados</div> :  
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
              <CustomTableCell> Total (AR$)</CustomTableCell>
              <CustomTableCell>Status</CustomTableCell>
              <CustomTableCell>Aplicar cambios</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {orders.map(data => (
                <TableRow className={classes.row} key={data.id}>
                  <CustomTableCell>  <div className={classes.rowAvatar}><Avatar className={classes.avatar}>{data.usuario.nombre[0] + data.usuario.apellido[0]}</Avatar></div></CustomTableCell>
                  <CustomTableCell>{data.usuario.nombreApellido}</CustomTableCell>
                  <CustomTableCell>{data.fecha}</CustomTableCell>
                  
                    <CustomTableCell numeric><Link to={`/orders/single/${data.id}`}>{data.id}</Link></CustomTableCell>
                  
                  <CustomTableCell numeric> {data.total} </CustomTableCell>
                  <CustomTableCell>
                    <form autoComplete="off">
                        <div className={classes.container}>
                          <FormControl className={classes.formControl}>
                          <Select
                                open={open[data.id]}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={orderMap[data.id]}
                                onChange={handleChange}
                                inputProps={{
                                  name: `${data.id}`,
                                  id: 'demo-controlled-open-select',
                                }}
                              >
                              {estados.map(estado => 
                              <MenuItem key={estado.id} value={estado.id}>{estado.estado}</MenuItem>
                            )}              
                          </Select>
                          </FormControl>
                        </div>
                    </form>
                  </CustomTableCell>
                  <CustomTableCell>
        {data.status.id !== orderMap[data.id] ? 
        <div>
          <IconButton onClick={()=>handleSubmit({orderId: data.id,statusId:orderMap[data.id]})}>
            <Check  className={classes.tick}/>
          </IconButton> 
        </div>
        : null}
                  </CustomTableCell>
                </TableRow>
                    ))}
          </TableBody>
        </Table>
      </Paper>
      <br/>
    </div>}
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withRouter(withStyles(styles)(CustomizedTable));
