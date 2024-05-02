import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useProductActions from "../../actions/product";
import { Grid, Box, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

import Product from "../../component/Product/Product";
import PostForm from "../../component/Form/Post/PostForm";
import Search from "../../component/Search/Search";

const Products = () => {
  const { getAllProducts } = useProductActions();
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state?.products);
  useEffect(() => {
    dispatch(getAllProducts());

    // return()=>{

    // }
  }, [dispatch]);

  return (
    <Box p="10px 20px">
      <Grid
        container
        columns={12}
        direction={{ xs: "column-reverse", sm: "row" }}
      >
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Toolbar
                sx={{
                  display: { xs: "flex" },
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Button
                  component={NavLink}
                  to="/products"
                  variant="outlined"
                  color="primary"
                >
                  Products
                </Button>
                <Button
                  component={NavLink}
                  to="/about"
                  variant="outlined"
                  color="primary"
                  sx={{ ml: "10px" }}
                >
                  About
                </Button>
              </Toolbar>
            </Grid>
            <Grid item xs={12}>
              {products?.length === 0 && <h4>Nothing to display</h4>}
              {products?.length > 0 ? (
                <Product products={products} />
              ) : (
                <div>loading...</div>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          display="flex"
          justifyContent="center"
        >
          <Box>
            <Search />
            <PostForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
