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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#75b8eb",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const user = {
  nombre: "Toni",
  apellido: "Pastafrola",
  mail: "toni48@pastafrola5.com"
};
const styles = theme => ({
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
    minWidth: 345,
    height: 175,
    maxWidth: 245,
  },
  card2: {
    minWidth: 345,
    height: 75,
    maxWidth: 245,
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
  },
  avatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: "#6eb4ea",
    float: "left",
    width: "75px",
    height: "75px"
  },
  rowAvatar: {
    display: "flex",
    float: "right"
  }
});

let id = 0;
function createData(
  nomProd,
  descripProducto,
  precioUnitario,
  cantidadProducto,
  subTotal,
  statusOrden
) {
  id += 1;
  return {
    id,
    nomProd,
    descripProducto,
    precioUnitario,
    cantidadProducto,
    subTotal,
    statusOrden
  };
}

const data = [
  createData('Producto 1', 'Soy el producto uno', 20, 3, 60, "Procesando"),
  createData('a', 'b', 1, 2, 3, 'c'),
  createData('a', 'b', 1, 2, 3, 'c'),
  createData('a', 'b', 1, 2, 3, 'c'),
  createData('a', 'b', 1, 2, 3, 'c'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <div>
      <br />
      <Card className={classes.card}>
        <div className={classes.rowAvatar}>
          <Avatar className={classes.avatar}>
            {user.nombre[0] + user.apellido[0]}
          </Avatar>
        </div>
        <br />
        <CardContent>
          <Typography className={classes.pos} variant="headline" component="h1">
            {user.nombre}
          </Typography>
          <Typography variant="headline" component="h2">
            {user.apellido}
          </Typography>
          <br/>
          <Typography
            className={classes.title}
            variant="headline"
            component="h2"
          >
           mail: {user.mail}
          </Typography>
        </CardContent>
      </Card>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Nombre de Producto)</CustomTableCell>
              <CustomTableCell>Descripción de Producto</CustomTableCell>
              <CustomTableCell numeric>Precio Unitario</CustomTableCell>
              <CustomTableCell numeric>Cantidad de Producto</CustomTableCell>
              <CustomTableCell numeric>Subtotal</CustomTableCell>
              <CustomTableCell>Status de la Orden</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow className={classes.row} key={n.id}>
                  <CustomTableCell component="th" scope="row">
                    {n.nomProd}
                  </CustomTableCell>
                  <CustomTableCell>{n.descripProducto}</CustomTableCell>
                  <CustomTableCell numeric>
                    $ {n.precioUnitario}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {n.cantidadProducto}
                  </CustomTableCell>
                  <CustomTableCell numeric>$ {n.subTotal}</CustomTableCell>
                  <CustomTableCell>{n.statusOrden}</CustomTableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <br/>
      <Card className={classes.card2}>
        <br />
        <CardContent>
          <Typography className={classes.pos2} variant="headline" component="h1">
            Total: $ 'Acá va el Total'
          </Typography>
          <br />
        </CardContent>
      </Card>
    </div>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
