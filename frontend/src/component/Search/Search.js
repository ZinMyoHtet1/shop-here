import React, { useState, useEffect } from "react";
import { Box, Input, IconButton, InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";

import SearchIcon from "@mui/icons-material/Search";
import { getProductsBySearch } from "../../actions/product";

const ariaLabel = { "aria-label": "description" };

const Search = ({ search = undefined }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(search);
  const location = useLocation();

  useEffect(() => {
    if (searchQuery) {
      dispatch(getProductsBySearch(searchQuery));
    }
  }, [dispatch, location, searchQuery]);

  const handleSearch = () => {
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
