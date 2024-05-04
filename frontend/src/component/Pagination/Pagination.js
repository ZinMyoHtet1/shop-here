import React, { useEffect } from "react";
import { Card, Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../actions/product";
import useStyles from "./styles";

import { useNavigate } from "react-router-dom";

const PaginationBar = ({ page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { NumberOfPages } = useSelector((state) => state.products);
  const state = useSelector((state) => state);
  const classes = useStyles();
  console.log(state);

  useEffect(() => {
    if (page) dispatch(getAllProducts(page));
  }, [page]);

  return (
    <Card elevation={4} sx={{ p: "10px auto" }}>
      <Pagination
        className={classes.pagination}
        variant="outlined"
        color="primary"
        page={Number(page)}
        count={NumberOfPages}
        onChange={(e, value) => navigate(`?page=${value}`)}
      />
    </Card>
  );
};

export default PaginationBar;
