import React from "react";
import { Box, Typography, OutlinedInput } from "@mui/material";

const ControlFeild = ({ formik, label, type, name, ...rest }) => {
  return (
    <Box className="form-control">
      <Typography variant="h6" color="GrayText">
        {label}
      </Typography>
      <OutlinedInput
        type={type}
        name={name}
        onChange={formik.handleChange}
        error={formik.errors[`${name}`]}
        {...formik.getFieldProps(`${name}`)}
        {...rest}
      />
    </Box>
  );
};

export default ControlFeild;
