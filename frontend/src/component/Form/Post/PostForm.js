import React from "react";
import {
  Box,
  Paper,
  Button,
  MenuItem,
  TextField,
  Collapse,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import useProductActions from "../../../actions/product";
import { useState } from "react";

import { ExpandMore } from "@mui/icons-material";

const initialValues = {
  creater: "",
  name: "",
  price: "",
  currency: "",
  instock: "",
  type: "",
  description: "",
};

const currencyOptions = [
  {
    value: "kyat",
    label: "Kyat",
  },
  {
    value: "baht",
    label: "Baht",
  },
  {
    value: "dallor",
    label: "Dallor",
  },
];

const validate = (values) => {
  let errors = {};
  if (!values.creater) errors.creater = "Required";
  if (!values.name) errors.name = "Required";
  if (!values.currency) errors.currency = "Required";
  if (!values.instock) errors.instock = "Required";

  return errors;
};

const PostForm = ({ id }) => {
  const [expanded, setExpanded] = useState(true);
  const { postNewProduct } = useProductActions();
  const dispatch = useDispatch();

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const onSubmit = (values) => {
    dispatch(postNewProduct(values));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: true,
  });

  console.log(formik.errors, formik?.touched);
  return (
    <Box sx={{ mt: "10px", mb: "20px" }}>
      <Paper elevation={1} sx={{ width: { xs: 280, sm: 260, md: 280 } }}>
        <Button
          variant="text"
          color="primary"
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            m: "5px",
            ml: "auto",
          }}
          endIcon={
            <ExpandMore
              sx={{
                transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
                transition: "all 0.2s ease-in",
              }}
            />
          }
          onClick={handleExpand}
        >
          Create
        </Button>
        <Collapse in={expanded} timeout="auto" unmountedOnExit>
          <Box component="form" onSubmit={formik.handleSubmit} p="10px">
            <TextField
              label="Creater"
              name="creater"
              size="small"
              fullWidth
              {...formik.getFieldProps("creater")}
              error={formik?.touched?.creater && !!formik?.errors?.creater}
              sx={{ mb: "20px" }}
              autoFocus
            />

            <TextField
              label="Name"
              name="name"
              size="small"
              fullWidth
              {...formik.getFieldProps("name")}
              error={formik?.touched?.name && !!formik?.errors?.name}
              sx={{ mb: "20px" }}
            />

            <TextField
              label="Price"
              name="price"
              size="small"
              type="number"
              fullWidth
              inputProps={{ min: 0 }}
              {...formik.getFieldProps("price")}
              error={formik?.touched?.price && !!formik?.errors?.price}
              sx={{ mb: "20px" }}
            />

            <TextField
              label="Currency"
              name="currency"
              size="small"
              fullWidth
              select
              defaultValue={""}
              {...formik.getFieldProps("currency")}
              error={formik?.touched?.currency && !!formik?.errors?.currency}
              sx={{ mb: "20px" }}
            >
              {currencyOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Instock"
              name="instock"
              size="small"
              type="number"
              fullWidth
              inputProps={{ min: 0 }}
              {...formik.getFieldProps("instock")}
              error={formik?.touched?.instock && !!formik?.errors?.instock}
              sx={{ mb: "20px" }}
            />

            <TextField
              label="Type"
              name="type"
              size="small"
              fullWidth
              {...formik.getFieldProps("type")}
              error={formik?.touched?.type && !!formik?.errors?.type}
              sx={{ mb: "20px" }}
            />

            <TextField
              label="Decription"
              name="description"
              size="small"
              fullWidth
              {...formik.getFieldProps("description")}
              error={
                formik?.touched?.description && !!formik?.errors?.description
              }
              sx={{ mb: "20px" }}
            />

            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </Collapse>
      </Paper>
    </Box>
  );
};

export default PostForm;
