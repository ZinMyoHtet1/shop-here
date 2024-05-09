import React from "react";
import FileBase64 from "react-file-base64";

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
import { postNewProduct } from "../../../actions/product";

const user = JSON.parse(localStorage.getItem("user"));

const initialValues = {
  name: user?.profile?.name,
  product: "",
  price: "",
  currency: "",
  instock: "",
  type: "",
  description: "",
  selectedFile: "",
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
  if (!values.product) errors.product = "Required";
  if (!values.type) errors.type = "Required";
  if (!values.currency) errors.currency = "Required";
  if (!values.instock) errors.instock = "Required";

  return errors;
};

const PostForm = ({ id, expanded }) => {
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

  return (
    <Box sx={{ mt: "10px", mb: "20px" }}>
      <Paper elevation={1} sx={{ width: { xs: 280, sm: 260, md: 280 } }}>
        <Collapse in={expanded} timeout="auto" unmountedOnExit>
          <Box component="form" onSubmit={formik.handleSubmit} p="10px">
            <TextField
              label="Product"
              name="product"
              size="small"
              fullWidth
              {...formik.getFieldProps("product")}
              error={formik?.touched?.product && !!formik?.errors?.product}
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
            <div>
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  formik.setFieldValue("selectedFile", base64);
                }}
              />
            </div>

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
