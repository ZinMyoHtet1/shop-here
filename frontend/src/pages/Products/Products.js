import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/product";
import { Grid, Box } from "@mui/material";

import Product from "../../component/Product/Product";
import PostForm from "../../component/Form/Post/PostForm";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Box p="20px">
      <Grid container columns={18}>
        <Grid item xs={18} sm={10} md={13} lg={14}>
          {products?.length === 0 && <h4>Nothing to display</h4>}
          {products?.length > 0 ? (
            <Product products={products} />
          ) : (
            <div>loading...</div>
          )}
        </Grid>
        <Grid item xs={18} sm={8} md={5} lg={4}>
          <PostForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
