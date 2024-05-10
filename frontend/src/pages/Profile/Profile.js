import { Container, Box, Stack, Typography, Avatar } from "@mui/material";
import React from "react";

const Profile = () => {
  const profile = JSON.parse(localStorage.getItem("user")).profile;
  return (
    <Container
      maxWidth="md"
      sx={{ display: "flex", justifyContent: "center", pt: "20px" }}
    >
      <Box sx={{ width: "600px" }}>
        <Box sx={{ width: "100%", height: "250px", bgcolor: "purple" }}></Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="flex-end"
          sx={{ p: "20px" }}
        >
          <Typography variant="h6" color="primary">
            {profile.name}
          </Typography>
          <Avatar sx={{ width: 100, height: 100 }} src={profile?.imageUrl}>
            {profile.name.split("")[0]}
          </Avatar>
        </Stack>
      </Box>
    </Container>
  );
};

export default Profile;
