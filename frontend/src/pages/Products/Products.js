import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/product";
import { Grid, Box } from "@mui/material";

import Product from "../../component/Product/Product";
import PostForm from "../../component/Form/Post/PostForm";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { products } = useSelector((state) => state?.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(state);

  return (
    <Box p="20px">
      <Grid
        container
        direction={{ xs: "column-reverse", sm: "row" }}
        columns={18}
        rowSpacing="20px"
      >
        <Grid
          item
          xs={18}
          sm={10}
          md={13}
          lg={14}
          justifyContent="space-around"
        >
          {products?.length === 0 && <h4>Nothing to display</h4>}
          {products?.length > 0 ? (
            <Product products={products} />
          ) : (
            <div>loading...</div>
          )}
        </Grid>
        <Grid
          item
          xs={18}
          sm={8}
          md={5}
          lg={4}
          display="flex"
          justifyContent="center"
        >
          <PostForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
