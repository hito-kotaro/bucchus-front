/* eslint-disable consistent-return */
import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Header from "./Header";
import useHistory from "./hooks/useHistory";
import InputForm from "./InputForm";
import MainCard from "./MainCard";

const RegisterPage = () => {
  const {
    initLocalStorage,
    updateHistory,
    checkDrankWater,
    history,
    latest,
    tooManyDrink,
  } = useHistory();
  useEffect(() => {
    initLocalStorage();
    checkDrankWater();
  }, []);

  useEffect(() => {
    checkDrankWater();
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

      <MainCard
        amount={history.length}
        latest={latest}
        tooManyDrink={tooManyDrink}
      />
      <Box sx={{ width: "100%", marginTop: "70px" }}>
        <InputForm onClickOrder={updateHistory} tooManyDrink={tooManyDrink} />
      </Box>
    </Box>
  );
};

export default RegisterPage;
