import { Avatar, Box, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {
  amount: number;
  img: string;
};
const MainCard: FC<Props> = (props) => {
  const { amount, img } = props;
  console.log(img);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "288px",
        height: "165px",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "3",
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
        <Avatar src="bucchus.png" sx={{ height: "135px", width: "135px" }} />
      </Box>
    </Box>
  );
};

export default MainCard;
