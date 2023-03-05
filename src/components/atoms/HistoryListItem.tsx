import { Box, Avatar, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {
  name: string;
  image: string;
  timestamp: string;
};

const HistoryListItem: FC<Props> = (props) => {
  const { name, image, timestamp } = props;
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#fff",
        height: "56px",
        borderRadius: "10px",
        boxShadow: "3",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "56px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        <Avatar
          src={image}
          sx={{ height: "50px", width: "50px", bgcolor: "#F0AF2D" }}
        />
      </Box>
      <Box sx={{ paddingX: "20px", width: "80%" }}>
        <Typography variant="h5" color="#1D4062" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Typography
            variant="body2"
            color="#1D4062"
            sx={{ fontWeight: "bold", textAlign: "end" }}
          >
            {timestamp}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryListItem;
