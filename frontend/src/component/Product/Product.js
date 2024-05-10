import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Divider,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  DriveFileRenameOutline,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import moment from "moment";

import { updateLikePost } from "../../actions/product";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLike = (_id) => {
    dispatch(updateLikePost(_id));
    console.log("clicked likeButton", _id);
  };

  // const handleDelete = (_id) => {
  //   dispatch(deleteProduct(_id));
  //   console.log("delete clcik", _id);
  // };

  return (
    <Grid
      container
      display="flex"
      justifyContent={{ xs: "center", md: "flex-start" }}
      columns={16}
      rowSpacing={2}
    >
      {products.map((product) => {
        return (
          <Grid
            item
            sm={16}
            md={8}
            lg={4}
            key={product._id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Card
              sx={{
                width: { xs: 280, lg: 210, m: "auto", position: "relative" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "5px",
                  bgcolor: "primary",
                  width: "100%",
                  // borderTop: "2px solid blue",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ p: "5px 0" }}
                >
                  <Avatar
                    src={product?.imageUrl}
                    sx={{ width: 25, height: 25, fontSize: "15px" }}
                  >
                    {product?.name.split("")[0]}
                  </Avatar>
                  <Stack direction="column">
                    <Typography fontSize="13px" color="inherit">
                      {product?.creater === user?.profile?.id ||
                      user?.profile?._id
                        ? "You"
                        : product?.name}
                    </Typography>
                    <Typography fontSize="9px" color="gray">
                      {moment(product?.createdAt).fromNow()}
                    </Typography>
                  </Stack>
                </Stack>
                {product?.creater ===
                (user?.profile.id || user?.profile?._id) ? (
                  <IconButton onClick={() => {}} size="small">
                    <DriveFileRenameOutline />
                  </IconButton>
                ) : null}
              </Box>
              <CardMedia
                sx={{ height: { xs: 200, lg: 130 } }}
                image={product?.selectedFile}
                title="green iguana"
              />

              <CardContent>
                <Typography fontSize="1.3rem">{product.product}</Typography>
                <Typography fontSize="13px" sx={{ color: "gray", my: "10px" }}>
                  {product.description}
                </Typography>
              </CardContent>

              <Divider />
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="error"
                  disabled={!user?.profile}
                  onClick={() => handleLike(product._id)}
                >
                  {product.likes.includes(
                    user?.profile._id || user?.profile.id
                  ) ? (
                    <Favorite />
                  ) : (
                    <FavoriteBorder />
                  )}
                  <Typography variant="body1" color="GrayText">
                    &nbsp;
                    {product.likes.length > 0 ? product.likes.length : null}
                  </Typography>
                </IconButton>
                {/* {product.creater === (user?.profile._id || user?.profile.id) ? (
                  <IconButton
                    color="inherit"
                    onClick={() => handleDelete(product._id)}
                  >
                    <Delete />
                  </IconButton>
                ) : null} */}
                <Typography
                  variant="subtitle1"
                  style={{
                    display: "inline-block",
                    backgroundColor: "cyan",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontWeight: "500",
                  }}
                >
                  {product.price} {product.currency}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Product;
