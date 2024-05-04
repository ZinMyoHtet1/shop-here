import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const PostButton = ({ expanded, setExpanded }) => {
  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <Box sx={{ width: 280 }}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
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
    </Box>
  );
};

export default PostButton;
