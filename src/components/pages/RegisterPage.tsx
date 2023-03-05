/* eslint-disable consistent-return */
import React, { FC } from "react";
import { Box } from "@mui/material";
import InputForm from "../InputForm";
import MainCard from "../MainCard";
import { MenuType, OrderType } from "../types/OrderType";

type Props = {
  history: OrderType[];
  latest: OrderType;
  tooManyDrink: boolean;
  updateHistory: (order: MenuType) => void;
};
const RegisterPage: FC<Props> = (props) => {
  const { history, latest, tooManyDrink, updateHistory } = props;

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
