import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import React from "react";

const Input = ({
  half,
  name,
  type,
  label,
  value,
  showPassword,
  handleClickShowPassword,
  handleChange,
}) => {
  return (
    <Grid item xs={half ? 6 : 12}>
      {type ? (
        <TextField
          variant="outlined"
          label={label}
          type={type}
          name={name}
          value={value}
          size="small"
          fullWidth
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <TextField
          variant="outlined"
          label={label}
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => handleChange(e)}
        />
      )}
    </Grid>
  );
};

export default Input;
