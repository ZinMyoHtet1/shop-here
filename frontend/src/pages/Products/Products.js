import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Box, Button, Toolbar, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Product from "../../component/Product/Product";
import PostForm from "../../component/Form/Post/PostForm";
import Search from "../../component/Search/Search";
import PaginationBar from "../../component/Pagination/Pagination";
import PostButton from "../../component/PostButton/PostButton";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const { products } = useSelector((state) => state?.products);
  const query = useQuery();
  const page = query.get("page") || 1;

  const isSmBreakpoint = useMediaQuery("(max-width:600px)");
  console.log(isSmBreakpoint);
  const [expanded, setExpanded] = useState(!isSmBreakpoint);

  useEffect(() => {
    setExpanded(!isSmBreakpoint);
  }, [isSmBreakpoint]);

  console.log(expanded);
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
                  variant="text"
                  color="primary"
                >
                  Products
                </Button>
                {"|"}
                <Button
                  component={NavLink}
                  to="/about"
                  variant="text"
                  color="primary"
                  sx={{ ml: "10px" }}
                >
                  About
                </Button>
              </Toolbar>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {products?.length === 0 && <h4>Nothing to display</h4>}
              {products?.length > 0 ? (
                <Product products={products} />
              ) : (
                <div>loading...</div>
              )}
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
              <PaginationBar page={page} />
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
            <PostButton expanded={!expanded} setExpanded={setExpanded} />
            <Search />
            <PostForm expanded={expanded} />
            <PaginationBar page={page} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
