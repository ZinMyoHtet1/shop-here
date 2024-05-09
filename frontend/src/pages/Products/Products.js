import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Box,
  useMediaQuery,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";

import Product from "../../component/Product/Product";
import PostForm from "../../component/Form/Post/PostForm";
import Search from "../../component/Search/Search";
import PaginationBar from "../../component/Pagination/Pagination.js";
import PostButton from "../../component/PostButton/PostButton.js";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const { isLoading, products } = useSelector((state) => state?.products);
  const query = useQuery();
  const user = useSelector((state) => state.auth);
  const page = query.get("page") || 1;
  const search = query.get("search");

  const isSmBreakpoint = useMediaQuery("(max-width:600px)");
  const [expanded, setExpanded] = useState(!isSmBreakpoint);
  console.log(user);
  useEffect(() => {
    setExpanded(!isSmBreakpoint);
  }, [isSmBreakpoint]);

  return (
    <Box p="10px 20px">
      <Grid
        container
        columns={12}
        direction={{ xs: "column-reverse", sm: "row" }}
      >
        <Grid item xs={12} sm={6} md={8} lg={9}>
          <Grid container direction="column">
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {isLoading ? (
                <CircularProgress color="primary" />
              ) : (
                products?.length && <Product products={products} />
              )}
              {!isLoading && !products?.length && <h4>Nothing to display</h4>}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: { xs: "flex", sm: "none" },
                justifyContent: "center",
                p: "10px",
              }}
            >
              <Box sx={{ width: 280 }}>
                {!search && <PaginationBar page={page} />}
              </Box>
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
            <Search search={search} />
            {user.accessToken ? (
              <PostForm expanded={expanded} />
            ) : (
              <Paper>
                <Box sx={{ p: "20px", mb: "10px" }}>
                  <Typography>
                    Signin or Signup to have great features
                  </Typography>
                </Box>
              </Paper>
            )}

            {!search && <PaginationBar page={page} />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
