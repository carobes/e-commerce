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
    height: 185,
    maxWidth: 315,
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
    width: "75px",
    height: "75px"
  },
  rowAvatar: {
    display: "flex",
    float: "right"
  }
});


function CustomizedTable({ classes, order }) {
  const { productosOrdens, status, usuario } = order; 
  const pO = !productosOrdens ? [] : productosOrdens;
  const stat = !status ? {} : status;
  const usu = !usuario ? {} : usuario;
  // const total = !productosOrdens ? [] : productosOrdens.map(data => data.subtotal).reduce((prev, next) => prev + next); 

  console.log("ver que hace pO", pO, "order", order, "productosOrden", productosOrdens)
  return (
    <div>
      <br />

      {/* <Card className={classes.card}>
        <div className={classes.rowAvatar}>
          <Avatar className={classes.avatar}>
            {usu.nombre + usu.apellido}
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
           mail: {order.mail}
          </Typography>
        </CardContent>
      </Card> */}
      <IdUserCard user={usu}/>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Nombre de Producto</CustomTableCell>
              <CustomTableCell>Descripción de Producto</CustomTableCell>
              <CustomTableCell numeric>Precio Unitario</CustomTableCell>
              <CustomTableCell numeric>Cantidad de Producto</CustomTableCell>
              <CustomTableCell numeric>Subtotal</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {pO.map(data => (
                <TableRow className={classes.row} key={data.id}>
                  <CustomTableCell component="th" scope="row">
                    {data.nombre}
                  </CustomTableCell>
                  <CustomTableCell>{data.descripcion}</CustomTableCell>
                  <CustomTableCell numeric>
                    $ {data.precio}
                  </CustomTableCell>
                  <CustomTableCell numeric>
                    {data.cantidad}
                  </CustomTableCell>
                  <CustomTableCell numeric>$ {data.subtotal}</CustomTableCell>
                </TableRow>
                    ))}
          </TableBody>
        </Table>
      </Paper>
      <br/>
      <Card className={classes.card2}>
        <br />
        <CardContent>
          <Typography className={classes.pos2} variant="headline" component="h2"> Total: AR${total} 
         </Typography> 
          <Typography className={classes.pos2} variant="headline" component="h1">
            Status: {stat.estado}
          </Typography>
          <Typography className={classes.pos2} variant="headline" component="h1">
            mail de envío: {order.mail}
          </Typography>
          <Typography className={classes.pos2} variant="headline" component="h1">
            dirección de envío: {order.direccion}
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
