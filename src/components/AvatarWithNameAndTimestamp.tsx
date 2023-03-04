import { Box, Avatar, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {
  image: string;
  name: string;
  timestamp: string;
};

const AvatarWithNameAndTimestamp: FC<Props> = (props) => {
  const { image, name, timestamp } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // bgcolor: "green",
        width: "135px",
      }}
    >
      <Avatar src={image} sx={{ height: "135px", width: "135px" }} />
      <Box>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          {timestamp}
        </Typography>
      </Box>
    </Box>
  );
};

export default AvatarWithNameAndTimestamp;
