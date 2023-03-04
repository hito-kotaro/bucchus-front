/* eslint-disable consistent-return */
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import useLocalStorage from "./hooks/useLocalStorage";
import InputForm from "./InputForm";
import MainCard from "./MainCard";

const RegisterPage = () => {
  const [amount, setAmount] = useState(0);
  const { updateHistory, history, latest } = useLocalStorage();
  const { initLocalStorage } = useLocalStorage();
  useEffect(() => {
    initLocalStorage();
  }, []);

  useEffect(() => {
    setAmount(history.length);
  }, [history]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "70vh",
      }}
    >
      <Header />
      <MainCard amount={amount} img={latest.image} />
      <Box sx={{ width: "100%", marginTop: "70px" }}>
        <InputForm onClickOrder={updateHistory} />
      </Box>
    </Box>
  );
};

export default RegisterPage;
