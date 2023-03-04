import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import AvatarWithNameAndTimestamp from "./Molecules/AvatarWithNameAndTimestamp";
import { OrderType } from "./types/OrderType";

type Props = {
  amount: number;
  latest: OrderType;
  tooManyDrink: boolean;
};
const MainCard: FC<Props> = (props) => {
  const { amount, latest, tooManyDrink } = props;
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
      {tooManyDrink ? (
        <AvatarWithNameAndTimestamp
          name="bucchus"
          image="bucchus.png"
          timestamp="水を飲むのだ"
        />
      ) : (
        <AvatarWithNameAndTimestamp
          name={latest.name}
          image={latest.image}
          timestamp={latest.timestamp}
        />
      )}
    </Box>
  );
};

export default MainCard;
