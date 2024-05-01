import React from "react";
import { Box, Paper, Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { postNewProduct } from "../../../actions/product";

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
  const dispatch = useDispatch();

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
    <Paper elevation={3} sx={{ width: 250 }}>
      <Box component="form" onSubmit={formik.handleSubmit} p="10px">
        <TextField
          label="Creater"
          name="creater"
          size="small"
          fullWidth
          {...formik.getFieldProps("creater")}
          error={formik?.touched?.creater && !!formik?.errors?.creater}
          sx={{ mb: "20px" }}
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
          error={formik?.touched?.description && !!formik?.errors?.description}
          sx={{ mb: "20px" }}
        />

        <Button type="submit" variant="contained" color="primary">
          Post
        </Button>
      </Box>
    </Paper>
  );
};

export default PostForm;
