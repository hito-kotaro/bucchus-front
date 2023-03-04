import { Avatar, Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { OrderType } from "./types/OrderType";

type Props = {
  amount: number;
  latest: OrderType;
};
const MainCard: FC<Props> = (props) => {
  const { amount, latest } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "288px",
        height: "200px",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "3",
        // backgroundColor: "red",
      }}
    >
      {amount >= 100 ? (
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          ばかたれ
        </Typography>
      ) : (
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          {amount}
          <Typography
            variant="body2"
            component="span"
            sx={{ fontWeight: "bold" }}
          >
            {amount >= 100 ? "" : "杯目"}
          </Typography>
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // bgcolor: "green",
          width: "135px",
        }}
      >
        <Avatar src={latest.image} sx={{ height: "135px", width: "135px" }} />
        <Box>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            {latest.name}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            {latest.timestamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainCard;
