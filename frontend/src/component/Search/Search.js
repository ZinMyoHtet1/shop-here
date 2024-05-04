import React, { useState } from "react";
import { Box, Input, IconButton, InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import SearchIcon from "@mui/icons-material/Search";
import { getProductsBySearch } from "../../actions/product";

const ariaLabel = { "aria-label": "description" };

const Search = ({ search }) => {
  const [searchQuery, setSearchQuery] = useState(search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(getProductsBySearch(searchQuery));
    navigate(`/products/search?search=${searchQuery}`);
  };
  return (
    <Box sx={{ maxWidth: 400, ml: "auto", mb: "10px" }}>
      <Input
        placeholder="Search"
        inputProps={ariaLabel}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
