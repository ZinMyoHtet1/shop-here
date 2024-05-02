import React from "react";
import { Box, Input, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ariaLabel = { "aria-label": "description" };

const handleSearch = () => {
  console.log("search");
};

const Search = () => {
  return (
    <Box sx={{ maxWidth: 400, ml: "auto", mb: "10px" }}>
      <Input
        placeholder="Search"
        inputProps={ariaLabel}
        onKeyDown={(e) => {
          if (e.keyCode === 13) handleSearch();
        }}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton color="primary" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
};

export default Search;
