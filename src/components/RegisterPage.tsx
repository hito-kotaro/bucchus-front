import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import MainCard from "./MainCard";

const RegisterPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // bgcolor: "blue",
        width: "100%",
        height: "70vh",
      }}
    >
      <Header />
      <MainCard amount={100} img="image path" />
    </Box>
  );
};

export default RegisterPage;
