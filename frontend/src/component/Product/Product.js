import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import suncream from "../images/suncream.jpg";

const Product = ({ products }) => {
  return (
    <Grid container justifyContent="center" columns={16} rowSpacing={2}>
      {products.map((product) => {
        return (
          <Grid item sm={16} md={8} lg={5.3} key={product._id}>
            <Card sx={{ width: 280 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={suncream}
                title="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle1">
                  name: {product.name}
                </Typography>
                <Typography variant="subtitle1">
                  price: {product.price} {product.currency}
                </Typography>
                <Typography variant="subtitle1">
                  description: {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton color="error">
                  <Favorite />
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
