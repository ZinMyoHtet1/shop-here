import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import { Delete, Favorite } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import { deleteProduct } from "../../actions/product";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const handleDelete = (_id) => {
    dispatch(deleteProduct(_id));
    console.log("delete clcik", _id);
  };
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      columns={16}
      rowSpacing={2}
    >
      {products.map((product) => {
        return (
          <Grid
            item
            sm={16}
            md={8}
            lg={4}
            key={product._id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Card sx={{ width: { xs: 280, lg: 210, m: "auto" } }}>
              <CardMedia
                sx={{ height: { xs: 200, lg: 130 } }}
                image={product?.selectedFile}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle1">
                  name: {product.product}
                </Typography>
                <Typography variant="subtitle1">
                  price: {product.price} {product.currency}
                </Typography>
                <Typography variant="subtitle1">
                  description: {product.description}
                </Typography>
              </CardContent>
              <Divider />
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton color="error">
                  <Favorite />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => handleDelete(product._id)}
                >
                  <Delete />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Product;
